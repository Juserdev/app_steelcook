import type { Quote_Public } from "@/app/features/quote-public/types/quote-public.types"
import { formatted_date } from "@/app/features/quote-public/utils/formatted-date.utils"

export function container_header(qp: Quote_Public): HTMLDivElement {

  const container = document.createElement('div')
  container.classList.add('header')

  const container_company = document.createElement('div')
  container_company.classList.add('container-logo')

  const logo = document.createElement('img')
  logo.classList.add('logo')
  logo.src = qp.profile_snapshot.logo
  logo.alt = 'logo'

  container_company.appendChild(logo)

  const container_info_header = document.createElement('div')
  container_info_header.classList.add('container-info-header')

  const id = document.createElement('h1')
  id.classList.add('quotation-id')
  id.textContent = qp.quotation_id

  const date = document.createElement('h1')
  date.classList.add('date')

  const date_quotation = formatted_date(qp.created_at)
  date.textContent = date_quotation

  container_info_header.append(id, date)

  container.append(container_company, container_info_header)
  return container
}

