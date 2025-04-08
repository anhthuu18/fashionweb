import { useState } from 'react';

// Định nghĩa các RegExp và hằng số
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PHONE_REGEX = /^[0-9]{10,11}$/;
const PASSWORD_MIN_LENGTH = 6;
const NAME_MIN_LENGTH = 2;
const ADDRESS_MIN_LENGTH = 6;

// Hàm validation cho từng trường
const validateEmail = (value) => {
    if (!value) {
        return 'Vui lòng nhập email';
    } else if (!EMAIL_REGEX.test(value)) {
        return 'Email không hợp lệ';
    }
    return '';
};

const validatePassword = (value) => {
    if (!value) {
        return 'Vui lòng nhập mật khẩu';
    } else if (value.length < PASSWORD_MIN_LENGTH) {
        return `Mật khẩu phải có ít nhất ${PASSWORD_MIN_LENGTH} ký tự`;
    }
    return '';
};

const validateRePassword = (value, password) => {
    if (!value) {
        return 'Vui lòng nhập lại mật khẩu';
    } else if (value !== password) {
        return 'Mật khẩu không khớp';
    }
    return '';
};

const validateName = (value) => {
    if (!value) {
        return 'Vui lòng nhập họ và tên';
    } else if (value.length < NAME_MIN_LENGTH) {
        return `Họ và tên phải có ít nhất ${NAME_MIN_LENGTH} ký tự`;
    }
    return '';
};

const validatePhone = (value) => {
    if (!value) {
        return 'Vui lòng nhập số điện thoại';
    } else if (!PHONE_REGEX.test(value)) {
        return 'Số điện thoại không hợp lệ (phải có 10 số)';
    }
    return '';
};

const validateAddress = (value) => {
    if (!value) {
        return 'Vui lòng nhập địa chỉ';
    } else if (value.length < ADDRESS_MIN_LENGTH) {
        return `Địa chỉ phải có ít nhất ${ADDRESS_MIN_LENGTH} ký tự`;
    }
    return '';
};

// Custom Hook Validation
const useValidation = () => {
    const [errors, setErrors] = useState({});

    // Hàm validateField để kiểm tra một trường cụ thể
    const validateField = (name, value, formData = {}) => {
        let errorMessage = '';
        switch (name) {
            case 'email':
                errorMessage = validateEmail(value);
                break;
            case 'password':
                errorMessage = validatePassword(value);
                break;
            case 'repassword':
                errorMessage = validateRePassword(value, formData.password || '');
                break;
            case 'username':
                errorMessage = validateName(value);
                break;
            case 'phone':
                errorMessage = validatePhone(value);
                break;
            case 'address':
                errorMessage = validateAddress(value);
                break;
            default:
                break;
        }
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errorMessage,
        }));
        return errorMessage;
    };

    // Hàm validateForm để kiểm tra toàn bộ form
    const validateForm = (formData) => {
        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (key === 're-password') {
                newErrors[key] = validateRePassword(formData[key], formData.password);
            } else {
                newErrors[key] = validateField(key, formData[key], formData);
            }
        });
        return {
            isValid: !Object.values(newErrors).some((error) => error !== ''),
            errors: newErrors,
        };
    };

    return {
        errors,
        validateField,
        validateForm,
        setErrors,
    };
};

export default useValidation;