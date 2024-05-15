import React from "react";
import Accordion from "./accordian";
import RandomColorGenerator from "./random-color";
import StarRating from "./star-rating";
import ImageSlider from "./image-slider";
import LoadMoreData from "./load-more-data";
import TreeView from "./tree-view/tree-view";
import menus from "./tree-view/data";
import QrCodeGenerator from "./qr-code-generator";
import LightDarkTheme from "./light-dark-theme";
import ScrollIndicator from "./custom-scroll-indicator";
import GithubProfileFinder from "./github-profile-finder";
import SearchWithAutoComplete from "./search-auto-complete-with-api";
import TestModalPopUp from "./custom-modal-popup";


const CombinedProjectList = () => {
  return (
    <div>
      <div className="space-y-20">
        <ScrollIndicator />
        <TestModalPopUp/>
        <Accordion />
        <RandomColorGenerator />
        <StarRating noOfStars={8} />
        <ImageSlider
          url={"https://picsum.photos/v2/list"}
          limit={10}
          page={1}
        />
        <LoadMoreData
          url={"https://dummyjson.com/products"}
          limit={4}
          skip={4}
        />
        <TreeView menus={menus} />
        <QrCodeGenerator />
        <LightDarkTheme />
        <GithubProfileFinder/> 
        <SearchWithAutoComplete/>
        
      </div>
    </div>
  );
};

export default CombinedProjectList;
