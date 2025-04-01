import classNames from 'classnames/bind';
import styles from './FilterForm.module.scss';
import { useState, useEffect } from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function FilterForm({ onFilter }) {
  const [filters, setFilters] = useState({
    categories: [],
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleInputClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setFilters((prev) => {
      const newCategories = checked
        ? [...prev.categories, value]
        : prev.categories.filter((cat) => cat !== value);
      return { ...prev, categories: newCategories };
    });
  };

  // Tự động gọi onFilter khi filters thay đổi
  useEffect(() => {
    if (onFilter) {
      onFilter(filters);
    }
  }, [filters, onFilter]);

  const displayValue = filters.categories.length
    ? `${filters.categories.join(', ')}`
    : 'Lọc sản phẩm phù hợp';

  const handleClearFilter = () => {
    setFilters((prev) => ({ ...prev, categories: [] }));
  };
  const menuItems = [
    {
      title: 'Chủng loại',
      items: [
        'Dụng Cụ Cá Nhân',
        'Áo Thun',
        'Quần Jeans',
        'Áo Sơ Mi',
        'Balo',
        'Quần Short',
        'Dụng Cụ Giải Trí',
        'Quần Dài',
        'Quần Lót',
        'Áo Polo',
        'Túi Đeo',
        'Dép',
        'Áo Khóac',
        'Nón',
        'Vớ',
        'Ví',
        'Phụ Kiện Thể Thao',
        'Quần Tây',
        'Giày',
        'Nước Hoa',
        'Găng Tay',
      ],
    },
    {
      title: 'Form/Kiểu Dáng',
      items: [
        'Dáng Vừa',
        'Dáng Rộng',
        'Dáng Ôm',
      ],
    },
    {
      title: 'Kiểu 01',
      items: [
        'Áo Thun Thể Thao Tay Ngắn',
        'Áo Thun 3 Lỗ Thể Thao',
        'Quần Jeans Slimfit Đơn Giản',
        'Áo Sơ Mi Cổ Bẻ Tay Ngắn',
        'Balo Bền - Giá Tốt',
      ],
    },
  ];

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
      <TippyHeadless
        visible={isOpen}
        onClickOutside={() => setIsOpen(false)}
        interactive
        placement="bottom-start"
        render={(attrs) => (
          <div className={cx('filter-menu')} tabIndex="-1" {...attrs}>
            {menuItems.map((categoryGroup, index) => (
              <div key={index} className={cx('category-group')}>
                <div className={cx('category-title')}>
                  {categoryGroup.title}
                </div>
                <ul className={cx('category-list')}>
                  {categoryGroup.items.map((item) => (
                    <li key={item} className={cx('category-item')}>
                      <label>
                        <input
                          type="checkbox"
                          value={item}
                          checked={filters.categories.includes(item)}
                          onChange={handleCategoryChange}
                        />
                        {item}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      >
        <div>
        <div className={cx('filter-input-wrapper')}>
          <input
            className={cx('filter-input')}
            type="text"
            value={displayValue}
            readOnly
            onClick={handleInputClick}
          />
          <FontAwesomeIcon icon={faCaretDown} className={cx('caret-icon')} />
        </div>
          {filters.categories.length > 0 && (
            <button className={cx('clear-filter')} onClick={handleClearFilter}>
              Bỏ Lọc
            </button>
          )}
        </div>
      </TippyHeadless>
      </div>
    </div>
  );
}

export default FilterForm;