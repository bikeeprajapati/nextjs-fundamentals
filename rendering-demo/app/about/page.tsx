export default function AboutPage() {
    console.log("Rendering server component: AboutPage");
    return (
        <div>
            <h1>About Page {new Date().toLocaleDateString()}</h1>
            <p>This is the about page of our Next.js application.</p>
        </div>
    );
}