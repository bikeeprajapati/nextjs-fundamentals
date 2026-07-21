function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}
export default function ProducyDetailsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const random = getRandomInt(2);
    if (random===1) {
        throw new Error("Random error in product details layout");

    }
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Featured Products</h1>
            {children}
        </div>
    );
}