export default function ProducyDetailsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Featured Products</h1>
            {children}
        </div>
    );
}