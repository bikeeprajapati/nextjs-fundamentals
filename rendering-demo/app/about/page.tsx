import  { cookies } from "next/headers";
export default async function AboutPage() {
    const cookieStore =  await cookies();
    const theme = cookieStore.get("theme")?.value;
    console.log("Theme cookie value:", theme);
    console.log("Rendering server component: AboutPage");
    return (
        <div>
            <h1>About Page {new Date().toLocaleDateString()}</h1>
            <p>This is the about page of our Next.js application.</p>
        </div>
    );
}