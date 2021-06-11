const params = new URLSearchParams(location.search);
const map = params.get('map');


animateFromLeft();

function animateFromLeft() {
    let tl = gsap.timeline({ ease: "power4.inOut" });


    tl.to(".from-left .tile", {
        duration: 0.8,
        width: "100%",
        left: "0%",
        delay: 0.2,
        stagger: 0.05,
    });

    tl.set(".from-left .tile", { left: "0", width: "0" });

}


setTimeout(() => {
    if (map == 0) {
        window.location.href = './map.html?map=0';
    } else if (map == 1) {
        window.location.href = './map.html?map=1';
    } else {
        window.location.href = './menu.html';
    }

}, 1300);