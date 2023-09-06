var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor_blur");

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x  + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 250 + "px";
    blur.style.top = dets.y - 250 + "px";
});

var h4all = document.querySelectorAll("#nav a,#nav img,#cards-container .card,#threesec .elem,#f2, #f3 a ,.scrollimg img");
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 4;
        crsr.style.border = ".5px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";
    });
});

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    },
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    },
});
gsap.from("#about-us,#about-us-in img", {
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: .4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 60%",
        end: "top 55%",
        scrub: 2
    }
})
gsap.from(".card", {
    scale: .7,
    opacity: 0,
    duration: .5,
    stagger: 1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: .5
    }
})
gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 1
    }
})
gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 1
    }
})
gsap.from("#threesec h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#threesec h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 3
    }
})