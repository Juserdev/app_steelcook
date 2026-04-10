import { items_config } from "@/app/features/quote-public/config/items.config"
import type { Quote_Public } from "@/app/features/quote-public/types/quote-public.types"
import { create_card } from "@/app/features/quote-public/utils/create-card.utils"

export function create_card_items(qp: Quote_Public): HTMLDivElement {
  const items_container = document.createElement('div')
  items_container.classList.add('items')

  const title = document.createElement('h2')
  title.textContent = 'Items'
  title.classList.add('subtitle')
  items_container.appendChild(title)

  const items_cards = document.createElement('div')
  items_cards.classList.add('items-cards')

  items_container.appendChild(items_cards)

  const items = items_config(qp)
  items.forEach(item => {
    const card = create_card(qp, () => item)
    items_cards.appendChild(card)
  })

  return items_container
}