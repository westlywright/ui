import { nlToBr } from 'shared/helpers/nl-to-br';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Helper | nl-to-br', (hooks) => {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it works', (assert) => {
    let result = nlToBr([42]);

    assert.ok(result);
  });
});
