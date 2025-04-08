// src/components/Layout/components/Header/MenuDropdown.js
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Tippy from "@tippyjs/react";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import products from "~/components/Layout/components/Products/DataProducts";

const cx = classNames.bind(styles);

// Tạo danh sách danh mục và các mục con từ products
const menuCategories = (() => {
  // Lấy tất cả các danh mục từ products
  const allCategories = [
    ...new Set(products.flatMap((product) => product.categories)),
  ];

  // Nhóm các danh mục thành danh mục chính và danh mục phụ
  const mainCategories = [
    "Áo Thun",
    "Áo Sơ Mi",
    "Áo Khoác",
    "Quần Dài",
    "Quần Short",
    "Phụ Kiện",
    "Đồ Dùng Cá Nhân",
    "Balo - Túi",
  ];

  // Tạo danh sách menuCategories
  return mainCategories
    .map((mainCategory) => {
      // Lọc các danh mục phụ thuộc vào danh mục chính
      const subCategories = allCategories
        .filter(
          (category) =>
            category.includes(mainCategory) && category !== mainCategory
        )
        .sort(); // Sắp xếp danh mục phụ theo thứ tự bảng chữ cái

      // Chỉ trả về danh mục chính nếu có danh mục phụ
      if (subCategories.length > 0) {
        return {
          title: mainCategory,
          items: subCategories,
        };
      }
      return null;
    })
    .filter((category) => category !== null); // Loại bỏ các danh mục không có danh mục phụ
})();

function MenuDropdown() {
  return (
    <Tippy
      content={
        <ul className={cx("dropdown-menu", "columns-5")}>
          {menuCategories.map((category, index) => (
            <li key={index} className={cx("category-item")}>
              <a
                href={`/danh-muc/${category.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className={cx("category-title")}
              >
                {category.title}
              </a>
              <ul>
                {category.items.map((item, index) => (
                  <li key={index}>
                    <a
                      href={`/danh-muc/${item
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      }
      interactive
      duration={[300, 100]}
      placement="bottom"
      trigger="mouseenter"
    >
      <div>
        <FontAwesomeIcon icon={faBars} />
        <FontAwesomeIcon icon={faChevronDown} className={cx("dropdown-icon")} />
      </div>
    </Tippy>
  );
}

export default MenuDropdown;