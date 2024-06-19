document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("barba-overlay");
  const childElements = document.querySelectorAll(".child");
  const transitionLogo = document.querySelectorAll(".child img");

  barba.init({
    transitions: [
      {
        name: "overlay-transition",
        leave(data) {
          const timelineLeave = gsap.timeline();

          // Animate current container opacity to 0
          timelineLeave.to(data.current.container, {
            opacity: 0,
            duration: 0.1,
          });

          // Animate overlay in
          timelineLeave.to(overlay, {
            opacity: 1,
            duration: 0,
          });

          // Animate child elements with stagger IN
          timelineLeave.to(childElements, {
            stagger: 0.3,
            width: "100%",
            duration: 0.4,
            delay: 0.2,
            ease: "expoScale.out",
          });

          //Animate nocoderealm logo IN
          timelineLeave.to(transitionLogo, {
            opacity: 1,
            y: 100,
            duration: 0.2,
          });

          //Animate nocoderealm logo OUT
          timelineLeave.to(transitionLogo, {
            delay: 0.2,
            opacity: 0,
            y: 200,
            duration: 0.4,
          });

          // Animate child elements with stagger OUT
          timelineLeave.to(childElements, {
            width: "0%",
            duration: 0.4,
            ease: "expoScale.out",
          });

          // Return the timeline
          return timelineLeave;
        },
        enter(data) {
          // Create new timeline for Entering the page
          const timelineEnter = gsap.timeline();

          // Reset positions of animated elements
          timelineEnter.set(childElements, { width: "0%" });
          timelineEnter.set(transitionLogo, { opacity: 0, y: 0 });
          timelineEnter.set(overlay, { opacity: 0 });

          // Animate next container opacity IN
          timelineEnter.from(data.next.container, {
            opacity: 0,
            duration: 0.2,
          });
        },
      },
    ],
  });
});
