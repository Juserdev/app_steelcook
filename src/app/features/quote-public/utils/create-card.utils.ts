import type { Info_Config } from "@/app/features/quote-public/types/info-config.types"
import type { Quote_Public } from "@/app/features/quote-public/types/quote-public.types"

export function create_card(
  qp: Quote_Public,
  card_config: (qp: Quote_Public) => Info_Config[],
  card_name?: string,
  company_logo?: string
): HTMLDivElement {

  const container_card = document.createElement('div')
  container_card.classList.add('card', 'container-card')

  if (card_name) {
    const title = document.createElement('h2')
    title.classList.add('subtitle')
    title.textContent = card_name!
    container_card.appendChild(title)
  }


  if (company_logo) {

    const container_logo = document.createElement('div')
    container_logo.classList.add('container-logo')

    const logo = document.createElement('img')
    logo.classList.add('logo')
    logo.src = company_logo!
    logo.alt = 'logo'

    container_logo.appendChild(logo)
    container_card.appendChild(container_logo)
  }

  const container_info = document.createElement('div')
  container_info.classList.add('container-info')

  const config = card_config(qp)

  config.forEach(info => {
    const items_info = document.createElement('div')
    items_info.classList.add(info.class_item)

    const title = document.createElement('span')
    title.classList.add(info.class_title)
    title.textContent = info.title

    const text = document.createElement('span')
    text.classList.add(info.class_content)
    text.textContent = info.content

    items_info.append(title, text)
    container_info.appendChild(items_info)
  })

  container_card.appendChild(container_info)

  return container_card

}