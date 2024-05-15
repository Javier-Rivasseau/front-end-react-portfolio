import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import ProjectSeparator from "../project-separator";
import GithubIcon from "../../github-icon";

interface ImageSliderProps {
  url: string;
  limit: number;
  page: number;
}

interface ImageItemTypes {
  id: string;
  download_url: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  url,
  limit = 5,
  page = 1,
}) => {
  const [images, setImages] = useState<ImageItemTypes[]>([]);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchImages = async (getUrl: string) => {
    try {
      setLoading(true);
      const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await res.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error: any) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
    // eslint-disable-next-line
  }, []);

  console.log(images);

  if (loading) {
    return (
      <div className="text-center font-bold">Loading data! Please wait</div>
    );
  }

  if (errorMsg !== null) {
    return <div> Error ocurred, try again. {errorMsg} </div>;
  }

  const handleLeftArrow = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };
  const handleRightArrow = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="flex flex-col justify-center mx-auto  items-center w-screen  h-screen">
      <ProjectSeparator title="IMAGE SLIDER" />
      <div className="flex items-center relative justify-center h-3/4">
        <BsArrowLeftCircleFill
          className="size-6 absolute left-4 cursor-pointer"
          style={{
            color: "#fff",
            filter: "drop-shadow(0px 0px 5px #555)",
          }}
          onClick={handleLeftArrow}
        />
        {images && images.length
          ? images.map((imageItem: ImageItemTypes, index) => (
              <img
                key={imageItem.id}
                src={imageItem.download_url}
                alt={imageItem.download_url}
                className={
                  currentSlide === index
                    ? "flex rounded-xl shadow-md shadow-gray-600 w-full h-auto max-h-full"
                    : "hidden"
                }
              />
            ))
          : null}
        <BsArrowRightCircleFill
          className="size-6 absolute text-white right-8 md:right-4 drop-shadow-md shadow-gray-600 cursor-pointer"
          onClick={handleRightArrow}
        />
        <span className="flex absolute bottom-20 md:bottom-4">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  key={index}
                  className={
                    currentSlide === index
                      ? "bg-blue-600 size-3 rounded-md border-none outline-none m-1 "
                      : "bg-white size-3 rounded-md border-none outline-none m-1 shadow-md shadow-black "
                  }
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))
            : null}
        </span>
      </div>
      <div className="p-8">
        <GithubIcon url="https://github.com/Javier-Rivasseau/front-end-react-portfolio/tree/main/src/components/combined-project-list/image-slider"/>
      </div>
    
    </div>
  );
};

export default ImageSlider;
