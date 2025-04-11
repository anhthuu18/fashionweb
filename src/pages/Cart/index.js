import classNames from "classnames/bind";
import styles from './Cart.module.scss';
import images from "~/assets/images";
import { useNavigate } from "react-router-dom";
import { useCart } from "~/components/context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faTrash, faTruck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Cart() {
    const { cart, removeFromCart } = useCart();
    const navigate = useNavigate();

    if (!cart || cart.length === 0) {
        return (
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <h2>Bạn chưa chọn sản phẩm.</h2>
                    <img src={images.noProduct} alt="No product" />
                </div>
            </div>
        );
    }

    // Tính tổng tiền
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner-has-products')}>
                <div className={cx('cart-info-products')}>
                    <h2>Chi tiết đơn hàng</h2>
                    <table className={cx('cart-table')}>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={`${item.id}-${item.size}`} className={cx('product-row')}>
                                    <td className={cx('image-col')}>
                                        <img src={item.image} alt={item.title} className={cx('product-image')} />
                                        <span
                                            className={cx('remove-product')}
                                            onClick={() => removeFromCart(item.id, item.size)}
                                        >
                                            <FontAwesomeIcon icon={faTrash} className={cx('remove-icon')} />
                                            Xóa
                                        </span>
                                    </td>
                                    <td className={cx('details-col')}>
                                        <p className={cx('product-title')}>
                                            <a href="#">{item.title}</a>
                                        </p>
                                        <p className={cx('product-details')}>
                                            <span className={cx('product-price')}>
                                                Số lượng {item.quantity} * {item.price.toLocaleString()} đ
                                            </span>
                                            {item.discount && (
                                                <span className={cx('product-discount')}>
                                                    (Tiết kiệm: {item.discount.toLocaleString()})
                                                </span>
                                            )}
                                        </p>
                                        {item.vipDiscount && (
                                            <p className={cx('vip-discount')}>
                                                Giảm thêm VIP: {item.vipDiscount}%
                                            </p>
                                        )}
                                        <p className={cx('item-subtotal')}>
                                            = {(item.price * item.quantity).toLocaleString()} đ
                                        </p>
                                    </td>
                                </tr>
                            ))}

                            {/* Phí giao hàng */}
                            <tr className={cx('shipping-fee')}>
                                <td className={cx('shipping-fee-title')}>Phí giao hàng</td>
                                <td className={cx('shipping-fee-price')}>0 đ</td>
                            </tr>

                            {/* Tổng cộng */}
                            <tr className={cx('total')}>
                                <td className={cx('total-title')}>Tổng:</td>
                                <td className={cx('total-price')}>
                                    {totalPrice.toLocaleString()} đ
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={cx('delivery-info')}>
                    <h2>Người nhận hàng</h2>
                    <div className={cx('delivery-name')}>
                        <label>Tên</label>
                        <input type="text" placeholder="Trương Thị Anh Thư" />
                    </div>
                    <div className={cx('delivery-phone')}>
                        <label>Điện thoại liên lạc</label>
                        <input type="text" placeholder="0362980918" />
                    </div>
                    <div className={cx('delivery-method')}>
                        <input type="radio" name="delivery-method" defaultChecked />
                        <label>Nhận hàng tại nhà/công ty/bưu điện</label>
                    </div>
                    <div className={cx('delivery-address')}>
                        <input type="text" placeholder="130 đường số 8, Linh Xuân, Thủ Đức" />
                        <select>
                            <option value="">-- Chọn Tỉnh/Thành phố --</option>
                            <option value="HCM">Hồ Chí Minh</option>
                            <option value="HN">Hà Nội</option>
                            <option value="DN">Đà Nẵng</option>
                        </select>
                    </div>
                    <div className={cx('delivery-note')}>
                        <label>Ghi chú</label>
                        <input type="text" placeholder="Ghi chú cho đơn hàng" />
                    </div>
                    <div className={cx('payment-methods')}>
                        <div className={cx('payment-method')}>
                            <input type="radio" name="payment-option" defaultChecked />
                            <label>
                                <FontAwesomeIcon icon={faTruck} className={cx('payment-icon')} /> Thanh toán khi nhận hàng (COD)
                            </label>
                        </div>
                        <div className={cx('payment-method')}>
                            <input type="radio" name="payment-option" />
                            <label>
                                <FontAwesomeIcon icon={faGlobe} className={cx('payment-icon')} /> Thanh toán bằng ví MoMo
                            </label>
                        </div>
                    </div>
                    <button className={cx('action-button')}>
                        Đặt hàng: Giao hàng và thu tiền tận nơi
                    </button>
                    <button className={cx('action-button', 'secondary')}>
                        Các sản phẩm khác? Chọn thêm...
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;