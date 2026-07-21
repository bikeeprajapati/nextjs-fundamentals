import { notFound , redirect} from "next/navigation";
function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}
export default async  function ProductReview({
    params,
}: {
    params: Promise<{ productid: string; reviewid: string }>;
}) {
    const randomInt = getRandomInt(2);
    if(randomInt === 1){
        throw new Error("Random error occurred");
    }
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