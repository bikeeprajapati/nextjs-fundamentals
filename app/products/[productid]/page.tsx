import {Metadata} from 'next';
type Props = {
    params: Promise<{ productid: string }>;
};
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const { productid } = await params;
    const title = await  new Promise ((resolve) => {
        setTimeout(() => {
            resolve(`Product ${productid}`);
        }, 1000);
    });
    return {
        title: `Product ${productid}`,
        description: `Details for product ${productid}`,
    };
}
export default async function ProductDetails({params} : Props)  {
    const { productid } = await params;
    return <h1>Details for Product ID: {productid}</h1>;
    
    }

