// src/components/Layout/components/Collection/Collection.js
import classNames from "classnames/bind";
import styles from './Collection.module.scss';
import { useParams } from "react-router-dom";
import CategoryBreadcrumb from "~/components/Layout/components/CategoryBreadcrumb";
import FilterForm from "~/components/Layout/components/FilterForm";
import ProductList from "~/components/Layout/components/Products/ProductList";
import Banner from "~/components/Layout/DefaultLayout/Banner";
import products from "~/components/Layout/components/Products/DataProducts";

const cx = classNames.bind(styles);

// Hàm chuẩn hóa chuỗi để so sánh
const normalizeString = (str) => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Xóa ký tự đặc biệt
    .replace(/\s+/g, "-"); // Thay khoảng trắng bằng dấu gạch ngang
};

function Collection() {
  const { collectionName } = useParams(); // Lấy tham số từ URL (ví dụ: "cool-touch-vai-mem-min-mat")

  // Chuẩn hóa collectionName từ URL
  const normalizedCollectionName = collectionName
    ? normalizeString(collectionName)
    : "";

  // Tìm tên gốc của bộ sưu tập để hiển thị
  const displayCollectionName = products.find(
    (product) => normalizeString(product.collection) === normalizedCollectionName
  )?.collection || collectionName?.replace(/-/g, " ") || "Bộ Sưu Tập";

  return (
    <div className={cx("wrapper")}>
      <FilterForm />
      <Banner />
      <CategoryBreadcrumb />
      <h1 className={cx("collection-title")}>Bộ Sưu Tập: {displayCollectionName}</h1>
      <ProductList collectionName={normalizedCollectionName} />
    </div>
  );
}

export default Collection;