console.log("hey");
$(document).ready(() => {
  $("li").on("click", () => {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });
});
