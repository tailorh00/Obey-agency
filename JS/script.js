function loaderAnime() {
  let tl = gsap.timeline();

  tl.from(".line h1", {
    y: 200,
    stagger: 0.2,
    delay: 0.5,
    duration: 0.5,
  });

  tl.from(
    "#line1-part1",
    {
      opacity: 0,
      onStart: function () {
        let timer = document.querySelector("#line1-part1 h5");
        let count = 0;

        let interval = setInterval(function () {
          if (count < 100) {
            timer.innerHTML = count++;
          } else {
            timer.innerHTML = count;
            clearInterval(interval);
          }
        }, 33);
      },
    },
    "-=0.7"
  );

  tl.from(".line h2, #loader .wait-txt", {
    opacity: 0,
    duration: 0.5,
  });

  tl.to(
    ".line h2",
    {
      animationName: "load-anime",
    },
    "-=0.5"
  );

  tl.to("#loader", {
    opacity: 0,
    delay: 2.7,
    duration: 0.5,
  });

  tl.from("#page1", {
    y: 1500,
    duration: 0.7,
    delay: 0.2,
  });

  tl.to("#loader", {
    display: "none",
  });

  tl.from("#nav , .nav-part1 h5", {
    opacity: 0,
  });

  tl.from(
    ".hero h1,  .hero h2 , .hero h3",
    {
      y: 150,
      duration: 0.5,
      stagger: 0.05,
    },
    "-=0.7"
  );
}
function cursurAnime() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursur", {
      y: dets.y,
      x: dets.x,
    });
  });

  Shery.makeMagnet(".nav-part2 h5");
}

loaderAnime();
cursurAnime();
