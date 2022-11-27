import Service from '@ember/service';
import { marked } from 'marked';

export default class MarkdownService extends Service {
    constructor() {
        super(...arguments);

        const renderer = {
            paragraph(text) {
                return `<p class="indent-4 mb-4">${text}</p>\n`;
            },

            link(href, title, text) {
                return marked.Renderer.prototype.link.call(this, href, title, text).replace('<a ', '<a class="external-link text-red-600 hover:underline" ');
            },

            image(href, title, text) {
                return marked.Renderer.prototype.image.call(this, href, title, text).replace('<img ', '<img class="mx-auto m-w-full" ');
            }
          };

        const youtube = {
            name: 'youtube',
            level: 'block',                                     // Is this a block-level or inline-level tokenizer?
            start(src) { return src.match(/^https\:\/\/www\.youtube\.com\/embed\/([A-z0-9])*/)?.index; }, // Hint to Marked.js to stop and check for a match
            tokenizer(src, tokens) {
                const rule = /^https\:\/\/www\.youtube\.com\/embed\/([A-z0-9])*/;    // Regex for the complete token, anchor to string start
                const match = rule.exec(src);
                if (match) {
                    const token = {                                 // Token to generate
                        type: 'youtube',                      // Should match "name" above
                        raw: match[0],                                // Text to consume from the source
                        text: match[0].trim(),                        // Additional custom properties
                        tokens: []                                    // Array where child inline tokens will be generated
                    };
                    return token;
                }
            },
            renderer(token) {
                return `<iframe class="mx-auto mb-4 max-w-full" width="560" height="315" src="${token.raw}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            }
        };

        marked.use({ renderer, extensions: [youtube] });
    }

    toHtml(markdown) {
        return marked.parse(markdown);
    }
}
