import { module, test } from 'qunit';
import { setupTest } from 'iwilliams/tests/helpers';

module('Unit | Service | window-manager', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:window-manager');
    assert.ok(service);
  });
});
