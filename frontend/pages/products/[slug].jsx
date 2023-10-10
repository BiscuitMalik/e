import ProductDetailPage from "Components/Products/ProductDetailPage";
import { useRouter } from "next/router";


const ProductDetail = () => {
    const router = useRouter()
    const {id}= router.query
    return (
        <ProductDetailPage productID={id} />
    );
}

export default ProductDetail;