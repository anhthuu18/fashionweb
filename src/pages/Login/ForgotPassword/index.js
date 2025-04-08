import classNames from 'classnames/bind';
import styles from './ForgotPassword.module.scss';
import { useAuth } from '~/components/context/AuthContext';
import { useState } from 'react';
import useValidation from '../validate';

const cx = classNames.bind(styles);

function ForgotPassword() {
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
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
        } else {
            console.log('Form không hợp lệ');
        }

    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('form')}>
                    <form className={cx('form-forgot-password')} onSubmit={handleSubmit}>
                        <h2 className={cx('heading')}>QUÊN MẬT KHẨU</h2>
                        <div className={cx('form-group')}>
                            <label for="email" className={cx('form-label')}>
                                Email:</label>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Nhập địa chỉ email"
                                className={cx('form-control')}
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            <span className={cx('form-message')}>{errors.email}</span>
                        </div>
                        <button className={cx('form-submit')}>Gửi đường link xác nhận</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;