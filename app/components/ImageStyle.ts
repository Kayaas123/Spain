export const ImageStyle = ({
  image,
  size,
  top,
  left,
}: {
  image: string;
  size: string;
  top: string | number;
  left: string | number;
}): React.CSSProperties => {
  return {
    position: "absolute",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "50%",
    overflow: "hidden",
    width: size,
    height: size,
    top: top,
    left: left,
  };
}; 