"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    __googleMapsCallback?: () => void;
  }
}

function loadGoogleMaps(): Promise<void> {
  if (typeof google !== "undefined" && google.maps?.places) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    if (document.querySelector('script[src*="maps.googleapis.com"]')) {
      // Script already loading, wait for it
      window.__googleMapsCallback = () => resolve();
      return;
    }

    const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
    if (!key) {
      reject(new Error("Missing NEXT_PUBLIC_GOOGLE_MAPS_KEY"));
      return;
    }

    window.__googleMapsCallback = () => resolve();

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places&callback=__googleMapsCallback`;
    script.async = true;
    script.defer = true;
    script.onerror = () => reject(new Error("Failed to load Google Maps"));
    document.head.appendChild(script);
  });
}

export default function AddressLookup({
  onSelect,
  onChange,
  inputClass = "",
}: {
  onSelect: (address: string, postcode: string) => void;
  onChange?: (value: string) => void;
  inputClass?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [hasGoogle, setHasGoogle] = useState(false);

  useEffect(() => {
    let mounted = true;

    loadGoogleMaps()
      .then(() => {
        if (!mounted || !inputRef.current || autocompleteRef.current) return;

        const autocomplete = new google.maps.places.Autocomplete(
          inputRef.current,
          {
            componentRestrictions: { country: "gb" },
            types: ["address"],
            fields: ["address_components", "formatted_address"],
          }
        );

        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          if (!place.address_components) return;

          const components = place.address_components;
          let postcode = "";

          for (const comp of components) {
            if (comp.types.includes("postal_code")) {
              postcode = comp.long_name;
            }
          }

          const address = place.formatted_address
            ?.replace(/, UK$/, "")
            .replace(/, United Kingdom$/, "") || "";

          onSelect(address, postcode);
        });

        autocompleteRef.current = autocomplete;
        setHasGoogle(true);
      })
      .catch(() => {
        // No Google Maps — fall back to browser autofill
      });

    return () => {
      mounted = false;
    };
  }, [onSelect]);

  return (
    <input
      ref={inputRef}
      type="text"
      className={inputClass}
      placeholder="Start typing your address..."
      autoComplete={hasGoogle ? "off" : "street-address"}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
}
