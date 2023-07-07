const getProducts = function () {
  const URL = 'https://striveschool-api.herokuapp.com/api/product/'
  fetch(URL, {
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3YjE5NzEyYjUwYzAwMTQ5ZTRlZTYiLCJpYXQiOjE2ODg3MzQ4MTYsImV4cCI6MTY4OTk0NDQxNn0.-uUPKdl1u3ZxaNfOxYsfDykRqbFRlRlxWDdJZpiITGY"
      },
      })
    .then((res) => {
      console.log('Response della GET', res)
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('Errore nella chiamata API')
      }
    })
    .then((products) => {
      console.log('products', products)
      const spinnerContainer = document.getElementById('spinner-container')
      spinnerContainer.classList.add('d-none')
      products.forEach((product) => {
        let newCol = document.createElement('div')
        newCol.classList.add('col', 'col-12', 'col-sm-6', 'col-md-3')
        newCol.innerHTML = `
          <div class="card h-100">
              <img
                src="${product.imageUrl}"
                class="card-img-top"
                alt="concert placeholder image"
              />
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">
                  ${product.description}
                </p>
                <p class="card-text fst-italic">
                  ${product.brand}
                </p>
                <p class="card-text fw-bold text-end">
                  ${product.price}€
                </p>
                <div class="d-flex justify-content-between">
                  <a href="./backoffice.html?id=${product._id}" class="btn btn-primary me-2">Scopri di più</a>
                  <a href="./backoffice.html?id=${product._id}" class="btn btn-warning">Fatto una cazzata?</a>
                </div>
              </div>
            </div>
        `
        const productsRow = document.getElementById('products-row')
        productsRow.appendChild(newCol)
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

getProducts()