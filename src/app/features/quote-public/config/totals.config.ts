import type { Info_Config } from "@/app/features/quote-public/types/info-config.types";
import type { Quote_Public } from "@/app/features/quote-public/types/quote-public.types";

export function totals_config(qp: Quote_Public): Info_Config[] {
  return [
    {
      class_item: 'row-container',
      title: 'Sutotal: ',
      class_title: 'row-title',
      content: String(qp.subtotal),
      class_content: 'row-text'
    },
    {
      class_item: 'row-container',
      title: 'Descuento: ',
      class_title: 'row-title',
      content: String(qp.discount),
      class_content: 'row-text'
    },
    {
      class_item: 'row-container',
      title: 'Neto: ',
      class_title: 'row-title',
      content: String(qp.net),
      class_content: 'row-text'
    },
    {
      class_item: 'row-container',
      title: 'Impuestos: ',
      class_title: 'row-title',
      content: String(qp.tax_rate),
      class_content: 'row-text'
    },
    {
      class_item: 'row-container',
      title: 'Total inpuestos: ',
      class_title: 'row-title',
      content: String(qp.tax_amount),
      class_content: 'row-text'
    },
    {
      class_item: 'row-container',
      title: 'Total: ',
      class_title: 'row-title',
      content: String(qp.total),
      class_content: 'row-text'
    }
  ] as const satisfies Info_Config[]

}