const showElemByScroll = () => {
  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add("element-show");
      }
      // else {
      //   change.target.classList.remove("element-show");
      // }
    });
  }
  let options = { threshold: [0.0] };
  let observer = new IntersectionObserver(onEntry, options);

  let elementsLeft = document.querySelectorAll(".element-animation-left");
  let elementsRight = document.querySelectorAll(".element-animation-right");
  let elementsBottom = document.querySelectorAll(".element-animation-bottom");
  let elementsTop = document.querySelectorAll(".element-animation-top");

  for (let elm of elementsLeft) {
    observer.observe(elm);
  }

  for (let elm of elementsRight) {
    observer.observe(elm);
  }

  for (let elm of elementsBottom) {
    observer.observe(elm);
  }

  for (let elm of elementsTop) {
    observer.observe(elm);
  }
};

export default showElemByScroll;
