import { lowerCase } from 'shared/helpers/lower-case';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Helper | lower-case', (hooks) => {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it works', (assert) => {
    let string1 = 'RANCHER ROCKS!';
    let result = lowerCase([]);

    assert.equal( 'rancher rocks!', result, 'The string should be lowercased.' );
  });
});
