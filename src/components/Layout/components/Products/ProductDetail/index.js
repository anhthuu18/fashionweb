import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ProductList from '../ProductList';
import products from '../DataProducts';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

const ProductDetail = () => {
    const { id } = useParams(); // Lấy id từ URL
    const product = products.find((p) => p.id === parseInt(id)); // Tìm sản phẩm theo id

    const [isExpanded, setIsExpanded] = useState(false);
    const [isOverflow, setIsOverflow] = useState(false);
    const descriptionRef = useRef(null);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Kiểm tra xem nội dung có vượt quá chiều cao 150px không
    useEffect(() => {
        const element = descriptionRef.current;
        if (element) {
            const isContentOverflow = element.scrollHeight > 150;
            setIsOverflow(isContentOverflow);
        }
    }, [product]);

    // Kiểm tra nếu không tìm thấy sản phẩm
    if (!product) {
        return <div>Không tìm thấy sản phẩm</div>;
    }

    // Xử lý click "Đọc tiếp" hoặc "Ẩn bớt nội dung"
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('image-section')}>
                    <div className={cx('slide-image')}>
                        {product.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`${product.title} ${index}`}
                            />
                        ))}
                    </div>
                    <div className={cx('show-image')}>
                        <img src={product.mainImage} alt={product.title} />
                    </div>
                </div>
                <div className={cx('info-detail')}>
                    <div className={cx('info-price')}>
                        <p>{product.title}</p>
                        <span className={cx('price-old')}>{product.price.old} đ</span>
                        <h3>{product.price.discount}</h3>
                        <span className={cx('price-new')}>{product.price.new} đ<br></br></span>
                        <span>Giá hời áp dụng đến ngày {product.price.validUntil}</span>
                    </div>

                    <div className={cx('info-stock')}>
                        <table>
                            <tbody>
                                {product.sizes.map((sizeOption, index) => (
                                    <tr
                                        key={index}
                                        className={cx('size-option')}
                                    >
                                        <td className={cx('color-size')}>Trắng, {sizeOption.size}</td>
                                        <td className={cx('stock')}>{sizeOption.stock} Cửa hàng</td>
                                        <td className={cx('action-btn')}>
                                            <button className={cx('add-to-cart')}>
                                                <FontAwesomeIcon icon={faPlus} className={cx('add-icon')} />
                                                <span className={cx('cart')}>Giỏ hàng</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className={cx('info-description')}>
                        <p>Mã số: {product.code}</p>
                        <span>{product.title}</span>
                        <div className={cx('description-content', { expanded: isExpanded })} ref={descriptionRef}>
                            <p>1. Kiểu sản phẩm: {product.description.type}</p>
                            <p>2. Ưu điểm:</p>
                            <ul>
                                {product.description.advantages.map((adv, index) => (
                                    <li key={index}>{adv}</li>
                                ))}
                            </ul>
                            <p>3. Chất liệu: {product.description.material}</p>
                        </div>
                        {isOverflow && (
                            <a
                                className={cx('exp')}
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggleExpand();
                                }}
                            >
                                {isExpanded ? 'Ẩn bớt nội dung' : 'Đọc tiếp'}
                            </a>
                        )}
                    </div>

                    <div className={cx('info-other-items')}>
                        <div className={cx('items-list')}>
                            {product.otherItems.map((item) => (
                                <div key={item.id} className={cx('item')}>
                                    <img src={item.image} alt="yame" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <h2 className={cx('more-items')}>CÓ THỂ BẠN QUAN TÂM</h2>
            <ProductList excludeId={product.id} />
        </div>
    );
};

export default ProductDetail;