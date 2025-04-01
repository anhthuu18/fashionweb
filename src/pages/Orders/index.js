import classNames from "classnames/bind";
import styles from './Orders.module.scss';
import { useNavigate } from "react-router-dom";
import Breadcrumb from "~/components/Layout/components/Breadcrumb";
import orders from "./DataOrders";

const cx = classNames.bind(styles);
function Orders() {
    const navigate = useNavigate();

    // Hàm tách tên sản phẩm (lấy phần trước dấu / đầu tiên)
    const getProductName = (product) => {
        if (!product || !product.name) {
            return "Không có sản phẩm";
        }
        const parts = product.name.split('/');
        return parts[0].trim();
    };
    
    const handleViewDetails = (orderId) => {
        navigate(`/myorders/xem-chi-tiet-don/${orderId}`);
    };

    return (
        <div className={cx('wrapper')}>
            <Breadcrumb/>
            <div className={cx('inner')}>
                <h1 className={cx('header-info')}>Đơn hàng của tôi</h1>
                {orders.length === 0 ? (
                    null
                ) : (
                    <div className={cx('order-list')}>
                        {orders.map((order, index) => (
                            <div key={order.id} className={cx('order-item')}>
                                <h3 className={cx('order-id')}>
                                    {index + 1}. {order.id} Ngày {order.date}
                                </h3>
                                <div className={cx('order-products')}>
                                    <p className={cx('product-item')}>
                                        {getProductName(order.products[0])}
                                        {order.products.length > 1 && (
                                            <span className={cx('more-products')}>
                                                {' ... '}
                                                {order.products.length - 1} sản phẩm khác
                                            </span>
                                        )}
                                    </p>
                                </div>
                                <hr />
                                <p className={cx('order-total')}>
                                    Tổng hóa đơn: {order.total} / Thanh toán: {order.paid}
                                </p>
                                <p className={cx('order-status')}>Tình trạng đơn hàng: {order.status}</p>
                                <button
                                    className={cx('view-details')}
                                    onClick={() => handleViewDetails(order.id)}
                                >Xem chi tiết</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Orders;