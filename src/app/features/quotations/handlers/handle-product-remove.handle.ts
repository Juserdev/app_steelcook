export function handle_product_remove(btn_remove: HTMLButtonElement) {

  btn_remove.addEventListener('click', () => {
    const products = [...document.querySelectorAll<HTMLDivElement>('.container-product-aq')]
    if (products.length > 1) {
      const last_product = products[products.length - 1]
      last_product.remove()
    }
  })
}