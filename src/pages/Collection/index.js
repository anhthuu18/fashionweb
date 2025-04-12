import classNames from "classnames/bind";
import styles from "./Collection.module.scss";
import Banner from "~/components/Layout/DefaultLayout/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import products from "~/components/Layout/components/Products/DataProducts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

// Lấy danh sách các bộ sưu tập duy nhất
const collectionItems = [...new Set(products.map((product) => product.collection))].map((collection) => {
    const product = products.find((p) => p.collection === collection);
    return {
        name: collection,
        collectionImage: product.collectionImage,
    };
});

function Collection() {
    const navigate = useNavigate();
    const [expandedItems, setExpandedItems] = useState({});

    const toggleExpand = (index) => {
        setExpandedItems((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const handleImageClick = (collectionName) => {
        const encodedCollection = encodeURIComponent(collectionName);
        navigate(`/bo-suu-tap/${encodedCollection}`);
    };

    const midIndex = Math.ceil(collectionItems.length / 2);
    const leftColumn = collectionItems.slice(0, midIndex);
    const rightColumn = collectionItems.slice(midIndex);

    return (
        <>
            <Banner />
            <div className={cx("wrapper")}>
                <div className={cx("inner")}>
                    <h1>Danh sách bộ sưu tập</h1>
                    <div className={cx("columns")}>
                        <div className={cx("column")}>
                            {leftColumn.map((item, index) => (
                                <div key={index} className={cx("category")}>
                                    <div
                                        className={cx("category-header")}
                                        onClick={() => toggleExpand(index)}
                                    >
                                        <div className={cx("category-name")}>{item.name}</div>
                                        <FontAwesomeIcon
                                            icon={expandedItems[index] ? faMinus : faPlus}
                                            className={cx("toggle-icon")}
                                        />
                                    </div>
                                    {expandedItems[index] && (
                                        <div className={cx("category-content")}>
                                            <img
                                                src={item.collectionImage}
                                                alt={item.name}
                                                className={cx("collection-image")}
                                                onClick={() => handleImageClick(item.name)}
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className={cx("column")}>
                            {rightColumn.map((item, index) => (
                                <div key={index + midIndex} className={cx("category")}>
                                    <div
                                        className={cx("category-header")}
                                        onClick={() => toggleExpand(index + midIndex)}
                                    >
                                        <div className={cx("category-name")}>{item.name}</div>
                                        <FontAwesomeIcon
                                            icon={expandedItems[index + midIndex] ? faMinus : faPlus}
                                            className={cx("toggle-icon")}
                                        />
                                    </div>
                                    {expandedItems[index + midIndex] && (
                                        <div className={cx("category-content")}>
                                            <img
                                                src={item.collectionImage}
                                                alt={item.name}
                                                className={cx("collection-image")}
                                                onClick={() => handleImageClick(item.name)}
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Collection;