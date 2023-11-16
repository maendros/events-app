// components/SearchBox.tsx
"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBox: React.FC = () => {
  const [input, setInput] = useState("");
  const router = useRouter();
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) router.push(`/`);
    router.push(`/search?event=${input}`);
  };
  return (
    <form onSubmit={handleSearch} className=" w-80 pt-2">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-300 sr-only bg-black"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
          <MagnifyingGlassIcon className="h-4 w-4 text-slate-300 mr-2" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-2 ps-10 text-sm text-gray-300  border-gray-300 rounded-md bg-gray-700  placeholder-gray-200  focus:ring-gray-700 focus:border-gray-700"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search events, venus ..."
        />
      </div>
    </form>
  );
};

export default SearchBox;
