import { useState, type FormEvent } from 'react'
import { AlertCircle, CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TikTokIcon } from './icons'
import { content } from '../content'
import { useLang } from '../i18n'
import { Container, Section, SectionHeader } from './Section'

type FormStatus = 'idle' | 'sending' | 'sent' | 'error'

/**
 * Форма заявки. Отправка:
 * 1) если задан `content.form.endpoint` (сервис приёма форм, напр. EmailOctopus) — POST FormData;
 * 2) иначе, если задан `contacts.email` — фолбэк на mailto (почтовый клиент);
 * 3) иначе — показываем ошибку с телефоном (форма не настроена).
 */
export function Contacts() {
  const { t, lang } = useLang()
  const section = content.sections.contacts
  const [status, setStatus] = useState<FormStatus>('idle')
  const endpoint = content.form.endpoint
  const email = content.contacts.email
  const firstPhone = content.contacts.phones[0].replace(/\s/g, '')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const payload: Record<string, string> = {
      name: String(data.get('name') ?? ''),
      phone: String(data.get('phone') ?? ''),
      audience: String(data.get('audience') ?? ''),
      comment: String(data.get('comment') ?? ''),
      lang,
    }

    if (endpoint) {
      setStatus('sending')
      try {
        const formData = new FormData()
        Object.entries(payload).forEach(([key, value]) => formData.append(key, value))
        const res = await fetch(endpoint, { method: 'POST', body: formData })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        setStatus('sent')
      } catch {
        setStatus('error')
      }
      return
    }

    if (email) {
      const subject = encodeURIComponent(`${t(content.site.clubName)} — заявка от ${payload.name}`)
      const body = encodeURIComponent(
        `Имя: ${payload.name}\nТелефон: ${payload.phone}\nКто занимается: ${payload.audience}\nКомментарий: ${payload.comment}\nЯзык: ${lang}`,
      )
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
      setStatus('sent')
      return
    }

    setStatus('error')
  }

  return (
    <Section id="contacts" className="bg-ink-2">
      <Container>
        <SectionHeader kicker={t(section.kicker)} title={t(section.title)} subtitle={section.subtitle ? t(section.subtitle) : undefined} />

        <div className="grid gap-10 lg:grid-cols-2">
          <div data-reveal className="space-y-7">
            <p className="max-w-md text-white/75">{t(content.contacts.cta)}</p>

            <div className="space-y-3">
              {content.contacts.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-lg font-semibold text-white transition-colors hover:text-brand"
                >
                  <Phone size={18} className="text-brand" /> {phone}
                </a>
              ))}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 text-lg font-semibold text-white transition-colors hover:text-brand"
                >
                  <Mail size={18} className="text-brand" /> {email}
                </a>
              )}
            </div>

            <div className="space-y-3">
              {content.contacts.addresses.map((address) => (
                <p key={address.address} className="flex items-start gap-3 text-sm text-white/70">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-brand" />
                  <span>
                    <span className="mr-1.5 font-semibold text-white">{t(address.label)}:</span>
                    {address.address}
                  </span>
                </p>
              ))}
            </div>

            <div className="flex gap-3">
              {content.contacts.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-brand hover:bg-brand"
                >
                  {social.name === 'facebook' ? (
                    <FacebookIcon size={20} />
                  ) : social.name === 'instagram' ? (
                    <InstagramIcon size={20} />
                  ) : (
                    <TikTokIcon size={20} />
                  )}
                </a>
              ))}
            </div>
          </div>

          <div data-reveal className="rounded-2xl border border-white/10 bg-ink p-6 md:p-8">
            {status === 'sent' ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 py-16 text-center">
                <CheckCircle2 size={56} className="text-brand" />
                <h3 className="font-display text-2xl font-semibold uppercase tracking-wide">
                  {t(content.form.successTitle)}
                </h3>
                <p className="max-w-sm text-sm text-white/70">{t(content.form.successText)}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display text-2xl font-semibold uppercase tracking-wide">{t(content.form.title)}</h3>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium text-white/70">{t(content.form.name)}</span>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full rounded-xl border border-white/15 bg-ink-2 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-brand"
                      placeholder={t(content.form.name)}
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium text-white/70">{t(content.form.phone)}</span>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full rounded-xl border border-white/15 bg-ink-2 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-brand"
                      placeholder={t(content.form.phonePlaceholder)}
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-white/70">{t(content.form.audience)}</span>
                  <select
                    name="audience"
                    className="w-full rounded-xl border border-white/15 bg-ink-2 px-4 py-3 text-sm text-white outline-none focus:border-brand"
                  >
                    {content.form.audienceOptions.map((option) => (
                      <option key={option.ru} value={option.ru}>
                        {t(option)}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-white/70">{t(content.form.comment)}</span>
                  <textarea
                    name="comment"
                    rows={3}
                    className="w-full resize-none rounded-xl border border-white/15 bg-ink-2 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-brand"
                    placeholder={t(content.form.commentPlaceholder)}
                  />
                </label>

                {status === 'error' && (
                  <div className="flex items-start gap-3 rounded-xl border border-brand/40 bg-brand/10 p-4 text-sm text-white/85">
                    <AlertCircle size={18} className="mt-0.5 shrink-0 text-brand" />
                    <span>
                      {t(content.form.error)}{' '}
                      <a href={`tel:${firstPhone}`} className="font-semibold text-brand underline underline-offset-4">
                        {content.contacts.phones[0]}
                      </a>
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    t(content.form.sending)
                  ) : (
                    <>
                      <Send size={16} />
                      {t(content.form.submit)}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </Section>
  )
}
