function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtllocomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".website"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (syncpositioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".website" elementsince Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".website", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrollingvertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices -it doesn't even transform the container at all! So to get the correctbehavior and avoid jitters, we should pin things with position: fixed onmobile. We sense it by checking to see if there's a transform applied to thecontainer (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".website").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and thenupdate LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and updateLocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco();

function eye(a) {
    let degree = 0
  window.addEventListener("mousemove", function (i) {
    let position1_X = Number(a.getBoundingClientRect().left);
    let position1_Y = Number(a.getBoundingClientRect().top);
    let centerWidth_1 = position1_X + a.offsetWidth / 2;
    let centerHeight_1 = position1_Y + a.offsetHeight / 2;
    let crsr1_X = i.x;
    let crsr1_Y = i.y;
    let widthDifference_1 = crsr1_X - centerWidth_1;
    let heightDifference_1 = crsr1_Y - centerHeight_1;
    let degreeInRadian_1 =
      Math.atan2(heightDifference_1, widthDifference_1) * (180 / Math.PI);
    degree = degreeInRadian_1 - 180
    a.style.transform = `rotate(${degree}deg)`
  });
}
eye(document.querySelector(".eye1"))
eye(document.querySelector(".eye2"))

function dataScrollSpeed() {
  if (window.innerWidth >= 750) {
    gsap.to(".page3", {
      y: -250,
      scrollTrigger: {
        trigger: ".marContainer",
        scroller: ".website",
        start: "top 35%",
        end: "bottom 15%",
        scrub: true
      }
    })
  }
}

dataScrollSpeed()

function landingImg() {
  gsap.from(".landingImg", {
    width: 0,
    duration: 0.56,
    ease: "back.out",
    delay: 4.2
  })
}
landingImg()

function showFooter() {
  if (window.innerWidth >= 750) {
    gsap.from("footer", {
        y: "100vh",
        display: "block",
      ease: "none",
      scrollTrigger: {
        trigger: ".page6",
        scroller: ".website",
        start: "bottom 100.1%",
        end: "bottom 0.1%",
        pin: true,
        scrub: true
      }
    })
  }
}
showFooter()

function splitText(a) {
  let clutter = ""
  a.innerText.split("").forEach((i) => {
    clutter += `<span>${i}</span>`
    a.innerHTML = clutter
  });
}
splitText(document.querySelector(".fyde > span"))
splitText(document.querySelector(".vise > span"))
splitText(document.querySelector(".trawa > span"))
splitText(document.querySelector(".blend > span"))
gsap.set(".fyde > span > span", {
  y: '100%'
})
gsap.set(".vise > span > span", {
  y: '100%'
})
gsap.set(".trawa > span > span", {
  y: '100%'
})
gsap.set(".blend > span > span", {
  y: '100%'
})
function page5HoverImgAnimation(a, b) {
  a.addEventListener("mouseenter", function () {
    gsap.to(b, {
      y: '0%',
      duration: 0.5,
      ease: 'back.out',
      stagger: 0.08
    })
  })
  a.addEventListener("mouseleave", function () {
    gsap.to(b, {
      y: '100%',
      duration: 0.5,
      ease: 'back.out',
      stagger: 0.08
    })
  })
}

page5HoverImgAnimation(document.querySelector(".page4HoverImg1"), document.querySelectorAll(".fyde > span > span"))
page5HoverImgAnimation(document.querySelector(".page4HoverImg2"), document.querySelectorAll(".vise > span > span"))
page5HoverImgAnimation(document.querySelector(".page4HoverImg3"), document.querySelectorAll(".trawa > span > span"))
page5HoverImgAnimation(document.querySelector(".page4HoverImg4"), document.querySelectorAll(".blend > span > span"))


