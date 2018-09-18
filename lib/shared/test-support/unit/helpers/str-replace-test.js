import { strReplace } from 'shared/helpers/str-replace';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Helper | str-replace', (hooks) => {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it works', (assert) => {
    let string1 = 'Foo Bar';
    let string2 = 'Baz Bar';
    let stringReplacement = 'Baz';
    let optsHash = {
      match: 'Foo',
      with:  stringReplacement,
    };
    let result = strReplace([string1], optsHash);

    assert.equal(result, string2, 'String Foo should be replaced with Baz');
  });
});
