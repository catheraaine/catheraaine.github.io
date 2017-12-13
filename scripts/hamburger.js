
// change our transform origin for the lines
TweenMax.set("#line1, #line2, #line3", {
  transformOrigin:"50% 50%"
});

//adjust our duration
var ts = 2;

var hbtl = new TimelineMax({onComplete:toggle, onReverseComplete:toggle});
hbtl.add("fold")
    .to("#line1", 0.5, {y:11, ease: Circ.easeOut}, "fold")
    .to("#line3", 0.5, {y:-11, ease: Circ.easeOut}, "fold")
    .to("#line2", 0.1, {opacity:0, ease: Elastic.easeOut.config(1, 1)}, "fold")
    .add("rot")
    .to("#line1", 0.8, {rotation:45, ease: Elastic.easeOut.config(1, 1)}, "rot")
    .to("#line3", 0.8, {rotation:-45, ease: Elastic.easeOut.config(1, 1)}, "rot");
hbtl.pause();
hbtl.timeScale(ts);

$('.hamburger').click(function() {
  if (!$(this).hasClass("open")) {
    console.log("should open");
     hbtl.play();
  } else if ($(this).hasClass("open")) {
      hbtl.timeScale(ts*1.25);
      hbtl.reverse();
  }
});

function toggle() {
  console.log("complete");
  $('.hamburger').toggleClass("open");
}
