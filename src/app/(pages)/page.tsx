import {
    Banner,
    BannerSection,
    BannerContent,
    BannerEyebrow,
    BannerTitle,
    BannerDescription,
} from '@/components/ui/default/banner'

export default function Home() {
  return (
      <main>
          <Banner
              backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
              className="bg-gray-900"
          >
              <BannerSection>
                  <BannerContent className="text-center">
                      <BannerEyebrow className="text-hvorange-400">
                          Get the help you need
                      </BannerEyebrow>
                      <BannerTitle className='text-indigo-400'>Support Center</BannerTitle>
                      <BannerDescription>
                          Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                          irure qui lorem cupidatat commodo. Elit sunt amet
                          fugiat veniam occaecat fugiat.
                      </BannerDescription>
                  </BannerContent>
              </BannerSection>
          </Banner>
      </main>
  )
}
