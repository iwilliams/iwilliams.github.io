import Component from '@glimmer/component';

export default class AppsCohostMtgCardNameComponent extends Component {
    get cardName() {
        const { name, layout } = this.args.card;
        let cardName = name;
        if (layout === "transform") {
            cardName = this.args.card.card_faces[0].name;
        }
        return cardName;
    }
}
