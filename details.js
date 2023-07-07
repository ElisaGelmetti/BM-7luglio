const URL = 'https://striveschool-api.herokuapp.com/api/product/'

const addressBarContent = new URLSearchParams(location.search)

const productId = addressBarContent.get('id')
console.log('productID', productId)
console.log(URL + productId)

fetch(URL + productId,{
  headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3YjE5NzEyYjUwYzAwMTQ5ZTRlZTYiLCJpYXQiOjE2ODg3MzQ4MTYsImV4cCI6MTY4OTk0NDQxNn0.-uUPKdl1u3ZxaNfOxYsfDykRqbFRlRlxWDdJZpiITGY"
    },
    }
    )
  .then((res) => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error("Errore")
    }
  })
  .then((detail) => {
    console.log('DETAIL', detail)
    const spinnerContainer = document.getElementById('spinner-container')
    spinnerContainer.classList.add('d-none')
    let newCol = document.createElement('div')
    newCol.classList.add('col', 'col-12', 'col-sm-8', 'text-center')
    newCol.innerHTML = `
          <div class="card">
              <img
                src="${detail.imageUrl}"
                class="card-img-top"
                alt="img"
              />
              <div class="card-body fs-4">
                <h2 class="card-title">${detail.name}</h2>
                <p class="card-text">
                  ${detail.description}
                </p>
                <p class="card-text fst-italic">
                  ${detail.brand}
                </p>
                <p class="card-text fw-bold">
                  ${detail.price}€
                </p>               
              </div>
            </div>
        `
    const productRow = document.getElementById('products-row')
    productRow.appendChild(newCol)
  })
  .catch((err) => {
    console.log(err)
  })