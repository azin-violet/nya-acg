import type { Component } from 'vue'
import IconPlay from '~icons/mdi/motion-play-outline'
import IconPlay2 from '~icons/mdi/play-box-lock-outline'
import IconBrush from '~icons/mdi/brush-outline'
import IconG from '~icons/mdi/alpha-g-circle-outline'
import IconBook from '~icons/mdi/book-open'
import IconBook2 from '~icons/mdi/book-lock-outline'

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
type AcgCategory = 'anime' | 'manga' | 'galgame' | 'novel' | 'hanime' | 'hcomic'

const iconMap: Record<AcgCategory, Component> = {
  anime: IconPlay,
  manga: IconBrush,
  galgame: IconG,
  novel: IconBook,
  hanime: IconPlay2,
  hcomic: IconBook2,
}
const acgCollection: AcgField[] = [
  {
    name: '在线动漫',
    category: 'anime',
    sites: [
      {
        title: 'OmoFun动漫',
        url: 'https://omofun.tv/',
        description: '一个资源丰富，更新及时的动漫网站，视频清晰度高，网页版停运，只支持app使用。',
        abstract: '【推荐】资源丰富，更新及时，无广告，只支持移动端'
      },
      {
        title: 'AGE动漫',
        url: 'https://www.agemys.net/',
        favicon: 'https://www.agemys.net/favicon.ico',
        description: 'AGE动漫专注于资源收集整理 海量的有效的高质量的动漫资源下载 动漫百度网盘下载',
        abstract: '【推荐】资源丰富，更新及时，无广告'
      },
      {
        title: 'ZzzFun动漫视频网',
        url: 'http://www.zzzfun.com/',
        favicon: 'http://www.zzzfun.com/favicon.ico',
        description: '提供最新最快的动漫新番资讯和在线播放，开心看动漫，无圣骑、无暗牧',
        abstract: '【推荐】资源丰富，无广告，网站有时不稳定'
      },
      {
        title: 'M站_哔咪动漫',
        url: 'http://www.bimiacg4.net/',
        description:
          '哔咪动漫,哔咪哔咪,故被网友称为m站以及bimibimi，无论您喜欢那种类型，m站哔咪哔咪都会筛选经典作品并将新作经典轮番推荐，相信哔咪哔咪都能为您一网打尽，为您带来一场美妙的动漫盛宴，这里是兴趣使然的无名小站。',
        abstract: '更新较快，资源丰富，广告较多'
      },
      {
        title: '哔哩哔哩',
        url: 'https://www.bilibili.com/anime/',
        favicon: 'https://www.bilibili.com/favicon.ico?v=1',
        description:
          '哔哩哔哩（bilibili.com)是国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。大家可以在这里找到许多欢乐。',
        abstract: '正规动漫网站，有弹幕，画质高，无广告'
      },
      {
        title: 'AcFun',
        url: 'https://www.acfun.cn/bangumilist',
        favicon: 'https://cdn.aixifan.com/ico/favicon.ico',
        description:
          'AcFun是国内首家弹幕视频网站，这里有全网独家动漫新番， 友好的弹幕氛围，有趣的UP主，好玩有科技感的虚拟偶像，年轻人都在用。',
        abstract: '正规动漫网站，有弹幕，番剧不全'
      },
    ],
  },
  {
    name: '在线漫画',
    category: 'manga',
    sites: [
      {
        title: 'Xmanhua',
        url: 'https://xmanhua.com/',
        favicon: 'https://xmanhua.com/favicon.ico',
        description: 'mangabz是全網資源最全的在線漫畫、日本漫畫閱讀平臺。',
        abstract: '【推荐】漫画资源丰富，更新及时'
      },
      {
        title: '哔哩哔哩漫画',
        url: 'https://manga.bilibili.com/',
        favicon: 'https://www.bilibili.com/favicon.ico',
        description: '哔哩哔哩正版漫画阅读平台, 海量官方漫画连载在线观看, 二次元动漫迷的追漫神器。',
        abstract: '国内正版漫画平台'
      },
      {
        title: 'vomic漫画',
        url: 'http://www.iewoai.com/',
        favicon: 'http://www.iewoai.com/static/images/logo/favicon_white_50.png',
        description: 'vomic漫画是全网资源最全的在线漫画、日本漫画、国产漫画、韩漫阅读平台。',
        abstract: '漫画资源齐全'
      },
      {
        title: '搜漫',
        url: 'https://www.soman.com/',
        favicon: 'https://www.soman.com/static/images/favicon.ico',
        description: '搜漫连接了全网多个资源丰富的漫画源，为漫画爱好者提供最新最全的漫画资源搜索服务，带你享受一站式看遍全网漫画的极致体验。',
        abstract: '漫画搜索引擎'
      }
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
        abstract: '【推荐】资源较多，提供免费汉硬下载链接'
      },
      {
        title: '初音的青葱',
        url: 'https://www.yngal.com/',
        favicon: 'https://www.yngal.com/static/images/icon.jpg',
        description:
          '欢迎来到我的Galgame资源发布站，这里是热爱和平，发布二次元相关的资源站，努力打造舒心畅快的气氛，本网站是唯一地址，您的支持是我的动力 ',
        abstract: '个人galgame网站，提供免费汉硬下载链接'
      },
      {
        title: 'GalWorld',
        url: 'https://acgngame.top/',
        description: '普通的Galgame资源站，提供galgame资源下载。',
        abstract: 'Galgame资源站，提供galgame资源下载'
      },
      {
        title: '忧郁的loli',
        url: 'https://www.ttloli.com/',
        favicon: 'https://www.ttloli.com/favicon.ico',
        description: '汉化galgame分享站',
        abstract: '【推荐】经典汉化galgame分享站'
      }
    ],
  },
  {
    name: '轻小说',
    category: 'novel',
    sites: [
      {
        title: '轻之国度',
        url: 'https://www.lightnovel.us/',
        favicon: 'https://www.lightnovel.us/favicon.ico',
        description: '輕之國度是專註于分享的NACG社群，这里有用户分享的最新的NACG资源，有很好的社群与创作氛围',
        abstract: '专注分享的NACG社群',
      },
    ]
  },
  {
    name: '在线里番',
    category: 'hanime',
    sites: []
  },
  {
    name: '在线本子',
    category: 'hcomic',
    sites: []
  }
]

export { iconMap, acgCollection }
export type { AcgSite, AcgField, AcgCategory }