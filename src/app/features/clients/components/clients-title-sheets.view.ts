import { client_title_sheets, clients_config } from "@/app/features/clients/config/clients.config";
import type { Clients } from "@/app/features/clients/types/clients.types";


export function clients_title_sheets(clients: Clients[], container: HTMLDivElement) {

  clients.forEach(client => {

    const icon_edit = clients_config.icons.edit
    const icon_remove = clients_config.icons.remove

    const clients_file = document.createElement('div')
    clients_file.classList.add(clients_config.clients_class.file.class, clients_config.clients_class.file.common)
    clients_file.dataset.id = String(client.id)
    clients_file.dataset.name = client.name
    clients_file.dataset.client_id = String(client.client_id)
    clients_file.dataset.phone = String(client.phone)
    clients_file.dataset.email = client.email
    clients_file.dataset.address = client.address

    const name = document.createElement('span')
    name.classList.add(clients_config.clients_class.name)
    name.textContent = client.name
    name.dataset.item = `${client_title_sheets[0].title}:`

    const client_id = document.createElement('span')
    client_id.classList.add(clients_config.clients_class.id)
    client_id.textContent = String(client.client_id ?? '')
    client_id.dataset.item = `${client_title_sheets[1].title}:`

    const email = document.createElement('span')
    email.classList.add(clients_config.clients_class.email)
    email.textContent = client.email
    email.dataset.item = `${client_title_sheets[2].title}:`

    const address = document.createElement('span')
    address.classList.add(clients_config.clients_class.address)
    address.textContent = client.address
    address.dataset.item = `${client_title_sheets[3].title}:`

    const phone = document.createElement('span')
    phone.classList.add(clients_config.clients_class.phone)
    phone.textContent = String(client.phone ?? '')
    phone.dataset.item = `${client_title_sheets[4].title}:`

    const icons_container = document.createElement('div')
    icons_container.classList.add(clients_config.icons.container_class)

    const edit_container = document.createElement('div')
    edit_container.classList.add('edit-container', 'er-container')

    const edit = document.createElement('img')
    edit.src = icon_edit.src
    edit.alt = icon_edit.alt
    edit.classList.add(icon_edit.class)

    edit_container.appendChild(edit)

    const remove_container = document.createElement('div')
    remove_container.classList.add('remove-container', 'er-container')

    const remove = document.createElement('img')
    remove.src = icon_remove.src
    remove.alt = icon_remove.alt
    remove.classList.add(icon_remove.class)

    remove_container.appendChild(remove)

    icons_container.append(edit_container, remove_container)

    clients_file.appendChild(name)
    clients_file.appendChild(client_id)
    clients_file.appendChild(phone)
    clients_file.appendChild(email)
    clients_file.appendChild(address)
    clients_file.appendChild(icons_container)

    container.appendChild(clients_file)

  });


}