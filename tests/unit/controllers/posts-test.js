import { module, test } from 'qunit';
import { setupTest } from 'iwilliams/tests/helpers';

module('Unit | Controller | posts', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:posts');
    assert.ok(controller);
  });
});
