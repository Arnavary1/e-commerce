import { useContext } from "react";
import { AppContext } from "../../Context";
import { HiCheck } from "react-icons/hi";
import { TbShoppingCartPlus } from "react-icons/tb";

const Card = (data) => {
  const context = useContext(AppContext);
  const { addProductToCart } = useContext(AppContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
    context.closeCheckoutSideMenu();
  };

  // const addProductToCart = (event, productData) => {
  //   event.stopPropagation(); // Para que no se abra el modal de detalle de producto

  //   context.setCount(context.count + 1);
  //   context.setCartProducts([...context.cartProducts, productData]);
  //   // console.log(context.cartProducts);
  //   context.openCheckoutSideMenu();
  //   context.closeProductDetail();
  // };

  // Check if the product is in the cart:

  const renderIcon = (id) => {
    if (data && data.data && data.data.id) {
      const productIsInCart =
        context.cartProducts.filter((product) => product.id === id).length > 0;

      if (productIsInCart) {
        return (
          <div className="absolute top-0 right-0 flex justify-center items-center bg-black text-white rounded-full border-none m-2 p-1">
            <HiCheck className="w-4 h-4" />
          </div>
        );
      } else {
        return (
          <div className="absolute top-0 right-0 flex justify-center items-center bg-white/50 hover:bg-white transition duration-300 rounded-full border-none m-2 p-1">
            <TbShoppingCartPlus
              onClick={(event) => {
                event.stopPropagation();
                addProductToCart(data.data);
              }}
              className="w-4 h-4"
            />
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div
      className="bg-white border shadow-lg cursor-pointer w-56 h-60 rounded-lg  hover:scale-105 transition duration-300"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 bg-white/60 rounded-lg text-black text-xs m-2 py-0.5 px-2">
          {data.data.category}
        </span>
        <img
          className="rounded-lg w-full h-full object-scale-down"
          src={data.data.images[0]}
          alt={data.data.title}
        />
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-around">
        <span className="text-sm font-light">
          {data.data.title.split(" ").slice(0, 3).join(" ")}
        </span>
        <span className="text-lg font-medium">${data.data.price}</span>
      </p>
    </div>
  );
};

export default Card;
