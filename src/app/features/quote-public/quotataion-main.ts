import { create_card_items } from "@/app/features/quote-public/components/create-card-items.view"
import { client_config } from "@/app/features/quote-public/config/client.config"
import { conditions_config } from "@/app/features/quote-public/config/conditions.config"
import { profile_config } from "@/app/features/quote-public/config/profile.config"
import { totals_config } from "@/app/features/quote-public/config/totals.config"
import { load_public_quotation } from "@/app/features/quote-public/services/load-public-quotation.services"
import type { Quote_Public } from "@/app/features/quote-public/types/quote-public.types"
import { create_card } from "@/app/features/quote-public/utils/create-card.utils"
import { formatted_date } from "@/app/features/quote-public/utils/formatted-date.utils"
import '@app/features/quote-public/styles/quote-public.css'

const qp = await load_public_quotation()

const app = document.querySelector('#app')

// Header

function container_header(qp: Quote_Public): HTMLDivElement {

  const container = document.createElement('div')
  container.classList.add('header')

  const id = document.createElement('h1')
  id.classList.add('quotation-id')
  id.textContent = qp.quotation_id

  const date = document.createElement('h1')
  date.classList.add('date')

  const date_quotation = formatted_date(qp.created_at)

  date.textContent = date_quotation

  container.append(id, date)
  return container
}


// main

function container_main(qp: Quote_Public) {

  const main = document.createElement('div')
  main.classList.add('main')

  const company_logo = qp.profile_snapshot.logo

  const profile = create_card(qp, profile_config, 'Empresa', company_logo)
  const client = create_card(qp, client_config, 'Cliente')
  const conditions = create_card(qp, conditions_config, 'Condiciones')
  const items_container = create_card_items(qp)
  const totals = create_card(qp, totals_config, 'Total')

  main.append(profile, client, conditions, items_container, totals)

  return main

}
const container_general = document.createElement('div')
container_general.classList.add('container-general')

const header = container_header(qp)
const main = container_main(qp)

container_general.append(header, main)

app?.appendChild(container_general)