gsap.to(".dice", { duration: 2, rotate: 360, ease: "elastic", force3D: true, boxShadow: "2px 5px 2px black" });

gsap.fromTo("body", { opacity: 0 }, { opacity: 1, backgroundColor: "green", backgroundImage: "url(encounter2.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "contain", color: "white", fontFamily: "fantasy" });
gsap.to(".title", { padding: "10px", borderRadius: "15px", backgroundColor: "skyblue", opacity: "0.7", color: "blue" }, 0)
gsap.to("button", { marginLeft: "25px", padding: "15px", borderRadius: "17px", cursor: "pointer", width: "200px" });

gsap.to("h2", { duration: "4", ease: "linear", backgroundColor: "black", padding: "10px", fontSize: "20px", });