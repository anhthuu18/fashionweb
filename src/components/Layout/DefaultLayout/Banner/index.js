import classNames from 'classnames/bind';
import styles from './Banner.module.scss'

const cx = classNames.bind(styles)
function Banner() {
    return (
        <aside className={cx('wrapper')}>
            <img src="https://cmsv2.yame.vn/uploads/1cee1259-a41e-4c31-a1d2-272137975c56/Khuy%e1%ba%bfn_m%c3%a3i_gi%e1%ba%a3m_gi%c3%a1.jpg?quality=80&w=1920&h=0" alt="Banner" />
        </aside>
    );
}

export default Banner;