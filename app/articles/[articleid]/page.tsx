"use client";

import Link from "next/link";
import { use } from "react";

export default function NewsArticlePage({
    params,
    searchParams,
}: {
    params: Promise<{ articleid: string; lang: string }>;
    searchParams: Promise<{ lang?: "en" | "fr" }>;
}) {
    const { articleid, lang } = use(params);
    const { lang: language = "en" } = use(searchParams);

    return (
        <div>
            <h1>News Article {articleid}</h1>

            <p>Route Language: {lang}</p>
            <p>Reading in language: {language}</p>

            <div className="space-x-4">
                <Link href={`/${lang}/articles/${articleid}?lang=en`}>
                    Read in English
                </Link>

                <Link href={`/${lang}/articles/${articleid}?lang=fr`}>
                    Read in French
                </Link>
            </div>
        </div>
    );
}