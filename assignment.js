
//code link:    https://github.com/eashin-32/js-assingment
 
//Problem 1--KilometerToMeter!!

function KilometerToMeter(kilo){
    var meter = kilo * 1000;
    return meter
}
var result = KilometerToMeter(2);
console.log(result); 
//solved

//problem 2--budgetCalculator!!

function budgetCalculator(w,m,l){
    var watch = 50;
    var mobile = 100;
    var laptop = 500;
    var total = 0;
    if (watch == 50 && mobile == 100 && laptop == 500) {
        watchPrice = watch* w;
        mobilePrice = mobile * m;
        laptopPrice = laptop * l;
        total = watchPrice + mobilePrice + laptopPrice
    }
    return total;
}

var price = budgetCalculator(2,1,4);
console.log(price);
//solved

//problem 3--hotelCost!!

function hotelCost(staying){
    var cost = 0;

        if(staying <= 10){
            cost = staying * 100
        }
        else if(staying <= 20){
        var first10Days = 10*100;
        var remaining = staying - 10;
        var second10Days = remaining * 80;
            cost = first10Days + second10Days;
        }
        else{
        var first10Days = 10*100;
        var second10Days = 10*80;
        var remaining = staying - 20;
        var after20Days =remaining*50;
        cost = first10Days + second10Days + after20Days
        }
        return cost;
}

var totalCost = hotelCost(12);
console.log(totalCost);
//solved


//problem 4--megaFriend!!

friendsName = ['alan', 'rofik', 'abul kalam', 'abul kalam azad', 'abul ibn saah rahman'];
var maxWord = friendsName[0];

function megaFriend(friendsName) {

    for (var i = 0; i < friendsName.length; i++) {
        var element = friendsName[i];
        if (element.length > maxWord.length) {
            maxWord = element;

        }

    }
    return element;
}
var longestName = megaFriend(friendsName);
console.log(longestName);