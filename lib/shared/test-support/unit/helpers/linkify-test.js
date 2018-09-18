import { linkify } from 'shared/helpers/linkify';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Helper | linkify', (hooks) => {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it works', (assert) => {
    let result = linkify([42]);

    assert.ok(result);
  });
});
