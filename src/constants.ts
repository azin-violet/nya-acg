import type { Component } from 'vue'
import IconPlay from '~icons/mdi/motion-play-outline'
import IconBrush from '~icons/mdi/brush-outline'
import IconG from '~icons/mdi/alpha-g-circle-outline'
import IconBook from '~icons/mdi/book-open'

interface AcgSite {
  title: string
  url: string
  favicon?: string
  description: string
}
interface AcgField {
  name: string
  category: AcgCategory
  sites: AcgSite[]
}
type AcgCategory = 'anime' | 'manga' | 'galgame' | 'novel'

const iconMap: Record<AcgCategory, Component> = {
  anime: IconPlay,
  manga: IconBrush,
  galgame: IconG,
  novel: IconBook,
}
const acgCollection: AcgField[] = [
  {
    name: '动漫',
    category: 'anime',
    sites: [
      {
        title: 'OmoFun动漫',
        url: 'https://omofun.tv/',
        description: '为爱发电',
      },
      {
        title: 'AGE动漫',
        url: 'https://www.agemys.net/',
        favicon: 'https://www.agemys.net/favicon.ico',
        description: 'AGE动漫专注于资源收集整理 海量的有效的高质量的动漫资源下载 动漫百度网盘下载',
      },
      {
        title: 'ZzzFun动漫视频网',
        url: 'http://www.bimiacg4.net/',
        favicon: 'http://www.zzzfun.com/favicon.ico',
        description: '提供最新最快的动漫新番资讯和在线播放，开心看动漫，无圣骑、无暗牧',
      },
      {
        title: 'M站_哔咪动漫',
        url: 'http://www.bimiacg4.net/',
        description:
          '哔咪动漫,哔咪哔咪,故被网友称为m站以及bimibimi，无论您喜欢那种类型，m站哔咪哔咪都会筛选经典作品并将新作经典轮番推荐，相信哔咪哔咪都能为您一网打尽，为您带来一场美妙的动漫盛宴，这里是兴趣使然的无名小站。',
      },
      {
        title: '哔哩哔哩',
        url: 'https://www.bilibili.com/anime/',
        favicon: 'https://www.bilibili.com/favicon.ico?v=1',
        description:
          '哔哩哔哩（bilibili.com)是国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。大家可以在这里找到许多欢乐。',
      },
      {
        title: 'AcFun',
        url: 'https://www.acfun.cn/bangumilist',
        favicon: 'https://cdn.aixifan.com/ico/favicon.ico',
        description:
          'AcFun是国内首家弹幕视频网站，这里有全网独家动漫新番， 友好的弹幕氛围，有趣的UP主，好玩有科技感的虚拟偶像，年轻人都在用。',
      },
    ],
  },
  {
    name: '漫画',
    category: 'manga',
    sites: [
      {
        title: '哔哩哔哩漫画',
        url: 'https://manga.bilibili.com/',
        favicon: 'https://www.bilibili.com/favicon.ico',
        description: '哔哩哔哩正版漫画阅读平台, 海量官方漫画连载在线观看, 二次元动漫迷的追漫神器。',
      },
      {
        title: 'Xmanhua',
        url: 'https://xmanhua.com/',
        favicon: 'https://xmanhua.com/favicon.ico',
        description: 'mangabz是全網資源最全的在線漫畫、日本漫畫閱讀平臺。',
      },
      {
        title: 'vomic漫画',
        url: 'http://www.iewoai.com/',
        favicon: 'http://www.iewoai.com/static/images/logo/favicon_white_50.png',
        description: 'vomic漫画是全网资源最全的在线漫画、日本漫画、国产漫画、韩漫阅读平台。',
      },
    ],
  },
  {
    name: 'Galgame',
    category: 'galgame',
    sites: [
      {
        title: '量子ACG',
        url: 'https://lzacg.one/',
        favicon:
          'https://lzacg.one/wp-content/uploads/2022/01/1642732211-7CD75A1C-E498-44FB-8E90-468502B354ED.jpeg',
        description: '量子ACG是一个以游戏为主，进而推动日语学习的网站',
      },
      {
        title: '初音的青葱',
        url: 'https://www.yngal.com/',
        favicon: 'https://www.yngal.com/static/images/icon.jpg',
        description:
          '欢迎来到我的Galgame资源发布站，这里是热爱和平，发布二次元相关的资源站，努力打造舒心畅快的气氛，本网站是唯一地址，您的支持是我的动力 ',
      },
      {
        title: 'GalWorld',
        url: 'https://acgngame.top/',
        description: '普通的Galgame资源站，提供galgame资源下载。',
      },
    ],
  },
]

export { iconMap, acgCollection }
export type { AcgSite, AcgField, AcgCategory }