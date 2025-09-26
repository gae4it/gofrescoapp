"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  onSearchChange: (query: string, isActive: boolean) => void;
  placeholder?: string;
}

export function SearchBar({ onSearchChange, placeholder = "Cerca prodotti..." }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Debounce per la ricerca
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchChange(query, isFocused || query.length > 0);
    }, 300);

    return () => clearTimeout(timer);
  }, [query, isFocused, onSearchChange]);

  // Gestione tasto Escape e click fuori
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleReset();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        if (query.length === 0) {
          handleReset();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [query]);

  const handleReset = () => {
    setQuery("");
    setIsFocused(false);
    inputRef.current?.blur();
  };

  const handleClear = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (query.length === 0) {
      setIsFocused(false);
    }
  };

  return (
    <div className="mb-8" ref={containerRef}>

      {/* Barra di ricerca */}
      <div className="relative max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            className="w-full rounded-full bg-white border-2 border-gray-200 pl-12 pr-12 py-3 text-gray-900 placeholder-gray-500 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20 transition-all duration-200"
          />
          {query && (
            <button
              onClick={handleClear}
              className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}