import classNames from "classnames/bind";
import Header from "~/components/Layout/components/Header";
import styles from './DefaultLayout.module.scss';
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";

const cx = classNames.bind(styles)
function DefaultLayout({children}) {
    //console.log('Rendering DefaultLayout');
    return ( 
        <div className={cx('wrapper')}>
            <Header />
            <Breadcrumb/>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
            <Footer/>
        </div>
     );
}

export default DefaultLayout;