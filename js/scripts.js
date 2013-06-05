$(".circle1").hover(
  function () {
    $(this).siblings(".year1").css('display','block');
     $(this).siblings(".percent1").css('display','block');
  },
  function () {
    $(this).siblings(".year1").css('display','none');
     $(this).siblings(".percent1").css('display','none');
  }
);

// $(".circle1").hover(
//   function () {
//     $(this).siblings(".percent1").css('display','block');
//   },
//   function () {
//     $(this).siblings(".percent2").css('display','none');
//   }
// );