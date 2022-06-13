import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

import { ReverseContext } from "../App";

function UsersList(props) {
  // Collecting context variable
  const reverse = useContext(ReverseContext);
  const linkName = "Go to homepage";
  // retrieving state sent in Link (use location)
  const location = useLocation();
  const { fromLink } = location.state;

  //function for reversing text
  function reverseText(text) {
    try {
      if (reverse === true) {
        return text.split("").reverse().join("");
      } else {
        return text;
      }
    } catch (error) {
        console.log("cant reverse text")
    }
  }

  return (
    <div className="mainUserListDiv">
      <div>
        {/* Reversing Link text  */}
        <Link to={"/"}>
          {reverse === true ? linkName.split("").reverse().join("") : linkName}
        </Link>
      </div>
      {/* link variable from hompage  */}
      <div>{reverseText(fromLink)}</div>
      <div className="userListBox">
        {reverse === true
          ? // Mapping through user list from props
            props.reversedUsers?.map((user) => (
              <li className="userList" key={user.id} value={user.id}>
                {user.id +
                  " | " +
                  user.firstname +
                  " | " +
                  user.lastname +
                  " | " +
                  user.username +
                  " | " +
                  user.age}
              </li>
            ))
          : props.users?.map((user) => (
              <li className="userList" key={user.id} value={user.id}>
                {user.id +
                  " | " +
                  user.firstname +
                  " | " +
                  user.lastname +
                  " | " +
                  user.username +
                  " | " +
                  user.age}
              </li>
            ))}
      </div>
    </div>
  );
}

export default UsersList;
