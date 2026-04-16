import type { ICON_ASSETS } from "@/app/shared/types/icons.types";
import client from '@/assets/icons/icon-clients.svg?raw';
import remove from '@/assets/icons/icon-delete.svg?raw';
import edit from '@/assets/icons/icon-edit.svg?raw';
import home from '@/assets/icons/icon-home.svg?raw';
import products from '@/assets/icons/icon-products.svg?raw';
import profile from '@/assets/icons/icon-profile.svg?raw';
import quotation from '@/assets/icons/icon-quotations.svg?raw';
import quote_settings from '@/assets/icons/icon_quote_settings.svg?raw';


export const icons: ICON_ASSETS = {
  quote_settings: quote_settings,
  clients: client,
  edit: edit,
  home: home,
  products: products,
  profile: profile,
  quotation: quotation,
  remove: remove
} as const