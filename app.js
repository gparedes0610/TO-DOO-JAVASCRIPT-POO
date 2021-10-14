class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

class UI {
  addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = `
    <div class="card text-center mb-4">
                    <div class="card-body">
                        <strong>Product</strong> : ${product.name}
                        <strong>Price</strong> : ${product.price}
                        <strong>Year</strong> : ${product.year}
                        <a href='#' class='btn btn-danger mx-4 eliminar' >Delete</a>
                    </div>
                </div>
    `;
    productList.appendChild(element);
    this.resetForm();
  }
  resetForm() {
    document.getElementById("product-form").reset();
  }

  deleteProduct(element) {
    if ((element.classList = "eliminar")) {
      console.log("diste click en eliminar");
      element.parentElement.parentElement.parentElement.remove();
      this.showMessage("Product Deletd", "danger");
    }
  }

  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass}`;
    div.appendChild(document.createTextNode(message));
    //mostrar en el dom
    const container = document.querySelector(".containerform");
    const app = document.querySelector("#app");
    container.insertBefore(div, app); // se lee como div estara antes de app

    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 2500);
  }
}
///DOM event

document.getElementById("product-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const year = document.getElementById("year").value;
  console.log(name, price, year);
  const product = new Product(name, price, year);
  const ui = new UI();

  if (name === "" || price === "" || year === "") {
    ui.showMessage("Agrege Datos por favor", "danger");
    return;
  }

  ui.addProduct(product);
  ui.showMessage("Producto agregado", "success");
});
document.getElementById("product-list").addEventListener("click", (e) => {
  if (e.target.classList.contains("eliminar")) {
    const ui = new UI();
    ui.deleteProduct(e.target);
  }
});
