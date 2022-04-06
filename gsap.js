gsap.to(".dice", { duration: 2, rotate: 360, borderRadius: "50%", ease: "elastic", force3D: true, boxShadow: "2px 5px 2px black" });

gsap.fromTo("body", { opacity: 0 }, { opacity: 1, backgroundColor: "black", backgroundImage: "url()", backgroundRepeat: "no-repeat", backgroundSize: "contain", color: "white", fontFamily: "serif" });
gsap.to(".title", { padding: "10px", borderRadius: "15px", backgroundColor: "skyblue", opacity: "0.8", color: "white" }, 0)
gsap.to("button", { marginLeft: "25px", padding: "15px", borderRadius: "50%", cursor: "pointer", width: "200px" });

gsap.to("h2", { duration: "4", ease: "linear", backgroundColor: "black", padding: "10px", fontSize: "20px", });