import { Metadata } from "next";
export const metadata: Metadata = {
    title: {
        absolute: "Blog",
    }
};
export default async function Blog() {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay of 2 seconds
    return (
        <main>
            <h1>Blog</h1>
            <p>This is the blog page.</p>
        </main>
    );
}