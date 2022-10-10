const showModalWindow = () => {
  const head = document.querySelector("header");
  const modal = document.getElementById("myContact");
  const btn = document.getElementsByClassName("button-link");
  const span = document.getElementsByClassName("close")[0];
  const widthBody = document.body.offsetWidth;

  const buttonOnClick = () => {
    for (let i = 0; i < btn.length; i++) {
      btn[i].onclick = () => {
        modal.classList.add("open");
        document.body.style.overflow = "hidden";
        document.body.style.width = widthBody + "px";
        head.style.width = widthBody + "px";
      };
    }
  };

  function headerPadding() {
    if (buttonOnClick().click) {
      head.style.width = widthBody + "px";
    } else {
      head.style.width = "auto";
    }
  }

  function closePopUp() {
    modal.classList.remove("open");
    setTimeout(() => {
      document.body.style.overflow = "visible";
      document.body.style.width = "auto";
    }, 500);
  }

  //   btn.onclick = function () {
  //     modal.classList.add("open");
  //     document.body.style.overflow = "hidden";
  //     document.body.style.width = widthBody + "px";
  //     headerPadding();
  //   };

  span.onclick = function () {
    headerPadding();
    closePopUp();
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      closePopUp();
      headerPadding();
    }
  };
  buttonOnClick();
};

export default showModalWindow;
