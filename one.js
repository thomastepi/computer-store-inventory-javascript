// Computer class used to create different objects of same type
class Computer {

    static computerCount = 0;

    constructor(brand, model, sn, price) {
        this.brand = brand;
        this.model = model;
        this.sn = sn;
        this.price = price;
        Computer.computerCount++;
    }

    get getbrand() {
        return this.brand;
    }

    set setbrand(brand) {
        this.brand = brand;
    }
    
    get getmodel() {
        return this.model;
    }

    set setmodel(model) {
        this.model = model;
    }

    get getsn() {
        return this.sn;
    }

    set setsn(sn) {
        this.sn = sn;
    }

    get getprice() {
        return this.price;
    }

    set setprice(price) {
        this.price = price;
    }

    get getcount() {
        return this.count;
    }
    
}

var inventory = [];
var maxComputerCount = 0;
var password = 'password'

// create computer object with valid values for SN and Price (Regular Expressions)
function createComputer() {
    let enteredPassword = prompt("Enter the Password")
    let flag = verification(enteredPassword);
    if(flag) {
        if(inventory.length >= maxComputerCount) {
            alert("Inventory is Full")
            return;
        }
        let brand = prompt("Enter the Brand");
        let model = prompt("Enter the Model");
        let sn = prompt("Enter the SN")
        let reg_sn = /\d{3}-?\d{3}-?\d{3}/gm;
        let reg_price = /^\d+(?:\.\d{1,2})?$/gm
        
        while(!(reg_sn.test(sn))){
            sn = prompt("Invalid SN! \nSN should be 9 digits in the order \nXXX-XXX-XXX \nPlease re-enter the SN")
        }
        let price = prompt("Enter the Price")
        while(!(reg_price.test(price))){
            price = prompt("Invalid Price! \nPlease re-enter the price")
        }
        let computer  = new Computer(brand, model, sn, price)
        
        // push each computer object created into the inventory array and log on the console
        this.inventory.push(computer);
        console.log("Computer Created");
        console.log(this.inventory)
        getAllComputers();
    }
    if(!flag){
        window.location.reload();
    }
}

// verify password and reload page after 3 failed attempts
function verification(enteredPassword) {
    let flag = true;
    let flagCount = 0;
    if(password == enteredPassword) {
        return true;
    }
    while(flag) {
        enteredPassword = prompt("Wrong Password \n Enter the Password");
        if(password == enteredPassword) {
            return true;
        }
        if(flagCount == 1) {
            flag = false;
        }
        flagCount++;
    }
    return false;
}

// Display all computer with their info after creation of computer object
function getAllComputers() {
    let html = "";
    let index = 1;
    inventory.forEach(element => {
        html = html + "<div> "+ 
        "<h3>Computer " + index +"</h3>" +
        "<h4>Brand: "+ element.getbrand +"</h4>" +
        "<h4>Model: "+ element.getmodel +"</h4>" +
        "<h4>SN: "+ element.getsn +"</h4>" +
        "<h4>Price: "+ element.getprice +"</h4>" +
        "</div>" + 
        "<br>";
        index++;
    });
    document.getElementById('data').innerHTML = html;
}

// record number of computer objects created
function getComputerCount() {
    let count = Computer.computerCount;
    let html = "<h1>Total Count of Computer is: " + count + "</h1>"
    document.getElementById('data').innerHTML = html;
}

// maximum number of objects to be created
function putMaxComputers() {
    alert("Welcome to the Store");
    let maxComputers = prompt("Please set max number of computers");
    this.maxComputerCount = maxComputers;
}