import Link from "next/link";

export default function F1Page() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">F1 Page</h1>
            <div className="mt-4">
                <Link href="/f1/f2" className="text-blue-600 hover:underline">
                    Go to F2
                </Link>
                <Link href="/f3" className="text-blue-600 hover:underline">
                    Go to F3
                </Link>
            </div>
        </div>
    );
}
