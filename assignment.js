function kilometerToMeter(value) {
    //1Km = 1000m
    var meter = value*1000;
    
    return meter;
}
result1 = kilometerToMeter(10);
console.log(result1);
    
function budgetCalculator(watch,phone,laptop) {
    var watchPrice  = watch * 50;
    var phonePrice  = phone * 100;
    var laptopPrice = laptop * 500;
    var total       = (watchPrice + phonePrice + laptopPrice);

    return total;
}
result2 = budgetCalculator(4,5,6);
console.log(result2);

function hotelCost(days){
    var price = 0;
    if(days <= 10){
        price = days*100;
    }else if(days <= 20){
        var firstP  = 10*100;
        var remainP = days - 10;
        var secondP = remainP * 80;
        price = firstP + secondP; 
    }else{
        var firstP  = 10 * 100;
        var secondP = 10 * 80;
        var remainP = days - 20;
        var thirdP  = remainP * 50;
        price       = (firstP + secondP + thirdP); 
    }
    return price;

}
result3 = hotelCost(30);
console.log(result3);







