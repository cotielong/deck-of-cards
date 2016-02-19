/**
 * Fisher-Yates random shuffle via https://github.com/coolaj86/knuth-shuffle
 * Not added to Array.prototype to avoid becoming enumerable.
 * @param {Array} array The array to shuffle.
 * @return {Array} array The shuffled array.
 */
function shuffle(array){
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
};
