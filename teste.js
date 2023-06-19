(function() {
    function getProducts() {
        var xhr = new XMLHttpRequest();
      
        xhr.open('GET', 'https://api.tiendanube.com/v1/2622861/products');
        xhr.setRequestHeader('Authentication', 'bearer 4ccee43e6d5718186395e61a89633d551f65eff2');
        
        xhr.onload = function() {
          if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            var products = data;
      

            for (var i = 0; i < products.length; i++) {
              var produto = products[id];
              var nome = produto['name'];
              var preco = produto['price'];
              var imagem = produto['image'];
      
              
              console.log('Nome:', nome);
              console.log('Preço:', preco);
              console.log('Imagem:', imagem);
              
            }
          } else {
            console.error('Ocorreu um erro:', xhr.status);
          }
        };
      
        xhr.onerror = function() {
          console.error('Ocorreu um erro na requisição.');
        };
      
        xhr.send();
      }
      
      getProducts();
      

  var products = getProducts(); 
  
  
  products.forEach(function(product) {
    
    var favoritesButton = document.createElement('button');
    favoritesButton.textContent = 'Adicionar aos Favoritos';
    favoritesButton.addEventListener('click', function() {
      addToFavorites(product.id, product.name);
    });
    productElement.appendChild(favoritesButton);
    
    // Adiciona o elemento de produto ao container
    productsContainer.appendChild(productElement);
  });
  
 
  function addToFavorites(productId, productName) {

    // lógica para adicionar o produto na lista de favoritos

    console.log('Produto adicionado aos favoritos:', productId, productName);
  }
})();
