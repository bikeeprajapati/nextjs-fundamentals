import Link from "next/link";

export default function Home() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <h1 className="text-3xl font-bold underline">
                    Welcome Home!
                </h1>

                <Link
                    href="/about"
                    className="mt-4 text-blue-600 hover:underline"
                >
                    About
                </Link>
                <Link
                    href="/blog"
                    className="mt-4 text-blue-600 hover:underline"
                >
                    Blog
                </Link>
            </main>
        </>
    );
}