'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface User {
    name: string;
    credit: number;
    avatar?: string;
    email?: string;
    phone?: string;
}

interface AuthContextType {
    // Auth State
    isLoggedIn: boolean;
    user: User | null;
    isLoading: boolean;

    // Auth Actions
    login: (userData: User) => void;
    logout: () => void;
    updateUser: (userData: Partial<User>) => void;

    // Sidebar State
    sidebarOpen: boolean;
    toggleSidebar: () => void;
    closeSidebar: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const router = useRouter();

    // ตรวจสอบสถานะการเข้าสู่ระบบเมื่อโหลดแอป
    useEffect(() => {
        const checkAuthStatus = () => {
            try {
                const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
                const userData = localStorage.getItem('user');

                if (loggedIn && userData) {
                    const parsedUser = JSON.parse(userData);
                    setIsLoggedIn(true);
                    setUser(parsedUser);
                }
            } catch (error) {
                console.error('Error checking auth status:', error);
                // ถ้ามีข้อผิดพลาด ให้ล้างข้อมูลการเข้าสู่ระบบ
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('user');
            } finally {
                setIsLoading(false);
            }
        };

        checkAuthStatus();
    }, []);

    // ฟังก์ชันเข้าสู่ระบบ
    const login = (userData: User) => {
        setIsLoggedIn(true);
        setUser(userData);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify(userData));
    };

    // ฟังก์ชันออกจากระบบ
    const logout = () => {
        setIsLoggedIn(false);
        setUser(null);
        setSidebarOpen(false);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('user');
        router.push('/');
    };

    // ฟังก์ชันอัพเดทข้อมูลผู้ใช้
    const updateUser = (userData: Partial<User>) => {
        if (user) {
            const updatedUser = { ...user, ...userData };
            setUser(updatedUser);
            localStorage.setItem('user', JSON.stringify(updatedUser));
        }
    };

    // ฟังก์ชันจัดการ Sidebar
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    // Loading Screen
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="text-center">
                    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">กำลังโหลด...</p>
                </div>
            </div>
        );
    }

    return (
        <AuthContext.Provider value={{
            // Auth State
            isLoggedIn,
            user,
            isLoading,

            // Auth Actions
            login,
            logout,
            updateUser,

            // Sidebar State
            sidebarOpen,
            toggleSidebar,
            closeSidebar
        }}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom Hook สำหรับใช้ Auth Context
export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

// Hook สำหรับการ protect routes
export function useRequireAuth() {
    const { isLoggedIn, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !isLoggedIn) {
            router.push('/login');
        }
    }, [isLoggedIn, isLoading, router]);

    return { isLoggedIn, isLoading };
}