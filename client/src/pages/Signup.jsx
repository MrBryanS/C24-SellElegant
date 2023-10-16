import { useState } from "react";

export default function Signup() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userName, email, password);
  };

  return (
    <>
      <form action="" className="signup" onSubmit={handleSubmit}>
        <h3>Sign up</h3>
        <label htmlFor="">Username:</label>
        <input
          type="username"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
        <label htmlFor="">Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="">Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button className="btn">Sign Up</button>
      </form>
    </>
  );
}
