import React from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = UserContext(UserContext);
  if(!user) return <h1>Not Logged In</h1>
  return (
    <div>
      Profile:{}
      <h1>More component</h1>
    </div>
  );
};

export default Profile;
