import { module, test } from 'qunit';
import { setupTest } from 'iwilliams/tests/helpers';

module('Unit | Route | posts/index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:posts/index');
    assert.ok(route);
  });
});
