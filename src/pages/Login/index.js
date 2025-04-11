    // src/pages/auth/Login.js
    import { useState } from 'react';
    import classNames from 'classnames/bind';
    import { Link, useNavigate } from 'react-router-dom';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
    import { useAuth } from '~/components/context/AuthContext';
    import styles from './Login.module.scss';
    import useValidation from './validate';

    const cx = classNames.bind(styles);

    const Login = () => {
        const { login } = useAuth();
        const navigate = useNavigate();
        const [formData, setFormData] = useState({
            email: '',
            password: '',
        });
        const { errors, validateField, validateForm, setErrors } = useValidation();

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value,
            });
            validateField(name, value);
        };

        const handleBlur = (e) => {
            const { name, value } = e.target;
            validateField(name, value);
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            const { isValid, errors: newErrors } = validateForm(formData);
            setErrors(newErrors); 
            if (isValid) {
                login({ email: formData.email });
                console.log('Đăng nhập thành công:', formData);
                navigate('/');
            } else {
                console.log('Form không hợp lệ');
            }

        };

        return (
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('form')}>
                        <form className={cx('form-login')} onSubmit={handleSubmit}>
                            <h2 className={cx('heading')}>ĐĂNG NHẬP</h2>
                            {errors.general && (
                                <div className={cx('general-error')}>
                                    <span>{errors.general}</span>
                                </div>
                            )}
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
                                <label htmlFor="password" className={cx('form-label')}>
                                    <FontAwesomeIcon icon={faLock} className={cx('form-icon')} />
                                    Mật khẩu:
                                </label>
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
                                <span className={cx('form-message')}>{errors.password}</span>
                            </div>
                            <div>
                                <Link to="/forgot-password" className={cx('forgot-password')}>
                                    Quên mật khẩu?
                                </Link>
                            </div>
                            <button className={cx('form-submit')} type="submit">
                                Đăng nhập
                            </button>
                        </form>
                        <div className={cx('form-footer')}>
                            <span className={cx('footer-text')}>Bạn chưa có tài khoản? </span>
                            <Link to="/register" className={cx('footer-link')}>
                                Đăng ký ngay
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default Login;