"use client";
import { useRef, useEffect, useState } from "react";

export default function Home() {
  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const [city, setCity] = useState("");

  const options = {
    //  componentRestrictions: { country: "lk" },
    fields: ["name"],
    // types: ["(cities)"],
  };

  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );

    autoCompleteRef.current.addListener("place_changed", async () => {
      const place = await autoCompleteRef.current.getPlace();
      setCity(place.name);
    });
  }, []);

  return (
    <main className="p-4">
      <h1 className="text-center text-xl font-bold text-slate-600">
        Google API - Place Autocomplete
      </h1>
      <div className="p-4">
        <p className="text-slate-500 font-medium">Search A Location</p>
        <input
          ref={inputRef}
          className="w-full p-2 border-solid border border-slate-400 rounded-md"
        />
      </div>

      <div className="p-4 bg-blue-300 rounded-md text-blue-700">
        <p className="font-semibold">Result:</p>
        <p>{city}</p>
      </div>
    </main>
  );
}
