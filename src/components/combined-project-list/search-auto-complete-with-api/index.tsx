import React, { useEffect, useState } from "react";
import Suggestions from "./suggestions";
import ProjectSeparator from "../project-separator";
import GithubIcon from "../../github-icon";

const SearchWithAutoComplete = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [filteredData, setFilteredData] = useState<string[]>([]);
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  useEffect(() => {
    fetchUsersData();
  }, []);

  const fetchUsersData = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users?limit=99");
      const data = await res.json();
      console.log(data);

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((item: any) => item.firstName));
        setLoading(false);
      }
    } catch (error: any) {
      console.log(error);
      setErrorMsg(error.message);
      setLoading(false);
    }
  };

  const handleChange = (e: any) => {
    let query = e.target.value.toLowerCase();
    setInputValue(query);
    if (query.length > 1) {
      const filteredUsers =
        users && users.length
          ? users.filter((user) => user.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredData(filteredUsers);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
    setShowMessage(false);
  };

  const handleClick = (e: any): void => {
    // textContent y innerText hacen lo mismo.

    setInputValue(e.target.textContent);
    console.log(e.target.innerText);
    setShowDropDown(false);
    setFilteredData([]);
    setShowMessage(true);
  };

  if (loading) {
    return <div className="text-center mt-8">Loading Data!! Please wait..</div>;
  }

  if (errorMsg !== null) {
    return (
      <div className="text-center mt-8 text-red-500">An error ocurred.!</div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center p-4 h-[70vh]">
      <div>
        <ProjectSeparator title="SEARCH WITH AUTO COMPLETE WITH API" />
      </div>
      <div className="w-full max-w-sm space-y-10">
        <div className="items-center border rounded-md overflow-hidden">
          <input
            type="text"
            name="search-users"
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter username..."
            className="flex-grow px-4 py-2 focus:outline-none"
          />
         
        </div>
        
        {showDropDown && (
          <div className="bg-white shadow-md rounded-md mt-2">
            <Suggestions onClick={handleClick} users={filteredData} />
          </div>
        )}
        {showMessage === true ? (
          <h2 className="text-center font-bold ">
            You have selected de username of{" "}
            <p className="text-slate-500">{inputValue}</p>
          </h2>
        ) : null}
      </div>
      <div className="p-8">
        <GithubIcon url="https://github.com/Javier-Rivasseau/front-end-react-portfolio/tree/main/src/components/combined-project-list/search-auto-complete-with-api"/>
      </div>
    
    </div>
  );
};

export default SearchWithAutoComplete;
