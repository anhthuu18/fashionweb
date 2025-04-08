import React from 'react';
import classNames from 'classnames/bind';
import styles from './TShirts.module.scss';
import products from '~/components/Layout/components/Products/DataProducts';
import CategoryBreadcrumb from "~/components/Layout/components/CategoryBreadcrumb";
import FilterForm from "~/components/Layout/components/FilterForm";
import ProductList from "~/components/Layout/components/Products/ProductList";
import Banner from "~/components/Layout/DefaultLayout/Banner";

const cx = classNames.bind(styles);

function TShirts() {
    const TShirts = products.filter(product => product.categories.includes("Áo Thun Nam Nữ"));

    return (
        <div className={cx('wrapper')}>
            <FilterForm />
            <Banner />
            <CategoryBreadcrumb />
            {TShirts.map(product => (
                <ProductList key={product.id} product={product} />
            ))}
        </div>
    );
}

export default TShirts;



