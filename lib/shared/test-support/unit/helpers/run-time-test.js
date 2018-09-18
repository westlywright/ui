import { runTime } from 'shared/helpers/run-time';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Helper | run-time', (hooks) => {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it works', (assert) => {
    let result = runTime([42]);

    assert.ok(result);
  });
});
