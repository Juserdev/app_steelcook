import type { Info_Config } from "@/app/features/quote-public/types/info-config.types";
import type { Quote_Public } from "@/app/features/quote-public/types/quote-public.types";

export function client_config(qp: Quote_Public): Info_Config[] {
  return [
    {
      class_item: 'row-container',
      title: 'Nombre: ',
      class_title: 'row-title',
      content: qp.client_snapshot.name,
      class_content: 'row-text'
    },
    {
      class_item: 'row-container',
      title: 'ID: ',
      class_title: 'row-title',
      content: String(qp.client_snapshot.client_id),
      class_content: 'row-text'
    },
    {
      class_item: 'row-container',
      title: 'Telefono: ',
      class_title: 'row-title',
      content: String(qp.client_snapshot.phone),
      class_content: 'row-text'
    },
    {
      class_item: 'row-container',
      title: 'Email: ',
      class_title: 'row-title',
      content: qp.client_snapshot.email,
      class_content: 'row-text'
    },
    {
      class_item: 'row-container',
      title: 'Dirección: ',
      class_title: 'row-title',
      content: qp.profile_snapshot.address,
      class_content: 'row-text'
    }
  ] as const satisfies Info_Config[]

} 