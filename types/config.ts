import { OgType, TwitterCard } from '@/types/og'

export interface Config {
  url: string
  title: string
  author: string
  applicationName: string
  description: string
  keywords: string[]
  image: {
    main: {
      url: string
      alt: string
      width: number
      height: number
    }
  }
  favicon: {
    url: string
    alt: string
  }
  twitter: {
    /** @username for the website used in the card footer.	 */
    site: string
    /** @username for the content creator / author.	 */
    creator: string
    card: TwitterCard
  }
  og: {
    type: OgType
  }
}
