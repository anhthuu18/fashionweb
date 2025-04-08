// src/components/Layout/components/Header/ShirtDropdown.js
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Tippy from "@tippyjs/react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import products from "~/components/Layout/components/Products/DataProducts";

const cx = classNames.bind(styles);

// Lấy danh sách các danh mục áo thun duy nhất từ products
const shirtItems = [
  ...new Set(
    products
      .flatMap((product) => product.categories) // Lấy tất cả categories từ products
      .filter((category) => category.includes("Áo Thun")) // Lọc các danh mục có chứa "Áo Thun"
  ),
];

function ShirtDropdown() {
  return (
    <Tippy
      content={
        <ul className={cx("dropdown-menu")}>
          {shirtItems.map((item, index) => (
            <li key={index}>
              <a href={`/ao-thun-nam-nu/${item.toLowerCase().replace(/\s+/g, "-")}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      }
      interactive
      duration={[300, 100]}
      placement="bottom-start"
      trigger="mouseenter"
    >
      <a href="/ao-thun-nam-nu">
        Áo thun Nam | Nữ
        <FontAwesomeIcon icon={faChevronDown} className={cx("dropdown-icon")} />
      </a>
    </Tippy>
  );
}

export default ShirtDropdown;