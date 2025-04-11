import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBagShopping,
    faClose,
    faMagnifyingGlass,
    faMoneyCheck,
    faPager,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import CollectionDropdown from './CollectionDropdown';
import PromotionDropdown from './PromotionDropdown';
import ShirtDropdown from './ShirtDropdown';
import MenuDropdown from './MenuDropdown';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import { useAuth } from '~/components/context/AuthContext';
import { useCart } from '~/components/context/CartContext';

const cx = classNames.bind(styles);

function Header() {
    const [isSearchOpen, setIsSeacrhOpen] = useState(false);
    const navigate = useNavigate();
    const { currentUser, logout } = useAuth(); // Thêm logout từ AuthContext
    const { getCartCount } = useCart();

    const goToMyCard = () => {
        navigate('/mycard', { state: { from: 'header' } });
    };

    const goToCart = () => {
        navigate('/cart', { state: { from: 'header' } });
    };

    const toggleSearch = () => {
        setIsSeacrhOpen(!isSearchOpen);
    };

    const closeSearch = () => {
        setIsSeacrhOpen(false);
    };

    const goToBlog = () => {
        navigate('/blog', { state: { from: 'header' } });
    };

    const goToLogin = () => {
        navigate('/login', { state: { from: 'header' } });
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const collectionItems = [
        'Non Branded (Tối giản, Tiệt kiệm)',
        'Seventy Seven (Giá Tốt, Jean 327k)',
        'No Style (Gu năng động Cổ)',
        'Premium (Đẳng Chuẩn, Vải Xịn)',
        'Cool Touch (Vải Mềm - Mịn - Mát)',
        'Wrinkle Free (Vải ít Nhăn)',
        'Jean Mềm (Jean size siêu đỉnh)',
        'The Seafarer (Vibe Thủy Thủ)',
        'Beginner (Thể Thao Giá Tốt)',
        'One Piece | YaMe',
        'Doraemon | YaMe',
        'NARUTO SHIPPUDEN | YaMe',
        'DRAGON BALL | YaMe',
    ];

    const promotionItems = [
        'Thời Trang Giá Hấp Dẫn (Jean 277k)',
        'Phụ Kiện Giá Hấp Dẫn (Túi 37k)',
        'Sale Kết Thúc Vòng Đời',
    ];

    const shirtItems = [
        'Áo Thun Dáng Vừa Tay Ngắn',
        'Áo Thun Dáng Rộng Tay Ngắn',
        'Áo Thun Dáng Vừa Tay Ngắn',
        'Áo Thun Sweater',
        'Áo Thun Dáng Vừa Tay Ngắn',
        'Áo Thun Ba Lỗ (Tank Top)',
        'Áo Thun Tay Dài',
        'Áo Thun Dáng Ôm',
    ];

    const menuCategories = [
        {
            title: 'Áo Polo',
            items: [
                'Áo Polo dáng vừa tay ngắn',
                'Áo Polo dáng rộng tay ngắn',
                'Áo Polo khoác logo, in họa tiết',
                'Áo Polo Sweater',
                'Áo Polo tay dài dáng vừa',
                'Áo Polo tay dài dáng rộng',
            ],
        },
        {
            title: 'Áo Sơ Mi',
            items: [
                'Áo sơ mi cổ bẻ tay dài',
                'Áo sơ mi họa tiết',
                'Áo sơ mi Cuban / Danton',
                'Áo sơ mi cỡ lớn',
                'Áo sơ mi cổ bẻ tay ngắn',
            ],
        },
        {
            title: 'Áo Khoác',
            items: [
                'Áo khoác chống ngắn',
                'Áo khoác Bomber',
                'Áo khoác chống dài',
                'Áo khoác Hoodie (rộng, vừa)',
                'Áo khoác Cardigan (rộng, vừa)',
                'Áo khoác Blazer',
                'Áo khoác Harrington',
            ],
        },
        {
            title: 'Quần Dài',
            items: [
                'Quần Tây',
                'Quần Jogger (rộng, vừa)',
                'Quần Dù (rộng, vừa)',
                'Quần Chinos',
                'Quần vừa',
            ],
        },
        {
            title: 'Quần Short',
            items: ['Quần Short 5 inch', 'Quần Short 7 inch', 'Quần Short 9 inch'],
        },
        {
            title: 'Phụ Kiện Thời Trang',
            items: [
                'Dây Nơ',
                'Dây Thắt Lưng Da',
                'Ví Da',
                'Ví Passport',
                'Nón',
                'Mũ lưỡi trai, bucket, snapback',
                'Giày Đẹp',
            ],
        },
        {
            title: 'Đồ Dùng Cá Nhân',
            items: [
                'Quần Lót',
                'Quần lót dài',
                'Quần lót thể thao',
                'Phụ kiện thể thao, túi gym',
                'Nước Hoa mini',
                'Kẻu trông (dây giày)',
                'Bộ Game (đá chân, bao lì xì)',
                'Khăn tắm',
                'Khăn thể thao',
                'Găng tay chống ngắn, túi gym',
                'Găng dán riêng cho VIP',
            ],
        },
        {
            title: 'Balo - Túi Tinh Nặng',
            items: [
                'Bền - Giá tốt',
                'Chống sốc Laptop',
                'Trung tính - Chống thấm',
                'Nhỏ - Nhẹ',
                'Sức chứa lớn',
                'Dạng cặp Doanh Nhân',
            ],
        },
    ];

    const userMenuItem = [
        {
            title: `${currentUser.name || 'Người dùng'} (-5%)`, // Lấy tên từ currentUser
            isHeader: true,
            path: '/myaccount',
        },
        {
            title: 'Mã thẻ & Xếp hạng VIP',
            path: '/mycard',
        },
        {
            title: 'Đơn hàng của tôi',
            path: '/myorders',
        },
        {
            title: 'Sản phẩm đã xem',
            path: '/myviewed',
        },
        {
            title: 'Sản phẩm Yêu thích/Đã lưu',
            path: '/myfavorites',
        },
        {
            title: 'Quyền lợi V.I.P',
            path: '/vip-benefits',
        },
        {
            title: 'Ví Voucher',
            path: '/myvouchers',
        },
    ];

    return (
        <div>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('logo')}>
                        <img src={images.logo} alt="Yame" />
                    </div>
                    <nav className={cx('site-menu')}>
                        <ul className={cx('site-menu-items')}>
                            <li className={cx('menu-item')}>
                                <CollectionDropdown collectionItems={collectionItems} />
                            </li>
                            <li className={cx('menu-item')}>
                                <PromotionDropdown promotionItems={promotionItems} />
                            </li>
                            <li className={cx('menu-item')}>
                                <a href="/hang-moi-ban">Mới</a>
                            </li>
                            <li className={cx('menu-item')}>
                                <ShirtDropdown shirtItems={shirtItems} />
                            </li>
                            <li className={cx('menu-item')}>
                                <MenuDropdown menuCategories={menuCategories} />
                            </li>
                        </ul>
                    </nav>

                    <div className={cx('action')}>
                        <div className={cx('search')}>
                            <div className={cx('action-btn')} onClick={toggleSearch}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </div>
                            {isSearchOpen && (
                                <div className={cx('search-box')}>
                                    <input
                                        type="text"
                                        placeholder="Nhập sản phẩm cần tìm"
                                        className={cx('search-input')}
                                        onBlur={closeSearch}
                                        autoFocus
                                    />
                                    <button className={cx('search-close')} onClick={closeSearch}>
                                        <FontAwesomeIcon icon={faClose} />
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className={cx('action-btn')} onClick={goToBlog}>
                            <FontAwesomeIcon icon={faPager} />
                        </div>

                        {currentUser.isLoggedIn ? (
                            <>
                                <Tippy
                                    content={
                                        <ul className={cx('dropdown-menu')}>
                                            {userMenuItem.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className={cx('user-dropdown-item', {
                                                        'user-header': item.isHeader,
                                                    })}
                                                >
                                                    {item.path ? (
                                                        <a
                                                            href={item.path}
                                                            onClick={() => navigate(item.path)}
                                                        >
                                                            {item.title}
                                                        </a>
                                                    ) : item.onClick ? (
                                                        <span onClick={item.onClick}>{item.title}</span>
                                                    ) : (
                                                        <span>{item.title}</span>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    }
                                    interactive
                                    delay={[0, 200]}
                                    placement="bottom-end"
                                    zIndex={1000}
                                >
                                    <div className={cx('action-btn')}>
                                        <FontAwesomeIcon icon={faUser} />
                                        <span className={cx('badge')}>-5%</span>
                                    </div>
                                </Tippy>
                                <div className={cx('action')}>
                                    <div className={cx('action-btn')} onClick={goToMyCard}>
                                        <FontAwesomeIcon icon={faMoneyCheck} />
                                    </div>
                                    <div className={cx('action-btn')} onClick={goToCart}>
                                        <FontAwesomeIcon icon={faBagShopping} />
                                        <span className={cx('badge')}>{getCartCount()}</span>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className={cx('action')}>
                                <div className={cx('action-btn')} onClick={goToLogin}>
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <div className={cx('action-btn')} onClick={goToLogin}>
                                    <FontAwesomeIcon icon={faBagShopping} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;