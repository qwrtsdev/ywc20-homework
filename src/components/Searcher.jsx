"use client";

import { useState, useEffect } from "react";
import { IdCard, LoaderCircle } from "lucide-react";
import { getBaseUrl } from "@/lib/getBaseUrl";

function majorName(str = "") {
    return str.replace(/_/g, " ").replace(/\b\w/g, (chr) => chr.toUpperCase());
}

export default function Searcher() {
    const [data, setData] = useState(null);
    const [filteredData, setFilteredData] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            const baseUrl = getBaseUrl();
            fetch(`${baseUrl}/api/candidates`)
                .then((res) => res.json())
                .then((json) => {
                    setData(json);
                    setFilteredData(json);
                })
                .catch((err) => console.error(err))
                .finally(() => setLoading(false));
        } catch (error) {
            console.error(error);
        }
    }, []);

    const handleSearch = () => {
        if (!searchTerm.trim()) {
            setFilteredData(data);
        } else {
            const lower = searchTerm.toLowerCase();
            const result = {};

            Object.entries(data).forEach(([sectionKey, items]) => {
                const filteredItems = items.filter((person) => {
                    const fullName =
                        `${person.firstName} ${person.lastName}`.toLowerCase();
                    return (
                        fullName.includes(lower) ||
                        person.interviewRefNo.toString().includes(lower)
                    );
                });
                if (filteredItems.length) {
                    result[sectionKey] = filteredItems;
                }
            });

            setFilteredData(result);
        }
    };

    if (loading) {
        return (
            <div className="flex w-full flex-col overflow-clip rounded-md">
                <div className="flex w-full flex-row gap-4 bg-zinc-800 p-4">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="h-full w-full rounded-sm border-0 bg-zinc-100 px-3 py-1"
                        placeholder="พิมพ์ชื่อหรือ ID ผู้สมัคร"
                    />
                    <button
                        onClick={handleSearch}
                        className="custom-bg rounded-md px-3 py-1 text-white"
                    >
                        ค้นหา
                    </button>
                </div>
                <div className="scrollbar-hide flex h-[25rem] items-center justify-center overflow-scroll overflow-x-hidden bg-zinc-950 text-center">
                    <p className="text-white">
                        <LoaderCircle
                            color="#f4f4f5"
                            size={12}
                            className="inline animate-spin"
                        />{" "}
                        กำลังโหลด..
                    </p>
                </div>
            </div>
        );
    }

    if (!filteredData) {
        return (
            <div className="flex w-full flex-col overflow-clip rounded-md">
                <div className="flex w-full flex-row gap-4 bg-zinc-800 p-4">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="h-full w-full rounded-sm border-0 bg-zinc-100 px-3 py-1"
                        placeholder="พิมพ์ชื่อหรือ ID ผู้สมัคร"
                    />
                    <button
                        onClick={handleSearch}
                        className="custom-bg rounded-md px-3 py-1 text-white"
                    >
                        ค้นหา
                    </button>
                </div>
                <div className="scrollbar-hide flex h-[25rem] items-center justify-center overflow-scroll overflow-x-hidden bg-zinc-950 text-center">
                    <p className="text-white">
                        <LoaderCircle
                            color="#f4f4f5"
                            size={12}
                            className="inline animate-spin"
                        />{" "}
                        กำลังโหลด..
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex w-full flex-col overflow-clip rounded-md">
            <div className="flex w-full flex-row gap-4 bg-zinc-800 p-4">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="h-full w-full rounded-sm border-0 bg-zinc-100 px-3 py-1"
                    placeholder="พิมพ์ชื่อหรือ ID ผู้สมัคร"
                />
                <button
                    onClick={handleSearch}
                    className="custom-bg rounded-md px-3 py-1 text-white"
                >
                    ค้นหา
                </button>
            </div>

            <div className="scrollbar max-h-[25rem] overflow-scroll overflow-x-hidden">
                {filteredData &&
                    Object.entries(filteredData).map(([sectionKey, items]) => (
                        <div key={sectionKey}>
                            {items.map((person, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-row justify-between border-b border-zinc-900 bg-zinc-950 p-4 text-white first:border-t last:border-0 hover:bg-[#111115]"
                                >
                                    <span>
                                        <p className="overflow-hidden font-bold text-ellipsis">
                                            {person.firstName} {person.lastName}
                                        </p>
                                        <p className="overflow-hidden text-xs text-ellipsis">
                                            {person.interviewRefNo} &#x2022;{" "}
                                            {majorName(person.major)}
                                        </p>
                                    </span>

                                    <button className="rounded-md bg-zinc-100 px-3 py-1">
                                        <IdCard color="#09090b" size={22} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    ))}
            </div>
        </div>
    );
}
