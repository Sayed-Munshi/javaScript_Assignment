https://github.com/Sayed-Munshi/javaScript_Assignment

function kilometerToMeter (kilo){
    var meter = 1000;
    var result = kilo * meter
    return result;
}
var result2 = kilometerToMeter(1);
// console.log(result2);

function budgetCalculator(watch, mobile, laptop){
    var watchPrice = 50;
    var price1 = watch * watchPrice;

    var mobilePrice = 100;
    var price2 = mobile * mobilePrice;

    var laptopPrice = 500;
    var price3 = laptop * laptopPrice;
     var total = price1 + price2 + price3;
     return total;
}

var result = budgetCalculator(2, 2, 2);
// console.log(result);



function hotelCost (days){
    
    if(days > 0 && days <=10){
        return dayCost = days * 100;
    }

    else if(days > 10 && days <=20){
        let newDays = days - 10;
        return dayCost = (newDays * 80) + (10 * 100);
    }

    else if(days > 20){
        let newDays = days - 10;
         newDays = newDays - 20;
        return dayCost = (newDays * 50 ) + (20 * 80) + (10 * 100); 
    }
    else{
        return dayCost = "typing mistake"
    }
}
const totalDays = 15;
let dayCost = 0;

var result = hotelCost(totalDays);
// console.log(result);


function megaFriend(friendName) {
    var str = friendName.split(" ");
    var longest = 0;
    var word = null;
    str.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return word;
}
var result = megaFriend("Sayed Mahmud Disha waz NasirMunshi");
// console.log(result);