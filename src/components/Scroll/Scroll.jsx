import { useEffect, useState, Fragment } from "react";
import { ReactComponent as Scroll } from "../Assets/ScrollToTop.svg";

const ScrollToTop = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <Fragment>
      {showButton && (
        <button onClick={scrollToTop} className="   
        position-fixed 
        bg-white
        border-primary-100
        z-index-master
        rounded-circle
        back-to-top
        p-3
        d-flex 
        align-items-center
        justify-content-center 
        ">
          <Scroll/>
        </button>
        
      )}
      
    </Fragment>
  );
};

export default ScrollToTop;