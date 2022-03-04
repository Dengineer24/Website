import styled from "styled-components";

const webaction = gsap.timeline({ defaults: { ease: "power1.out"}});


webaction.to(".text", { x: "0%", duration: 1});
webaction.to(".move1", { y: "-100%", x: "-100%", duration: 1.5, delay: 0.5});
webaction.to(".move2", { y: "-100%", x: "-100%", duration: 1.5, delay: 0.5}, "-=1.75");
webaction.to(".move3", { y: "100%", x: "100%", duration: 1.5, delay: 0.5}, "-=2");
webaction.to(".move4", { y: "100%", x: "100%", duration: 1.5, delay: 0.5}, "-=2.25");
webaction.to(".move5", { y: "-100%", x: "100%", duration: 1.5, delay: 0.5}, "-=2");
webaction.to(".move6", { y: "-100%", x: "100%", duration: 1.5, delay: 0.5}, "-=2.25");
webaction.to(".move7", { y: "100%", x: "-100%", duration: 1.5, delay: 0.5}, "-=2");
webaction.to(".move8", { y: "100%", x: "-100%", duration: 1.5, delay: 0.5}, "-=2.25");
webaction.to(".startup-text", { y: "-100", x: "-100%", duration: 1}, "-=1");
webaction.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 })
webaction.fromTo(".main-name", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1")

const menu = document.querySelector('#bars-list');
const menuLinks = document.querySelector('.options-links');

menu.addEventListener('click', function() {
	menu.classList.toggle('is-active');
	menuLinks.classList.toggle('active');
})

