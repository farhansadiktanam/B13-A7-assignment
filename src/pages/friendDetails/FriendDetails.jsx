import React from "react";
import useFriends from "../../hook/useFriends";
import { useParams } from "react-router";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { FiArchive } from "react-icons/fi";
import { AiTwotoneDelete } from "react-icons/ai";
import { HashLoader } from "react-spinners";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineSms } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";

const FriendDetails = () => {
  const { friends, loading } = useFriends();
  const { id } = useParams();

  const expectedFriend = friends.find((friend) => friend.id === parseInt(id));

  if (loading) {
    return (
      <div className="flex items-center justify-center my-15">
        <HashLoader color="#9C27B0" />
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-10 items-start p-6 max-w-6xl mx-auto">
      {/* Left Column: Profile Card */}
      <div className="card bg-white shadow-xl border border-gray-100 min-w-[350px] sticky top-10">
        <figure className="px-10 pt-10">
          <img
            src={expectedFriend.picture}
            alt={expectedFriend.name}
            className="rounded-full w-32 h-32 object-cover ring-4 ring-gray-50"
          />
        </figure>

        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold text-gray-800">
            {expectedFriend.name}
          </h2>

          <span
            className={`px-4 py-1 rounded-full text-xs uppercase tracking-widest font-bold text-white mb-2 ${
              expectedFriend.status === "overdue"
                ? "bg-red-500"
                : "bg-emerald-600"
            }`}
          >
            {expectedFriend.status}
          </span>

          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {expectedFriend.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[10px] text-[#244D3F] uppercase font-bold bg-green-50 px-3 py-1 rounded-lg border border-green-100"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            {expectedFriend.bio}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col w-full gap-2">
            <button className="btn btn-outline border-gray-300 text-gray-700 hover:bg-gray-50 flex gap-2">
              <HiOutlineBellSnooze className="text-lg" /> Snooze 2 Weeks
            </button>
            <button className="btn bg-[#244D3F] hover:bg-[#1a3a2f] text-white border-none flex gap-2">
              <FiArchive className="text-lg" /> Archive Connection
            </button>
            <button className="btn btn-ghost text-red-500 hover:bg-red-50 flex gap-2">
              <AiTwotoneDelete className="text-lg" /> Delete
            </button>
          </div>
        </div>
      </div>

      {/* Right Column: Details & Stats */}
      <div className="flex-1 w-full space-y-8">
        {/* Stats Overview */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center text-center gap-4">
          <div className="flex-1">
            <p className="text-[#244D3F] font-black text-4xl">
              {expectedFriend.days_since_contact}
            </p>
            <p className="text-xs text-gray-400 uppercase tracking-tighter mt-1">
              Days Since Contact
            </p>
          </div>
          <div className="h-12 w-px bg-gray-100"></div>
          <div className="flex-1">
            <p className="text-[#244D3F] font-black text-4xl">
              {expectedFriend.goal}
            </p>
            <p className="text-xs text-gray-400 uppercase tracking-tighter mt-1">
              Goal (Days)
            </p>
          </div>
          <div className="h-12 w-1px bg-gray-100"></div>
          <div className="flex-1">
            <p className="text-[#244D3F] font-bold text-xl">
              {expectedFriend.next_due_date}
            </p>
            <p className="text-xs text-gray-400 uppercase tracking-tighter mt-1">
              Next Due
            </p>
          </div>
        </div>

        {/* Goals Section */}
        <div className="bg-gray-50 p-6 rounded-2xl flex justify-between items-center border border-gray-200/50">
          <div>
            <h3 className="font-bold text-gray-800">Relationship Goal</h3>
            <p className="text-sm text-gray-600">
              Connect every{" "}
              <span className="font-bold text-[#244D3F]">
                {expectedFriend.goal} days
              </span>{" "}
              to stay close.
            </p>
          </div>
          <button className="btn btn-sm bg-white border-gray-300 text-gray-700 hover:bg-white shadow-sm px-6">
            Edit
          </button>
        </div>

        {/* Quick Check-in */}
        <div className="pt-4">
          <h3 className="text-[#244D3F] font-bold uppercase tracking-widest text-sm mb-6">
            Start a Conversation
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <button className="flex flex-col items-center gap-3 p-6 bg-white border border-gray-100 rounded-2xl hover:border-emerald-200 hover:shadow-md transition-all group">
              <FiPhoneCall className="text-3xl text-gray-400 group-hover:text-emerald-600" />
              <span className="text-xs font-semibold text-gray-500">Call</span>
            </button>
            <button className="flex flex-col items-center gap-3 p-6 bg-white border border-gray-100 rounded-2xl hover:border-emerald-200 hover:shadow-md transition-all group">
              <MdOutlineSms className="text-3xl text-gray-400 group-hover:text-emerald-600" />
              <span className="text-xs font-semibold text-gray-500">
                Message
              </span>
            </button>
            <button className="flex flex-col items-center gap-3 p-6 bg-white border border-gray-100 rounded-2xl hover:border-emerald-200 hover:shadow-md transition-all group">
              <IoVideocamOutline className="text-3xl text-gray-400 group-hover:text-emerald-600" />
              <span className="text-xs font-semibold text-gray-500">Video</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
