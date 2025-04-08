import classNames from "classnames/bind";
import styles from './ProductList.module.scss';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import products from "../DataProducts";

const cx = classNames.bind(styles);

// Hàm chuẩn hóa chuỗi để so sánh
const normalizeString = (str) => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Xóa ký tự đặc biệt
    .replace(/\s+/g, "-"); // Thay khoảng trắng bằng dấu gạch ngang
};

function ProductList({ excludeId, collectionName }) {
  // Lọc sản phẩm theo collectionName và excludeId
  let filteredProducts = products;

  // Lọc theo collectionName nếu có
  if (collectionName) {
    filteredProducts = filteredProducts.filter((product) => {
      const normalizedProductCollection = normalizeString(product.collection);
      return normalizedProductCollection === collectionName;
    });
  }

  // Loại bỏ sản phẩm có id tương ứng nếu có excludeId
  if (excludeId) {
    filteredProducts = filteredProducts.filter((product) => product.id !== excludeId);
  }

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
  const rowLayout = getRandomRowLayout(filteredProducts.length);

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
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div key={product.id} className={cx(getColumnClass(index), 'product-items')}>
              <Link to={`/chi-tiet-san-pham/${product.id}`} className={cx('product-item')}>
                <div className={cx('product-image')}>
                  <FontAwesomeIcon icon={faHeart} className={cx('wishlist-btn')} />
                  <img src={product.image} alt={product.title} className={cx('main-image')} />
                  <img src={product.hoverImage} alt={`${product.title} hover`} className={cx('hover-image')} />
                </div>
              </Link>
              <p className={cx('product-title')}>{product.title}</p>
              {product.additionalInfo && product.additionalInfo.length > 0 && (
                <div className={cx('product-info')}>
                  {product.additionalInfo.map((info, index) => (
                    <span
                      key={index}
                      className={cx({
                        'price-old': index === 1,
                        'price-new': index === 2,
                      })}
                    >
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
          ))
        ) : (
          <p className={cx('no-products')}>Không có sản phẩm nào trong danh mục này.</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;