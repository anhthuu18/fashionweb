import classNames from "classnames/bind";
import styles from './Card.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import images from "~/assets/images";

const cx = classNames.bind(styles);
function Card() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('card-icon')}>
                    <FontAwesomeIcon icon={faCreditCard} />
                </div>
                <img src={images.myCard} />
                <div className={cx('user-account')}>TRƯƠNG THỊ ANH THƯ (-5 %)</div>
                <p>* Sử dụng khi thanh toán tại cửa hàng thay thế cho thẻ cứng.</p>
                <div className={cx('member')}>
                    <h2>MEMBER</h2>
                    <img src="https://yame.vn/Assets/img/badges/member.png?v=032025" />
                </div>
            </div>
        </div>
    );
}

export default Card;