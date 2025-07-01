'use client';

import React, { ReactNode } from 'react';
import { useAuth } from '@hooks/useAuth';
import Navbar from '@components/layouts/Navbar';
import Sidebar from '@components/layouts/Sidebar';
import Footer from '@components/layouts/Footer';

interface AppLayoutProps {
    children: ReactNode;
    showFooter?: boolean;
    className?: string;
}

export default function AppLayout({
    children,
    showFooter = true,
    className = ''
}: AppLayoutProps) {
    const {
        isLoggedIn,
        user,
        sidebarOpen,
        toggleSidebar,
        closeSidebar,
        logout
    } = useAuth();

    return (
        <div className={`relative min-h-screen ${className}`}>
            {/* Navbar */}
            <Navbar
                isLoggedIn={isLoggedIn}
                user={user || undefined}
                onToggleSidebar={toggleSidebar}
            />

            {/* Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-[#fff]/20 bg-opacity-70 backdrop-blur-sm z-40"
                    onClick={closeSidebar}
                />
            )}

            {/* Sidebar */}
            <div className={`fixed top-0 right-0 h-full z-50 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <Sidebar
                    className="h-full"
                    user={user || undefined}
                    onLogout={logout}
                    onCloseSidebar={closeSidebar}
                />
            </div>

            {/* Main Content */}
            <main>
                {children}
            </main>

            {/* Footer */}
            {showFooter && <Footer />}
        </div>
    );
}