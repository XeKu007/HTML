const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#a600ffff",
  "#9900e6ff",
  "#8c00ccff",
  "#8000b3ff",
  "#730099ff",
  "#660080ff",
  "#590066ff",
  "#4d004dff",
  "#400033ff",
  "#34001aff",
  "#2a000eff",
  "#220009ff",
  "#1f0008ff",
  "#1c0007ff",
  "#190006ff",
  "#160005ff",
  "#130004ff",
  "#100003ff",
  "#0d0002ff",
  "#0a0001ff",
  "#070000ff",
  "#28003eff"
];


circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.35;
    y += (nextCircle.y - y) * 0.35;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();