// src/components/Layout/components/Header/PromotionDropdown.js
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Tippy from "@tippyjs/react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import products from "~/components/Layout/components/Products/DataProducts";

const cx = classNames.bind(styles);

// Lấy danh sách các chương trình khuyến mãi duy nhất từ products
const promotionItems = [
  ...new Set(
    products
      .filter((product) => product.price.discount) // Lọc các sản phẩm có discount
      .map((product) => product.price.discount) // Lấy giá trị discount
  ),
];

function PromotionDropdown() {
  return (
    <Tippy
      content={
        <ul className={cx("dropdown-menu")}>
          {promotionItems.map((item, index) => (
            <li key={index}>
              <a
                href={`/khuyen-mai-giam-gia/${item
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/%/g, "")}`}
              >
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
      <a href="/khuyen-mai-giam-gia">
        Khuyến mãi - Giảm giá
        <FontAwesomeIcon icon={faChevronDown} className={cx("dropdown-icon")} />
      </a>
    </Tippy>
  );
}

export default PromotionDropdown;