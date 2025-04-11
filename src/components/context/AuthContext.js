import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
        //localStorage.clear();
    const [currentUser, setCurrentUser] = useState(() => {
        const savedUser = localStorage.getItem('currentUser');
        return savedUser
            ? JSON.parse(savedUser)
            : {
                  isLoggedIn: false, 
                  name: '', 
                  phone: '', 
                  address: '', 
                  city: '', 
              };
    });

    // Lưu currentUser vào localStorage mỗi khi nó thay đổi
    useEffect(() => {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }, [currentUser]);

    const login = (userData) => {
        setCurrentUser({
            isLoggedIn: true,
            name: userData.name || 'Trương Thị Anh Thư', 
            phone: userData.phone || '0362980918',
            address: userData.address || '130 đường số 8, Linh Xuân, Thủ Đức',
            city: userData.city || 'HCM',
        });
    };

    const logout = () => {
        setCurrentUser({
            isLoggedIn: false,
            name: '',
            phone: '',
            address: '',
            city: '',
        });
        localStorage.removeItem('currentUser');
    };

    const updateUser = (updatedData) => {
        setCurrentUser((prevUser) => ({
            ...prevUser,
            ...updatedData,
        }));
    };

    return (
        <AuthContext.Provider value={{ currentUser, login, logout, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);