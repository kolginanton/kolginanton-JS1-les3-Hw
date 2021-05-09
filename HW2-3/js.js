let productNames = ['cheese', 'milk', 'butter', 'water']; // массив с наименованием товаров
let productPrices = [10, 20, 15, 17]; // массив со стоимость каждого товара
function countBasketPrice() { // функция подсчета итоговой стоимости
    let amount = 0; // переменная со стоимостью товаров в корзине
    for (var i = 0; i < productPrices.length; i++) { // счетчик
        amount = amount + productPrices[i]; // в рамках счетчика складывается стоимость каждого товара из массива
    }
    return amount;
}
alert('Стоимость товаров в корзине ' + countBasketPrice());
console.log(countBasketPrice());