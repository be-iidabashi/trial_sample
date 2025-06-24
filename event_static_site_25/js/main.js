window.addEventListener("DOMContentLoaded", function () {
  const alertBtn = document.getElementById("alert-btn");
  alertBtn.addEventListener("click", function (e) {
    window.alert("これはアラートです。");
  });
});























// const h5 = document.querySelectorAll("h5");

// let changeColor = function() {
//   for (let i = 0; i < h5.length; i++) {
//     let R = Math.floor(Math.random() * 256);
//     let G = Math.floor(Math.random() * 256);
//     let B = Math.floor(Math.random() * 256);
//     h5[i].style.color = 'rgb(' + R + ',' + G + ',' + B + ')';
//   }
// };

// setInterval(changeColor, 1000);