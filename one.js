class Computer {

    static comuterCount = 0;

    constructor(brand, model, sn, price) {
        this.brand = brand;
        this.model = model;
        this.sn = sn;
        this.price = price;
        Computer.comuterCount++;
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


function createComputer() {
    let enteredPassword = prompt("Enter the Password")
    let flag = verification(enteredPassword);
    if(flag) {
        if(inventory.length > maxComputerCount) {
            alert("Inventory is Full")
            return;
        }
        let brand = prompt("Enter the Brand");
        let model = prompt("Enter the Model");
        let sn = prompt("Enet the SN")
        let price = prompt("Enet the Price")
        let computer  = new Computer(brand, model, sn, price)
    
        this.inventory.push(computer);
        console.log("Computer Created");
        getAllComputers();
    }
    if(!flag){
        window.location.reload();
    }
}

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

// function getAllComputers() {
//     let html = "";
//     let index = 1;
//     inventory.forEach(element => {
//         html = html + "<div style='width: 300px; height: 300px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); padding: 2px 16px; background-color: #D3D3D3;'> "+ 
//         "<h3>Computer " + index +"</h3>" +
//         "<h4>Brand: "+ element.getbrand +"</h4>" +
//         "<h4>Model: "+ element.getmodel +"</h4>" +
//         "<h4>SN: "+ element.getsn +"</h4>" +
//         "<h4>Price: "+ element.getprice +"</h4>" +
//         "</div>" + 
//         "<br>";
//         index++;
//     });
//     document.getElementById('data').innerHTML = html;
// }

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

function getComputerCount() {
    console.log();
    let count = Computer.comuterCount;
    let html = "<h1>Total Count of Computer is :" + count + "</h1>"
    document.getElementById('data').innerHTML = html;
}


function putMaxComputers() {
    alert("Welcome to the Store");
    let maxComputers = prompt("Please set max Computers");
    this.maxComputerCount = maxComputers;
}