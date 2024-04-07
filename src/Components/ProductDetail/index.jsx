import {
  HiOutlineX,
  HiOutlineTag,
  HiOutlineShoppingCart,
  HiOutlineStar,
  HiOutlineCash,
  HiOutlineTruck,
  HiOutlinePhotograph,
  HiOutlineDocumentText,
  HiOutlineBadgeCheck,
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

import { useContext, useState } from "react";
import { AppContext } from "../../Context";

import { BeatLoader } from "react-spinners"; // npm install react-spinners

const ProductDetail = (data) => {
  const context = useContext(AppContext);
  // console.log("context.productToShow: ", context.productToShow);

  const { addProductToCart } = useContext(AppContext);

  // Inside your component
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [isLoading, setIsLoading] = useState(false); // for image loading

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === context.productToShow?.images?.length - 1
        ? 0
        : prevIndex + 1,
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0
        ? context.productToShow?.images?.length - 1
        : prevIndex - 1,
    );
  };
  // tailwind css classes for table:
  const tdElements = "flex justify-start items-center gap-2 py-0.5";

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } fixed right-0 top-20 m-2 h-min w-[360px] flex-col rounded-lg border border-black bg-white p-2 shadow-xl shadow-black sm:h-[90vh] sm:bg-white/70`}
    >
      <div className="flex items-center justify-between p-6">
        <h2 className="font-medium">Product Detail</h2>
        <HiOutlineX onClick={() => context.closeProductDetail()} />
      </div>
      {/* <figure className="flex justify-center items-center px-6">
        <img
          className="w-fit h-60 rounded-lg"
          src={context.productToShow?.images?.[0]}
          alt={context.productToShow?.title}
        />
      </figure> */}
      {/* Image Slices: */}
      <figure className="flex items-center justify-center px-6">
        {isLoading ? (
          <BeatLoader color="#123abc" />
        ) : (
          context.productToShow?.images?.[currentImageIndex] && (
            <img
              className="h-60 w-fit rounded-lg"
              src={context.productToShow?.images[currentImageIndex]}
              alt={context.productToShow?.title}
            />
          )
        )}
      </figure>
      <div className="flex items-center justify-around">
        <button
          onClick={handlePrev}
          className="mt-2 flex w-32 items-center justify-evenly rounded-lg bg-black py-2 font-medium text-white transition duration-300 hover:bg-gray-900/50"
        >
          <HiOutlineArrowNarrowLeft />
          Previous
        </button>
        <button
          onClick={handleNext}
          className="mt-2 flex w-32 items-center justify-evenly rounded-lg bg-black py-2 font-medium text-white transition duration-300 hover:bg-gray-900/50"
        >
          Next
          <HiOutlineArrowNarrowRight />
        </button>
      </div>

      {/* // ... other code */}
      <div className="p-6">
        {/* <HiOutlineBadgeCheck /> */}
        <h3 className="mb-2 border-b text-2xl font-bold">
          {context.productToShow?.title}
        </h3>

        {/* table */}

        <table className="mt-4 w-full table-auto">
          <tbody className="text-gray-700">
            <tr>
              <td className={tdElements}>
                <HiOutlineCash /> Price
              </td>
              <td>${context.productToShow?.price}</td>
            </tr>
            <tr>
              <td className={tdElements}>
                <HiOutlineBadgeCheck /> Brand
              </td>
              <td>{context.productToShow?.brand}</td>
            </tr>
            <tr>
              <td className={tdElements}>
                <HiOutlinePhotograph />
                Category
              </td>
              <td>{context.productToShow?.category}</td>
            </tr>
            <tr>
              <td className={tdElements}>
                <HiOutlineTag /> Discount
              </td>
              <td>{context.productToShow?.discountPercentage} %</td>
            </tr>
            <tr>
              <td className={tdElements}>
                <HiOutlineStar /> Rating
              </td>
              <td>{context.productToShow?.rating}</td>
            </tr>
            <tr>
              <td className={tdElements}>
                <HiOutlineTruck /> Stock
              </td>
              <td>{context.productToShow?.stock} available</td>
            </tr>
            {/* <tr>
              <td className={tdElements}>Thumbnail</td>
              <td>{context.productToShow?.thumbnail}</td>
            </tr> */}
          </tbody>
        </table>
        {/* end table */}
        <div className={tdElements}>
          <HiOutlineDocumentText />
          <p className="mb-1 mt-2">Description</p>
        </div>
        <p className="text-base text-gray-700">
          {context.productToShow?.description}
        </p>
        {/* <button
          className="flex justify-center gap-2 items-center w-full bg-black text-white font-medium py-2 rounded-lg mt-2 hover:bg-gray-900/50 transition duration-300"
          onClick={() => addProductToCart(data.data)}
        >
          <HiOutlineShoppingCart /> Add to Cart
        </button> */}
      </div>
      {/* ... other code */}
    </aside>
  );
};

export default ProductDetail;
