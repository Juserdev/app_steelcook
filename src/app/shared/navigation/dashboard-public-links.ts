export function showQuotationPublic() {

  const buttons = document.querySelectorAll<HTMLDivElement>('[data-public_id]')

  buttons.forEach(button => {

    button.addEventListener('click', () => {

      const public_id = button.dataset.public_id

      const quotationPath = `/system/quotation/index.html?public_id=${public_id}`

      if (public_id) window.open(quotationPath, "_blank")

    })
  });
}
