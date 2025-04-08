import classNames from "classnames/bind";
import styles from './ProductWishlist.module.scss';

import Breadcrumb from "~/components/Layout/components/Breadcrumb";

const cx = classNames.bind(styles);
function ProductWishlist() {
    return (
        <div>
            <Breadcrumb />
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <h2>Tính năng chưa phát triển</h2>
                </div>
            </div>
        </div>
    );
}

export default ProductWishlist;