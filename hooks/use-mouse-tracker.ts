import useMouse from "@react-hook/mouse-position";

export const useVariants = (ref: React.MutableRefObject<null>) => {
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;
  if (mouse.clientX !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.clientY !== null) {
    mouseYPosition = mouse.clientY;
  }

  return {
    default: {
      opacity: 1,
      height: 20,
      width: 20,
      fontSize: "20px",
      backgroundColor: "#13ACDE",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
  };
};

export const spring = {
  type: "spring",
  stiffness: 500,
  damping: 28,
};
