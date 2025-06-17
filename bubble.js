
const maxBubbles = 30;
  const bubbles = [];

  function createBubble() {
    if (bubbles.length >= maxBubbles) return;

    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    const size = Math.random() * 40 + 20; // 20px to 60px
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    // Initial random position
    let x = Math.random() * (window.innerWidth - size);
    let y = Math.random() * (window.innerHeight - size);
    bubble.style.left = x + "px";
    bubble.style.top = y + "px";

    // Velocity
    let dx = (Math.random() - 0.5) * 4; // horizontal speed
    let dy = (Math.random() - 0.5) * 4; // vertical speed

    // Click to pop
    bubble.addEventListener("click", () => {
      bubble.classList.add("pop");
      clearInterval(bubble.moveInterval); // Stop movement
      setTimeout(() => {
        bubble.remove();
        const index = bubbles.indexOf(bubble);
        if (index > -1) bubbles.splice(index, 1);
      }, 300);
    });

    // Movement interval
    bubble.moveInterval = setInterval(() => {
      x += dx;
      y += dy;

      // Bounce off edges
      if (x <= 0 || x + size >= window.innerWidth) dx *= -1;
      if (y <= 0 || y + size >= window.innerHeight) dy *= -1;

      bubble.style.left = x + "px";
      bubble.style.top = y + "px";
    }, 16); // ~60fps

    document.body.appendChild(bubble);
    bubbles.push(bubble);
  }

  // Create bubbles every 500ms
  setInterval(createBubble, 500);

  // Optional: remove all bubbles on window resize
  window.addEventListener("resize", () => {
    bubbles.forEach(b => b.remove());
    bubbles.length = 0;
  });


  function toggleAbout() {
      const aboutInfo = document.getElementById("about-info");
      if (aboutInfo.style.display === "block") {
        aboutInfo.style.display = "none";
      } else {
        aboutInfo.style.display = "block";
      }
    }


    function togglehowtoplay() {
      const aboutInfo = document.getElementById("howtoplayttt");
      if (aboutInfo.style.display === "block") {
        aboutInfo.style.display = "none";
      } else {
        aboutInfo.style.display = "block";
      }
    }
