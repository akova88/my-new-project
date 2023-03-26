

let productsList = ['Sony Xperia', 'Samsung Galaxy',
                  'Nokia 6', 'Xiaomi Redmi Note 4',
                  'Apple iPhone 6S', 'Xiaomi 5s Plus',
                  'Apple iPhone 8 Plus', 'Fujitsu F-04E',
                  'Oppo A71'
                   ];

function showAllProducts() {
    let content = '';
    for ( var i = 0; i <productsList.length; i++ ) {
        content += '<tr>' + 
                        '<td>'+ productsList[i] +'</td>' +
                        '<td><button onclick="editProduct('+ i +')">Edit</button></td>' +
                        '<td><button onclick="deleteProduct('+ i +')">Xóa</button></td>' +
                    '</tr>' 
    }
document.getElementById('products').innerHTML = content;
document.getElementById('totalProducts').innerText = `${productsList.length} products`; 
}
showAllProducts()


function addProduct () {
    let item = document.getElementById('newProduct').value;
    document.getElementById('newProduct').value = '';
    productsList.push(item);
    showAllProducts();
}

function deleteProduct(index) {
    productsList.splice(index,1);
    showAllProducts();
}

function editProduct(index) {
    let newValue = prompt('Nhập vào tên sp mới:',productsList[index]);
    productsList[index] = newValue;
    showAllProducts();
}





