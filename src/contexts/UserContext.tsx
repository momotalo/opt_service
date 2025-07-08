// contexts/UserContext.tsx
'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, UserContextType } from 'types/user';

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // โหลดข้อมูล user จาก localStorage เมื่อ component mount
    useEffect(() => {
        const loadUserData = () => {
            try {
                const savedUser = localStorage.getItem('user');
                const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

                if (savedUser && isLoggedIn) {
                    const userData = JSON.parse(savedUser);
                    setUser(userData);
                }
            } catch (error) {
                console.error('Error loading user data:', error);
                // ลบข้อมูลที่เสียหายออก
                localStorage.removeItem('user');
                localStorage.removeItem('isLoggedIn');
            } finally {
                setIsLoading(false);
            }
        };

        loadUserData();
    }, []);

    // ฟังก์ชัน login
    const login = (userData: User) => {
        const userWithDefaults = {
            ...userData,
            isLoggedIn: true,
            credit: userData.credit || 0,
            role: userData.role || 'member',
        };

        setUser(userWithDefaults);
        localStorage.setItem('user', JSON.stringify(userWithDefaults));
        localStorage.setItem('isLoggedIn', 'true');
    };

    // ฟังก์ชัน logout
    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('isLoggedIn');
    };

    // ฟังก์ชัน update ข้อมูล user
    const updateUser = (userData: Partial<User>) => {
        if (!user) return;

        const updatedUser = { ...user, ...userData };
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
    };

    // ฟังก์ชัน update เครดิต
    const updateCredit = (amount: number) => {
        if (!user) return;

        const updatedUser = { ...user, credit: amount };
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
    };

    const value: UserContextType = {
        user,
        isLoading,
        login,
        logout,
        updateUser,
        updateCredit,
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook สำหรับใช้ UserContext
export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

// Hook สำหรับตรวจสอบสถานะการ login
export const useAuth = () => {
    const { user, isLoading, login, logout } = useUser();

    return {
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        logout,
    };
};