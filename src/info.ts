import type { Component } from 'vue'
import IconImage from '~icons/mdi/image-outline'
import IconPlay from '~icons/mdi/motion-play-outline'
import IconPlay2 from '~icons/mdi/play-box-lock-outline'
import IconBrush from '~icons/mdi/brush-outline'
import IconG from '~icons/mdi/alpha-g-circle-outline'
import IconBook from '~icons/mdi/book-open'
import IconBook2 from '~icons/mdi/book-lock-outline'
import IconDownload from '~icons/mdi/cloud-download-outline'
import IconUsers from '~icons/mdi/account-group-outline'

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
type AcgCategory = 'illustration' | 'anime' | 'manga' | 'galgame' | 'novel' | 'animeDownload' | 'ACGClub' | 'hanime' | 'hcomic'

const iconMap: Record<AcgCategory, Component> = {
  illustration: IconImage,
  anime: IconPlay,
  manga: IconBrush,
  galgame: IconG,
  novel: IconBook,
  hanime: IconPlay2,
  hcomic: IconBook2,
  animeDownload: IconDownload,
  ACGClub: IconUsers
}
const acgCollection: AcgField[] = [
  {
    name: '次元美图',
    category: 'illustration',
    sites: [
      {
        title: 'pixiv',
        url: 'https://www.pixiv.net/',
        favicon: 'https://www.pixiv.net/favicon.ico',
        description: '插画交流网站',
        abstract: 'pixiv',
      },
      {
        title: 'konachan',
        url: 'https://konachan.com/',
        favicon: 'https://konachan.com/favicon.ico',
        description:
          'Image board site for Anime / Manga wallpapers. Unlimited and unrestricted downloads.',
        abstract: 'konachan',
      },
      {
        title: 'Danbooru',
        url: 'https://danbooru.donmai.us/',
        favicon: 'https://danbooru.donmai.us/favicon.ico',
        description: 'Danbooru: Anime Image Board',
        abstract: 'Danbooru',
      },
      {
        title: 'yande.re',
        url: 'https://yande.re/post',
        favicon: 'https://yande.re/favicon.ico',
        description: '',
        abstract: 'yande.re',
      },
      {
        title: 'Anime pictures and wallpapers',
        url: 'https://anime-pictures.net/',
        favicon: 'https://anime-pictures.net/favicon.ico',
        description: '',
        abstract: '动漫图片和壁纸 [全年龄]',
      },
      {
        title: 'SomeACG',
        url: 'https://www.someacg.top/',
        favicon: 'https://www.someacg.top/favicon.ico',
        description: 'SomeACG，一个提供高质量二次元ACG壁纸的网站',
        abstract: 'ACG壁纸精选',
      },
    ],
  },
  {
    name: '在线动漫',
    category: 'anime',
    sites: [
      {
        title: 'アニメ新番組',
        url: 'https://bangumi.online/',
        favicon: 'https://bangumi.online/favicon.png',
        description: 'アニメ新番組、新シーズンをオンラインで見る、次世代のシーズンサイト',
        abstract: '【推荐】次世代新番站 [1080p]',
      },
      {
        title: 'OmoFun动漫',
        url: 'https://omofun.tv/',
        description: '一个资源丰富，更新及时的动漫网站，视频清晰度高，网页版停运，只支持app使用。',
        abstract: '【推荐】网页端关闭，无广告',
      },
      {
        title: 'AGE动漫',
        url: 'https://www.agemys.net/',
        favicon: 'https://www.agemys.net/favicon.ico',
        description: 'AGE动漫专注于资源收集整理 海量的有效的高质量的动漫资源下载 动漫百度网盘下载',
        abstract: '【推荐】AGE动漫',
      },
      {
        title: '番茄动漫',
        url: 'https://www.fqfun.com/',
        favicon: 'https://www.fqfun.com/statics/img/favicon.ico',
        description: '提供最新最快的动漫新番资讯和在线播放，开心看动漫，无圣骑、无暗牧',
        abstract: '高清番剧在线看-番茄动漫',
      },
      {
        title: '可达鸭动漫',
        url: 'https://kdydm.me/',
        favicon:
          'https://m.360buyimg.com/babel/jfs/t1/106590/3/34664/1023/6360b16aE37e2e2c0/d404f7dd1dc7bab9.png',
        description: '可达鸭动漫',
        abstract: '可达鸭动漫',
      },
      {
        title: 'girigiri爱动漫',
        url: 'https://anime.girigirilove.com/',
        favicon: 'https://www.acgbox.link/wp-content/uploads/2022/12/girigirilove.com_.webp',
        description: 'girigiri爱动漫~just a little love~专注動漫的门户网站，海外華人在线视频平台',
        abstract: 'girigiri爱动漫',
      },
      {
        title: '萌番',
        url: 'https://www.mfan.tv/',
        favicon: 'https://www.mfan.tv/favicon.ico',
        description:
          'M站，提供高质量的日本动漫番剧资源，保证视频无任何广告介入给大家带来极致的画质体验！',
        abstract: '萌番',
      },
      {
        title: 'NyaFun',
        url: 'https://www.nyafun.net/',
        favicon: 'https://dingyue.ws.126.net/2022/1023/d64c5283j00rk6yq202vwd001kw01kwp.jpg',
        description:
          'NyaFun专注于资源收集整理 海量的有效的高质量的动漫，资源下载，最新电影，观看完全免费、高速播放、更新及时在线，我们致力为所有动漫迷们提供最好看的动漫',
        abstract: 'NyaFun',
      },
      {
        title: '宫下动漫',
        url: 'https://arlnigdm.com/',
        favicon: 'https://arlnightu.org/images/2023/01/16/543868340812cf21b0b31c03f4520f19.jpg',
        description: '一个遗落的二次元世界',
        abstract: '宫下动漫',
      },
      {
        title: 'AnFuns动漫',
        url: 'https://www.anfuns.cc/',
        favicon:
          'https://bj.bcebos.com/baidu-rmb-video-cover-1/8ff4a69e0bbbd5bb5d9cc2c0f8ddb37f.png',
        description:
          'AnFuns动漫,本站提供1080P 720P BDRIP动漫资源收集整理,专门为您提供海量的高质量高画质的在线动漫资源的网站门户.',
        abstract: 'AnFuns动漫_在线动漫资源门户',
      },
      {
        title: 'ZzzFun动漫视频网',
        url: 'http://www.zzzfun.com/',
        favicon: 'http://www.zzzfun.com/favicon.ico',
        description: '提供最新最快的动漫新番资讯和在线播放，开心看动漫，无圣骑、无暗牧',
        abstract: '资源丰富，无广告，网站有时不稳定',
      },
      {
        title: '異世界動漫',
        url: 'https://www.ysjdm.net/',
        favicon: 'https://www.ysjdm.net/template/conch/asset/img/favicon.png',
        description: '異世界動漫',
        abstract: '異世界動漫',
      },
      {
        title: 'M站_哔咪动漫',
        url: 'http://www.bimiacg4.net/',
        description:
          '哔咪动漫,哔咪哔咪,故被网友称为m站以及bimibimi，无论您喜欢那种类型，m站哔咪哔咪都会筛选经典作品并将新作经典轮番推荐，相信哔咪哔咪都能为您一网打尽，为您带来一场美妙的动漫盛宴，这里是兴趣使然的无名小站。',
        abstract: '更新较快，广告较多，资源丰富',
      },
      {
        title: 'ebb',
        url: 'https://ebb.io/',
        favicon: 'https://ebb.io/favicon.ico',
        description: 'ebb',
        abstract: 'ebb [需登录]',
      },
      {
        title: '哔哩哔哩',
        url: 'https://www.bilibili.com/anime/',
        favicon: 'https://www.bilibili.com/favicon.ico?v=1',
        description:
          '哔哩哔哩（bilibili.com)是国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。大家可以在这里找到许多欢乐。',
        abstract: '哔哩哔哩',
      },
      {
        title: 'AcFun',
        url: 'https://www.acfun.cn/bangumilist',
        favicon: 'https://cdn.aixifan.com/ico/favicon.ico',
        description:
          'AcFun是国内首家弹幕视频网站，这里有全网独家动漫新番， 友好的弹幕氛围，有趣的UP主，好玩有科技感的虚拟偶像，年轻人都在用。',
        abstract: 'AcFun',
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
        abstract: '【推荐】漫画资源丰富，更新及时',
      },
      {
        title: 'Komiic',
        url: 'https://komiic.com/',
        favicon: 'https://komiic.com/favicon.ico',
        description:
          '漫畫網站，只放我個人喜愛的漫畫，會定期更新，也有可能隨時關站，但是會努力的給你最好的體驗',
        abstract: 'Komiic',
      },
      {
        title: 'vomic漫画',
        url: 'http://www.iewoai.com/',
        favicon: 'http://www.iewoai.com/static/images/logo/favicon_white_50.png',
        description: 'vomic漫画是全网资源最全的在线漫画、日本漫画、国产漫画、韩漫阅读平台。',
        abstract: '漫画资源齐全',
      },
      {
        title: '拷貝漫畫',
        url: 'https://www.copymanga.site/',
        favicon: 'https://hi77-overseas.mangafuna.xyz/static/free.ico',
        description: '拷貝漫畫',
        abstract: '拷貝漫畫',
      },
      {
        title: '哔哩哔哩漫画',
        url: 'https://manga.bilibili.com/',
        favicon: 'https://www.bilibili.com/favicon.ico',
        description: '哔哩哔哩正版漫画阅读平台, 海量官方漫画连载在线观看, 二次元动漫迷的追漫神器。',
        abstract: '国内正版漫画平台',
      },
      {
        title: '搜漫',
        url: 'https://www.soman.com/',
        favicon: 'https://www.soman.com/static/images/favicon.ico',
        description:
          '搜漫连接了全网多个资源丰富的漫画源，为漫画爱好者提供最新最全的漫画资源搜索服务，带你享受一站式看遍全网漫画的极致体验。',
        abstract: '漫画搜索引擎',
      },
      {
        title: '二次元動漫',
        url: 'https://www.2animx.com/',
        favicon: 'https://www.2animx.com/favicon.ico',
        description: '免費在線漫畫網站',
        abstract: '免費在線漫畫網站',
      },
      {
        title: '国漫吧',
        url: 'http://www.guoman8.cc/',
        favicon: 'http://www.guoman8.cc/favicon.ico',
        description: '国漫吧',
        abstract: '国漫吧',
      },
      {
        title: '漫画柜',
        url: 'https://www.manhuagui.com/',
        favicon: 'https://www.manhuagui.com/favicon.ico',
        description: '漫画柜',
        abstract: '漫画柜',
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
        abstract: '【推荐】资源较多，提供免费汉硬下载链接',
      },
      {
        title: '初音的青葱',
        url: 'https://www.yngal.com/',
        favicon: 'https://www.yngal.com/static/images/icon.jpg',
        description:
          '欢迎来到我的Galgame资源发布站，这里是热爱和平，发布二次元相关的资源站，努力打造舒心畅快的气氛，本网站是唯一地址，您的支持是我的动力 ',
        abstract: '个人galgame网站，提供免费汉硬下载链接',
      },
      {
        title: 'GalWorld',
        url: 'https://acgngame.top/',
        description: '普通的Galgame资源站，提供galgame资源下载。',
        abstract: 'Galgame资源站，提供galgame资源下载',
      },
      {
        title: '忧郁的loli',
        url: 'https://www.ttloli.com/',
        favicon: 'https://www.ttloli.com/favicon.ico',
        description: '汉化galgame分享站',
        abstract: '【推荐】经典汉化galgame分享站',
      },
      {
        title: 'unkiller喵の小站',
        url: 'https://unkiller.xyz/',
        favicon: 'https://unkiller.xyz/wp-content/uploads/2022/07/1658162378-ch05-1.jpg',
        description: 'unkiller喵の小站',
        abstract: 'unkiller喵の小站',
      },
      {
        title: '幽隐恋梦',
        url: 'https://ercygame.com/',
        favicon:
          'https://ercygame.com/wp-content/uploads/2021/07/cropped-srchttp___inews.gtimg_.com_newsapp_match_0_10723316324_0-1.jpgreferhttp___inews.gtimg_-1-32x32.jpg',
        description: 'galgame资源发布站 - 幽隐恋梦',
        abstract: '生肉硬盘站',
      },
      {
        title: '青空彼端',
        url: 'https://www.acgns.xyz/',
        favicon: 'https://www.acgns.xyz/wp-content/uploads/2023/02/favicon1.png',
        description: 'galgame资源发布站',
        abstract: '青空彼端',
      },
      {
        title: 'TouchGAL',
        url: 'https://www.touchgal.net/',
        favicon: 'https://npm.elemecdn.com/touchgalstatic1@0.0.3/img/CnLIp.png',
        description: 'TouchGAL-一站式Galgame文化社区！',
        abstract: 'TouchGAL',
      },
      {
        title: '失落小站',
        url: 'https://shinnku.com/',
        favicon: 'https://shinnku.com/favicon.ico',
        description: 'galgame资源站',
        abstract: '失落小站',
      },
      {
        title: '天使二次元',
        url: 'https://www.tianshi2.cc/',
        favicon: 'https://www.tianshi2.cc/favicon.ico',
        description:
          '天使二次元 — 本站专注ACG，主攻Galgame，兼攻Comic，Anime。以汉化版Galgame为主，为未来Gal中文界培养生力军。',
        abstract: '天使二次元 [需登录]',
      },
      {
        title: 'ACG资源网',
        url: 'https://www.acgnzy.com/',
        favicon: 'https://www.acgnzy.com/favicon.ico',
        description: 'ACG资源网',
        abstract: 'ACG资源网',
      },
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
        description: '专注分享的NACG社群',
        abstract: '专注分享的NACG社群',
      },
      {
        title: 'EPUB 輕小說站',
        url: 'http://epubln.blogspot.com/',
        favicon: 'http://epubln.blogspot.com/favicon.ico',
        description: '提供EPUB格式的輕小說下載',
        abstract: '提供EPUB格式的輕小說下載',
      },
      {
        title: '圖書館的無限迴廊',
        url: 'https://epub.love/wp/',
        favicon: 'http://epub.love/wp/wp-content/uploads/2019/04/timg1.png',
        description: '圖書館的無限迴廊',
        abstract: '圖書館的無限迴廊',
      },
      {
        title: '哔哩轻小说',
        url: 'https://www.linovelib.com/',
        favicon: 'https://www.linovelib.com/favicon.ico',
        description: '哔哩轻小说',
        abstract: '哔哩轻小说',
      },
      {
        title: 'CIJOC',
        url: 'https://cijoc.com/',
        favicon: 'https://cijoc.com/favicon.ico',
        description: 'CIJOC',
        abstract: 'CIJOC',
      },
    ],
  },
  {
    name: 'ACG社区',
    category: 'ACGClub',
    sites: [
      {
        title: 'KeyFansClub',
        url: 'https://www.keyfc.net/bbs/',
        favicon: 'https://www.keyfc.net/bbs/favicon.ico',
        description: 'KEY社作品讨论与同人创作相关的清新主题大众站',
        abstract: 'Key社游戏专门论坛'
      },
      {
        title: 'KDays 论坛',
        url: 'https://bbs2.kdays.net/',
        favicon: 'https://bbs2.kdays.net/favicon.ico',
        description: '',
        abstract: 'KDays 论坛'
      },
      {
        title: '天使二次元讨论区',
        url: 'https://bbs.tianshi.one/',
        favicon: 'https://bbs.tianshi.one/favicon.ico',
        description: '天使二次元讨论区',
        abstract: '天使二次元讨论区'
      },
      {
        title: '琉璃神社',
        url: 'https://hacg.cat/',
        favicon: 'https://hacg.cat/favicon.ico',
        description: '琉璃神社',
        abstract: '琉璃神社'
      },
      {
        title: '星空论坛',
        url: 'https://bbs2.seikuu.com/',
        favicon: 'https://bbs2.seikuu.com/favicon.ico',
        description: '星空论坛',
        abstract: '星空论坛'
      },
      {
        title: '终点论坛',
        url: 'https://bbs.zdfx.net/',
        favicon: 'https://bbs.zdfx.net/img/zdfx.svg',
        description: '终点论坛',
        abstract: '终点论坛'
      },
      {
        title: 'Sperteの次元茶馆',
        url: 'https://www.cycg.xyz/',
        favicon: 'https://www.cycg.xyz/favicon.ico',
        description: 'Sperteの次元茶馆',
        abstract: 'Sperteの次元茶馆'
      },
    ]
  },
  {
    name: '动漫下载',
    category: 'animeDownload',
    sites: [
      {
        title: 'ANi Open',
        url: 'https://aniopen.an-i.workers.dev/',
        favicon: 'https://cdn.jsdelivr.net/gh/RyanL-29/aniopen/favicon.ico',
        description: 'ANi Open',
        abstract: 'ANi Open',
      },
      {
        title: '蜜柑计划',
        url: 'https://mikanani.me/',
        favicon: 'https://mikanani.me/favicon.ico',
        description: '蜜柑计划：新一代的动漫下载站',
        abstract: '蜜柑计划',
      },
      {
        title: '末日動漫資源庫',
        url: 'https://share.acgnx.se/',
        favicon: 'https://share.acgnx.se/favicon.ico',
        description: '末日動漫資源庫',
        abstract: '末日動漫資源庫'
      },
      {
        title: '動漫花園',
        url: 'https://share.dmhy.org/',
        favicon: 'https://share.dmhy.org/favicon.ico',
        description: '動漫花園',
        abstract: '動漫花園'
      },
      {
        title: '萌番组',
        url: 'https://bangumi.moe/',
        description: '萌番组',
        abstract: '萌番组'
      },
      {
        title: 'ACG.RIP',
        url: 'https://acg.rip/',
        favicon: 'https://acg.rip/favicon.ico',
        description: 'ACG.RIP',
        abstract: 'ACG.RIP'
      },
      {
        title: '漫猫动漫BT下载',
        url: 'http://www.comicat.org/',
        favicon: 'http://www.comicat.org/images/favicon/comicat.ico',
        description: '漫猫动漫BT下载',
        abstract: '漫猫动漫BT下载'
      },
      {
        title: '＊MioBT＊',
        url: 'http://miobt.com/',
        favicon: 'http://miobt.com/images/favicon/miobt.ico',
        description: '＊MioBT＊',
        abstract: '＊MioBT＊'
      },
    ],
  },
  {
    name: '在线本子',
    category: 'hcomic',
    sites: [
      {
        title: '禁漫天堂',
        url: 'https://jmcomic1.bet/',
        description: '禁漫天堂',
        abstract: '禁漫天堂',
      },
      {
        title: 'ExHentai',
        url: 'https://exhentai.org/',
        favicon: 'https://exhentai.org/favicon.ico',
        description: 'ExHentai',
        abstract: 'ExHentai [需cookie登录]',
      },
      {
        title: '嗶咔漫畫',
        url: 'https://www.picacomic.com/',
        favicon: 'https://www.picacomic.com/images/favicon-32x32.png',
        description: '嗶咔漫畫',
        abstract: '嗶咔漫畫 [需下载app]',
      },
      {
        title: 'NoyAcg',
        url: 'https://noy.asia/',
        favicon: 'https://noy.asia/favicon.ico',
        description: 'NoyAcg',
        abstract: 'NoyAcg [需登录]',
      },
      {
        title: 'AB站',
        url: 'https://acgbeo.com/',
        favicon: 'https://acgbeo.com/static/favicon.ico',
        description: 'AB站',
        abstract: 'AB站 [需登录]',
      },
      {
        title: '紳士漫畫',
        url: 'https://www.wnacg.com/',
        favicon: 'https://www.wnacg.com/favicon.ico',
        description: '紳士漫畫',
        abstract: '紳士漫畫',
      },
    ],
  },
  {
    name: '在线里番',
    category: 'hanime',
    sites: [
      {
        title: 'Hanime1.me',
        url: 'https://hanime1.me/',
        // favicon: 'https://i.imgur.com/PTFz5Ej.png',
        description: 'Hanime1.me',
        abstract: '【推荐】Hanime1.me'
      },
      {
        title: 'Avbebe',
        url: 'https://avbebe.com/',
        // favicon: 'https://avbebe.com/favicon.ico',
        description: 'Avbebe',
        abstract: 'Avbebe [有广告]'
      },
      {
        title: 'ACG.RW',
        url: 'https://www.acgrw.net/',
        favicon: 'https://www.acgrw.net/usr/themes/yingshierhao/assets/images/favicon.png',
        description: 'ACG.RW',
        abstract: 'ACG.RW'
      },
      {
        title: 'H次元',
        url: 'https://h-ciyuan.com/',
        favicon: 'https://h-ciyuan.com/favicon.ico',
        description: 'H次元',
        abstract: 'H次元'
      },
      {
        title: 'Hentai Dude',
        url: 'https://hentaidude.com/',
        favicon: 'https://i.shoujoramune.com/wp-content/themes/awp/images/favicon.png',
        description: 'Hentai Dude',
        abstract: 'Hentai Dude'
      },
      {
        title: 'Hentaimama',
        url: 'https://hentaimama.io/',
        favicon: 'https://hentaimama.io/wp-content/uploads/2022/01/favicon-2.ico',
        description: 'Hentaimama',
        abstract: 'Hentaimama'
      },
    ],
  },
]

export { iconMap, acgCollection }
export type { AcgSite, AcgField, AcgCategory }
