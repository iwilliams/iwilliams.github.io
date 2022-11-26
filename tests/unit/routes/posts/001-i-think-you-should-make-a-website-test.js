import { module, test } from 'qunit';
import { setupTest } from 'iwilliams/tests/helpers';

module('Unit | Route | posts/001-I-Think-You-Should-Make-a-Website', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:posts/001-i-think-you-should-make-a-website');
    assert.ok(route);
  });
});
