import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReverseContext } from "../App";

function HomePage() {
  // collecting the context variable
  const reverse = useContext(ReverseContext);
  const linkName = "Go to UsersList";

  return (
    <div className="homePage">
      {/* Router link to new endpoint page. And function call */}
      <Link to={"/userslist"} state={{ fromLink: "Hello there!" }}>
        {" "}
        {reverse === true ? linkName.split("").reverse().join("") : linkName}
      </Link>
    </div>
  );
}

export default HomePage;
