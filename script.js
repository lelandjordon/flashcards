card1 = {
  hangul: "구",
  english: "'goo'"
};
console.log(card1);

// Build a deck of flash cards ----
deck1 = []
function deckAdd(h, e){
  var card = {hangul: h, english: e}
  deck1.push(card);
}
deckAdd("다", "da");
deckAdd("두", "doo");
deckAdd("바", "ba");
deckAdd("부", "boo");
console.log(deck1);

titleCard = function(){
  var el = document.querySelector(".flash_card")
  el.innerHTML = ("한글")
}
titleCard();

displayCard = function(){
  var el = document.querySelector(".flash_card")
  el.innerHTML = (card1.hangul);
}
// displayCard();

var clickCard = document.querySelector(".flash_card")
  clickCard.addEventListener("click", function(){
    var el = document.querySelector(".flash_card")
    el.innerHTML = (card1.english);
  })

displayCard2 = function(){
  var el = document.querySelector(".flashCard")
  el.innerHTML = (card1.hangul);
}
// displayCard2();


var clickCard2 = document.querySelector(".cardBottom")
  clickCard2.addEventListener("click", function(){
    var el = document.querySelector(".cardBottom")
    el.innerHTML = (card1.english);
  })

clickCounter = 0;
var clickCard2 = document.querySelector(".cardBottom")
  clickCard2.addEventListener("click", function(){
    var elTop = document.querySelector(".flashCard")
    elTop.innerHTML = deck1[clickCounter].hangul;
    var elBottom = document.querySelector(".cardBottom")
    elBottom.innerHTML = deck1[clickCounter].english;
    clickCounter++
  })
