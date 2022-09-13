/** 이미지 메타데이터 */
export const MAIN_IMAGE_URL =
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80'

export const SITE_URL = 'http://localhost:3000'
export const APPLICATION_NAME = 'Next.js Boilerplate'
export const DESCRIPTION = 'Next.js 프레임워크를 시작하기 위한 가장 좋은 방법'
export const DESCRIPTION_EN = 'Best way to create the Next.js framework from scratch'
export const AUTHOR = 'Geon Lee'
export const KEYWORDS: string[] = ['Next.js', 'web']

export const FAVICON_URL = '/favicon.ico'

/**
 * 트위터 카드 형식
 * * https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started
 */
export enum TwitterCard {
  SUMMARY = 'summary',
  SUMMARY_LARGE_IMAGE = 'summary_large_image',
  APP = 'app',
  PLAYER = 'player',
}

export enum OgType {
  WEBSITE = 'website',
}

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
