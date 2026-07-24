import { Suspense } from "react";
import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";

export default function ProductReviews() {
    return (
        <div>
            <h1>Product Reviews Page</h1>
            <Suspense fallback={<div>Loading Product...</div>}>
                <Product />
            </Suspense>
            <Suspense fallback={<div>Loading Reviews...</div>}>
                <Reviews />
            </Suspense>

        </div>
    );
}