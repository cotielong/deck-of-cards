/**
 * TODO:
 * Animate the cards in place. Move them in the DOM when the game loads, then animate them into place. This
 * supports progressive enhancement if server-side rendering were used.
 * Set up drag and drop with React.
 *
 */

var _45678910 = "45678910"; //["4", "5", "6", "7", "8", "9", "10"];
var _678910 = "678910"; //["6", "7", "8", "9", "10"];
var _910 = "910"; //["9", "10"];
var _23810 = "23810"; //["2", "3", "8", "10"];
var _359 = "359"; //["3", "5", "9"];
var _23810 = "23810";
var _237810 = "237810"; //["2", "3", "7", "8", "10"];
var _jqka = "JQKA";
var nbsp = "\u00A0";

var suits = ["hearts", "diams", "clubs", "spades"];
var entities = {
    "hearts": "\u2666",
    "diams": "\u2665",
    "clubs": "\u2663",
    "spades": "\u2660"
}
var cards = [];
var numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
for (var i = 0; i < numbers.length; i++) {
    for (var j = 0; j < suits.length; j++) {
        cards.push({
            number: numbers[i],
            suit: suits[j],
            entity: entities[suits[j]]
        });
    }
}

var GameStatus = {
    NOTSTARTED: 0,
    FINISHED: 1,
    INPROGRESS: 2
};

var PlayerStatus = {
    LOST: 0,
    WON: 1
};

var GameComponent = React.createClass({
    startGame: function () {
        // Is this supposed to be in shouldComponentUpdate?
        // This sould be unncessary if this.startGame() was
        // only called on user-initiation, rather than page load.
        if(this.state.status === GameStatus.INPROGRESS){
            return;
        }

    },

    getInitialState: function () {
        // get our own copy of the cards array, shuffled
        var cards = shuffle(this.props.cards.slice());

        return {
            stack1: cards.slice(0, 1),
            stack2: cards.slice(1, 3),
            stack3: cards.slice(3, 6),
            stack4: cards.slice(6, 10),
            stack5: cards.slice(10, 15),
            stack6: cards.slice(15, 21),
            stack7: cards.slice(21, 28),
            deck: cards.slice(28),
            status: GameStatus.INPROGRESS
        };
    },
    render: function () {
        return (
            <BoardComponent {...this.props} />
        );
    }
});

var BoardComponent = React.createClass({
    getInitialState: function () {
        console.log("BoardComponent props", this.props);

        return null;
    },
    render: function () {
        return (
            <div id="board">
                <div className="row clear">
                    <DeckComponent cards={cards}/>
                    <PileComponent />
                    <FoundationsComponent />
                </div>
                <div className="row clear">
                    <StacksComponent />
                </div>
            </div>
        );
    }
});

var DeckComponent = React.createClass({
    render: function () {
        console.log(this.state);
        var shuffledCards = shuffle(this.props.cards);

        var cards = shuffledCards.map(function (card, i) {
            return (
                <CardComponent
                    key={i}
                    number={card.number}
                    suit={card.suit}
                    entity={card.entity} />
            );
        });

        return (
            <div id="deck" className="card-holder">
                { cards }
            </div>
        );
    }
});
var PileComponent = React.createClass({
    render: function () {
        return (
            <div id="pile" className="card-holder">
                <div className="empty-card-slot"></div>
                <span className="instructions">Click or tap on deck to draw</span>
            </div>
        );
    }
});

var FoundationsComponent = React.createClass({
    render: function () {
        return (
            <div id="foundations">
                <FoundationComponent foundationNumber="1"/>
                <FoundationComponent foundationNumber="2"/>
                <FoundationComponent foundationNumber="3"/>
                <FoundationComponent foundationNumber="4"/>
            </div>
        );
    }
});

var FoundationComponent = React.createClass({
    render: function () {
        return (
            <div className={"foundation foundation-" + this.props.foundationNumber + " card-holder"}>
                <div className="empty-card-slot"></div>
            </div>
        );
    }
});

var StacksComponent = React.createClass({
    render: function () {
        return (
            <div id="stacks">
                <StackComponent stackNumber="1"/>
                <StackComponent stackNumber="2"/>
                <StackComponent stackNumber="3"/>
                <StackComponent stackNumber="4"/>
                <StackComponent stackNumber="5"/>
                <StackComponent stackNumber="6"/>
                <StackComponent stackNumber="7"/>
            </div>
        );
    }
});

var StackComponent = React.createClass({
    render: function () {
        return (
            <div className={"stack stack-" + this.props.stackNumber + " card-holder"}>
                <div className="empty-card-slot"></div>
            </div>
        );
    }
});

var CardComponent = React.createClass({

    render: function () {
        return (
            <div id={"card-" + this.props.number + "-" + this.props.suit}
                 className={"flipped card " + this.props.suit + " " + "number-" + this.props.number}>
                <div className="flipper">
                    <div className="front">
                        <div className="card-block upper-left">
                            <div className="number">{this.props.number}</div>
                            <div className="suit">{this.props.entity}</div>
                        </div>
                        <div className="card-block center">
                            <div className="col left">
                                <div
                                    className="row one top">{_45678910.indexOf(this.props.number) !== -1 ? this.props.entity : nbsp}</div>
                                <div
                                    className="row two">{_678910.indexOf(this.props.number) !== -1 ? this.props.entity : nbsp}</div>
                                <div
                                    className="row three">{_910.indexOf(this.props.number) !== -1 ? this.props.entity : nbsp}</div>
                                <div
                                    className="row four bottom">{_45678910.indexOf(this.props.number) !== -1 ? this.props.entity : nbsp}</div>
                            </div>
                            <div className="col center">
                                <div
                                    className="row one top">{_23810.indexOf(this.props.number) !== -1 ? this.props.entity : nbsp}</div>
                                <div
                                    className="row two">{_359.indexOf(this.props.number) !== -1 || _jqka.indexOf(this.props.number) !== -1 ? this.props.entity : nbsp}</div>
                                <div
                                    className="row three bottom">{_237810.indexOf(this.props.number) !== -1 ? this.props.entity : nbsp}</div>
                            </div>
                            <div className="col right">
                                <div
                                    className="row one top">{_45678910.indexOf(this.props.number) !== -1 ? this.props.entity : nbsp}</div>
                                <div
                                    className="row two">{_678910.indexOf(this.props.number) !== -1 ? this.props.entity : nbsp}</div>
                                <div
                                    className="row three">{_910.indexOf(this.props.number) !== -1 ? this.props.entity : nbsp}</div>
                                <div
                                    className="row four bottom">{_45678910.indexOf(this.props.number) !== -1 ? this.props.entity : nbsp}</div>
                            </div>
                        </div>
                        <div className="card-block lower-right">
                            <div className="number">{this.props.number}</div>
                            <div className="suit">{this.props.entity}</div>
                        </div>
                    </div>
                    <div className="back"></div>
                </div>
            </div>
        );
    }
});

React.render(
    <GameComponent cards={ cards } />,
    document.getElementById('game')
);