import { useParams } from "react-router-dom";
import products from "~/components/Layout/components/Products/DataProducts";
import classNames from "classnames/bind";
import styles from "./Collection.module.scss";
import ProductList from "~/components/Layout/components/Products/ProductList";
import Banner from "~/components/Layout/DefaultLayout/Banner";

const cx = classNames.bind(styles);

function CollectionProducts() {
    const { collection } = useParams(); // Lấy tên bộ sưu tập từ URL

    // Giải mã tên bộ sưu tập
    const decodedCollection = decodeURIComponent(collection).trim();
    console.log("Decoded Collection:", decodedCollection);

    // Log tất cả tên bộ sưu tập trong dữ liệu
    console.log("All Collections in Data:", products.map(product => product.collection));

    // Lọc sản phẩm, so sánh không phân biệt hoa/thường
    const collectionProducts = products.filter(
        (product) => product.collection.trim().toLowerCase() === decodedCollection.toLowerCase()
    );
    console.log("Filtered Products:", collectionProducts);

    // Lấy tên bộ sưu tập gốc từ dữ liệu (nếu có sản phẩm)
    const collectionName = collectionProducts.length > 0 ? collectionProducts[0].collection : decodedCollection;

    return (
        <>
            <Banner />
            <div className={cx("wrapper")}>
                <div className={cx("inner")}>
                    <h1>Bộ sưu tập: {collectionName}</h1>
                    {collectionProducts.length > 0 ? (
                        <ProductList products={collectionProducts} />
                    ) : (
                        <p>Không tìm thấy sản phẩm trong bộ sưu tập này.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default CollectionProducts;