"use client";

import { useState, useEffect } from "react";
import { IdCard, LoaderCircle } from "lucide-react";
import { getBaseUrl } from "@/lib/getBaseUrl";
import { userStore } from "@/lib/store/user";
import { X } from "lucide-react";

function majorName(str = "") {
    return str.replace(/_/g, " ").replace(/\b\w/g, (chr) => chr.toUpperCase());
}

export default function Searcher() {
    const [data, setData] = useState(null);
    const [filteredData, setFilteredData] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [searchStatus, setSearchStatus] = useState(false);

    const update = userStore((state) => state.updateUser);

    useEffect(() => {
        const baseUrl = getBaseUrl();

        fetch(`${baseUrl}/api/candidates`)
            .then((res) => res.json())
            .then((json) => {
                setData(json);
                setFilteredData(json);
                setSearchStatus(false);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    const handleSearch = () => {
        const term = searchTerm.trim().toLowerCase();

        if (!term) {
            setFilteredData(data);
            setSearchStatus(false);
            return;
        }

        const result = {};
        Object.entries(data).forEach(([sectionKey, items]) => {
            const matches = items.filter((person) => {
                const fullName =
                    `${person.firstName} ${person.lastName}`.toLowerCase();
                return (
                    fullName.includes(term) ||
                    person.interviewRefNo.toString().includes(term)
                );
            });
            if (matches.length) {
                result[sectionKey] = matches;
            }
        });

        if (Object.keys(result).length === 0) {
            setFilteredData({});
            setSearchStatus(true);
        } else {
            setFilteredData(result);
            setSearchStatus(false);
        }
    };

    const clearSearch = () => {
        setSearchTerm("");
        setFilteredData(data);
        setSearchStatus(false);
    };

    if (searchStatus) {
        return (
            <div className="flex w-full flex-col overflow-clip rounded-md">
                <div className="flex w-full flex-row gap-4 bg-zinc-800 p-4">
                    <div className="relative w-full max-w-md">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="h-full w-full rounded-sm border-0 bg-zinc-100 px-3 py-1 pr-8" // note pr-8 for space
                            placeholder="พิมพ์ชื่อหรือ ID ผู้สมัคร"
                        />
                        {searchTerm && (
                            <button
                                onClick={() => clearSearch()}
                                className="absolute top-1/2 right-3 -translate-y-1/2 text-zinc-600 hover:text-zinc-800"
                            >
                                x
                            </button>
                        )}
                    </div>
                    <button
                        onClick={handleSearch}
                        className="custom-bg rounded-md px-3 py-1 text-white hover:brightness-75"
                    >
                        ค้นหา
                    </button>
                </div>

                <div className="scrollbar-hide flex h-[25rem] items-center justify-center overflow-scroll overflow-x-hidden bg-zinc-950 text-center">
                    <p className="text-white">
                        <X color="#f4f4f5" size={12} className="inline" />{" "}
                        ไม่มีผลการค้นหา
                    </p>
                </div>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="flex w-full flex-col overflow-clip rounded-md">
                <div className="flex w-full flex-row gap-4 bg-zinc-800 p-4">
                    <div className="relative w-full max-w-md">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="h-full w-full rounded-sm border-0 bg-zinc-100 px-3 py-1 pr-8" // note pr-8 for space
                            placeholder="พิมพ์ชื่อหรือ ID ผู้สมัคร"
                        />
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm("")}
                                className="absolute top-1/2 right-3 -translate-y-1/2 text-zinc-600 hover:text-zinc-800"
                            >
                                x
                            </button>
                        )}
                    </div>
                    <button
                        onClick={handleSearch}
                        className="custom-bg rounded-md px-3 py-1 text-white hover:brightness-75"
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
                    <div className="relative w-full max-w-md">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="h-full w-full rounded-sm border-0 bg-zinc-100 px-3 py-1 pr-8" // note pr-8 for space
                            placeholder="พิมพ์ชื่อหรือ ID ผู้สมัคร"
                        />
                        {searchTerm && (
                            <button
                                onClick={() => clearSearch()}
                                className="absolute top-1/2 right-3 -translate-y-1/2 text-zinc-600 hover:text-zinc-800"
                            >
                                x
                            </button>
                        )}
                    </div>
                    <button
                        onClick={handleSearch}
                        className="custom-bg rounded-md px-3 py-1 text-white hover:brightness-75"
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
                <div className="relative w-full max-w-md">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="h-full w-full rounded-sm border-0 bg-zinc-100 px-3 py-1 pr-8" // note pr-8 for space
                        placeholder="พิมพ์ชื่อหรือ ID ผู้สมัคร"
                    />
                    {searchTerm && (
                        <button
                            onClick={() => clearSearch()}
                            className="absolute top-1/2 right-3 -translate-y-1/2 text-zinc-600 hover:text-zinc-800"
                        >
                            x
                        </button>
                    )}
                </div>
                <button
                    onClick={handleSearch}
                    className="custom-bg rounded-md px-3 py-1 text-white hover:brightness-75"
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

                                    <button
                                        className="rounded-md bg-zinc-100 px-3 py-1"
                                        onClick={() => {
                                            update({
                                                full_name: `${person.firstName} ${person.lastName}`,
                                                id: person.interviewRefNo,
                                                major: person.major,
                                            });
                                        }}
                                    >
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
