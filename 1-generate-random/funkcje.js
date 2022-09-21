function random (min, max){

    let losowa = Math.floor(Math.random()*(max-min+1)+min);

    return losowa;
}
//console.log(random(0,50));

function losowyString(n) {

    let losowy = "";
    let znaki = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (let i = 0; i < n; i++)

    {
      losowy += znaki.charAt(Math.floor(Math.random() * znaki.length));
    }

    return losowy;
  }
//console.log(losowyString(20));

function losowaTablica (min,max,n){

    let tablica = [];
    for (let i = 0; i<n; i++)

    { 
        tablica[i] = random(min, max);
    }
    
    return tablica;
}
module.exports = {
  random : random,
  losowyString : losowyString,
  losowaTablica : losowaTablica
}
//console.log(losowaTablica(0,50,50));