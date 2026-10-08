import { content } from '../content'

/**
 * Ссылка на чат WhatsApp с готовым текстом сообщения.
 * wa.me принимает только цифры: +371 29 172 572 -> 37129172572.
 */
export function whatsappHref(message: string): string {
  const phone = content.contacts.whatsapp.replace(/\D/g, '')
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

/**
 * Текст заявки. Если известна группа (напр. «Дети 7-12 лет»), дописываем её
 * в скобках - клубу сразу видно, куда записывать ребёнка.
 */
export function whatsappMessage(base: string, groupTitle?: string): string {
  return groupTitle ? `${base} (${groupTitle})` : base
}
