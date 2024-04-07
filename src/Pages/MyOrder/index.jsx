import { useContext } from "react";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";
import { AppContext } from "../../Context";
import { HiChevronLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const MyOrder = () => {
  const context = useContext(AppContext);

  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);

  if (index === "last") {
    index = context.order?.length - 1;
  }
  return (
    <Layout>
      <div className="relative mb-4 flex w-80 items-center justify-center">
        <Link
          to="/my-orders"
          className="absolute left-0 rounded-full bg-slate-200/60 p-0.5 transition duration-300 hover:bg-slate-300/80"
        >
          <HiChevronLeft className="h-6 w-6 cursor-pointer" />
        </Link>
        <h1 className="text-md font-medium sm:text-xl">My Order</h1>
      </div>
      <div className="flex w-80 flex-col">
        {context.order?.[index]?.products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            /* limmit the title to 10 characters, and limit the number of words to 2: */
            title={product.title
              .split(" ")
              .slice(0, 2)
              .map((word) => word.substring(0, 10))
              .join(" ")}
            imageUrl={product.images[0]}
            price={product.price}
            quantity={product.quantity}
          />
        ))}
      </div>
    </Layout>
  );
};

export default MyOrder;
