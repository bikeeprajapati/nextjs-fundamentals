"use client";

import { useState } from "react";

export const NavSearch = () => {
    console.log("NavSearch component rendered");
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div>
            <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search"
            />
        </div>
    );
};