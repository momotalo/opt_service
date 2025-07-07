'use client';

import React, { useState } from 'react';
import { mockCreditHistory, menuItems } from '@data/history';
import HistoryFilter from '@components/profile/history/HistoryFilter';
import HistoryTable from '@components/profile/history/HistoryTable';

export default function HistoryAccountPage() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [loading, setLoading] = useState(false);

    // ฟังก์ชันสำหรับการค้นหา
    const handleSearch = () => {
        setLoading(true);
        // รีเซ็ตหน้าเมื่อค้นหาใหม่
        setCurrentPage(1);
        // ในการใช้งานจริงจะเรียก API เพื่อดึงข้อมูล
        console.log('Search with:', { startDate, endDate, searchTerm });

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
        }, 500);
    };

    // ฟังก์ชันสำหรับรีเซ็ตฟอร์ม
    const handleReset = () => {
        setCurrentPage(1);
        console.log('Reset filters');
    };

    // กรองข้อมูลตามเงื่อนไข (ในการใช้งานจริงจะทำใน API)
    const filteredData = mockCreditHistory.filter(item => {
        const matchesSearch = !searchTerm ||
            item.referenceId.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.channel.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.otp.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesDateRange = (!startDate || item.datetime >= startDate) &&
            (!endDate || item.datetime <= endDate);

        return matchesSearch && matchesDateRange;
    });

    // คำนวณข้อมูลที่จะแสดงในหน้าปัจจุบัน
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    // ฟังก์ชันสำหรับเปลี่ยนหน้า
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    // กำหนด columns สำหรับ table
    const columns = [
        {
            key: 'index' as const,
            label: 'ลำดับ',
            className: 'w-16'
        },
        {
            key: 'referenceId' as const,
            label: 'เลขอ้างอิง',
            className: 'font-medium'
        },
        {
            key: 'channel' as const,
            label: 'ช่องทาง'
        },
        {
            key: 'type' as const,
            label: 'ประเภท'
        },
        {
            key: 'status' as const,
            label: 'สถานะ'
        },
        {
            key: 'otp' as const,
            label: 'OTP'
        },
        {
            key: 'datetime' as const,
            label: 'เวลา'
        }
    ];

    return (
        <div className="p-4 lg:p-6">
            {/* Filter Section */}
            <HistoryFilter
                startDate={startDate}
                endDate={endDate}
                searchTerm={searchTerm}
                onStartDateChange={setStartDate}
                onEndDateChange={setEndDate}
                onSearchTermChange={setSearchTerm}
                onSearch={handleSearch}
                onReset={handleReset}
                menuItems={menuItems}
                activeTab="social"
                title="ประวัติการเติมโซเชียล"
                showReset={true}
                searchPlaceholder="ค้นหาเลขอ้างอิง, ช่องทาง, สถานะ..."
            />

            {/* Results Summary  */} {/* แสดงผลลัพธ์การ sorting ข้อมูล */}
            {(startDate || endDate || searchTerm) && (
                <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-800">
                        พบ <span className="font-medium">{filteredData.length}</span> รายการ
                        {filteredData.length !== mockCreditHistory.length && (
                            <span> จากทั้งหมด {mockCreditHistory.length} รายการ</span>
                        )}
                    </p>
                </div>
            )}

            {/* Table Section */}
            <HistoryTable
                data={currentItems}
                columns={columns}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalItems={filteredData.length}
                onPageChange={handlePageChange}
                loading={loading}
                emptyMessage={
                    (startDate || endDate || searchTerm)
                        ? "ไม่พบข้อมูลที่ตรงกับเงื่อนไขการค้นหา"
                        : "ไม่มีประวัติการใช้งาน"
                }
                showPagination={true}
            />
        </div>
    );
}