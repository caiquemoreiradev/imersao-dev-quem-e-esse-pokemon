const Pokemons = [
    {
        namePokemon: 'squirtle',
        corretcImage: 'http://assets.stickpng.com/images/580b57fcd9996e24bc43c32a.png',
        shadowImage: 'https://o.remove.bg/downloads/1de7e088-49d2-4521-9e58-46c56eb8a94b/squir-removebg-preview.png',
        type: 'Water'
    },
    {
        namePokemon: 'charmander',
        corretcImage: 'https://o.remove.bg/downloads/cbd42a7f-6d99-47db-a3a2-e7c44b7440fb/charchar-removebg-preview.png',
        shadowImage: 'https://o.remove.bg/downloads/57431e41-b1bd-4222-9041-be7cd71742ba/shadow-char-removebg-preview.png',
        type: 'fire'
    },
    {
        namePokemon: 'bulbassaur',
        corretcImage: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f619ed0-b566-4538-8392-bf02ca7a76cd/dck5gnp-4ba6e734-e9ab-415b-9e73-8a3118bd39d1.png/v1/fill/w_600,h_624,strp/001_bulbasaur_png_0__1__by_andersonaas107_dck5gnp-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02MjQiLCJwYXRoIjoiXC9mXC8xZjYxOWVkMC1iNTY2LTQ1MzgtODM5Mi1iZjAyY2E3YTc2Y2RcL2RjazVnbnAtNGJhNmU3MzQtZTlhYi00MTViLTllNzMtOGEzMTE4YmQzOWQxLnBuZyIsIndpZHRoIjoiPD02MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Vj88q3ukdX7Gww1ya8tuK9Tmsg_cNSVnuYL8-AgPF1M',
        shadowImage: 'https://o.remove.bg/downloads/aef5227e-31ac-400a-8ef9-074c95f3bf2d/bulba-removebg-preview.png',
        type: 'earth'
    },
    {
        namePokemon: 'pikachu',
        shadowImage: 'https://o.remove.bg/downloads/2c3d16bd-f8bd-4384-a90e-790b8c394046/shadow-pikachu-removebg-preview.png',
        corretcImage: 'http://pngimg.com/uploads/pokemon/pokemon_PNG148.png',
        type: 'lighting'
    },
]

let pokemonPosition = 0;

const DOM = {
    guess_poke: document.querySelector('input#guess_poke'),

    pokemonActive: Pokemons[pokemonPosition],

    getValues() {
        return {
            guess_poke: DOM.guess_poke.value,
        }
    },

    validatePoke() {
        let { guess_poke } = DOM.getValues();

        let correct__poke = DOM.pokemonActive.namePokemon;

        if(guess_poke != correct__poke) {
            DOM.wrongPoke();
        }

        else if(guess_poke == correct__poke) {
            DOM.correctPoke()
        }

        DOM.clearValues();
    },

    correctPoke() {
        document.querySelector('.pokemon__correct').src = DOM.pokemonActive.corretcImage;
        document.querySelector('.correct_pokemon__type').innerHTML = `Type: ${DOM.pokemonActive.type}`;
        document.querySelector('#nameCorrectPoke').innerHTML = DOM.pokemonActive.namePokemon;

        document.querySelector('#pokemon_wrong').classList.add('hide');

        document.querySelector('#pokemon_correct').classList.remove('hide');

        pokemonPosition++;
        DOM.pokemonActive = Pokemons[pokemonPosition];
    },

    wrongPoke() {
        document.querySelector('#wrong').classList.remove('hide');

        setTimeout(() => document.querySelector('#wrong').classList.add('hide'), 2000)
    },

    clearValues() {
        DOM.guess_poke.value = '';
    }
}

const APP = {

    init() {
        document.querySelector('.pokemon__type').innerHTML = `Type: ${DOM.pokemonActive.type}`
        document.querySelector('.pokemon__shadow').src = DOM.pokemonActive.shadowImage;

        document.querySelector('#pokemon_correct').classList.add('hide');
        document.querySelector('#pokemon_wrong').classList.remove('hide');

        console.log(DOM.pokemonActive);
    },

    reload() {
        APP.init();

        DOM.clearValues();
    }
}

APP.init();

