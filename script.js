card1 = {
  hangul: "구",
  english: "'goo'"
};
console.log(card1);

displayCard = function(){
  var el = document.querySelector(".flash_card")
  el.innerHTML = (card1.hangul);
}
displayCard();

var clickCard = document.querySelector(".flash_card")
  clickCard.addEventListener("click", function(){
    var el = document.querySelector(".flash_card")
    el.innerHTML = (card1.english);
  })

displayCard2 = function(){
  var el = document.querySelector(".flashCard")
  el.innerHTML = (card1.hangul);
}
displayCard2();

var clickCard2 = document.querySelector(".flashCard")
  clickCard2.addEventListener("click", function(){
    var el = document.querySelector(".flashCard")
    el.innerHTML = (card1.english);
  })
