export interface QP_Profile {
  company: string
  company_id: number
  phone: string
  email: string
  address: string
  logo: string
}

export interface QP_Items {
  code: string
  name: string
  description: string
  price: number
  quantity: number
  total: number
}

export interface QP_Client {
  address: string
  client_id: number
  email: string
  name: string
  phone: number
}

export interface QP_Settings {
  delivery_time: string
  observations: string
  payment_method: string
  transport: string
  warranty: string
}

export interface Quote_Public {
  created_at: string
  quotation_id: string
  profile_snapshot: QP_Profile
  quote_settings: QP_Settings
  client_snapshot: QP_Client
  items: QP_Items[]
  subtotal: number
  discount: number
  net: number
  tax_rate: number
  tax_amount: number
  total: number
}