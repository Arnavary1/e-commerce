import Layout from "../../Components/Layout";
import { useAuth } from "../../Context/auth";

const Logout = () => {
  const auth = useAuth();
  // const handleLogout = (e) => {
  //   e.preventDefault();
  //   auth.logout();
  //   console.log("You have been logged out.");
  // };
  return (
    <Layout>
      <div className="relative mb-4 flex items-center justify-center">
        <h1 className="text-md font-medium sm:text-xl">Sign Out</h1>
      </div>
      {/* <form
        onSubmit={handleLogout}
        className="flex flex-col justify-center items-center w-screen h-screen gap-5"
      >
        <button
          type="submit"
          className="w-48 bg-black text-white font-medium py-2 rounded-lg mt-2 hover:bg-gray-900/50 transition duration-300"
        >
          Sign Out
        </button>
      </form> */}
    </Layout>
  );
};

export default Logout;
