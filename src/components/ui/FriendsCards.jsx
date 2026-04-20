import React from "react";

const FriendsCards = ({ friend }) => {
  return (
    <div className=" card bg-base-800  shadow-lg">
      <figure className="px-10 pt-10">
        <img src={friend.picture} alt={friend.name} className="rounded-full" />
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

        <div className="card-actions ">
          <p
            className={`px-8 py-2 rounded-full font-semibold text-white  ${friend.status === "overdue" ? "bg-[#EF4444]" : "bg-[#244D3F]"} `}
          >
            {friend.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FriendsCards;
