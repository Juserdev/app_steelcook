import type { Info_Config } from "@/app/features/quote-public/types/info-config.types";
import type { Quote_Public } from "@/app/features/quote-public/types/quote-public.types";

export function conditions_config(qp: Quote_Public): Info_Config[] {
  return [
    {
      class_item: 'row-container',
      title: 'Observaciones: ',
      class_title: 'row-title',
      content: qp.quote_settings.observations,
      class_content: 'row-text'
    },
    {
      class_item: 'row-container',
      title: 'Garantia: ',
      class_title: 'row-title',
      content: qp.quote_settings.warranty,
      class_content: 'row-text'
    },
    {
      class_item: 'row-container',
      title: 'Tiempo de entrega: ',
      class_title: 'row-title',
      content: qp.quote_settings.delivery_time,
      class_content: 'row-text'
    },
    {
      class_item: 'row-container',
      title: 'Metodo de pago: ',
      class_title: 'row-title',
      content: qp.quote_settings.payment_method,
      class_content: 'row-text'
    },
    {
      class_item: 'row-container',
      title: 'Transporte: ',
      class_title: 'row-title',
      content: qp.quote_settings.transport,
      class_content: 'row-text'
    }
  ] as const satisfies Info_Config[]

}

