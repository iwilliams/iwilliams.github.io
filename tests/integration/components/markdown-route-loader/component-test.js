import { module, test } from 'qunit';
import { setupRenderingTest } from 'iwilliams/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | markdown-route-loader', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<MarkdownRouteLoader />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <MarkdownRouteLoader>
        template block text
      </MarkdownRouteLoader>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
