import classNames from "classnames/bind";
import styles from './ProductList.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function ProductList() {

    const products = [
        {
            id: 1,
            title: 'Túi Vải Không Dệt M1',
            additionalInfo: ['VIP', '17', '7', 'Giá tốt'],
            image: 'https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/77400ab4-dc6b-3500-1c96-001bee3e09db.jpg?w=540&h=756&c=true&ntf=false',
            hoverImage: 'https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/0d8eab36-781f-0b00-c2f5-001ac9f1e06c.jpg?w=540&h=756&c=true&ntf=false', // Ảnh hiển thị khi hover
            colorImages: [],
        },
        {
            id: 2,
            title: 'Áo Thun Thể Thao Tay Ngắn Beginner 01 Vol 24',
            additionalInfo: ['VIP', '17', '7', 'Giá tốt'],
            image: 'http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=540&h=756&c=true&ntf=false',
            hoverImage: 'https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=540&h=756&c=true&ntf=false',
            colorImages: [
                'https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023139/ca1ce153-49d8-1200-444c-001b5112c394.jpg?w=100&h=140&c=true&ntf=false',
                'https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023139/ca1ce153-49d8-1200-444c-001b5112c394.jpg?w=100&h=140&c=true&ntf=false',
                'https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023139/ca1ce153-49d8-1200-444c-001b5112c394.jpg?w=100&h=140&c=true&ntf=false',
                'https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023139/ca1ce153-49d8-1200-444c-001b5112c394.jpg?w=100&h=140&c=true&ntf=false',
            ],
        },
        {
            id: 3,
            title: 'Túi Vải Không Dệt M1',
            additionalInfo: ['VIP', '17', '7', 'Giá tốt'],
            image: 'https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/77400ab4-dc6b-3500-1c96-001bee3e09db.jpg?w=540&h=756&c=true&ntf=false',
            hoverImage: 'https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/0d8eab36-781f-0b00-c2f5-001ac9f1e06c.jpg?w=540&h=756&c=true&ntf=false', // Ảnh hiển thị khi hover
            colorImages: [],
        },
        {
            id: 4,
            title: 'Túi Vải Không Dệt M1',
            additionalInfo: ['VIP', '17', '7', 'Giá tốt'],
            image: 'http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=540&h=756&c=true&ntf=false',
            hoverImage: 'https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=540&h=756&c=true&ntf=false',
            colorImages: [
                'https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023139/ca1ce153-49d8-1200-444c-001b5112c394.jpg?w=100&h=140&c=true&ntf=false',
                'https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023139/ca1ce153-49d8-1200-444c-001b5112c394.jpg?w=100&h=140&c=true&ntf=false',
                'https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023139/ca1ce153-49d8-1200-444c-001b5112c394.jpg?w=100&h=140&c=true&ntf=false',
                'https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023139/ca1ce153-49d8-1200-444c-001b5112c394.jpg?w=100&h=140&c=true&ntf=false',
            ],
        },
        {
            id: 5,
            title: 'Túi Vải Không Dệt M1',
            additionalInfo: ['VIP', '17', '7', 'Giá tốt'],
            image: 'https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/77400ab4-dc6b-3500-1c96-001bee3e09db.jpg?w=540&h=756&c=true&ntf=false',
            hoverImage: 'https://cdn2.yame.vn/pimg/ts---tui-vai-khong-det-m1-0022841/0d8eab36-781f-0b00-c2f5-001ac9f1e06c.jpg?w=540&h=756&c=true&ntf=false', // Ảnh hiển thị khi hover
            colorImages: [],
        },
        {
            id: 6,
            title: 'Túi Vải Không Dệt M1',
            additionalInfo: ['VIP', '17', '7', 'Giá tốt'],
            image: 'http://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/ffec2fb9-b982-0e00-ddad-001b51122493.jpg?w=540&h=756&c=true&ntf=false',
            hoverImage: 'https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023135/0c60f005-3af1-0900-ef29-001bc4a94982.jpg?w=540&h=756&c=true&ntf=false',
            colorImages: [
                'https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023139/ca1ce153-49d8-1200-444c-001b5112c394.jpg?w=100&h=140&c=true&ntf=false',
                'https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023139/ca1ce153-49d8-1200-444c-001b5112c394.jpg?w=100&h=140&c=true&ntf=false',
                'https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023139/ca1ce153-49d8-1200-444c-001b5112c394.jpg?w=100&h=140&c=true&ntf=false',
                'https://cdn2.yame.vn/pimg/ao-thun-co-tron-tay-ngan-soi-nhan-tao-thoang-mat-tron-dang-om-the-thao-beginner-01-0023139/ca1ce153-49d8-1200-444c-001b5112c394.jpg?w=100&h=140&c=true&ntf=false',
            ],
        },
    ]

    // Tạo mảng ngẫu nhiên để quyết định số lượng sản phẩm trên mỗi hàng
    const getRandomRowLayout = (totalProducts) => {
        const layout = [];
        let currentIndex = 0;

        while (currentIndex < totalProducts) {
            const itemsInRow = Math.random() > 0.5 ? 4 : 2;
            const remainingItems = totalProducts - currentIndex;

            if (remainingItems < itemsInRow) {
                layout.push(remainingItems);
                break;
            }

            layout.push(itemsInRow);
            currentIndex += itemsInRow;
        }

        return layout;
    };

    // Tạo bố cục ngẫu nhiên cho các hàng
    const rowLayout = getRandomRowLayout(products.length);

    // Tính toán class cho từng sản phẩm dựa trên bố cục ngẫu nhiên
    const getColumnClass = (index) => {
        let currentIndex = 0;
        for (let i = 0; i < rowLayout.length; i++) {
            const itemsInRow = rowLayout[i];
            if (index >= currentIndex && index < currentIndex + itemsInRow) {
                return itemsInRow === 4 ? 'grid__column-3' : 'grid__column-6';
            }
            currentIndex += itemsInRow;
        }
        return 'grid__column-3'; // Mặc định nếu có lỗi
    };


    return (
        <div className={cx('grid')}>
            <div className={cx('inner', 'grid__row')}>
                {products.map((product, index) => (
                    <div key={product.id} className={cx(getColumnClass(index), 'product-items')}>
                        <a className={cx('product-item')}>
                            <div className={cx('product-image')}>
                                <FontAwesomeIcon icon={faHeart} className={cx('wishlist-btn')} />
                                <img src={product.image} alt={product.title} className={cx('main-image')} />
                                <img src={product.hoverImage} alt={`${product.title} hover`} className={cx('hover-image')} />
                            </div>
                        </a>
                        <p className={cx('product-title')}>{product.title}</p>
                        {product.additionalInfo && product.additionalInfo.length > 0 && (
                            <div className={cx('product-info')}>
                                {product.additionalInfo.map((info, index) => (
                                    <span
                                        key={index}
                                        className={cx({
                                            'price-old': index === 1,
                                            'price-new': index === 2,
                                        })}>
                                        {info}
                                    </span>
                                ))}
                            </div>
                        )}
                        {product.colorImages && product.colorImages.length > 0 && (
                            <div className={cx('color-images')}>
                                {product.colorImages.map((colorImage, index) => (
                                    <img key={index} src={colorImage} alt={`color-${index}`} />
                                ))}
                            </div>
                        )}
                    </div>
                ))};
            </div>
        </div>
    );
}

export default ProductList;