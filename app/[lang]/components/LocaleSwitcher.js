"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "@/i18n-config";

const LocaleSwitcher = () => {
    const pathName = usePathname();
    const redirectedPathName = (locale) => {
        if (!pathName) return "/";
        const segments = pathName.split("/");

        segments[1] = locale;
        return segments.join("/");
    };

    return (
        <div className="max-w-7xl mx-auto flex items-center justify-between py-5 ">
            <p className="text-4xl">Locale switcher:</p>
            <ul className="flex justify-end items-center gap-10">
                {i18n.locales.map((locale) => {
                    console.log(redirectedPathName(locale));
                    return (
                        <li key={locale}>
                            <Link
                                href={redirectedPathName(locale)}
                                className="text-xl font-semibold"
                            >
                                {locale}
                            </Link>
                        </li>
                    );
                })}
                <li>
                    <Link href="/" className="text-xl font-semibold">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="text-xl font-semibold">
                        About
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default LocaleSwitcher;
