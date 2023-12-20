let game = {

    techs: ['bootstrap',
    'css',
    'html',
    'javascript',
    'react',
    'firebase',
    'electron',
    'mongo',
    'node',
    'jquery'],

    cards: null,



    createCardsFromTechs: function() {

        this.cards = [];
    
        this.techs.forEach((tech) => {
            this.cards.push(this.createPairFromTech(tech))
        });
        
        this.cards = this.cards.flatMap(pair => pair);
        this.shuffleCards();
        return this.cards;

    },

    createPairFromTech: function(tech) {
        return [{
            id: this.createWithTech(tech),
            icon: tech,
            flipped: false,
        }, {
            id: this.createWithTech(tech),
            icon: tech,
            flipped: false,
        }]
    },

    createWithTech: function(tech) {
        return tech + parseInt(Math.random() * 1000);
    },

    shuffleCards: function(cards) {
        let currentIndex = this.cards.length;
        let randomIndex = 0;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
        }
    }
}