import React, { useEffect, useState } from "react";

const AllFriends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();

      console.log(data);
      setFriends(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-4 gap-4 min-h-[40vh] my-5">
      {friends.map((friend, i) => {
        return (
          <div key={i} className=" card bg-base-800  shadow-lg">
            <figure className="px-10 pt-10">
              <img
                src={friend.picture}
                alt={friend.name}
                className="rounded-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{friend.name}</h2>
              <p className="text-gray-400">{friend.days_since_contact}d ago</p>

              <div className="flex gap-4">
                {friend.tags.map((tag, i) => (
                  <p
                    key={i}
                    className="text-[#244D3F] uppercase font-semibold bg-green-100 px-4 py-2 rounded-2xl "
                  >
                    {tag}
                  </p>
                ))}
              </div>

              <div className="card-actions">
                <p
                  className={`px-8 py-2 rounded-full font-semibold text-white bg-[#244D3F] ${friend.status === "overdue" ? "bg-[#EF4444]" : "bg-orange-400"}`}
                >
                  {friend.status}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllFriends;
