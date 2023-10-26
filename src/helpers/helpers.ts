import imageAmy from "../assets/images/image-amyrobson.png";
import imageJulius from "../assets/images/image-juliusomo.png";
import imageMax from "../assets/images/image-maxblagun.png";
import imageRamses from "../assets/images/image-ramsesmiron.png";

const imageSelector = (name: string) => {
  switch (name) {
    case "amyrobson":
      return imageAmy;
    case "juliusmomo":
      return imageJulius;
    case "maxblagun":
      return imageMax;
    case "ramsesmiron":
      return imageRamses;
    default:
      return imageAmy;
  }
};

export default imageSelector;
