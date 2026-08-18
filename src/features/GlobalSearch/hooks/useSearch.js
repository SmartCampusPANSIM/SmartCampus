import { useState, useEffect } from "react";
import { getSearchConfig } from "../config/searchConfig.js";
import { fuzzyMatch } from "../utils/fuzzyMatch.js";
import { useNavigate } from "react-router-dom";
import { useTheme } from '@hooks/useTheme.js';

export function useSearch(isOpen, onClose) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const navigate = useNavigate();

  const handleClose = () => {
    setSearchQuery("");
    setSelectedIndex(0);
    onClose();
  };

  const handleResultClick = (result) => {
    if (result.action === "toggleTheme") {
      toggleTheme();
    } else if (result.path || result.url) {
      handleClose();
      if (result.url) {
        window.open(result.url, "_blank");
      } else {
        navigate(result.path);
      }
    }
  };

  const config = getSearchConfig(isDark);
  const allResults = config.flatMap(section => section.items);

  const filteredResults = allResults
    .map(result => ({ ...result, match: fuzzyMatch(result.keywords ? `${result.title} ${result.keywords}` : result.title, searchQuery) }))
    .filter(result => result.match.isMatch)
    .sort((a, b) => b.match.score - a.match.score);

  const navigableItems = searchQuery ? filteredResults : allResults;

  // Reset index on search change or open
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery, isOpen]);

  let ghostRemainder = "";
  let autocompleteText = "";
  // Pokaż podpowiadanie z taba już od 1 znaku
  if (searchQuery.length >= 1 && filteredResults.length > 0) {
    const topMatch = filteredResults[0].title;
    autocompleteText = topMatch;
    
    if (topMatch.toLowerCase().startsWith(searchQuery.toLowerCase())) {
      // Jeśli pasuje od początku, doklej końcówkę (klasyczny ghost text)
      ghostRemainder = topMatch.substring(searchQuery.length);
    } else {
      // Jeśli dopasowanie jest w środku słowa, pokaż to jako sugestię
      ghostRemainder = ` ➔ ${topMatch}`;
    }
  }

  const handleInputKeyDown = (e) => {
    if (e.key === 'Tab' && autocompleteText) {
      e.preventDefault();
      setSearchQuery(autocompleteText);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (navigableItems.length > 0) {
        setSelectedIndex(prev => (prev + 1) % navigableItems.length);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (navigableItems.length > 0) {
        setSelectedIndex(prev => (prev - 1 + navigableItems.length) % navigableItems.length);
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (navigableItems.length > 0) {
        handleResultClick(navigableItems[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      handleClose();
    }
  };

  return {
    searchQuery,
    setSearchQuery,
    config,
    filteredResults,
    navigableItems,
    selectedIndex,
    ghostRemainder,
    autocompleteText,
    handleInputKeyDown,
    handleResultClick,
    handleClose,
    isDark
  };
}
