import type { Info_Config } from "@/app/features/quote-public/types/info-config.types";
import type { Quote_Public } from "@/app/features/quote-public/types/quote-public.types";

export function totals_config(qp: Quote_Public): Info_Config[] {
  return [
    {
      class_item: 'item-total',
      title: 'Sutotal: ',
      class_title: 'title-total',
      content: String(qp.subtotal),
      class_content: 'text-total'
    },
    {
      class_item: 'item-total',
      title: 'Descuento: ',
      class_title: 'title-total',
      content: String(qp.discount),
      class_content: 'text-total'
    },
    {
      class_item: 'item-total',
      title: 'Neto: ',
      class_title: 'title-total',
      content: String(qp.net),
      class_content: 'text-total'
    },
    {
      class_item: 'item-total',
      title: 'Impuestos: ',
      class_title: 'title-total',
      content: String(qp.tax_rate),
      class_content: 'text-total'
    },
    {
      class_item: 'item-total',
      title: 'Total inpuestos: ',
      class_title: 'title-total',
      content: String(qp.tax_amount),
      class_content: 'text-total'
    },
    {
      class_item: 'item-total',
      title: 'Total: ',
      class_title: 'title-total',
      content: String(qp.total),
      class_content: 'text-total'
    }
  ] as const satisfies Info_Config[]

}