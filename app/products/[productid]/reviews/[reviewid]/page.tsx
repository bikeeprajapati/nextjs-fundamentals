import { notFound } from "next/navigation";
export default async  function ProductReview({
    params,
}: {
    params: Promise<{ productid: string; reviewid: string }>;
}) {
    const { productid, reviewid } = await params;
    if (parseInt(reviewid) > 100) {
        notFound();
    }
    return (
        <>
            <h1>Product Review</h1>
            <p>Product ID: {productid}</p>
            <p>Review ID: {reviewid}</p>
        </>
    );
}