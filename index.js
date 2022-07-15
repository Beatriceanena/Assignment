
var kiosk=[
    {
    name :"Orange",
    price : 30,
    },
    {
    name :"Banana",
    price : 50,
    },
    {
    name :"Pineaple",
    price : 20,
    }]
    function getTotalCost(name,quantity){
    let s=kiosk.find(item=>item.name===name)
    console.log(`${quantity} ${name} for KES ${s.price*quantity}`)
    }
    getTotalCost("Banana",2)
    
    class KioskCalc {
    constructor(fruit, quantity){
    this.fruit = fruit
    this.quantity = quantity
    this.fruitPriceList = {"Orange": 50, "Mango": 40, "Avocado": 30 };
    this.getTotalCost = function () {
    return ` ${quantity} ${fruit} for KES ${quantity * this.fruitPriceList[fruit]}`
    }
    }
    }
    KioskCalc.prototype.price = 30;
    
    var kiosk = new KioskCalc('Mango', 2);
    console.log(kiosk.getTotalCost());