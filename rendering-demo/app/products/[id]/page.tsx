export const dynamicParams = false;
export async  function generateStaticParams() {
    return [
        { id: '1' },
        { id: '2' },
        { id: '3' },
    ];
}
export default  async function ProductPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    console.log("Rendering server component: ProductPage");
    return (
        <div>
            <h1>Product Page</h1>
            <p>Product ID: {id}</p>
        </div>
    );
}