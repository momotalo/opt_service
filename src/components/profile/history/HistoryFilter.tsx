'use client';

import Link from 'next/link';
import React from 'react';
// import { HistoryMenuItems } from '@types/history';
import { HistoryMenuItems } from '@data/history';

interface HistoryFilterProps {
    // Filter State
    startDate: string;
    endDate: string;
    searchTerm: string;

    // Filter Actions
    onStartDateChange: (date: string) => void;
    onEndDateChange: (date: string) => void;
    onSearchTermChange: (term: string) => void;
    onSearch: () => void;
    onReset?: () => void;

    // Menu Configuration
    menuItems: HistoryMenuItems[];
    activeTab: string;

    // Customization
    title?: string;
    showReset?: boolean;
    searchPlaceholder?: string;
    className?: string;
}

export default function HistoryFilter({
    startDate,
    endDate,
    searchTerm,
    onStartDateChange,
    onEndDateChange,
    onSearchTermChange,
    onSearch,
    onReset,
    menuItems,
    activeTab,
    title = "ประวัติทั้งหมด",
    showReset = false,
    searchPlaceholder = "ค้นหา...",
    className = ""
}: HistoryFilterProps) {

    const handleReset = () => {
        onStartDateChange('');
        onEndDateChange('');
        onSearchTermChange('');
        onReset?.();
    };

    return (
        <div className={`rounded-xl p-6 mb-6 ${className}`}>
            <h3 className="text-white text-2xl font-semibold mb-4">{title}</h3>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-4">
                {menuItems.map((item) => (
                    <Link
                        key={item.id}
                        href={item.href}
                        className={`px-4 py-2 rounded-lg text-sm transition-colors ${item.id === activeTab
                            ? 'bg-[#0E345B] text-white'
                            : 'bg-white/10 text-white/80 hover:bg-white/20'
                            }`}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>

            {/* Date Range and Search */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Start Date */}
                <div>
                    <label className="block text-white/80 text-xs mb-1">วันที่เริ่มต้น</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => onStartDateChange(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                </div>

                {/* End Date */}
                <div>
                    <label className="block text-white/80 text-xs mb-1">วันที่สิ้นสุด</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => onEndDateChange(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                </div>

                {/* Search Term */}
                <div>
                    <label className="block text-white/80 text-xs mb-1">ค้นหา</label>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => onSearchTermChange(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && onSearch()}
                        className="w-full px-3 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                        placeholder={searchPlaceholder}
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col justify-end">
                    <div className="flex gap-2">
                        <button
                            onClick={onSearch}
                            className="flex-1 bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30"
                        >
                            ค้นหา
                        </button>
                        {showReset && (
                            <button
                                onClick={handleReset}
                                className="px-4 py-2 rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30"
                                title="รีเซ็ตการค้นหา"
                            >
                                รีเซ็ต
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Active Filters Display */}
            {(startDate || endDate || searchTerm) && (
                <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-white/80 text-sm">กำลังกรอง:</span>
                        {startDate && (
                            <span className="bg-white/20 text-white px-2 py-1 rounded text-xs">
                                เริ่ม: {startDate}
                            </span>
                        )}
                        {endDate && (
                            <span className="bg-white/20 text-white px-2 py-1 rounded text-xs">
                                สิ้นสุด: {endDate}
                            </span>
                        )}
                        {searchTerm && (
                            <span className="bg-white/20 text-white px-2 py-1 rounded text-xs">
                                ค้นหา: {searchTerm}
                            </span>
                        )}
                        <button
                            onClick={handleReset}
                            className="text-white/80 hover:text-white text-xs underline ml-2"
                        >
                            ล้างทั้งหมด
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}