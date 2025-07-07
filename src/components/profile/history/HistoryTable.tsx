/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import { CreditHistory } from '@data/history';

interface Column {
    key: keyof CreditHistory | 'index' | 'actions';
    label: string;
    render?: (value: any, item: CreditHistory, index: number) => React.ReactNode;
    className?: string;
    sortable?: boolean;
}

interface HistoryTableProps {
    data: CreditHistory[];
    columns: Column[];
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    onPageChange: (page: number) => void;
    loading?: boolean;
    emptyMessage?: string;
    showPagination?: boolean;
    className?: string;
}

export default function HistoryTable({
    data,
    columns,
    currentPage,
    itemsPerPage,
    totalItems,
    onPageChange,
    loading = false,
    emptyMessage = "ไม่พบข้อมูล",
    showPagination = true,
    className = ""
}: HistoryTableProps) {

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const renderCellContent = (column: Column, item: CreditHistory, index: number) => {
        if (column.render) {
            return column.render(item[column.key as keyof CreditHistory], item, index);
        }

        if (column.key === 'index') {
            return indexOfFirstItem + index + 1;
        }

        const value = item[column.key as keyof CreditHistory];

        // Default rendering based on column key
        switch (column.key) {
            case 'channel':
            case 'status':
                return (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {value}
                    </span>
                );
            case 'otp':
                return <span className="font-mono">{value}</span>;
            case 'datetime':
                return (
                    <div>
                        <div>{item.datetime}</div>
                        <div className="text-gray-500 text-xs">{item.time}</div>
                    </div>
                );
            default:
                return value;
        }
    };

    const EmptyState = () => (
        <tr>
            <td colSpan={columns.length} className="px-4 lg:px-6 py-12 text-center text-gray-500">
                <div className="flex flex-col items-center">
                    <svg className="w-12 h-12 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-lg font-medium text-gray-900">{emptyMessage}</p>
                    <p className="text-sm text-gray-500 mt-1">ลองเปลี่ยนเงื่อนไขการค้นหา</p>
                </div>
            </td>
        </tr>
    );

    const LoadingState = () => (
        <>
            {[...Array(itemsPerPage)].map((_, index) => (
                <tr key={`loading-${index}`} className="animate-pulse">
                    {columns.map((column, colIndex) => (
                        <td key={`loading-${index}-${colIndex}`} className="px-4 lg:px-6 py-4">
                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        </td>
                    ))}
                </tr>
            ))}
        </>
    );

    return (
        <div className={`bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-200 ${className}`}>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            {columns.map((column) => (
                                <th
                                    key={String(column.key)}
                                    className={`px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${column.className || ''}`}
                                >
                                    {column.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {loading ? (
                            <LoadingState />
                        ) : data.length > 0 ? (
                            data.map((item, index) => (
                                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                    {columns.map((column) => (
                                        <td
                                            key={`${item.id}-${String(column.key)}`}
                                            className={`px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-900 ${column.className || ''}`}
                                        >
                                            {renderCellContent(column, item, index)}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <EmptyState />
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {showPagination && data.length > 0 && (
                <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                    {/* Mobile Pagination */}
                    <div className="flex-1 flex justify-between sm:hidden">
                        <button
                            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            ก่อนหน้า
                        </button>
                        <button
                            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            ถัดไป
                        </button>
                    </div>

                    {/* Desktop Pagination */}
                    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm text-gray-700">
                                แสดง <span className="font-medium">{indexOfFirstItem + 1}</span> ถึง{' '}
                                <span className="font-medium">{Math.min(indexOfLastItem, totalItems)}</span> จาก{' '}
                                <span className="font-medium">{totalItems}</span> รายการ
                            </p>
                        </div>
                        <div>
                            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                <button
                                    onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                                    disabled={currentPage === 1}
                                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    ก่อนหน้า
                                </button>

                                <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                                    {currentPage} / {totalPages}
                                </span>

                                <button
                                    onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                                    disabled={currentPage === totalPages}
                                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    ถัดไป
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}