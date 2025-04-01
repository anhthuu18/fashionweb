import classNames from 'classnames/bind';
import styles from './CategoryBreadcrumb.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function CategoryBreadcrumb() {
  const categories = [
    { label: 'Nổi bật', path: '/category/noi-bat' },
    { label: 'Bán chạy', path: '/category/ban-chay' },
    { label: 'Mới', path: '/category/moi' },
  ];

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('category-breadcrumb')}>
          {categories.map((category, index) => (
            <span key={index} className={cx('category-item')}>
              <Link to={category.path} className={cx('category-link')}>
                {category.label}
              </Link>
              {index < categories.length - 1 && ' / '}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryBreadcrumb;