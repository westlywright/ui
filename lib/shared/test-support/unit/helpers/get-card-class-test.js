import { getCardClass } from 'shared/helpers/get-card-class';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Helper | get-card-class', (hooks) => {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it works', (assert) => {
    let result = getCardClass(['Visa']);

    assert.ok(result);
  });
});
