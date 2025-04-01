import classNames from "classnames/bind";
import styles from './OrderDetail.module.scss';
import Breadcrumb from "~/components/Layout/components/Breadcrumb";
import orders from "../DataOrders";
import { useLocation, useParams } from "react-router-dom";

const cx = classNames.bind(styles);

function OrderDetail() {
    const { id } = useParams();
    const location = useLocation();

    // Lấy dữ liệu đơn hàng từ state (nếu có), nếu không thì tìm trong mảng orders
    const order = location.state?.order || orders.find((order) => order.id === id);
    if (!order) {
        return (
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('order-header')}>Bạn chưa có đơn hàng nào!</div>
                </div>
            </div>
        );
    }
    // Hàm định dạng tiền tệ
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value).replace('₫', '');
    };
    return (
        <div>
            <Breadcrumb />
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('order-header')}>
                        <h2>Số đơn hàng: {order.id}</h2>
                        <p className={cx('order-date')}>Ngày đặt hàng: {order.date}</p>
                        <p className={cx('order-status')}>
                            Tình trạng đơn hàng: {order.status}
                        </p>
                        <div className={cx('progress-bar')}></div>
                    </div>
                    <div className={cx('order-body')}>
                        <div className={cx('order-receiver')}>
                            <h2>Thông tin Người nhận hàng</h2>
                            <table>
                                <tr>
                                    <td>Mã vận đơn</td>
                                    <td>{order.id}</td>
                                </tr>
                                <tr>
                                    <td>Tên</td>
                                    <td>{order.receiver.name}</td>
                                </tr>
                                <tr>
                                    <td>Điện thoại</td>
                                    <td>{order.receiver.phone}</td>
                                </tr>
                                <tr>
                                    <td>ĐT nhận hàng</td>
                                    <td>{order.receiver.deliveryPhone}</td>
                                </tr>
                                <tr>
                                    <td>ĐC nhận hàng</td>
                                    <td>{order.receiver.address}</td>
                                </tr>
                                <tr>
                                    <td>Ghi chú</td>
                                    <td>{order.receiver.note}</td>
                                </tr>
                            </table>
                        </div>

                        <div className={cx('order-products')}>
                            <h2>Chi tiết đơn hàng</h2>
                            {order.products.map((product, index) => (
                                <div key={index} className={cx('product-item')}>
                                    <p className={cx('product-name')}>
                                        {`${index + 1}. ${product.name}`}
                                    </p>
                                    <div className={cx('product-info')}>
                                        <span>{formatCurrency(product.price)}</span>
                                        <span>x {product.quantity}</span>
                                        <span>- {product.discount}%</span>
                                        <span>{formatCurrency(product.total)}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={cx('order-invoice')}>
                            <h2>Hóa đơn</h2>
                            <table>
                                <tr>
                                    <td>Tổng giá trị sản phẩm:</td>
                                    <td>{formatCurrency(order.invoice.subtotal)}</td>
                                </tr>
                                <tr>
                                    <td>Giảm giá:</td>
                                    <td>{order.invoice.discount}</td>
                                </tr>
                                <tr>
                                    <td>Phí vận chuyển:</td>
                                    <td>{formatCurrency(order.invoice.shippingFee)}</td>
                                </tr>
                                <tr>
                                    <td>Tổng hóa đơn:</td>
                                    <td>{formatCurrency(order.invoice.total)}</td>
                                </tr>
                                <tr>
                                    <td>Đã thanh toán:</td>
                                    <td>{formatCurrency(order.invoice.paid)}</td>
                                </tr>
                                <tr>
                                    <td>Phải trả:</td>
                                    <td>{formatCurrency(order.invoice.remaining)}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetail;