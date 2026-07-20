import { notFound , redirect} from "next/navigation";
export default async  function ProductReview({
    params,
}: {
    params: Promise<{ productid: string; reviewid: string }>;
}) {
    const { productid, reviewid } = await params;
    if (parseInt(reviewid) > 100) {
        //notFound();
        redirect("/products");
    }
    return (
        <>
            <h1>Product Review</h1>
            <p>Product ID: {productid}</p>
            <p>Review ID: {reviewid}</p>
        </>
    );
}