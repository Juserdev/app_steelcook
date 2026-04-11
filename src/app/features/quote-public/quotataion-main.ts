import { container_header } from "@/app/features/quote-public/components/create-header.view"
import { container_main } from "@/app/features/quote-public/components/create-main.view"
import { load_public_quotation } from "@/app/features/quote-public/services/load-public-quotation.services"
import '@app/features/quote-public/styles/quote-public.css'

const qp = await load_public_quotation()

const app = document.querySelector('#app')

const container_general = document.createElement('div')
container_general.classList.add('container-general')

const header = container_header(qp)
const main = container_main(qp)

container_general.append(header, main)

app?.appendChild(container_general)