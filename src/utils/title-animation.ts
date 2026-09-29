import { gsap } from "gsap";
// import $ from "jquery";
import { SplitText } from "@/plugins";

function visibleSlowly() {
  	// Visible From Right Slowly Animation
		const visibleSlowlyRight = document.querySelectorAll(".visible-slowly-right");

		if (visibleSlowlyRight.length > 0) {
			const char_come = gsap.utils.toArray(visibleSlowlyRight);
			char_come.forEach((char_come: any) => {
				const split_char = new SplitText(char_come, {
					type: "chars, words",
					lineThreshold: 0.5,
				});
				const tl2 = gsap.timeline({
					scrollTrigger: {
						trigger: char_come,
						start: "top 90%",
						end: "bottom 60%",
						scrub: false,
						markers: false,
						toggleActions: "play none none none",
					},
				});
				tl2.from(split_char.chars, {
					duration: 0.8,
					x: 70,
					autoAlpha: 0,
					stagger: 0.03,
				});
			});
		}

    // Visible From Bottom Animation
		const visibleFromBottom = gsap.utils.toArray(".visible-from-bottom");
    if (visibleFromBottom.length > 0) {
      visibleFromBottom.forEach((splitArea) => {
        if (splitArea instanceof HTMLElement) {
          const trigger = gsap.timeline({
            scrollTrigger: {
              trigger: splitArea,
              start: "top 90%",
              end: "bottom 60%",
              scrub: false,
              markers: false,
            },
          });
          const contentSplitted = new SplitText(splitArea, {
            type: "words, lines",
          });
          gsap.set(splitArea, { perspective: 400 });
          contentSplitted.split({ type: "lines" });
          trigger.from(contentSplitted.lines, {
            duration: 1,
            delay: 0.3,
            opacity: 0,
            rotationX: -75,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1,
          });
        }
      });
    }
     
    // Box Style
    const targetBtn = document.querySelectorAll(".box-style");
		if (targetBtn) {
			targetBtn.forEach((element) => { 
        element.addEventListener("mousemove", (e: Event) => {
          const mouseEvent = e as MouseEvent;
          const x = mouseEvent.offsetX + "px";
          const y = mouseEvent.offsetY + "px";
          (element as HTMLElement).style.setProperty("--x", x);
          (element as HTMLElement).style.setProperty("--y", y);
        }); 

			});
		}

    function revealAnimation(selector: string | string[], axis: string, percent: number, scale: number) {
      gsap.utils.toArray(selector).forEach(function (revealItem) {
				// Check if the revealItem contains an image
				const image = revealItem instanceof Element ? revealItem.querySelector("img") : null
				if (!image) {
					console.warn("No image found in", revealItem);
					return;
				}

				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: revealItem as Element,
						toggleActions: "play none none reverse",
					},
				});

				// Set initial state
				tl.set(revealItem as gsap.TweenTarget, { autoAlpha: 1 })
					.from(revealItem as gsap.TweenTarget, {
						duration: 1.5, // Specify duration directly
						[axis + "Percent"]: -percent, // Use axis + "Percent" for dynamic property names
						ease: "power2.out", // Use string for ease function
					})
					.from(image, {
						duration: 1.5, // Specify duration directly
						[axis + "Percent"]: percent, // Use axis + "Percent" for dynamic property names
						scale: scale,
						delay: -1.5, // Delay for image animation
						ease: "power2.out", // Use string for ease function
					});
			});
    } 

		// Call the function with your selectors
		revealAnimation(".reveal-left", "x", 100, 1.3);
		revealAnimation(".reveal-bottom", "y", 10, 1.3);


    // Visible Slowly From Bottom Animation
		const visibleSlowlyBottom = document.querySelectorAll(".visible-slowly-bottom");
		function visibleSlowly() {
			(visibleSlowlyBottom as any).forEach((splitArea : any) => {
				if (splitArea.anim) {
					splitArea.anim.progress(1).kill();
					splitArea.split.revert();
				}
				splitArea.split = new SplitText(splitArea, {
					type: "lines,words,chars",
					linesClass: "split-line",
				});
				splitArea.anim = gsap.from(splitArea.split.chars, {
					scrollTrigger: {
						trigger: splitArea,
						toggleActions: "restart pause resume reverse",
						start: "top 90%",
					},
					duration: 0.8,
					ease: "circ.out",
					y: 70,
					stagger: 0.02,
				});
			});
		}
		// ScrollTrigger.addEventListener("refresh", visibleSlowly);
		visibleSlowly();

}

export { 
  visibleSlowly,
 
};
