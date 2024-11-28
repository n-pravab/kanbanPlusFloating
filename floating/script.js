const boxes = document.querySelectorAll(".box");
let positions = [0, 1, 2];

function updatePositions() {
  boxes.forEach((box) => {
    box.classList.remove("top", "middle", "bottom");
  });

  boxes[positions[0]].classList.add("top");
  boxes[positions[1]].classList.add("middle");
  boxes[positions[2]].classList.add("bottom");
}

window.addEventListener("wheel", (event) => {
  const direction = event.deltaY > 0 ? 1 : -1;

  if (direction > 0) {
    // Scroll top to bottom
    positions.push(positions.shift());
  } else {
    // Scroll bottom to top
    positions.unshift(positions.pop());
  }

  updatePositions();
});

// Initial call
updatePositions();
