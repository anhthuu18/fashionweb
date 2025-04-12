import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Tippy from "@tippyjs/react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import products from "~/components/Layout/components/Products/DataProducts";

const cx = classNames.bind(styles);

// Lấy danh sách các bộ sưu tập duy nhất từ products
const collectionItems = [...new Set(products.map(product => product.collection))];

function CollectionDropdown() {
    return (
        <Tippy
            content={
                <ul className={cx("dropdown-menu")}>
                    {collectionItems.map((item, index) => (
                        <li key={index}>
                            <a href={`/bo-suu-tap/${encodeURIComponent(item)}`}>
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
            <a href="/bo-suu-tap">
                Bộ sưu tập
                <FontAwesomeIcon icon={faChevronDown} className={cx("dropdown-icon")} />
            </a>
        </Tippy>
    );
}

export default CollectionDropdown;