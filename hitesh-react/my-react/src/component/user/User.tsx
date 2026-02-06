import React, { useContext, useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
import UserContext from "../../context/UserContext";
interface GitHubUser {
  avatar_url: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  html_url: string;
  id: number;
}

function User() {
  const { id } = useParams<{ id: string }>();
  const userData = useLoaderData() as GitHubUser;
  //const [name, setName] = useState("");
  const { setUser } = useContext(UserContext);

  // on page load show user data
  useEffect(() => {
    const setNameValue = () => {
      setUser(userData.name);
    };
    setNameValue();
  }, [setUser]);
  // const [userData, setUserData] = useState<GitHubUser | null>(null);
  // useEffect(() => {
  //   const getUserGithubUserName = async () => {
  //     try {
  //       const response = await fetch("https://api.github.com/users/gubali");
  //       const data = await response.json();
  //       setUserData(data);
  //       console.log("User data:", data);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };
  //   getUserGithubUserName();
  // }, []);
  return (
    <>
      {/* Name : {name || "No Name Provided"} */}
      {/* <button onClick={setNameValue}>Click</button> */}
      {/* <p className="bg-gray-600 text-white text-3xl p-4">
        {id ? `User id is ${id}` : "No user id foind!"}
      </p> */}
      {userData && (
        <div className="max-w-2xl mx-auto mt-10 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 my-box">
          <div className="flex flex-col md:flex-row items-center p-8 space-y-6 md:space-y-0 md:space-x-8">
            {/* Avatar */}
            <img
              className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
              src={userData.avatar_url}
              alt={userData.name}
            />

            {/* Info */}
            <div className="text-center md:text-left flex-1">
              <h2 className="text-3xl font-bold text-gray-800 my-box">
                {userData.name}
              </h2>
              <p className="text-gray-600 text-lg mt-2">
                {userData.bio || "No bio available."}
              </p>

              <div className="flex justify-center md:justify-start gap-6 text-sm text-gray-700 mt-4">
                <div>
                  <span className="block text-xl font-semibold">
                    {userData.followers}
                  </span>
                  <span>Followers</span>
                </div>
                <div>
                  <span className="block text-xl font-semibold">
                    {userData.following}
                  </span>
                  <span>Following</span>
                </div>
                <div>
                  <span className="block text-xl font-semibold">
                    {userData.id}
                  </span>
                  <span>Id</span>
                </div>
              </div>

              <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded transition duration-300"
              >
                View GitHub Profile
              </a>
            </div>
          </div>

          {/* Optional Footer */}
          <div className="bg-gray-100 text-gray-500 text-sm px-8 py-4 text-right">
            🆔 User ID: {id}
          </div>
        </div>
      )}
    </>
  );
}

export default User;
export const gitHUbInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/gubali");
  if (!response.ok) {
    return new Error("Failed to fetch user data");
  }
  const data: GitHubUser = await response.json();
  return data;
};
