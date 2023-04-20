function getWrapperSize(el) {
  const { width, height } = el.parentNode.getBoundingClientRect();
  return {
    containerWidth: width,
    containerHeight: height,
    containerScale: width / height,
  };
}

function useFitScreen(options) {
  const {
    width: baseWidth = 1920,
    height: baseHeight = 1080,
    el,
    container,
  } = options;
  const baseScale = (baseWidth / baseHeight).toFixed(2);

  function calcRate() {
    const { containerWidth, containerHeight, containerScale } =
      getWrapperSize(el);

    if (baseScale >= containerScale) {
      const useHeight = containerWidth / baseScale;
      el.style.top = `${(containerHeight - useHeight) / 2}px`;
      el.style.left = "0";
      el.style.width = `100%`;
      el.style.height = `${useHeight}px`;

      container.style.transform = `scale(${useHeight / baseHeight})`;
    } else {
      const useWidth = containerHeight * baseScale;
      el.style.top = "0";
      el.style.left = `${(containerWidth - useWidth) / 2}px`;
      el.style.width = `${useWidth}px`;
      el.style.height = `100%`;

      container.style.transform = `scale(${useWidth / baseWidth})`;
    }
  }

  calcRate();

  window.addEventListener("resize", calcRate);

  return () => {
    window.removeEventListener("resize", calcRate);
  };
}
