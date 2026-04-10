import type { Info_Config } from "@/app/features/quote-public/types/info-config.types";
import type { Quote_Public } from "@/app/features/quote-public/types/quote-public.types";

export function client_config(qp: Quote_Public): Info_Config[] {
  return [
    {
      class_item: 'item-client',
      title: 'Nombre: ',
      class_title: 'title-client',
      content: qp.client_snapshot.name,
      class_content: 'text-client'
    },
    {
      class_item: 'item-client',
      title: 'ID: ',
      class_title: 'title-client',
      content: String(qp.client_snapshot.client_id),
      class_content: 'text-client'
    },
    {
      class_item: 'item-client',
      title: 'Telefono: ',
      class_title: 'title-client',
      content: String(qp.client_snapshot.phone),
      class_content: 'text-client'
    },
    {
      class_item: 'item-client',
      title: 'Email: ',
      class_title: 'title-client',
      content: qp.client_snapshot.email,
      class_content: 'text-client'
    },
    {
      class_item: 'item-client',
      title: 'Dirección: ',
      class_title: 'title-profile',
      content: qp.profile_snapshot.address,
      class_content: 'text-client'
    }
  ] as const satisfies Info_Config[]

} 