// Create a world
let world = new World({
  gravity: {x: 0, y: -10},
});

// Start simulation
const testbed = Testbed.start(world);
let platform = world.createBody({
  type: "static",
  position: {x: 0, y: -10},
  angle: Math.PI * 0.1
});