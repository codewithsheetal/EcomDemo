import { useState, useMemo } from "react";
import products from "../data/products";

export function useProducts() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });

  const filtered = useMemo(() => {
    let result = [...products];

    if (category !== "All") {
      result = result.filter((p) => p.category === category);
    }

    if (search.trim()) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Price range filter
    result = result.filter((p) =>
      p.price >= priceRange.min && p.price <= priceRange.max
    );

    if (sortBy === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") result.sort((a, b) => b.price - a.price);
    if (sortBy === "rating") result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [search, category, sortBy, priceRange]);

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setPriceRange({ min: 0, max: Infinity });
    setSortBy("default");
  };

  return {
    filtered,
    search,
    setSearch,
    category,
    setCategory,
    sortBy,
    setSortBy,
    priceRange,
    setPriceRange,
    clearFilters
  };
}