card1 = {
  hangul: "구",
  english: "'goo'"
};
console.log(card1);

// Chooses between simple, intermediate, and complex flash card decks.
var deckX;

var chooseSimple = document.querySelector(".simple")
  chooseSimple.addEventListener("click", function(){
    console.log("click simple");
    deckX = deck1;
  })
var chooseIntermediate = document.querySelector(".intermediate")
  chooseIntermediate.addEventListener("click", function(){
    console.log("click intermediate");
    deckX = deck2;
  })
var chooseComplex = document.querySelector(".complex")
  chooseComplex.addEventListener("click", function(){
    console.log("click complex");
    deckX = deck3;
  })

// First shot at changing the displayed text when clicked \/ \/ \/ \/
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
// /\ /\ /\ /\ /\ First shot at changing the displayed text when clicked /\ /\


displayCard2 = function(){
  var el = document.querySelector(".flashCard")
  el.innerHTML = (card1.hangul);
}
// displayCard2();


// var clickCard2 = document.querySelector(".cardBottom")
//   clickCard2.addEventListener("click", function(){
//     var el = document.querySelector(".cardBottom")
//     el.innerHTML = (card1.english);
//   })

clickCounter = 0;
var clickCard2 = document.querySelector(".cardBottom")
  clickCard2.addEventListener("click", function(){
    if (clickCounter >= (deckX.length * 2)){
      clickCounter = 0;
    };
      if (clickCounter % 2 == 0){
        var elTop = document.querySelector(".flashCard")
        // var elBottom = document.querySelector(".cardBottom")
        elTop.innerHTML = deckX[parseInt(clickCounter/2)].hangul;
        // elBottom.style.display = "hidden";
      }
      if (clickCounter % 2 == 1){
        var elBottom = document.querySelector(".cardBottom")
        elBottom.innerHTML = deckX[parseInt(clickCounter/2)].english;
      }
      clickCounter++

  })

var clickNext = document.querySelector(".nextButton")
  clickNext.addEventListener("click", function(){
    if (clickCounter >= deckX.length){
      clickCounter = 0;
    };
      var elTop = document.querySelector(".flashCard")
      elTop.innerHTML = deckX[clickCounter].hangul;
      var elBottom = document.querySelector(".cardBottom")
      elBottom.innerHTML = deckX[clickCounter].english;
      clickCounter++

  })

  var clickBack = document.querySelector(".backButton")
    clickBack.addEventListener("click", function(){
      clickCounter--

        var elTop = document.querySelector(".flashCard")
        elTop.innerHTML = deckX[clickCounter].hangul;
        var elBottom = document.querySelector(".cardBottom")
        elBottom.innerHTML = deckX[clickCounter].english;
        if (clickCounter < 1){
          clickCounter = deckX.length;
        };

    })
