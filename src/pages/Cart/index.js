import classNames from "classnames/bind";
import styles from './Cart.module.scss';
import images from "~/assets/images";
import { useNavigate } from "react-router-dom";
import { useCart } from "~/components/context/CartContext";
import { useAuth } from "~/components/context/AuthContext"; // Thêm useAuth
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faTrash, faTruck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const cx = classNames.bind(styles);

function Cart() {
    const { cart, removeFromCart } = useCart();
    const { currentUser, updateUser } = useAuth(); // Lấy currentUser và updateUser từ AuthContext
    const navigate = useNavigate();

    // State để lưu thông tin giao hàng (ban đầu lấy từ currentUser)
    const [deliveryInfo, setDeliveryInfo] = useState({
        name: currentUser.name || '',
        phone: currentUser.phone || '',
        address: currentUser.address || '',
        city: currentUser.city || '',
        note: '',
    });
    const [paymentMethod, setPaymentMethod] = useState('COD');

    // Kiểm tra nếu chưa đăng nhập thì chuyển hướng đến trang đăng nhập
    if (!currentUser.isLoggedIn) {
        navigate('/login', { state: { from: '/cart' } });
        return null;
    }

    // Kiểm tra nếu giỏ hàng rỗng
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

    // Cập nhật thông tin giao hàng khi người dùng thay đổi
    const handleDeliveryInfoChange = (field, value) => {
        setDeliveryInfo((prev) => ({
            ...prev,
            [field]: value,
        }));

        // Cập nhật thông tin người dùng trong AuthContext (trừ trường note)
        if (field !== 'note') {
            updateUser({ [field]: value });
        }
    };
    const handleGoToCollection = () => {
        navigate('/bo-suu-tap');
    };
    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
    };

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
                        <input
                            type="text"
                            value={deliveryInfo.name}
                            onChange={(e) => handleDeliveryInfoChange('name', e.target.value)}
                            placeholder="Trương Thị Anh Thư"
                        />
                    </div>
                    <div className={cx('delivery-phone')}>
                        <label>Điện thoại liên lạc</label>
                        <input
                            type="text"
                            value={deliveryInfo.phone}
                            onChange={(e) => handleDeliveryInfoChange('phone', e.target.value)}
                            placeholder="0362980918"
                        />
                    </div>
                    <div className={cx('delivery-method')}>
                        <input type="radio" name="delivery-method" defaultChecked />
                        <label>Nhận hàng tại nhà/công ty/bưu điện</label>
                    </div>
                    <div className={cx('delivery-address')}>
                        <input
                            type="text"
                            value={deliveryInfo.address}
                            onChange={(e) => handleDeliveryInfoChange('address', e.target.value)}
                            placeholder="130 đường số 8, Linh Xuân, Thủ Đức"
                        />
                        <select
                            value={deliveryInfo.city}
                            onChange={(e) => handleDeliveryInfoChange('city', e.target.value)}
                        >
                            <option value="">-- Chọn Tỉnh/Thành phố --</option>
                            <option value="HCM">Hồ Chí Minh</option>
                            <option value="HN">Hà Nội</option>
                            <option value="DN">Đà Nẵng</option>
                        </select>
                    </div>
                    <div className={cx('delivery-note')}>
                        <label>Ghi chú</label>
                        <input
                            type="text"
                            value={deliveryInfo.note}
                            onChange={(e) => handleDeliveryInfoChange('note', e.target.value)}
                            placeholder="Ghi chú cho đơn hàng"
                        />
                    </div>

                    <div className={cx('payment-methods')}>
                        <div className={cx('payment-method')}>
                            <input
                                type="radio"
                                name="payment-option"
                                value="COD"
                                checked={paymentMethod === 'COD'}
                                onChange={() => handlePaymentMethodChange('COD')} />
                            <label>
                                <FontAwesomeIcon icon={faTruck} className={cx('payment-icon')} /> Thanh toán khi nhận hàng (COD)
                            </label>
                        </div>
                        <div className={cx('payment-method')}>
                            <input
                                type="radio"
                                name="payment-option"
                                value="MOMO"
                                checked={paymentMethod === 'MOMO'}
                                onChange={() => handlePaymentMethodChange('MOMO')} />
                            <label>
                                <FontAwesomeIcon icon={faGlobe} className={cx('payment-icon')} /> Thanh toán bằng ví MoMo
                            </label>
                        </div>
                    </div>
                    {paymentMethod === 'COD' ? (
                        <button className={cx('action-button')}>
                            Đặt hàng: Giao hàng và thu tiền tận nơi
                        </button>
                    ) : (
                        <button className={cx('action-button')}>
                            Thanh toán:  {totalPrice.toLocaleString()} đ
                        </button>
                    )}

                    <button className={cx('action-button', 'secondary')} onClick={handleGoToCollection}>
                        Các sản phẩm khác? Chọn thêm...
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;