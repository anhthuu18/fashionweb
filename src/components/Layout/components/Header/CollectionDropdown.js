import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Tippy from "@tippyjs/react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const cx = classNames.bind(styles);
function CollectionDropdown({collectionItems}) {
    return ( 
        <Tippy
        content={
            <ul className={cx('dropdown-menu')}>
                {collectionItems.map((item, index) => (
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
        <a href="/bo-suu-tap">Bộ sưu tập
            <FontAwesomeIcon icon={faChevronDown} className={cx('dropdown-icon')} />
        </a>
    </Tippy>
     );
}

export default CollectionDropdown;