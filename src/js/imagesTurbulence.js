let turbulences = document.getElementById("turbulence");

const myTimeLine = new TimelineMax({ yoyo: true, repeat: -1 });

myTimeLine.from(
  ".work__images",
  0,
  { x: -100, y: -120, ease: Power2.easeOut },
  0.6
);

myTimeLine.to(turbulences, 10, { attr: { baseFrequency: "0 0" } }, 0);
