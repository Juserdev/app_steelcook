import { quote_settings_titles_sheets } from "@/app/features/quote-settings/config/quote-settings-title-sheets.config"
import { quote_settings_config } from "@/app/features/quote-settings/config/quote-settings.config"
import type { Quote_Settings } from "@/app/features/quote-settings/types/quote-settings.types"

export function quote_settings_title_sheets(quote_settings: Quote_Settings[], container: HTMLDivElement) {
  const qsc = quote_settings_config
  const icon_edit = quote_settings_config.icons.edit
  const icon_remove = quote_settings_config.icons.remove

  quote_settings.forEach(content => {
    const qs_file = document.createElement('div')
    qs_file.classList.add(qsc.qs.content.class, qsc.qs.content.common)
    qs_file.dataset.id = content.id

    const observations = document.createElement('span')
    observations.classList.add(qsc.qs.observations.class_content, qsc.qs.observations.class)
    observations.textContent = content.observations
    observations.dataset.item = `${quote_settings_titles_sheets[0].title}:`

    const warranty = document.createElement('span')
    warranty.classList.add(qsc.qs.warranty.class_content, qsc.qs.warranty.class)
    warranty.textContent = content.warranty
    warranty.dataset.item = `${quote_settings_titles_sheets[1].title}:`

    const delivery_time = document.createElement('span')
    delivery_time.classList.add(qsc.qs.delivery_time.class_content, qsc.qs.delivery_time.class)
    delivery_time.textContent = content.delivery_time
    delivery_time.dataset.item = `${quote_settings_titles_sheets[2].title}:`

    const transport = document.createElement('span')
    transport.classList.add(qsc.qs.transport.class_content, qsc.qs.transport.class)
    transport.textContent = content.transport
    transport.dataset.item = `${quote_settings_titles_sheets[3].title}:`

    const icons_container = document.createElement('div')
    icons_container.classList.add(quote_settings_config.icons.container_class)

    const edit_container = document.createElement('div')
    edit_container.classList.add('edit-container', 'er-container')

    const edit = document.createElement('div')
    edit.innerHTML = icon_edit.src
    edit.classList.add(icon_edit.class)

    edit_container.appendChild(edit)

    const remove_container = document.createElement('div')
    remove_container.classList.add('remove-container', 'er-container')

    const remove = document.createElement('div')
    remove.innerHTML = icon_remove.src
    remove.classList.add(icon_remove.class)

    remove_container.appendChild(remove)

    icons_container.append(edit_container, remove_container)

    qs_file.appendChild(observations)
    qs_file.appendChild(warranty)
    qs_file.appendChild(delivery_time)
    qs_file.appendChild(transport)
    qs_file.appendChild(icons_container)

    container.appendChild(qs_file)
  })
}