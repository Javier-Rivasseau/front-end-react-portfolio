import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../context";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HomeBlogPage = () => {
  useEffect(() => {
    fetchBloglist();
    //eslint-disable-next-line
  }, []);

  const navigate = useNavigate();

  const context = useContext(GlobalContext);

  if (!context) {
    return <div>Loading</div>;
  }

  const { blogList, setBlogList, loading, setLoading } = context;

  const fetchBloglist = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://back-end-react-portfolio.onrender.com/api/blogs"
      );
      const result = await res.data;

      if (result && result.blogList && result.blogList.length) {
        setBlogList(result.blogList);
        setLoading(false);
      } else {
        setBlogList([]);
        setLoading(false);
      }
      console.log(result);
      console.log(blogList);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleDeleteBlog = async (getCurrentId: string) => {
    try {
      const res = await axios.delete(
        `https://back-end-react-portfolio.onrender.com/api/blogs/delete/${getCurrentId}`
      );

      const result = await res.data;
      if (result?.message) {
        fetchBloglist();
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred while deleting the blog.");
    }
  };

  const handleEditBlog = async (getCurrentItem: Record<any, any>) => {
    console.log(getCurrentItem);
    navigate("/blog/add-blog", { state: { getCurrentItem } });
  };

  if (loading) {
    return (
      <div className="font-medium text-4xl text-center text-black space-y-5 ">
       <p> Data Loading! Please Wait... </p>
       <p className="text-sm">* If it takes too long, it may be due to the
        limitations of the free backend server. Please wait a moment for the
        data to load *</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogList && blogList.length ? (
          blogList.map((item: Record<any, any>) => (
            <div
              key={item._id}
              className="bg-white rounded-lg shadow-xl overflow-hidden relative py-8"
            >
              <div className="p-4 ">
                <p className="font-bold text-lg text-gray-800 mb-2">
                  {item.title}
                </p>
                <p className="text-gray-600">{item.description}</p>
              </div>
              <div className="absolute -bottom-1 -right-2 p-2">
                <div className="flex ">
                  <FaTrash
                    onClick={() => handleDeleteBlog(item._id)}
                    className="text-red-600 cursor-pointer mr-2 h-6 w-6"
                  />
                  <FaEdit
                    onClick={() => handleEditBlog(item)}
                    className="text-blue-600 cursor-pointer h-6 w-6"
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No blogs for show. </p>
        )}
      </div>
    </div>
  );
};

export default HomeBlogPage;
