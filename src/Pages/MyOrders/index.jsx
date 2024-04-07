import { useContext } from "react";
import Layout from "../../Components/Layout";
import { AppContext } from "../../Context";
import OrdersCard from "../../Components/OrdersCard";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const context = useContext(AppContext);

  return (
    <Layout>
      <div className="relative mb-4 flex items-center justify-center">
        <h1 className="text-md font-medium sm:text-xl">My Orders</h1>
      </div>

      {context.order.map((order, index) => (
        <Link to={`/my-orders/${index}`} key={index}>
          <OrdersCard
            totalProducts={order.totalProducts}
            totalPrice={order.totalPrice}
          />
        </Link>
      ))}
    </Layout>
  );
};

export default MyOrders;
