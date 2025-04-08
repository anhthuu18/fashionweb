import classNames from "classnames/bind";
import styles from './Vip.module.scss';

import Breadcrumb from "~/components/Layout/components/Breadcrumb";

const cx = classNames.bind(styles)
function VipBenefit() {
    return (
        <div>
            <Breadcrumb />
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <h2>:(((</h2>
                </div>
            </div>
        </div>

    );
}

export default VipBenefit;