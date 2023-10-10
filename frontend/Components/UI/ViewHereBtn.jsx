import { useRouter } from "next/router";
import product from "store/modules/product";
const BuyNow = (props) => {
  const router = useRouter();

  const viewPageHandler = () => {
    router.push({
      pathname: "products/view",
      query: {
        name: props.name,
        image: props.image,
        price: props.price,
      },
    });
  };

  return (
    <a
      className="shadow-lg hover:shadow-2xl text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:ring-blue-400 font-large rounded-lg font-black text-md px-4 py-3 text-center float-right"
      onClick={viewPageHandler}
    >
      View here
    </a>
  );
};

export default BuyNow;
