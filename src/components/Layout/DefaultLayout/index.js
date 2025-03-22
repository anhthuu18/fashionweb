import classNames from "classnames/bind";
import Header from "~/components/Layout/components/Header";
import styles from './DefaultLayout.module.scss'
import Banner from "./Banner";
import Breadcrumb from "../components/Breadcrumb";
import FilterForm from "../components/FilterForm";
import CategoryBreadcrumb from "../components/CategoryBreadcrumb";
import Footer from "../components/Footer";

const cx = classNames.bind(styles)
function DefaultLayout({children}) {
    //console.log('Rendering DefaultLayout');
    return ( 
        <div className={cx('wrapper')}>
            <Header />
            <Breadcrumb />
            <FilterForm />
            <div className={cx('container')}>
                <Banner />
                <CategoryBreadcrumb/>
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
            
            <Footer/>
        </div>
     );
}

export default DefaultLayout;