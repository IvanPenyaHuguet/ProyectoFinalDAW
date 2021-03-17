import React from "react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <h1>Index</h1>
      <Link to="/user/signup">
        <button variant="outlined">Sign up</button>
      </Link>
    </>
  );
}
