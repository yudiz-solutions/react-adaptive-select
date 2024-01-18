import { useState, useEffect, useRef } from "react";
import Arrow from "../assets/media/angle-down.svg";
import '../assets/css/Select.css'

interface SelectProps {
  parentRef?: React.RefObject<HTMLDivElement>;
  onOpen?: () => void;
  onClose?: () => void;
  onSelect?: (option: string) => void;
  placeholder?: string;
  onSearch?: (searchTerm: string) => void;
  options?: string[];
  defaultSelect?: number | null;
  isSearchFocus?: boolean;
  isSearchable?: boolean;
  onPositionChange?: (position: string) => void;
}

export const Select: React.FC<SelectProps> = ({
  parentRef,
  onOpen,
  onClose,
  onSelect,
  placeholder = 'Select an option',
  onSearch,
  options,
  defaultSelect = null,
  isSearchFocus = false,
  isSearchable = true,
  onPositionChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(defaultSelect || defaultSelect == 0 ? options?.[defaultSelect] : undefined);
  const [dropdownPosition, setDropdownPosition] = useState<string>("bottom");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<string[] | undefined>(options);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const ref = parentRef || dropdownRef;
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen && onOpen) {
      onOpen();
    } else if (isOpen && onClose) {
      onClose();
    }
  };

  const handleOptionClick = (option: string) => {
    if (isSearchable) {
      setSearchTerm("");
    }
    setSelectedOption(option);
    toggleDropdown();
    if (onSelect) {
      onSelect(option);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
      if (onClose) {
        setSearchTerm("");
        onClose();
      }
    }
  };

  const calculateDropdownPosition = () => {
    const selectedOptionElement = ref.current?.querySelector(".selected-option");
    const dropdownMenu = ref.current?.querySelector(".options");
    const parentRect = parentRef
      ? parentRef.current?.getBoundingClientRect()
      : null;
    if (selectedOptionElement && dropdownMenu) {
      const rect = selectedOptionElement.getBoundingClientRect();
      const dropdownHeight = (dropdownMenu as HTMLElement).offsetHeight;
      const spaceBelow = parentRef
        ? (parentRect?.height ?? 0) - (rect.bottom - (parentRect?.top ?? 0))
        : window.innerHeight - rect.bottom;
    const spaceAbove = parentRef && parentRect ? rect.top - parentRect.top : rect.top;
      const positionAbove = spaceBelow < dropdownHeight && spaceAbove > dropdownHeight;
      const dropdownMenuElement = dropdownMenu as HTMLElement;
      dropdownMenuElement.style.top = positionAbove ? `-${dropdownHeight}px` : `${(selectedOptionElement as HTMLElement).offsetHeight}px`;
      const newPosition = positionAbove ? "top" : "bottom";
      setDropdownPosition(newPosition);
      if (onPositionChange) {
        onPositionChange(newPosition);
      }
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", calculateDropdownPosition);
    window.addEventListener("scroll", calculateDropdownPosition);
    if (parentRef) {
      if (parentRef.current) {
        parentRef.current.addEventListener("scroll", calculateDropdownPosition);
      }
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", calculateDropdownPosition);
      window.removeEventListener("scroll", calculateDropdownPosition);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      calculateDropdownPosition();
      if (isSearchable) {
        if (isSearchFocus && inputRef.current) {
          inputRef.current.focus();
        }
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (isSearchable) {
      setSearchResults(
        options?.filter((option) =>
          option.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    if (onSearch) {
      if (isSearchable) {
        onSearch(searchTerm);
      }
    }
  }, [searchTerm]);

  useEffect(() => {
    calculateDropdownPosition();
  }, [searchResults]);
  return (
    <div
      className={`react-adaptive-dropdown ${
        isOpen ? `open-${dropdownPosition} dropdown-open` : ""
      }`}
      ref={dropdownRef}
    >
      <div className="selected-option" onClick={toggleDropdown}>
        <span >
          {selectedOption ? selectedOption : <span className="place-holder">{placeholder}</span>}{" "}
        </span>{" "}
        <span className="dropdown-arrow">
          <img src={Arrow} alt="" />
        </span>
      </div>
      {isOpen && (
        <div className="options">
          <div className="container-option">
            {isSearchable && (
              <input
                ref={inputRef}
                style={
                  dropdownPosition === "bottom"
                    ? { top: "0px" }
                    : { bottom: "0px" }
                }
                className="search-bar"
                type="text"
                id="search-bar"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            )}
            <div
              style={{ maxHeight: "200px", overflow: "auto" }}
              className="options-container"
            >
              <ul className="option-list-wrapper">
                {searchResults?.length ?? 0 > 0 ? (
                  searchResults?.map((option) => (
                    <li
                      key={option}
                      onClick={() => handleOptionClick(option)}
                      className={option === selectedOption ? "selected" : ""}
                    >
                      {option}
                    </li>
                  ))
                ) : (
                  <li>No results found</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );

};
