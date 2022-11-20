import { module, test } from 'qunit';
import { setupRenderingTest } from 'iwilliams/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | desktop/icon', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Desktop::Icon />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Desktop::Icon>
        template block text
      </Desktop::Icon>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
