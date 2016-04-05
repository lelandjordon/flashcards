// Build a deck of flash cards ----

//Simple deck
deck1 = []
function deckAdd(h, e){
  var card = {hangul: h, english: e}
  deck1.push(card);
}
deckAdd("ㅏ", "ah");
deckAdd("ㅗ", "oh");
deckAdd("다", "da");
deckAdd("도", "doh");
deckAdd("바", "ba");
deckAdd("부", "boo");
deckAdd("두", "doo");
deckAdd("고", "goh");
deckAdd("마", "ma");
deckAdd("미", "mi");
deckAdd("매", "mae");
deckAdd("해", "hae");
deckAdd("자", "jah");
deckAdd("차", "cha");
console.log(deck1.length);

// Medium deck2
deck2 = []
function deck2Add(h, e){
  var card = {hangul: h, english: e}
  deck2.push(card);
}
deck2Add("가", "ga");
deck2Add("까", "ka");
deck2Add("더", "deoh");
deck2Add("떠", "teoh");
deck2Add("바", "bah");
deck2Add("뻐", "poh");

console.log(deck2);

// Complicated deck3
deck3 =[]
function deck3Add(h, e){
  var card = {hangul: h, english: e}
  deck3.push(card);
}
deck3Add("김", "kim");
deck3Add("꽝", "kwahng");
deck3Add("형", "hyeong");
