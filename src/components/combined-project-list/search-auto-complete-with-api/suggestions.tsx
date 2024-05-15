import React from "react";

interface SuggestionsProps {
  users: string[];
  onClick: (e: React.MouseEvent<HTMLLIElement>) => void;
}

const Suggestions: React.FC<SuggestionsProps> = ({ users, onClick }) => {
  return (
    <ul className="max-h-60 overflow-y-auto">
      {users && users.length ? (
        users.map((item: string, index) => (
          <li
            key={index}
            onClick={onClick}
            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
          >
            {item}
          </li>
        ))
      ) : (
        <li className="px-4 py-2">Results not found</li>
      )}
    </ul>
  );
};

export default Suggestions;
