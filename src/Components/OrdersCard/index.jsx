import {
  HiOutlineShoppingCart,
  HiChevronRight,
  HiOutlineCalendar,
} from "react-icons/hi";
import { BsCurrencyDollar } from "react-icons/bs";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const singularOrPlural = totalProducts === 1 ? "product" : "products";

  return (
    <div className="border-box shadow-box m-3 flex w-80 items-center justify-evenly rounded-xl border border-black  bg-white p-3 shadow-md shadow-black/50 transition duration-300 hover:border-none hover:shadow-black sm:w-96">
      <div className="flex flex-col gap-3">
        <HiOutlineCalendar className="mr-2" />
        <HiOutlineShoppingCart className="mr-2" />
      </div>
      <div className="flex flex-col gap-1">
        <p>{currentDate}</p>
        <p className="flex items-center justify-end gap-1">
          <span className="text-black">{totalProducts}</span>
          <span className="text-gray-500/80 "> {singularOrPlural}</span>
        </p>
      </div>
      <div className="flex w-fit items-center p-2">
        <BsCurrencyDollar className="h-6 w-6 text-slate-900" />
        <p className="text-2xl font-medium">
          {String(totalPrice).slice(0, 4)}
          {Number.isInteger(totalPrice) && (
            <span className="text-sm text-gray-500/80">.00</span>
          )}
        </p>
      </div>
      <HiChevronRight className="h-8 w-8" />
    </div>
  );
};

export default OrdersCard;
