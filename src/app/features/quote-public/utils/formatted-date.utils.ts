import { months } from "@/app/features/quote-public/config/months.config"

export function formatted_date(date: string) {
  const qp_date = new Date(date)

  const day = String(qp_date.getDate()).padStart(2, '0')
  const month = qp_date.getMonth()
  const year = String(qp_date.getFullYear())

  return `${months[month]} ${day}, ${year}`
}