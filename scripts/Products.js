import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}




document.addEventListener (
    "click",
    (clickEvent) => {
        if (clickEvent.target.id.startsWith("product")) {
            const [,productId] = clickEvent.target.id.split("--")
            for (const product of products) {
                if (product.id === parseInt(productId)) {
                    window.alert(`${product.name} costs $${product.price}`)
                }
            }
        }
    }
)
