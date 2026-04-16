import { product_titles_sheets, products_config } from "@/app/features/products/config/products.config";
import type { Products } from "@/app/features/products/types/products.types";
import { format_thousands_with_dots } from "@/app/shared/utils/format/format-numeric-input.utils";


export function products_title_sheets(products: Products[], container: HTMLDivElement) {

  products.forEach(product => {

    const icon_edit = products_config.icons.edit
    const icon_remove = products_config.icons.remove

    const products_file = document.createElement('div')
    products_file.classList.add(products_config.products_class.file.class, products_config.products_class.file.common)
    products_file.dataset.id = product.id
    products_file.dataset.code = product.code
    products_file.dataset.name = product.name
    products_file.dataset.description = product.description
    products_file.dataset.price = format_thousands_with_dots(String(product.price))

    const product_code = document.createElement('span')
    product_code.classList.add(products_config.products_class.code)
    product_code.textContent = product.code
    product_code.dataset.item = `${product_titles_sheets[0].title}:`

    const product_name = document.createElement('span')
    product_name.classList.add(products_config.products_class.name)
    product_name.textContent = product.name
    product_name.dataset.item = `${product_titles_sheets[1].title}:`

    const product_description = document.createElement('span')
    product_description.classList.add(products_config.products_class.description)
    product_description.textContent = product.description
    product_description.dataset.item = `${product_titles_sheets[2].title}:`

    const product_price = document.createElement('span')
    product_price.classList.add(products_config.products_class.price)
    const format_price = format_thousands_with_dots(String(product.price))
    product_price.textContent = `$${format_price}`
    product_price.dataset.item = `${product_titles_sheets[3].title}:`

    const icons_container = document.createElement('div')
    icons_container.classList.add(products_config.icons.container_class)

    const edit_container = document.createElement('div')
    edit_container.classList.add('edit-container', 'er-container')

    const edit = document.createElement('div')
    edit.innerHTML = icon_edit.src
    edit.classList.add(icon_edit.class)

    edit_container.appendChild(edit)

    const remove_container = document.createElement('div')
    remove_container.classList.add('remove-container', 'er-container')

    const remove = document.createElement('div')
    remove.innerHTML = icon_remove.src
    remove.classList.add(icon_remove.class)

    remove_container.appendChild(remove)

    icons_container.append(edit_container, remove_container)

    products_file.appendChild(product_code)
    products_file.appendChild(product_name)
    products_file.appendChild(product_description)
    products_file.appendChild(product_price)
    products_file.appendChild(icons_container)

    container.appendChild(products_file)
  })

}