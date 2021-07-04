let flag = true
const hamburger = document.querySelector(".hero__hamburger")
const list = document.querySelector(".hero__list")
const listItems = gsap.utils.toArray(".hero__list-item")
const hamburgerTl = gsap.timeline({ paused: true })

//animation
hamburgerTl
	.from(list, {
		display: "none",
		opacity: 0,
		duration: 0.3,
		y: "-2rem",
		x: "2rem",
		ease: Power3.easeOut,
	})
	.staggerFrom(
		listItems,
		0.1,
		{
			y: "-1rem",
			opacity: 0,
			ease: Power3.easeOut,
		},
		0.1
	)

function playAnimation() {
	flag ? hamburgerTl.play() : hamburgerTl.reverse()
	flag = !flag
}

//event listener
hamburger.addEventListener("click", playAnimation)
