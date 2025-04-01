import Breadcrumb from "~/components/Layout/components/Breadcrumb";
import CategoryBreadcrumb from "~/components/Layout/components/CategoryBreadcrumb";
import FilterForm from "~/components/Layout/components/FilterForm";
import ProductList from "~/components/Layout/components/Products/ProductList";
import Banner from "~/components/Layout/DefaultLayout/Banner";

function Home() {
    return (
        <div>
            <Breadcrumb/>
            <FilterForm/>
            <Banner/>
            <CategoryBreadcrumb/>
            <ProductList/>
        </div>
    )
}

export default Home;