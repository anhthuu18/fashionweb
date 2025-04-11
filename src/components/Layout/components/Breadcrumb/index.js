import classNames from 'classnames/bind';
import styles from './Breadcrumb.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);


const formatDisplayName = (str) => {
    return str
        .replace(/-/g, ' ') 
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

function Breadcrumb() {
    const location = useLocation();

    if (location.pathname === '/') return null;

    const paths = location.pathname.split('/').filter(p => p);

    const formattedPaths = paths.map((p) => {
        const decoded = decodeURIComponent(p);
        return formatDisplayName(decoded);
    });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('breadcrumb')}>
                    <Link to="/">
                        <FontAwesomeIcon icon={faHouseChimney} className={cx('home-icon')} />
                    </Link>
                    {formattedPaths.map((p, index) => (
                        <span key={index} className={cx('path')}>
                            {' / '}
                            <span>{p}</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Breadcrumb;
