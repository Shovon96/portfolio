import React from 'react'

export default function CustomButton({ buttonText, icon: Icon }: { buttonText: string, icon?: any }) {
    return (
        <button className="relative overflow-hidden border-2 border-primary bg-transparent text-[#eb229e] hover:text-white cursor-pointer px-6 py-2 font-semibold transition-colors duration-500 group rounded-md">
            <span className="relative z-10 flex gap-1 items-center">{Icon && <Icon size={20} />} {buttonText}</span>
            <span className="absolute left-0 top-0 h-full w-0 bg-primary transition-all duration-500 group-hover:w-full z-0"></span>
        </button>
    )
}
