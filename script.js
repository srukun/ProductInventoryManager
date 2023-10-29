class Product{
    #name;
    #price;
    #number;

    constructor(name, price, number){
        this.#name = name;
        this.#price = price;
        this.#number = number;
    }
    get name(){
        return this.#name;
    }
    get price(){
        return this.#price;
    }
    get number(){
        return this.#number;
    }

    set name(name){
        this.#name = name;
    }
    set price(price){
        this.#price = price;
    }
    set number(number){
        this.#number = number;
    }
    compareTo(product) {
        
    }

}


class InventoryManager{
    #inventory;
    constructor(){
        this.#inventory = new Map();
    }
    find(name){
        for(const [key, value] of this.#inventory.entries()){
            console.log(key.name);
            if(name == key.name){
                return true;
            }
        }
        return false;
    }
    get inventory(){
        return this.#inventory;
    }
    addProduct(name, price, number){
        for(const [key, value] of this.#inventory.entries()){
            if(number == key.number){
                this.#inventory.set(key, value + 1);
                return;
            }
        }
        const product = new Product(name, price, number);
        this.#inventory.set(product, 1);
    }

}

//MAIN BODY
let im = new InventoryManager();

function addProduct(){



    let productName = document.getElementById("input-product-name");
    let productPrice = document.getElementById("input-product-price");
    let productNumber = document.getElementById("input-product-number");
    if(productName.value.length < 1 || productPrice.value.length < 1 || productNumber.value.length < 1){
        alert("Error: Please check you have enetered information for all input fields");
        return;
    }
    resetTable();
    im.addProduct(productName.value, parseFloat(productPrice.value), parseInt(productNumber.value));
    //reset input fields
    productName.value = "";
    productPrice.value = "";
    productNumber.value = "";
    displayInventory();
    
}

//FUNCTIONS
function resetTable(){
    //reset table
    let tableBody = document.getElementById("inventory-table");
    tableBody.innerHTML = "";

    let tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');

    td1.appendChild(document.createTextNode("Name"));
    td2.appendChild(document.createTextNode("Price"));
    td3.appendChild(document.createTextNode("Number"));
    td4.appendChild(document.createTextNode("Quantity"));

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    tableBody.appendChild(tr);

}
function displayInventory(){
    let tableBody = document.getElementById("inventory-table");

    for(const[key, value] of im.inventory.entries()){
        const tr = document.createElement("tr");
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        
        td1.appendChild(document.createTextNode(key.name));
        td2.appendChild(document.createTextNode("$" + key.price));
        td3.appendChild(document.createTextNode(key.number));
        td4.appendChild(document.createTextNode("x " + value));

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tableBody.appendChild(tr);
    }
}

function deleteProduct(){
    document.getElementById('button-test').parentElement.parentElement.remove();
}