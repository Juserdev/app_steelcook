import type { Info_Config } from "@/app/features/quote-public/types/info-config.types";
import type { Quote_Public } from "@/app/features/quote-public/types/quote-public.types";

export function items_config(qp: Quote_Public): Info_Config[][] {
  return qp.items.map(element => [
    {
      class_item: 'row-container',
      title: 'Codigo: ',
      class_title: 'row-title',
      content: element.code,
      class_content: 'row-text'
    },
    {
      class_item: 'row-container',
      title: 'name: ',
      class_title: 'row-title',
      content: element.name,
      class_content: 'rrow-text'
    },
    {
      class_item: 'row-container',
      title: 'Descripción: ',
      class_title: 'row-title',
      content: element.description,
      class_content: 'row-text'
    },
    {
      class_item: 'row-container',
      title: 'Precio: ',
      class_title: 'row-title',
      content: String(element.price),
      class_content: 'rrow-text'
    },
    {
      class_item: 'row-container',
      title: 'Cantidad: ',
      class_title: 'row-title',
      content: String(element.quantity),
      class_content: 'row-text'
    },
    {
      class_item: 'row-container',
      title: 'total: ',
      class_title: 'row-title',
      content: String(element.total),
      class_content: 'row-text'
    }
  ])
}