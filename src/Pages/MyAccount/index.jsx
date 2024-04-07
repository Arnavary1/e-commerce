import Layout from "../../Components/Layout";
import { useAuth } from "../../Context/auth";

const MyAccount = () => {
  const auth = useAuth();
  return (
    <Layout>
      <div className="relative mb-4 flex flex-col items-center justify-center gap-7">
        <h1 className="text-md font-medium sm:text-xl">My Account</h1>
        <p className="text-2xl font-semibold">Welcome, {auth.user.username}</p>

        {/* {console.log("username: ", auth.user.username)}
        {console.log("password: ", auth.user.password)} */}
      </div>
    </Layout>
  );
};

export default MyAccount;

// *******************************************************************************

// import React, { useState } from "react";
// import Layout from "../../Components/Layout";
// import { useAuth } from "../../Context/auth";

// const MyAccount = () => {
//   const auth = useAuth();
//   const [newPassword, setNewPassword] = useState("");
//   const [placeholder, setPlaceholder] = useState("New password");

//   const handleChangePassword = (e) => {
//     e.preventDefault();
//     auth.changePassword(newPassword);
//     alert("Password changed successfully");
//     setNewPassword("");
//   };

//   return (
//     <Layout>
//       <div className="flex flex-col gap-7 items-center justify-center relative mb-4">
//         <h1 className="font-medium text-md sm:text-xl">My Account</h1>
//         <p className="font-semibold text-2xl">Welcome, {auth.user.username}</p>

//         <h2 className="font-sm text-md sm:text-lg mt-32">
//           Need to change Password?
//         </h2>

//         <form
//           onSubmit={handleChangePassword}
//           className="flex flex-col justify-center items-center gap-5"
//         >
//           <input
//             type="password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             onMouseEnter={() =>
//               setPlaceholder(`Current: ${auth.user.password}`)
//             }
//             onMouseLeave={() => setPlaceholder("New password")}
//             placeholder={placeholder}
//             className="border border-gray-300 rounded-md px-2 py-1 min-w-max w-48 sm:w-72"
//           />
//           <button
//             type="submit"
//             className="w-48 bg-black text-white font-medium py-2 rounded-lg mt-2 hover:bg-gray-900/50 transition duration-300"
//           >
//             Reset Password
//           </button>
//         </form>
//       </div>
//     </Layout>
//   );
// };

// export default MyAccount;
