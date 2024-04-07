import React, { useState } from "react";
import Layout from "../../Components/Layout";
import { useAuth } from "../../Context/auth";

function SignIn() {
  const auth = useAuth(); // console.log("auth: ", auth);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log("username: ", username);
    // console.log("password: ", password);
    auth.login(username, password);
    //    onLogin(username, password); this is from copilot-signin. and onlogin needs to be passed in as a prop. at the beginning of... function SignIn({ onLogin }) {
  };

  return (
    <Layout>
      <div className="relative mb-4 flex items-center justify-center">
        <h1 className="text-md font-medium sm:text-xl">Sign In</h1>
      </div>
      <form
        onSubmit={handleLogin}
        className="flex h-screen w-screen flex-col items-center justify-center gap-5"
      >
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="rounded-md border border-gray-300 px-2 py-1"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="rounded-md border border-gray-300 px-2 py-1"
        />
        <button
          type="submit"
          className="mt-2 w-48 rounded-lg bg-black py-2 font-medium text-white transition duration-300 hover:bg-gray-900/50"
        >
          Sign In
        </button>
      </form>
    </Layout>
  );
}

export default SignIn;
