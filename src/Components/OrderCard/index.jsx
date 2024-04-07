import { HiOutlineTrash, HiPlusSm, HiMinusSm } from "react-icons/hi";
import { AppContext } from "../../Context";
import { useContext } from "react";

const OrderCard = (props) => {
  const context = useContext(AppContext);
  const { id, title, imageUrl, price, handleDeleteProduct } = props;
  let renderTrash;
  if (handleDeleteProduct) {
    renderTrash = (
      <HiOutlineTrash
        onClick={() => handleDeleteProduct(id)}
        className="cursor-pointer rounded-full hover:text-gray-500"
      />
    );
  }
  return (
    <div className="trasition my-1 flex items-center justify-between rounded-lg border duration-300 hover:shadow-sm hover:shadow-black">
      <div className="flex items-center gap-2">
        <figure className="m-0.5 h-20 w-20">
          <img
            className="h-full w-full rounded-lg object-cover"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex gap-2"></div> {/* add quantity values here */}
      <p className="flex text-lg font-medium">${String(price).slice(0, 4)}</p>
      <div className="flex h-20 flex-col items-center p-0.5">
        {/* <>
          <HiPlusSm className="bg-white rounded-full w-6 h-6" />
        </>
        <>{context.count || "1"}</>
        <>
          <HiMinusSm className="bg-white rounded-full w-6 h-6" />
        </> */}
        <>{renderTrash}</>
      </div>
    </div>
  );
};

export default OrderCard;
