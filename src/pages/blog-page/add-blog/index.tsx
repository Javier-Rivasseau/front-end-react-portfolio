import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../context";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const AddBlogPage = () => {
  const context = useContext(GlobalContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (location.state) {
      setIsEdited(true);
      setBlogFormData({
        title: location.state.getCurrentItem.title,
        description: location.state.getCurrentItem.description,
      });
    }
    //eslint-disable-next-line
  }, []);

  if (!context) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  const { blogFormData, setBlogFormData, isEdited, setIsEdited } = context;

  const handleSaveBlogToDDBB = async () => {
    try {
      const res = isEdited
        ? await axios.put(
            `https://back-end-react-portfolio.onrender.com/api/blogs/update/${location.state.getCurrentItem._id}`,
            {
              title: blogFormData.title,
              description: blogFormData.description,
            }
          )
        : await axios.post("https://back-end-react-portfolio.onrender.com/api/blogs/add", {
            title: blogFormData.title,
            description: blogFormData.description,
          });
      const result = await res.data;
      if (result) {
        setIsEdited(false);
        setBlogFormData({ title: "", description: "" });
        navigate("/blog");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-4 px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {isEdited ? "Editing blog" : "Add a new blog "}
      </h1>
      <div className="flex flex-col gap-4 max-w-md">
        <input
          type="title"
          placeholder="Enter Blog Title"
          id="title"
          typeof="text"
          value={blogFormData.title}
          onChange={(e) =>
            setBlogFormData({ ...blogFormData, title: e.target.value })
          }
          className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="description"
          placeholder="Enter Blog Description"
          id="description"
          typeof="text"
          value={blogFormData.description}
          onChange={(e) =>
            setBlogFormData({ ...blogFormData, description: e.target.value })
          }
          className="px-4 py-2 h-40 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSaveBlogToDDBB}
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          {isEdited ? "Edit Blog" : "Add Blog"}
        </button>
      </div>
    </div>
  );
};

export default AddBlogPage;