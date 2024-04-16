import { useState, useEffect } from "react";
import { useWindowSize } from "../utils/useContext";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import "./dropdown.scss";
import { Link } from "react-router-dom";

function Dropdown({ title, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isGreaterThan768px, setIsGreaterThan768px] = useState(false);

  const { width } = useWindowSize();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    function handleResize() {
      if (width > 768) {
        setIsGreaterThan768px(true);
      } else {
        setIsGreaterThan768px(false);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <div className="dropdown-container">
      <div
        className={`dropdown ${width ? "desktop" : "mobile"}`}
        onMouseEnter={isGreaterThan768px ? toggleDropdown : null}
        onMouseLeave={isGreaterThan768px ? handleDropdownClose : null}
        onClick={!isGreaterThan768px ? toggleDropdown : null}
      >
        <li className="dropdown__title">
          <a href={`/${title.toLowerCase().replace(/ê/g, "e")}`}>{title}</a>
        </li>
        {isOpen && (
          <div className="dropdown__title-options">
            {options.map((option) => (
              <a
                className="dropdown__anchor"
                href={`/${title.toLowerCase().replace(/ê/g, "e")}/${option
                  .replace(/\s+/g, "-")
                  .replace(/[êé]/g, "e")
                  .replace(/\./g, "-")
                  .toLowerCase()}`}
                key={option}
              >
                {option}
              </a>
            ))}
          </div>
        )}
      </div>{" "}
      {width <= 768 && (
        <Link
          to={`/${title.toLowerCase().replace(/ê/g, "e")}`}
          className="mobile-anchor"
          title={`Accédez aux articles sur les ${title.toLowerCase()}`}
        >
          <Icon icon="mingcute:arrow-right-fill" />
        </Link>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default Dropdown;
