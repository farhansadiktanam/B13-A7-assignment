import React, { use } from "react";

const friendsPromise = fetch("/data.json").then((res) => res.json());

const Friends = () => {
  const friends = use(friendsPromise);
  console.log(friends);

  return <div>all friends</div>;
};

export default Friends;
