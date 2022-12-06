import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';

const GOLD = htmlSafe("#fff2a8");
const COLORLESS = htmlSafe("#e8e6e3");
const WHITE = htmlSafe("#fcfbee");
const BLUE = htmlSafe("#d2e2ef");
const BLACK = htmlSafe("#ddd7d3");
const RED = htmlSafe("#edbca6");
const GREEN = htmlSafe("#d0dec9");

export default class AppsCohostMtgCardSummaryComponent extends Component {
    get backgroundColor() {
        let { color_identity: identity, colors, type_line, layout } = this.args.card;

        if (layout === "transform") {
            colors = this.args.card.card_faces[0].colors;
        }

        if (!type_line.includes("Land")) {
            identity = colors;
        }

        if (identity.length > 1) {
            return GOLD;
        } else if (identity.length < 1) {
            return COLORLESS;
        }

        identity = identity[0];

        if (identity === "W") {
            return WHITE;
        } else if (identity === "U") {
            return BLUE;
        } else if (identity === "B") {
            return BLACK;
        } else if (identity === "R") {
            return RED;
        } else if (identity === "G") {
            return GREEN;
        }

        return COLORLESS;
    }

    get style() {
        return htmlSafe(`cursor: pointer;display:flex;background: ${this.backgroundColor};padding: 5px;box-shadow: inset -1px 1px 2px white, inset 1px -1px 2px black;border-radius: 5px;border: 1px solid black;`);
    }
}
