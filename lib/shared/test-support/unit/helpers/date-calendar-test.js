import { dateCalendar } from 'shared/helpers/date-calendar';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Helper | date-calendar', (hooks) => {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it works', (assert) => {
    let result = dateCalendar([new Date()]);

    assert.ok(result);
  });
});
