import { React } from "react";
import Btn from "../../components/Button/Btn/Btn";
import "./NotFoundPage.scss";

const NotFoundPage = () => {

  return (
    <div className="error404">
      <h1 className="error404__title">
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </h1>
      <div className="error404__content"> Page doesnt exist</div>
          <Btn href="/" title="Go Home?" className="btn__link" />
          <div class="astronaut">
  <img src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png" alt="" class="src" />
          </div>
          <div class="stars"></div>
    </div>
  );
};
export default NotFoundPage;
