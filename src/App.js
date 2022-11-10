import { useRef, useEffect } from "react";
import { Emoji } from "../src/components/emoji/emoji";
import Content from "./components/content/content";
import "./App.css";

const App = () => {
  const ref = useRef();

  useEffect(() => {
    const handleScroll = (event) => {
      console.log("window.scrollY", window.scrollY);
      if (window.scrollY < 200) {
        ref.current.style.opacity = 0;
      } else {
        ref.current.style.opacity = 1;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div className="content__section">
        <Content />
      </div>
      <div ref={ref}>
        <Emoji />
      </div>
    </div>
  );
};

export default App;
