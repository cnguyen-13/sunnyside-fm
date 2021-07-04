gsap.registerPlugin(ScrollTrigger)
const testimonials = document.querySelector(".testimonials")
const collage = document.querySelector(".collage")
const footer = document.querySelector(".footer")

const imagePanels = gsap.utils.toArray(".info__image-panel")
const textPanels = gsap.utils.toArray(".info__text")
const fruitPanels = gsap.utils.toArray(".fruits__panel")
const fruitTitles = gsap.utils.toArray(".fruits__title")
const fruitParagraphs = gsap.utils.toArray(".fruits__paragraph")
const testimonialsPanels = gsap.utils.toArray(".testimonials__client")
const collagePanels = gsap.utils.toArray(".collage__image")
const toggleActionsSettings = "play none none none"

imagePanels.forEach(panel => {
	gsap.from(panel, {
		opacity: 0,
		xPercent: 100,

		duration: 1,
		ease: Power3.easeOut,
		scrollTrigger: {
			trigger: panel,
			start: "top 25%",
			end: "bottom top",
			toggleActions: toggleActionsSettings,
		},
	})
})

textPanels.forEach(panel => {
	gsap.from(panel, {
		opacity: 0,
		xPercent: -100,
		duration: 1,
		ease: Power3.easeOut,
		scrollTrigger: {
			trigger: panel,
			start: "top 25%",
			end: "bottom top",
			toggleActions: toggleActionsSettings,
		},
	})
})

fruitPanels.forEach((panel, idx) => {
	gsap.from(panel, {
		opacity: 0,
		height: 0,
		duration: 1,
		ease: Power3.easeOut,
		scrollTrigger: {
			trigger: panel,
			start: "top 25%",
			end: "bottom top",
			toggleActions: toggleActionsSettings,
		},
	})
})

const testimonialsTl = gsap.timeline({
	scrollTrigger: {
		trigger: testimonials,
		start: "top 25%",
		end: "bottom top",
		toggleActions: toggleActionsSettings,
	},
})

testimonialsTl.staggerFrom(
	testimonialsPanels,
	0.3,
	{
		ease: Power3.easeOut,
		y: "-2rem",
		opacity: 0,
	},
	0.1
)

const collageTl = gsap.timeline({
	scrollTrigger: {
		trigger: collage,
		start: "top 25%",
		end: "bottom top",
		toggleActions: toggleActionsSettings,
	},
})

collageTl.staggerFrom(
	collagePanels,
	0.3,
	{
		ease: Power3.easeOut,
		y: "-2rem",
		opacity: 0,
	},
	0.1
)

gsap.from(footer, {
	opacity: 0,
	yPercent: 100,
	scrollTrigger: {
		trigger: footer,
		start: "top 80%",
		toggleActions: "play none none none",
	},
})
