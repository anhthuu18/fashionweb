import Header from "~/components/Layout/components/Header";
import Footer from "../components/Footer";
import classNames from "classnames/bind";
import styles from './HeaderOnly.module.scss';

const cx = classNames.bind(styles);
function HeaderOnly({children}) {
    return ( 
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
            <Footer/>
        </div>
     );
}

export default HeaderOnly;