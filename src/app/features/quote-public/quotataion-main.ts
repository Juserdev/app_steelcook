import { load_public_quotation } from "@/app/features/quote-public/services/load-public-quotation.services"

const qp = await load_public_quotation()
console.log(qp)
