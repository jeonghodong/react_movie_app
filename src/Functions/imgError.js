import Default_bg from "../img/Default_bg.png";
import Default_bg2 from "../img/Default_bg2.png";

const onErrorImgSmall = (e) => {
  e.target.src = Default_bg;
};
const onErrorImgBig = (e) => {
  e.target.src = Default_bg2;
};

export { onErrorImgSmall, onErrorImgBig };
