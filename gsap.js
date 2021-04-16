gsap.to(".dice", { duration: 3, rotate: 360, ease: "bounce.inOut" });

gsap.fromTo("body", { opacity: 0 }, { opacity: 1, backgroundImage: "url(nice-pic-jason.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover", color: "white", fontFamily: "fantasy" });

gsap.to("button", { marginLeft: "25px", padding: "15px", borderRadius: "17px", cursor: "pointer" });

gsap.to("h2", { duration: "4", ease: "linear", backgroundColor: "black", padding: "10px", textContent: "Now I just need to animate the dice into their shapes, easier said then done, wish me luck!", fontSize: "20px", })