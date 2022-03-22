import style from "./Intro.module.css";
import me from "../../img/me.png";
import dark from "../../img/darked.jpeg";
import { useContext } from "react";
import { ThemeContext } from "../../Context";

const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={style.intro}>
      <div className={style["intro-left"]}>
        <div className={style["intro-left-wrapper"]}>
          <h2 className={style["intro-intro"]}>Hello, My name is</h2>
          <h1 className={style["intro-name"]}>Sujan Kapali</h1>
          <div className={style["intro-title"]}>
            <div className={style["intro-title-wrapper"]}>
              <div className={style["intro-title-item"]}>Web Developer</div>
              <div className={style["intro-title-item"]}>Student</div>
              <div className={style["intro-title-item"]}>Scoocer Player</div>
              <div className={style["intro-title-item"]}>Reader</div>
              <div className={style["intro-title-item"]}>
                Engineering UnderGraduate
              </div>
            </div>
          </div>
          <p className={style["intro-desc"]}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            at, odit porro excepturi voluptas amet laudantium quo quis ab.
          </p>
        </div>
      </div>

      <div className={style["intro-right"]}>
        <div className={style["intro-bg"]}></div>
        <img src={me} className={style["intro-img"]}></img>
      </div>
    </div>
  );
};

export default Intro;
