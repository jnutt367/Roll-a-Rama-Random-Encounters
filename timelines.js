var animation = gsap.timeline();
animation
    .to("#star", { duration: 2, x: 100 })
    .to("#circle", { duration: 3, x: 100 }, 1)
    .fromTo("#square", { x: 150 }, { duration: 1, x: 10 }, 4)
    .fromTo("#svg", { width: " 500" }, { duration: 4, x: 100, y: -50, rotate: 360, backgroundColor: "black", width: "200px", borderRadius: "50%" }, 2)
    .to("body", { backgroundColor: "black" })