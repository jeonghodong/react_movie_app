function fadeIn(bg) {
  bg.current.animate(
    [
      // keyframes
      { opacity: "0" },
      { opacity: "1" },
    ],
    {
      // timing options
      duration: 500,
      iterations: 1,
    }
  );
}

export default fadeIn;
