import { useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GitHubContext from "../../context/github/GithubContext";

function UserResults() {
   const {users,loading}=useContext(GitHubContext);
//   useEffect(() => {
//     fetchUsers();
//   }, []);

  

  if (!loading && users.length!==0) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-col-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  } else if(!loading && users.length===0)
  {
    return <p className="pp">Search users.....</p>
  } else{
    return (
        <Spinner />
    )
  }
}

export default UserResults;
