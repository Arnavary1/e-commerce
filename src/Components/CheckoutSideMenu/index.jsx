import { useContext } from "react";
import { HiOutlineX } from "react-icons/hi";
import { AppContext } from "../../Context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../Utils/index.js";
import { Link } from "react-router-dom";

const CheckoutSideMenu = () => {
  const context = useContext(AppContext);

  const handleDeleteProduct = (id) => {
    const newCartProducts = context.cartProducts.filter(
      (product) => product.id !== id,
    );
    context.setCartProducts(newCartProducts);
    context.setCount(context.cart - 1);
    // Close the sidebar if the cart is empty
    if (newCartProducts.length === 0) {
      context.closeCheckoutSideMenu();
    }
  };
  const handleCheckout = () => {
    if (context.cartProducts.length === 0) {
      return; // Do nothing if the cart is empty
    }
    // Create a new order:
    const orderToAdd = {
      date: "2021-10-10",
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.closeCheckoutSideMenu(); // Close the sidebar
    context.setCount(0); // Reset the cart to 0
    context.setSearchByTitle(null); // Reset the search
    context.setSearchByCategory(null); // Reset the search
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } fixed right-0 top-20 m-2 h-min w-[360px] flex-col rounded-lg border border-black bg-white p-2 shadow-xl shadow-black sm:h-[90vh] sm:bg-white/90`}
    >
      <div className="flex items-center justify-between p-6">
        <h2 className="font-medium">My Order</h2>
        <div>
          <HiOutlineX
            className="cursor-pointer rounded-full transition duration-300 hover:bg-gray-200"
            onClick={() => context.closeCheckoutSideMenu()}
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-scroll px-6">
        {/* product && product.id && product.title && product.images && product.price && product.quantity checks if product and all the properties you're trying to access on product are defined. If any of them is undefined, it will not try to render the OrderCard component and avoid the error */}
        {context.cartProducts.map((product) =>
          product &&
          product.id &&
          product.title &&
          product.images &&
          product.price ? (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title.split(" ").slice(0, 3).join(" ")}
              imageUrl={product.images[0]}
              price={product.price}
              // quantity={product.quantity}
              handleDeleteProduct={handleDeleteProduct}
            />
          ) : null,
        )}
      </div>
      <div className="p-6">
        <p className="flex items-center justify-around">
          <span className="font-light">Total</span>
          <span className="font-medium">
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
        <Link to="/my-orders/last">
          <button
            className="mt-2 w-full rounded-lg bg-black py-2 font-medium text-white transition duration-300 hover:bg-gray-900/50"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
