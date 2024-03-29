import type { Component } from 'vue'
import IconPlay from '~icons/mdi/motion-play-outline'
import IconBrush from '~icons/mdi/brush-outline'
import IconG from '~icons/mdi/alpha-g-circle-outline'
import IconBook from '~icons/mdi/book-open'
import IconHistory from '~icons/mdi/history'

interface AcgSite {
  title: string
  url: string
  favicon?: string
  description: string
  abstract: string
}
interface AcgField {
  name: string
  category: AcgCategory
  sites: AcgSite[]
}
type AcgCategory = 'anime' | 'manga' | 'galgame' | 'novel' | 'history'

const iconMap: Record<AcgCategory, Component> = {
  anime: IconPlay,
  manga: IconBrush,
  galgame: IconG,
  novel: IconBook,
  history: IconHistory,
}
const acgCollection: AcgField[] = [
  {
    name: '最近查看',
    category: 'history',
    sites: [],
  },
  {
    name: '动漫',
    category: 'anime',
    sites: [
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
    ],
  },
  {
    name: '漫画',
    category: 'manga',
    sites: [
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
    ]
  },
  {
    name: 'Galgame',
    category: 'galgame',
    sites: [
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
    ]
  },
  {
    name: '轻小说',
    category: 'novel',
    sites: [
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
      {
        title: 'website name',
        url: 'https://www.bilibili.com/anime/',
        description: 'details for the website.',
        abstract: 'Abstract for the website, maybe a little longer.'
      },
    ]
  }
]

export { iconMap, acgCollection }
export type { AcgSite, AcgField, AcgCategory }