export default async function ProductDetails({
    params,
}: {
    params: Promise<{ productid: string }>;
}) {
    const productid = (await params).productid;
    return <h1>Product Details for Product ID: {productid}</h1>;
}


