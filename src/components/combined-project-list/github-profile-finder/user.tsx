import React from "react";

interface userItem {
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
  url: string;
  bio: string;
  name: string;
  login: string;
  created_at: string;
}
interface userProps {
  userItem: userItem;
}

const User: React.FC<userProps> = ({ userItem }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    bio,
    name,
    login,
    created_at,
  } = userItem;

  const createdDate = new Date(created_at);

  return (
    <div className="flex flex-col w-2/3 items-center justify-center border-2 border-black border-solid rounded-lg p-4 m-2">
      <div>
        <img src={avatar_url} alt="Profile" className="size-32 rounded-full" />
      </div>

      <div className="flex space-x-4 font-bold">
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p className="text-gray-600">
          User joined at{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleDateString("es-AR", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div className="p-2   ">
        <p>{`Followers: ${followers}`}</p>
        <p>{`Following: ${following}`}</p>
        <p>{`Public Repos: ${public_repos}`}</p>
        <p>{bio ? `Bio: ${bio}` : "Not available"}</p>
      </div>
    </div>
  );
};

export default User;
