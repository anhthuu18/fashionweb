import classNames from "classnames/bind";
import styles from './Footer.module.scss';
import images from "~/assets/images";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faLocationDot, faMapLocationDot, faShirt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const cx = classNames.bind(styles);

function Footer() {
    const [isMoreInfoOpen, setIsMoreInfoOpen] = useState(false);
    const [isStoreListOpen, setIsStoreListOpen] = useState(false);

    const handleToogleMoreInfoOpen = () => {
        setIsMoreInfoOpen(!isMoreInfoOpen);
    }

    const handleToogleStoreListOpen = () => {
        setIsStoreListOpen(!isStoreListOpen);
    }

    const storesLoaction = [
        {
            title: "Tp. HỒ CHÍ MINH",
            items: [
                "YaMe Q.10: 770F, Sư Vạn Hạnh(nd)",
                "YaMe Q.5: 190, Nguyễn Trãi",
                "YaMe Q.6: 102 Hậu Giang",
                "YaMe Q.7: 323 Huỳnh Tấn Phát",
                "YaMe Q.9: 114 Đỗ Xuân Hợp",
                "YaMe Q.9: 200 Lê Văn Việt",
                "YaMe Q.12: 290 Phạm Văn Hớn",
                "YaMe Q.BT: 138 Lê Văn Duyệt",
                "YaMe Tân Phú 2: 189 Hòa Bình",
                "YaMe Q.Bình Tân: 232 Lê Văn Quới",
                "YaMe Gò Vấp: 417, Quang Trung",
                "YaMe Gò Vấp 2: 1096 Quang Trung",
            ],
        },
        {
            title: "TÂY NAM BỘ",
            items: [
                "YaMe Cần Thơ: 45 đ. 3 Tháng 2",
                "YaMe Cần Thơ: 381B Nguyễn Văn Cừ",
                "YaMe Tôn An: 492 Hùng Vương",
                "YaMe Mỹ Tho: 326 đường Ấp Bắc",
                "YaMe Cái Bè: 455 ĐT875",
                "YaMe Bến Tre: 209 Đông Khởi Tp.BT",
                "YaMe Sa Đéc: 289 Nguyễn Sinh Sắc",
                "YaMe Cao Lãnh: 66A Tôn Đức Thắng",
                "YaMe Vĩnh Long: 27A Phạm Thái Bường",
                "YaMe Trà Vinh: 09 Nguyễn Đông",
                "YaMe Long Xuyên: 47 Tôn Đức Thắng",
            ],
        },
        {
            title: "ĐÔNG NAM BỘ & TÂY NGUYÊN",
            items: [
                "YaMe Tp.Thủ Dầu Một: 187, Yersin",
                "YaMe Tp. Dĩ An: 82A Nguyễn An Ninh",
                "YaMe Tp.Thuận An: 132 Ngô Quyền",
                "YaMe Biên Hòa: 30, Dương Tử Giang",
                "YaMe Biên Hòa 2: 84 Bùi Văn Hòa",
                "YaMe Vĩnh Cửu: 1030 ĐT768 Đông Nai",
                "YaMe Vũng Tàu: 528 Trương Công Định",
                "YaMe Tây Ninh: 586 Cách Mạng Tháng 8",
                "YaMe Đống Xoài: 766 Phú Riềng Đỏ",
                "YaMe Long Khánh: 10 Ng. Thị Minh Khai",
                "YaMe Buôn Ma Thuột: 64 Phan Chu Trinh",
            ],
        },
    ]

    return (
        <div>
            <footer className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('footer-top')}>
                        <div className={cx('logo')}>
                            <img src={images.logo} alt="Yame" />
                        </div>
                        <p>Đặt hàng và thu tiền tận nơi toàn quốc</p>
                        <h5>Liên hệ: 0382 604 104</h5>
                        <div className={cx('footer-links')}>
                            <Link to="/promotions" className={cx('footer-link')}>
                                CHƯƠNG TRÌNH KHUYẾN MÃI
                            </Link>
                            <Link to="/about" className={cx('footer-link')}>
                                GIỚI THIỆU VỀ YAME
                            </Link>
                            <Link to="/bo-suu-tap" className={cx('footer-link')}>
                                GIỚI THIỆU VỀ CÁC BỘ SƯU TẬP
                            </Link>

                            <div className={cx('footer-link')} onClick={handleToogleMoreInfoOpen}>
                                Xem thêm Thông tin Yame
                                <FontAwesomeIcon icon={faChevronDown} className={cx('dropdown-icon')} />
                            </div>
                            {isMoreInfoOpen && (<div className={cx('more-info-links')}>
                                <br />
                                <Link to="/tuyen-dung">
                                    Tuyển dụng
                                </Link>
                                <p>.</p>
                                <Link to="/quy-che">
                                    Quy chế hoạt động
                                </Link>
                                <Link to="/dieu-khoan">
                                    Điều khoản mua bán
                                </Link>
                                <br />
                                <p>Đặt hàng và thu tiền tận nơi toàn quốc</p>
                                <h5>0382 604 104</h5>
                                <br />
                                <h5>CSKH</h5>
                                <Link to="/thanphien">
                                    Than phiền/ Chăm sóc khách hàng
                                </Link>
                                <br />
                                <h5>FAQ</h5>
                                <Link to="/van-chuyen">
                                    Vận chuyển
                                </Link>
                                <Link to="/chinh-sach-doi-tra">
                                    Chính sách đổi trả
                                </Link>
                                <Link to="/chinh-sach-bao-hanh">
                                    Chính sách bảo hành
                                </Link>
                                <Link to="/thanh-vien-vip">
                                    Khách hàng VIP
                                </Link>
                                <Link to="/doi-tac-cung-cap">
                                    Đối tác cung cấp
                                </Link>
                                <br />
                            </div>
                            )}

                            <div className={cx('footer-link')} onClick={handleToogleStoreListOpen}>
                                Danh sách CH Yame trên toàn quốc
                                <FontAwesomeIcon icon={faChevronDown} className={cx('dropdown-icon')} />
                            </div>
                            {isStoreListOpen &&
                                <div className={cx('store-list-links')}>
                                    <div className={cx('store-columns')}>
                                    {storesLoaction.map((region, index) => (
                                        <div key={index} className={cx('store-column')}>
                                            <h4 className={cx('store-subheader')}>
                                                <FontAwesomeIcon icon={faMapLocationDot} className={cx('region-icon')}/>
                                                {region.title}
                                            </h4>
                                            {region.items.map((store, idx) => (
                                                <div key={idx} className={cx('store-subbody')}>
                                                    <FontAwesomeIcon icon={faShirt} className={cx('store-icon')}/>
                                                    {store}
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                    </div>
                                </div>
                            }

                            <Link to="/tim-cua-hang" className={cx('footer-link')}>
                                <FontAwesomeIcon icon={faLocationDot} className={cx('location-icon')} />
                                Tìm cửa hàng gần bạn
                            </Link>
                        </div>
                    </div>
                    <hr/>
                    <div className={cx('footer-bottom')}>
                        <div className={cx('footer-about')}>
                            <p className={cx('footer-about-header')}>© 2025 - CÔNG TY TNHH YAME VN</p>
                            <p>Giấy CNĐKDN: 0310874914 – Ngày cấp: 25/11/2011 - Cơ quan cấp: Phòng Đăng Ký Kinh Doanh – Sở Kế Hoạch và Đầu Tư TP.HCM</p>
                            <p>Địa chỉ đăng ký kinh doanh: 766/3B-3C Sư Vạn Hạnh (Nối dài), Phường 12, Quận 10, TP.HCM - Điện thoại: (028) 3868 4857 - Mua hàng: (028) 7307 1441 - Email: cskh@yame.vn</p>
                        </div>
                        <div className={cx('footer-bottom-logo')}>
                            <img src="https://res.yame.vn/dathongbao.png" alt="Đã thông báo" />
                        </div>
                    </div>
                </div>
            </footer >
        </div >
    );
}

export default Footer;