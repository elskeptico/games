import { World, Testbed } from 'planck/with-testbed';

// You can select and edit drawing objects
// Click once to select and edit a body
// Click twice to select and edit a fixture

const { Testbed } = planck;

const testbed = Testbed.start();

const car = testbed.findOne('body#car');

if (!car) {
  testbed.status('Car not found!');
  return;
}

car.setLinearVelocity(planck.Vec2(15.0, -5.0));

testbed.step = function () {
  const cp = car.getPosition();
  if (cp.x > testbed.x + 60) {
    testbed.x = cp.x - 60;
  } else if (cp.x < testbed.x - 60) {
    testbed.x = cp.x + 60;
  }
  if (cp.y > -testbed.y + 30) {
    testbed.y = -(cp.y - 30);
  } else if (cp.y < -testbed.y - 30) {
    testbed.y = -(cp.y + 30);
  }
  testbed.width *= 1.001;
};
