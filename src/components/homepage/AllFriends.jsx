import FriendsCards from "../ui/FriendsCards";
import { HashLoader } from "react-spinners";
import useFriends from "../../hook/useFriends";

const AllFriends = () => {
  const { friends, loading } = useFriends();

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center min-h-[40vh] w-full">
          <HashLoader color="#244D3F" />
        </div>
      ) : (
        <div className="container mx-auto grid grid-cols-4 gap-4 min-h-[40vh] my-5">
          {friends.map((friend, i) => (
            <FriendsCards key={i} friend={friend} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllFriends;
