import { World, Testbed } from 'planck/with-testbed';

// Create a world
const world = new World();

// Start simulation
const testbed = Testbed.start(world);

let platform = world.createBody({
  type: "static",
  position: {x: 0, y: -10},
  angle: Math.PI * 0.1
});