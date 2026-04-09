interface QP_Profile {
  company: string
  company_id: number
  phone: string
  email: string
  address: string
}

interface QP_Items {
  code: string
  name: string
  description: string
  price: number
  quantity: number
  total: number
}

interface QP_Client {
  address: string
  client_id: number
  email: string
  name: string
  phone: number
}

interface QP_Settings {
  delivery_time: string
  observations: string
  payment_method: string
  transport: string
  warranty: string
}

interface QP_Totals {
  subtotal: number
  discount: number
  net: number
  tax_rate: number
  tax_amount: number
  total: number
}

export interface Quote_Public {
  quotation_id: string
  profile: QP_Profile
  settings: QP_Settings
  client: QP_Client
  items: QP_Items[]
  totals: QP_Totals
}