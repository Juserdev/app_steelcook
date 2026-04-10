import type { Info_Config } from "@/app/features/quote-public/types/info-config.types";
import type { Quote_Public } from "@/app/features/quote-public/types/quote-public.types";

export function profile_config(qp: Quote_Public): Info_Config[] {
  return [
    {
      class_item: 'item-profile',
      title: 'Empresa: ',
      class_title: 'title-profile',
      content: qp.profile_snapshot.company,
      class_content: 'text-profile'
    },
    {
      class_item: 'item-profile',
      title: 'ID: ',
      class_title: 'title-profile',
      content: String(qp.profile_snapshot.company_id),
      class_content: 'text-profile'
    },
    {
      class_item: 'item-profile',
      title: 'Telefono: ',
      class_title: 'title-profile',
      content: String(qp.profile_snapshot.phone),
      class_content: 'text-profile'
    },
    {
      class_item: 'item-profile',
      title: 'Email: ',
      class_title: 'title-profile',
      content: qp.profile_snapshot.email,
      class_content: 'text-profile'
    },
    {
      class_item: 'item-profile',
      title: 'Dirección: ',
      class_title: 'title-profile',
      content: qp.profile_snapshot.address,
      class_content: 'text-profile'
    }
  ] as const satisfies Info_Config[]

}

