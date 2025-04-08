import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '~/components/context/AuthContext';
import ToastMessage from '~/components/ToastMessage';
import styles from './Register.module.scss';
import useValidation from '../validate';

const cx = classNames.bind(styles);

const Register = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        address: '',
        password: '',
        rePassword: '',
    });
    const [toasts, setToasts] = useState([]);
    const [toastCounter, setToastCounter] = useState(0); // Thêm toastCounter
    const { errors, validateField, validateForm, setErrors } = useValidation();

    // Hàm thêm toast mới với logic giới hạn số lượng
    const addToast = (title, message, type, duration = 3000) => {
        const newToast = {
            id: `${Date.now()}-${toastCounter}`, // Tạo ID duy nhất
            title,
            message,
            type,
            duration,
        };

        setToastCounter((prev) => prev + 1);

        setToasts((prevToasts) => {
            let updatedToasts = [...prevToasts];
            if (updatedToasts.length >= 3) {
                updatedToasts = updatedToasts.slice(1);
            }
            updatedToasts.push(newToast);
            console.log('Updated toasts:', updatedToasts);
            return updatedToasts;
        });
    };

    // Hàm đóng toast
    const handleCloseToast = (id) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        validateField(name, value, formData);
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        validateField(name, value, formData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { isValid, errors: newErrors } = validateForm(formData);
        setErrors(newErrors);

        if (isValid) {
            try {
                //login({ email: formData.email });
                addToast('Thành công', 'Đăng ký thành công và đang chuyển hướng tới trang đăng nhập!', 'success', 3000);
                setTimeout(() => {
                    navigate('/login');
                }, 5000);
            } catch (err) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    general: 'Đã có lỗi xảy ra, vui lòng thử lại',
                }));
                addToast('Thất bại', 'Đăng ký thất bại!', 'error', 3000);
            } finally {
            }
        } else {
            addToast('Cảnh báo', 'Vui lòng nhập đầy đủ lại thông tin!', 'warning', 3000);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('form')}>
                    <form className={cx('form-register')} onSubmit={handleSubmit}>
                        <h2 className={cx('heading')}>ĐĂNG KÝ TÀI KHOẢN</h2>
                        {errors.general && (
                            <div className={cx('general-error')}>
                                <span>{errors.general}</span>
                            </div>
                        )}
                        <div className={cx('form-group')}>
                            <label htmlFor="username" className={cx('form-label')}>
                                <FontAwesomeIcon icon={faUser} className={cx('form-icon')} />
                                Họ và Tên:
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                placeholder="Họ và tên"
                                className={cx('form-control')}
                                value={formData.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <span className={cx('form-message')}>{errors.username}</span>
                        </div>
                        <div className={cx('form-group')}>
                            <label htmlFor="email" className={cx('form-label')}>
                                <FontAwesomeIcon icon={faEnvelope} className={cx('form-icon')} />
                                Email:
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Nhập địa chỉ email"
                                className={cx('form-control')}
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <span className={cx('form-message')}>{errors.email}</span>
                        </div>
                        <div className={cx('form-group')}>
                            <label htmlFor="phone" className={cx('form-label')}>
                                <FontAwesomeIcon icon={faPhone} className={cx('form-icon')} />
                                Số điện thoại:
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="text"
                                placeholder="Nhập số điện thoại"
                                className={cx('form-control')}
                                value={formData.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <span className={cx('form-message')}>{errors.phone}</span>
                        </div>
                        <div className={cx('form-group')}>
                            <label htmlFor="address" className={cx('form-label')}>
                                <FontAwesomeIcon icon={faLocationDot} className={cx('form-icon')} />
                                Địa chỉ:
                            </label>
                            <input
                                id="address"
                                name="address"
                                type="text"
                                placeholder="Nhập địa chỉ"
                                className={cx('form-control')}
                                value={formData.address}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <span className={cx('form-message')}>{errors.address}</span>
                        </div>
                        <div className={cx('form-group')}>
                            <label htmlFor="password" className={cx('form-label')}>
                                <FontAwesomeIcon icon={faLock} className={cx('form-icon')} />
                                Mật khẩu:
                            </label>
                            <div className={cx('password-wrapper')}>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Nhập mật khẩu"
                                    className={cx('form-control')}
                                    value={formData.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            <span className={cx('form-message')}>{errors.password}</span>
                        </div>
                        <div className={cx('form-group')}>
                            <label htmlFor="re-password" className={cx('form-label')}>
                                <FontAwesomeIcon icon={faLock} className={cx('form-icon')} />
                                Nhập lại mật khẩu:
                            </label>
                            <div className={cx('password-wrapper')}>
                                <input
                                    id="re-password"
                                    name="rePassword"
                                    type="password"
                                    placeholder="Nhập lại mật khẩu"
                                    className={cx('form-control')}
                                    value={formData.rePassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            <span className={cx('form-message')}>{errors.rePassword}</span>
                        </div>
                        <button className={cx('form-submit')} type="submit">
                            Đăng ký
                        </button>
                    </form>
                    <div className={cx('form-footer')}>
                        <span className={cx('footer-text')}>Bạn đã có tài khoản? </span>
                        <Link to="/login" className={cx('footer-link')}>
                            Đăng nhập ngay
                        </Link>
                    </div>
                </div>
            </div>
            <ToastMessage toasts={toasts} onClose={handleCloseToast} />
        </div>
    );
};

export default Register;