import classNames from "classnames/bind";
import styles from './Collection.module.scss';
import Banner from "~/components/Layout/DefaultLayout/Banner";

const cx = classNames.bind(styles);
function Collection() {
  return (
    <div className={cx("wrapper")}>
      <Banner/>
    </div>);
}


export default Collection;