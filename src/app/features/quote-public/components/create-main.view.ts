import { create_card_items } from "@/app/features/quote-public/components/create-card-items.view"
import { client_config } from "@/app/features/quote-public/config/client.config"
import { conditions_config } from "@/app/features/quote-public/config/conditions.config"
import { profile_config } from "@/app/features/quote-public/config/profile.config"
import { totals_config } from "@/app/features/quote-public/config/totals.config"
import type { Quote_Public } from "@/app/features/quote-public/types/quote-public.types"
import { create_card } from "@/app/features/quote-public/utils/create-card.utils"

export function container_main(qp: Quote_Public) {

  const main = document.createElement('div')
  main.classList.add('main')

  const profile = create_card(qp, profile_config, 'Empresa')
  const client = create_card(qp, client_config, 'Cliente')
  const conditions = create_card(qp, conditions_config, 'Condiciones')
  const items_container = create_card_items(qp)
  const totals = create_card(qp, totals_config, 'Total')

  main.append(profile, client, conditions, items_container, totals)

  return main

}
