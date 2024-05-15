import React, { useEffect, useState } from "react";
import ProjectSeparator from "../project-separator";
import GithubIcon from "../../github-icon";

interface LoadMoreDataProps {
  url: string;
  limit: number;
  skip: number;
}

interface ProductsTypes {
  id: string;
  title: string;
  thumbnail: string;
}


const LoadMoreData: React.FC<LoadMoreDataProps> = ({
  url,
  limit = 20,
  skip = 20,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<ProductsTypes[]>([]);
  const [count, setCount] = useState<number>(0);
  const [disableButton, setDisableButton] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<null>(null)

  useEffect(() => {
    if (url !== null)
      fetchProducts();
    // eslint-disable-next-line
  }, [count, url]);

  useEffect(() => {
    if (data && data.length === 20) 
      setDisableButton(true);
  }, [data]);

 
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${url}?limit=${limit}&skip=${skip * count}`);
      const data = await res.json();
      if (data && data.products && data.products.length)
        if (count === 0) {
          setData(data.products);
        } else {
          setData((prevData) => [...prevData, ...data.products]);
        }

      setLoading(false);
    } catch (error: any) {
      console.log(error);
      setErrorMsg(error.message)
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading data! Please wait</div>;
  }
  if(errorMsg !== null) {
    return <div>Some error ocurred, Try again.</div>
  }

  console.log(data);
  console.log(count);

  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex justify-center">
        <ProjectSeparator title="LOAD MORE DATA" />
      </div>

      <div className="grid grid-cols-4 gap-2">
        {data && data.length
          ? data.map((productItem: ProductsTypes) => (
              <div
                key={productItem.id}
                className="mx-2 flex flex-col items-center justify-center gap-2 border-2 rounded-sm border-solid border-gray-800 "
              >
                <img
                  className="size-44 aspect-video rounded-md mt-2 "
                  alt={productItem.title}
                  src={productItem.thumbnail}
                />
                <p className="font-sans font-bold  py-4 text-center">
                  {productItem.title}
                </p>
              </div>
            ))
          : null}
      </div>
      <div>
        <button
          onClick={() => setCount(count + 1)}
          disabled={disableButton}
          className={
            disableButton
              ? "flex  shadow-inner mx-auto rounded-md bg-gray-200 focus:bg-gray-300 p-2"
              : "flex  shadow-inner mx-auto rounded-md bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 text-white p-2"
          }
        >
          Load more Products{" "}
        </button>
        <p className="flex justify-center items-center mx-auto text-xl">
          {disableButton ? "You have reached the max number of products" : ""}
        </p>
      </div>
      <div className="p-8">
        <GithubIcon url="https://github.com/Javier-Rivasseau/front-end-react-portfolio/tree/main/src/components/combined-project-list/load-more-data"/>
      </div>
    
    </div>
  );
};

export default LoadMoreData;
