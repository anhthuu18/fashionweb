import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Tippy from "@tippyjs/react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function PromotionDropdown({promotionItems}) {
    return (
        <Tippy
            content={
                <ul className={cx('dropdown-menu')}>
                    {promotionItems.map((item, index) => (
                        <li key={index}>
                            <a href="#">{item}</a>
                        </li>
                    ))}
                </ul>
            }
            interactive
            duration={[300, 100]}
            placement='bottom-start'
            trigger="mouseenter"
        >
            <a href="/khuyen-mai-giam-gia">Khuyến mãi - Giảm giá
                <FontAwesomeIcon icon={faChevronDown} className={cx('dropdown-icon')} />
            </a>
        </Tippy>
    );
}

export default PromotionDropdown;