'use client';

import Link from 'next/link';
import React, { useState } from 'react';

// ประเภทข้อมูลสำหรับประวัติเครดิต
interface CreditHistory {
    id: number;
    referenceId: string;
    channel: string;
    type: string;
    status: string;
    otp: string;
    datetime: string;
    time: string;
}

interface HistoryMenuItems {
    id: string;
    label: string;
    href: string;
}

// ข้อมูลตัวอย่าง (ในการใช้งานจริงจะมาจาก API)
const mockData: CreditHistory[] = [
    {
        id: 1,
        referenceId: "0943070607",
        channel: "LINE",
        type: "เติมเซิฟ OTP",
        status: "สำเร็จ",
        otp: "157492",
        datetime: "2020-06-06",
        time: "08:25"
    },
    {
        id: 2,
        referenceId: "0943070607",
        channel: "LINE",
        type: "เติมเซิฟ",
        status: "สำเร็จ",
        otp: "157492",
        datetime: "2020-06-06",
        time: "08:25"
    },
    {
        id: 3,
        referenceId: "0943070607",
        channel: "LINE",
        type: "เติมเซิฟ",
        status: "สำเร็จ",
        otp: "157492",
        datetime: "2020-06-06",
        time: "08:25"
    },
    {
        id: 4,
        referenceId: "0943070607",
        channel: "LINE",
        type: "เติมเซิฟ",
        status: "สำเร็จ",
        otp: "157492",
        datetime: "2020-06-06",
        time: "08:25"
    },
    {
        id: 5,
        referenceId: "0943070607",
        channel: "LINE",
        type: "เติมเซิฟ",
        status: "สำเร็จ",
        otp: "157492",
        datetime: "2020-06-06",
        time: "08:25"
    }
];

export default function HistoryCreditPage() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    const menuItems: HistoryMenuItems[] = [
        { id: 'credit', label: 'เติมเครดิต', href: '/profile/history/credit' },
        { id: 'account', label: 'แอคเคาท์', href: '/profile/history/account' },
        { id: 'game', label: 'เติมเกมส์', href: '/profile/history/game' },
        { id: 'social', label: 'เติมโซเชียล', href: '/profile/history/social' },
        { id: 'otp', label: 'OTP', href: '/profile/history/otp' },
    ];

    // ฟังก์ชันสำหรับการค้นหา
    const handleSearch = () => {
        // ในการใช้งานจริงจะเรียก API เพื่อดึงข้อมูล
        console.log('Search with:', { startDate, endDate, searchTerm });
    };

    // // ฟังก์ชันสำหรับรีเซ็ตฟอร์ม
    // const handleReset = () => {
    //     setStartDate('');
    //     setEndDate('');
    //     setSearchTerm('');
    // };

    // คำนวณข้อมูลที่จะแสดงในหน้าปัจจุบัน
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = mockData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(mockData.length / itemsPerPage);

    // ฟังก์ชันสำหรับเปลี่ยนหน้า
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="p-4 lg:p-6">

            {/* Filter Section */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 mb-6">
                <h3 className="text-white text-lg font-semibold mb-4">ประวัติทั้งหมด</h3>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {menuItems.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className={`bg-white/10 text-white/80 px-4 py-2 rounded-lg text-sm hover:bg-white/20 transition-colors ${item.id === 'account' ? 'bg-white/50' : ''}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Date Range and Search */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                            placeholder="วว/ดด/ปปปป"
                        />
                    </div>
                    <div>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                            placeholder="วว/ดด/ปปปป"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                            placeholder="ค้นหา..."
                        />
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={handleSearch}
                            className="flex-1 bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                        >
                            ค้นหา
                        </button>
                        {/* <button
                            onClick={handleReset}
                            className="px-4 py-2 rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors"
                        >
                            รีเซ็ต
                        </button> */}
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-200">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    ลำดับ
                                </th>
                                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    เลขอ้างอิง
                                </th>
                                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    ช่องทาง
                                </th>
                                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    สถานะ
                                </th>
                                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    OTP
                                </th>
                                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    เวลา
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {currentItems.map((item, index) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {indexOfFirstItem + index + 1}
                                    </td>
                                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {item.referenceId}
                                    </td>
                                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            {item.channel}
                                        </span>
                                    </td>
                                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {item.otp}
                                    </td>
                                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        <div>
                                            <div>{item.datetime}</div>
                                            <div className="text-gray-500">{item.time}</div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                    <div className="flex-1 flex justify-between sm:hidden">
                        <button
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            ก่อนหน้า
                        </button>
                        <button
                            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            ถัดไป
                        </button>
                    </div>
                    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm text-gray-700">
                                แสดง <span className="font-medium">{indexOfFirstItem + 1}</span> ถึง{' '}
                                <span className="font-medium">{Math.min(indexOfLastItem, mockData.length)}</span> จาก{' '}
                                <span className="font-medium">{mockData.length}</span> รายการ
                            </p>
                        </div>
                        <div>
                            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                <button
                                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                                    disabled={currentPage === 1}
                                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    ก่อนหน้า
                                </button>

                                <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                                    {currentPage} / {totalPages}
                                </span>

                                <button
                                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                                    disabled={currentPage === totalPages}
                                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    ถัดไป
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
