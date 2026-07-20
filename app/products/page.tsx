import Link from "next/link";

export default function ProductList() {
    const productId = 100;
    return <>
        <h1>Product List</h1>
        <h2>
            <Link href={`/products/${productId}`}>  Product{productId} </Link>
        </h2>
        <p>This is the first product.</p>
        <h2>
            <Link href={`/products/${productId}`}>  Product {productId} </Link>
        </h2>
        <p>This is the second product.</p>
    </>
}