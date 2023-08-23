export const slideInFromLeft = {
  hidden: { x: "-100%" },
  visible: { x: "0%" },
};
export const slideInFromRight = {
  hidden: { x: "100%" },
  visible: { x: "0%" },
};

export const slideInFromUp = {
  hidden: { y: "-100%" },
  visible: { y: "0%" },
};

export const listVAriatns = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
  hidden: { opacity: 0, y: -100 },
};
