import React from 'react'

interface PageHeaderProps {
    title: string
    breadcrumb?: string
    className?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    breadcrumb = title,
    className = ""
}) => {
    return (
        <div className="flex flex-col lg:flex-row mb-0">
            {/* Left Spacer - hidden on mobile/tablet */}
            <div className="hidden lg:block lg:w-[220px] xl:w-[260px]"></div>

            {/* Header Content */}
            <div className={`flex-1 py-3 sm:py-4 px-4 sm:px-8 text-center rounded-t-2xl bg-[#FFF]/60 backdrop-blur-sm ${className}`}>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#000] mb-2 sm:mb-4">
                    {title}
                </h1>
                <p className="text-sm sm:text-base text-[#000]">
                    หน้าหลัก / <span className='text-[#737373]'>{breadcrumb}</span>
                </p>
            </div>
        </div>
    )
}

export default PageHeader