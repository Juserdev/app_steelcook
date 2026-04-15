import { quote_settings_title_sheets } from "@/app/features/quote-settings/components/quote-settings-title-sheets.view";
import { quote_setting_title } from "@/app/features/quote-settings/components/quote-settings-title.view";
import type { Quote_Settings } from "@/app/features/quote-settings/types/quote-settings.types";


export function quote_settings_list(quote_settings: Quote_Settings[], header: HTMLDivElement) {


  const home_container = quote_setting_title()
  quote_settings_title_sheets(quote_settings, home_container)

  header.appendChild(home_container)

  return home_container
}