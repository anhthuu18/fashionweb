import React from 'react';
import classNames from 'classnames/bind';
import styles from './New.module.scss';
import products from '~/components/Layout/components/Products/DataProducts';
import CategoryBreadcrumb from "~/components/Layout/components/CategoryBreadcrumb";
import FilterForm from "~/components/Layout/components/FilterForm";
import ProductList from "~/components/Layout/components/Products/ProductList";
import Banner from "~/components/Layout/DefaultLayout/Banner";

const cx = classNames.bind(styles);

function New() {
    const newProducts = products.filter(product => product.additionalInfo.includes("NEW"));

    return (
        <div className={cx('wrapper')}>
            <FilterForm />
            <Banner />
            <CategoryBreadcrumb />
            {newProducts.map(product => (
                <ProductList key={product.id} product={product} />
            ))}
        </div>
    );
}

export default New;