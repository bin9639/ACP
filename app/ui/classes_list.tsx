"use client"
import React, { useEffect, useRef, useState } from "react";

export default function Classes_list() {
    const [Open, setOpen] = useState(false);
    const cities = [
        { name: 'Basic A', code: 'A', href: 'https://forms.gle/FiV98FoNHXNK6fCV7' },
        { name: 'Basic B', code: 'B', href: 'https://forms.gle/a94qAQFnXH8Cp7DN7' },
        { name: 'Advanced A', code: 'C', href: 'https://forms.gle/F1EecVqP328ALMPv6' },
        { name: 'Advanced B', code: 'D', href: 'https://forms.gle/DQnreTsCfzqWejiM8' }
    ];

    const menuRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node) && titleRef.current && !titleRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
    
        if (typeof window !== 'undefined') {
            window.addEventListener('click', handleClickOutside);
        }
    
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('click', handleClickOutside);
            }
        };
    }, []);

    return (
        <div className=" ml-32 text-black-600 hover:text-gray-900 text-2xl ">
            <div className="flex items-center" onClick={() => setOpen(!Open)}>
                <a ref={titleRef}>
                    Các khóa học
                </a>
                <img src="/arrow-down.png" alt="arrow-down" className="w-4 h-4 rounded-full ml-2" />
            </div>
            {Open && <div ref={menuRef} className="bg-white p-4 w-60 shadow-lg absolute">
                <ul>
                {cities.map((city) => (
                    <li key={city.code} className="p-2 hover:bg-blue-100">
                        <a href={city.href} onClick={() => setOpen(false)}>
                            {city.name}
                        </a>
                    </li>
                ))}
                </ul>
            </div>}
        </div>
    )
}
        