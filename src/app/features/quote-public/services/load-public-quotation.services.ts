import { get_public_quotation } from "@/app/features/quote-public/services/quotation-public.services";
import type { Quote_Public } from "@/app/features/quote-public/types/quote-public.types";


export async function load_public_quotation(): Promise<Quote_Public> {
  const urlParams = new URLSearchParams(window.location.search)
  const public_id = urlParams.get("public_id")

  if (!public_id) throw new Error('No public_id provided')

  const quotation = await get_public_quotation(public_id)
  return quotation as Quote_Public

}