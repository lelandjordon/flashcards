// Build a deck of flash cards ----
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
console.log(deck1);

deck2 = []
function deck2Add(h, e){
  var card = {hangul: h, english: e}
  deck2.push(card);
}
deck2Add("가", "ga");
deck2Add("까", "ka");
deck2Add("더", "deoh");
deck2Add("떠", "teoh");
console.log(deck2);