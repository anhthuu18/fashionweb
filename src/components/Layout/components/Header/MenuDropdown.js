import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Tippy from "@tippyjs/react";
import {faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);
function MenuDropdown({menuCategories}) {
    return (
        <Tippy
            content={
                <ul className={cx('dropdown-menu', 'columns-5')}>
                    {menuCategories.map((category, index) => (
                        <li key={index} className={cx('category-item')}>
                            <a href="#" className={cx('category-title')}>
                                {category.title}
                            </a>
                            <ul>
                                {category.items.map((item, index) => (
                                    <li key={index}>
                                        <a href="#">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            }
            interactive
            duration={[300, 100]}
            placement='bottom'
            trigger="mouseenter"
        >
            <a href="#"><FontAwesomeIcon icon={faBars} />
                <FontAwesomeIcon icon={faChevronDown} className={cx('dropdown-icon')} />
            </a>
        </Tippy>
    );
}

export default MenuDropdown;