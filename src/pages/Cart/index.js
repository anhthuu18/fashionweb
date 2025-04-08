import classNames from "classnames/bind";
import styles from './Cart.module.scss';
import images from "~/assets/images";
import products from "~/components/Layout/components/Products/DataProducts";

const cx = classNames.bind(styles);
function Cart() {
    if(!products){
        return(
            <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h2>Bạn chưa chọn sản phẩm.</h2>
                <img src={images.noProduct}/>
            </div>
        </div>
        );
    }

    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h2>Bạn chưa chọn sản phẩm.</h2>
                <img src={images.noProduct}/>
            </div>
        </div>
     );
}

export default Cart;