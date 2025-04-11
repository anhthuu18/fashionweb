import classNames from "classnames/bind";
import styles from './Profile.module.scss';
import { useNavigate } from "react-router-dom";
import { useAuth } from "~/components/context/AuthContext";

const cx = classNames.bind(styles);
function Profile() {
    const navigate = useNavigate();
    const {logout} = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    const handleDelete = () => {
        logout();
        navigate('/');
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h1 className={cx('header-info')}>Thông tin thẻ Yame VIP</h1>
                <form className={cx('user-info')}>
                    <div className={cx('user-name')}>
                        <label>Họ Tên <span>*</span></label>
                        <input type="text" id="name" value="TRƯƠNG THỊ ANH THƯ"/>
                    </div>
                    <div className={cx('user-birth')}>
                        <label>Sinh Nhật(Ngày/Tháng/Năm)</label>
                        <input type="text" id="birthday" value="20/11/2004"/>
                    </div>
                    <div className={cx('user-discount')}>
                        <label>Điểm Tích Lũy/ Giảm giá</label>
                        <input type="text" id="discount" readOnly value="- 5 %"/>
                    </div>
                    <div className={cx('user-address')}>
                        <label>Địa Chỉ <span>*</span></label>
                        <input type="text" id="address" value="130 đường số 8, Linh Xuân, Thủ Đức"/>
                    </div>
                    <div className={cx('user-email')}>
                        <label>Email <span>*</span></label>
                        <input type="text" id="email" value="truongthianhthu2011@gmail.com"/>
                    </div>
                    <div className={cx('user-phone')}>
                        <label>Điện thoại <span>*</span></label>
                        <input type="text" id="phone" value="0382604104"/>
                    </div>
                    <button className={cx('btn', 'update-btn')}>CẬP NHẬT THÔNG TIN</button>
                    <button className={cx('btn', 'exit-btn')} onClick={handleLogout}>THOÁT</button>
                    <button className={cx('btn', 'delete-btn')} onClick={handleDelete}>XÓA TÀI KHOẢN VIP</button>
                </form>
            </div>
        </div>
    )
}

export default Profile;