function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.popname = function(){
    document.addaddEventListener('keypress', function(){
        alert(this.name);
    });
}

function Food(name, price) {
    Product.call(this, name, price);
}
console.log(new Food('Geese', 7).name);
var meat = new Food('cow meat', 9);
meat.popname();

