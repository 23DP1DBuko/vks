import { useEffect, useRef, useState } from 'react'
import { RefreshCw } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TikTokIcon } from './icons'
import { content } from '../content'
import { useLang } from '../i18n'
import { Container, Section, SectionHeader } from './Section'

/**
 * Лента Facebook (Page Plugin) загружается лениво - только когда секция
 * подходит к вьюпорту. Если плагин не загрузился (блокировщики, сеть),
 * показываем кнопки-ссылки на соцсети.
 * TODO: при необходимости заменить на Graph API с кэшем для единого стиля.
 */
export function SocialFeed() {
  const { t } = useLang()
  const section = content.sections.social
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const box = boxRef.current
    if (!box) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setLoaded(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' },
    )
    observer.observe(box)
    return () => observer.disconnect()
  }, [])

  const embedSrc = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
    content.social.pageUrl,
  )}&tabs=timeline&width=380&height=560&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`

  return (
    <Section id="social">
      <Container>
        <SectionHeader kicker={t(section.kicker)} title={t(section.title)} subtitle={section.subtitle ? t(section.subtitle) : undefined} />
        <p data-reveal className="mb-8 max-w-2xl text-white/70">
          {t(content.social.text)}
        </p>

        <div ref={boxRef} data-reveal className="mx-auto max-w-[400px]">
          {!loaded && !failed && (
            <div className="flex h-64 flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-ink-2 text-white/60">
              <RefreshCw size={28} className="animate-spin [animation-duration:3s]" />
              <p className="text-sm">{t(content.social.loadLabel)}</p>
            </div>
          )}

          {loaded && !failed && (
            <iframe
              title="Facebook - Vasilyev Karate"
              src={embedSrc}
              className="h-[560px] w-full rounded-2xl border border-white/10 bg-white"
              style={{ border: 0 }}
              loading="lazy"
              allow="encrypted-media"
              onError={() => setFailed(true)}
            />
          )}

          {(failed || !content.social.enabled) && (
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-ink-2 p-8">
              <p className="text-sm text-white/60">
                {t({
                  ru: 'Лента недоступна - подписывайтесь в соцсетях:',
                  en: 'Feed unavailable - follow us on social media:',
                  lv: 'Lente nav pieejama - sekojiet mums sociālajos tīklos:',
                })}
              </p>
              {renderFollowButtons()}
            </div>
          )}
        </div>
      </Container>
    </Section>
  )

  function renderFollowButtons() {
    return (
      <div className="flex flex-wrap justify-center gap-3">
        {content.contacts.socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            {social.name === 'facebook' ? (
              <FacebookIcon size={16} />
            ) : social.name === 'instagram' ? (
              <InstagramIcon size={16} />
            ) : (
              <TikTokIcon size={16} />
            )}
            {t(content.social.followLabels[social.name])}
          </a>
        ))}
      </div>
    )
  }
}
