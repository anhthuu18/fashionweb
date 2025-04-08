import classNames from "classnames/bind";
import styles from './Voucher.module.scss';

import Breadcrumb from "~/components/Layout/components/Breadcrumb";
import images from "~/assets/images";

const cx = classNames.bind(styles);
function Voucher() {
    return (
        <div>
            <Breadcrumb />
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <h2>Bạn chưa có Mã giảm giá được lưu.</h2>
                    <div>
                        <img src= {images.myVoucher}/>
                    </div>
                    <p>Hãy nhanh tay lưu Mã giảm giá để sử dụng khi mua sắm tại Cửa hàng và Website YaMe.vn.</p>
                    <p>Hàng ngàn mã Voucher - Giảm giá cập nhật mỗi ngày tại đây.</p>
                </div>
            </div>
        </div>
    );
}

export default Voucher;