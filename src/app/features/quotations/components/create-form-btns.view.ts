import type { Button_Form } from "@/app/shared/types/form.types"

export function create_btns(btn: Button_Form): HTMLButtonElement {
  const add_product_btn = document.createElement("button")
  add_product_btn.type = btn.type
  add_product_btn.classList.add(btn.class.specific, btn.class.common)
  add_product_btn.textContent = btn.text

  return add_product_btn
}