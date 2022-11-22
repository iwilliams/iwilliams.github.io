import { module, test } from 'qunit';
import { setupRenderingTest } from 'iwilliams/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | apps/system-information', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Apps::SystemInformation />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Apps::SystemInformation>
        template block text
      </Apps::SystemInformation>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
