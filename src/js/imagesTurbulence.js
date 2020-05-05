const turbulences = document.getElementById("turbulence");
const displacement = document.getElementById("displacement");

myTimeLine = new TimelineMax({ paused: true, yoyo: true, repeat: -1 });

myTimeLine.to(
  turbulences,
  10,
  { attr: { numOctaves: 0, baseFrequency: "0 0" } },
  0
);

myTimeLine.play();
