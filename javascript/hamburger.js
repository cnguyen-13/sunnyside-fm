let isListActive = false
const TABLET_SIZE = 768
const hamburger = document.querySelector(".hero__hamburger")
const list = document.querySelector(".hero__list")
const listItems = gsap.utils.toArray(".hero__list-item")

const hamburgerTl = gsap.timeline({ paused: true })

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
	if (!isListActive && window.innerWidth <= TABLET_SIZE) {
		hamburgerTl.play()
	} else {
		hamburgerTl.reverse()
	}

	isListActive = !isListActive
}

function makeListActive() {
	if (window.innerWidth >= TABLET_SIZE) {
		isListActive = true
		hamburgerTl.play()
	} else {
		isListActive = false
		hamburgerTl.restart()
		hamburgerTl.pause()
	}
}

makeListActive()

//event listeners
hamburger.addEventListener("click", playAnimation)
window.addEventListener("resize", makeListActive)
