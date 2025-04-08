import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

// Auth Provider để cung cấp trạng thái đăng nhập
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(true);

    const login = () => {
        setCurrentUser(true); // Chuyển trạng thái thành đã đăng nhập
    };

    return (
        <AuthContext.Provider value={{ currentUser, login}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);