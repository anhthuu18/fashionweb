// ToastMessage.js
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames/bind';
import styles from './ToastMessage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

// Component con để hiển thị một Toast
const ToastItem = ({ id, title, message, type, duration = 3000, onClose }) => {
    const safeDuration = typeof duration === 'number' && duration > 0 ? duration : 3000;

    useEffect(() => {
        //console.log(`Rendering ToastItem with ID: ${id}, Title: ${title}, Type: ${type}, Duration: ${safeDuration}`);
        const timer = setTimeout(() => {
            console.log(`Auto-closing Toast with ID: ${id}`);
            onClose(id);
        }, safeDuration);

        return () => clearTimeout(timer);
    }, [id, safeDuration, onClose]);

    return (
        <div
            className={cx('toast', `toast--${type}`)}
            style={{ '--duration': `${safeDuration - 1000}ms` }}
        >
            <div className={cx('toast__body')}>
                <h3 className={cx('toast__title')}>{title}</h3>
                <p className={cx('toast__msg')}>{message}</p>
            </div>
            <button
                className={cx('toast__close')}
                onClick={() => {
                    console.log(`Manually closing Toast with ID: ${id}`);
                    onClose(id);
                }}
            >
                <FontAwesomeIcon icon={faTimes} />
            </button>
        </div>
    );
};

// Component chính quản lý danh sách Toast
const ToastMessage = ({ toasts = [], onClose }) => {
    console.log('ToastMessage received toasts:', toasts);

    if (!toasts.length) {
        console.log('No toasts to render, returning null');
        return null;
    }

    return createPortal(
        <div
            id="toast"
            style={{
                position: 'fixed',
                top: '77px',
                right: '4px',
                zIndex: 99999,
            }}
        >
            {toasts.map((toast) => (
                <ToastItem
                    key={toast.id}
                    id={toast.id}
                    title={toast.title}
                    message={toast.message}
                    type={toast.type}
                    duration={toast.duration}
                    onClose={onClose}
                />
            ))}
        </div>,
        document.body
    );
};

export default ToastMessage;