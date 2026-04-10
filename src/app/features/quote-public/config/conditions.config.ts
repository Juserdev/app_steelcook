import type { Info_Config } from "@/app/features/quote-public/types/info-config.types";
import type { Quote_Public } from "@/app/features/quote-public/types/quote-public.types";

export function conditions_config(qp: Quote_Public): Info_Config[] {
  return [
    {
      class_item: 'item-conditions',
      title: 'Observaciones: ',
      class_title: 'title-conditions',
      content: qp.quote_settings.observations,
      class_content: 'text-conditions'
    },
    {
      class_item: 'item-conditions',
      title: 'Garantia: ',
      class_title: 'title-conditions',
      content: qp.quote_settings.warranty,
      class_content: 'text-conditions'
    },
    {
      class_item: 'item-conditions',
      title: 'Tiempo de entrega: ',
      class_title: 'title-conditions',
      content: qp.quote_settings.delivery_time,
      class_content: 'text-conditions'
    },
    {
      class_item: 'item-conditions',
      title: 'Metodo de pago: ',
      class_title: 'title-conditions',
      content: qp.quote_settings.payment_method,
      class_content: 'text-conditions'
    },
    {
      class_item: 'item-conditions',
      title: 'Transporte: ',
      class_title: 'title-conditions',
      content: qp.quote_settings.transport,
      class_content: 'text-conditions'
    }
  ] as const satisfies Info_Config[]

}

