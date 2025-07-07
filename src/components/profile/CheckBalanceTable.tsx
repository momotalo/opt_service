import React from 'react'
import { FaInfoCircle } from "react-icons/fa"

interface TableRow {
    parameter: string
    detail: string
}

interface CheckBalanceTableProps {
    title?: string
    rows?: TableRow[]
    exampleContent?: React.ReactNode
    footerText?: string
    helpButtonText?: string
    className?: string
}

const CheckBalanceTable: React.FC<CheckBalanceTableProps> = ({
    title = "เช็คยอดเงินคงเหลือ",
    rows = [
        { parameter: "Parameters", detail: "รายละเอียด" },
        { parameter: "HTTP Method", detail: "POST" },
        { parameter: "API URL", detail: "" },
        { parameter: "action", detail: "" }
    ],
    exampleContent = (
        <div className="flex justify-center">
            <div className="bg-gray-300 rounded-lg px-8 py-6 text-center">
                <span className="text-black text-lg font-bold">IMG CODING</span>
            </div>
        </div>
    ),
    footerText = "© 2025 R-OTP",
    helpButtonText = "ขอความช่วยเหลือ",
    className = ""
}) => {
    return (
        <div className={`mt-8 bg-[#0E345B] rounded-lg ${className}`}>
            {/* Table Header */}
            <div className="text-center py-3 bg-[#0E345B] rounded-t-lg">
                <h3 className="text-white text-lg font-medium">{title}</h3>
            </div>

            {/* Table Content */}
            <div className="overflow-hidden">
                <table className="w-full">
                    <tbody>
                        {rows.map((row, index) => (
                            <tr key={index} className="border-b border-white/20">
                                <td className="px-4 py-4 text-white text-sm font-medium bg-[#285788] border-r border-white/20">
                                    {row.parameter}
                                </td>
                                <td className="px-4 py-4 text-white text-sm bg-[#3b6b92]">
                                    {row.detail}
                                </td>
                            </tr>
                        ))}

                        {/* Example Row */}
                        <tr>
                            <td className="px-4 py-6 text-white text-sm font-medium bg-[#285788] border-r border-white/20 align-top">
                                ตัวอย่าง
                            </td>
                            <td className="px-4 py-6 text-white text-sm bg-[#3b6b92]">
                                {exampleContent}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center px-4 py-3 bg-[#0E345B] rounded-b-lg border-t border-white/20">
                <span className="text-white text-sm">{footerText}</span>
                <button className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/30 transition-colors">
                    <FaInfoCircle className="inline-block mr-2" />
                    {helpButtonText}
                </button>
            </div>
        </div>
    )
}

export default CheckBalanceTable