import noImage from "../assets/no-image-placeholder.webp";

const getCroppedImage = (url: string) => {
    if(!url) return noImage;
    const target = "media/";
    return url.replace(target, target + "crop/600/400/");
}

export default getCroppedImage;