// import $ from 'jquery';


$(".arrow").click(() => {
  console.log('i was clicked!');
  var box = $(".ColorSwatchesContainer"),
  x;
  
  if ($(this).hasClass("arrow-right")) {
    x = ((box.width() / 2)) + box.scrollLeft();
    box.animate({
      scrollLeft: x,
    })
  } else {
    x = ((box.width() / 2)) - box.scrollLeft();
    box.animate({
      scrollLeft: -x,
    })
  }
});
console.log('I WAS HERE');