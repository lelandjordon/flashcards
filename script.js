card1 = {
  hangul: "구",
  english: "'goo'"
};
console.log(card1);


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
    if (clickCounter >= (deck1.length * 2)){
      clickCounter = 0;
    };
      if (clickCounter % 2 == 0){
        var elTop = document.querySelector(".flashCard")
        elTop.innerHTML = deck1[parseInt(clickCounter/2)].hangul;
      }
      if (clickCounter % 2 == 1){
        var elBottom = document.querySelector(".cardBottom")
        elBottom.innerHTML = deck1[parseInt(clickCounter/2)].english;
      }
      clickCounter++

  })

var clickNext = document.querySelector(".nextButton")
  clickNext.addEventListener("click", function(){
    if (clickCounter >= deck1.length){
      clickCounter = 0;
    };
      var elTop = document.querySelector(".flashCard")
      elTop.innerHTML = deck1[clickCounter].hangul;
      var elBottom = document.querySelector(".cardBottom")
      elBottom.innerHTML = deck1[clickCounter].english;
      clickCounter++

  })

  var clickBack = document.querySelector(".backButton")
    clickBack.addEventListener("click", function(){
      clickCounter--

        var elTop = document.querySelector(".flashCard")
        elTop.innerHTML = deck1[clickCounter].hangul;
        var elBottom = document.querySelector(".cardBottom")
        elBottom.innerHTML = deck1[clickCounter].english;
        if (clickCounter < 1){
          clickCounter = deck1.length;
        };

    })
