const close = function () {
  return (document.querySelector(".popup").style.visibility = "hidden");
};
const open = function () {
  return (document.querySelector(".popup").style.visibility = "visible");
};

document.querySelector(".btn").addEventListener("click", function () {
    open();
});

document.querySelector(".cross").addEventListener("click", function () {

    close();
});

document.addEventListener("keydown", function (einfo) {
  console.log(einfo.key);
    if ((einfo.key = "Escape")) {
      close();
    } else if ((einfo.key = "w")) {
        open();
    }
});
