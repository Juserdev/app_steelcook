import type { Info_Config } from "@/app/features/quote-public/types/info-config.types";
import type { Quote_Public } from "@/app/features/quote-public/types/quote-public.types";

export function items_config(qp: Quote_Public): Info_Config[][] {
  return qp.items.map(element => [
    {
      class_item: 'item-items',
      title: 'Codigo: ',
      class_title: 'title-items',
      content: element.code,
      class_content: 'text-items'
    },
    {
      class_item: 'item-items',
      title: 'name: ',
      class_title: 'title-items',
      content: element.name,
      class_content: 'text-items'
    },
    {
      class_item: 'item-items',
      title: 'Descripción: ',
      class_title: 'title-items',
      content: element.description,
      class_content: 'text-items'
    },
    {
      class_item: 'item-items',
      title: 'Precio: ',
      class_title: 'title-items',
      content: String(element.price),
      class_content: 'text-items'
    },
    {
      class_item: 'item-items',
      title: 'Cantidad: ',
      class_title: 'title-items',
      content: String(element.quantity),
      class_content: 'text-items'
    },
    {
      class_item: 'item-items',
      title: 'total: ',
      class_title: 'title-items',
      content: String(element.total),
      class_content: 'text-items'
    }
  ])
}