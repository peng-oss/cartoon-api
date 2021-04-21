const express = require('express')
// 引入数据库表结构模型
const homeModel = require("../../models/home/homeModel");              // 漫画图片

const { successSend, errorSend } = require("../../config/tools");
const router = express.Router()                                       // 创建一个路由容器

// 获取首页数据接口
router.get('/getAll', (req, res) => {
    homeModel.find((err, allData) => {
        if (err) {
            console.log('查询失败');
        } else {
            res.status(200).json({
                status: 200,
                msg: "获取成功",
                allData
            });
        }
    })
})

const allImg = {
    // 1.轮播图
    carouselList: [
        {
            url: 'https://tn1-f2.kkmh.com/image/201208/hyIKSuRfi.webp-t.w750.webp.h',
        },
        {
            url: 'https://tn1-f2.kkmh.com/image/201202/yIqDubkLA.webp-t.w750.webp.h',
        },
        {
            url: 'https://tn1-f2.kkmh.com/image/201121/xmlrwhmgL.webp-t.w750.webp.h',
        },
        {
            url: 'https://tn1-f2.kkmh.com/image/201211/UqnRfBAcA.webp-t.w750.webp.h',
        },
        {
            url: 'https://tn1-f2.kkmh.com/image/201129/JCgPzApgH.webp-t.w750.webp.h',
        },
        {
            url: 'https://tn1-f2.kkmh.com/image/201205/WyxxGsnJh.webp-t.w750.webp.h',
        },
    ],
    // 2.原创数据与图片源
    originalImgList: [
        {
            id: 1,
            url: 'https://tn1-f2.kkmh.com/image/201009/OvEtlOWSI.webp-t.w207.webp.h',
            bookName: '透过指尖的光',
        },
        {
            id: 2,
            url: 'https://tn1-f2.kkmh.com/image/201009/rUPqEUSEW.webp-t.w207.webp.h',
            bookName: '改行吧魔法师',
        },
        {
            id: 3,
            url: 'https://tn1-f2.kkmh.com/image/190709/1BqbnrIPh.webp-t.w207.webp.h',
            bookName: '特别恋爱关系',
        },
        {
            id: 4,
            url: 'https://tn1-f2.kkmh.com/image/201009/uOHhIOdju.webp-t.w207.webp.h',
            bookName: '三界制',
        },
        {
            id: 5,
            url: 'https://tn1-f2.kkmh.com/image/200815/zwZFKoZdL.webp-t.w207.webp.h',
            bookName: '愤怒的撒切尔',
        },
        {
            id: 6,
            url: 'https://tn1-f2.kkmh.com/image/200930/vizYZuhff.webp-t.w207.webp.h',
            bookName: '浮游梦',
        },
    ],
    // 3.惊恐数据与图片源
    suspenseImgsList: [
        {
            id: 1,
            src: 'https://tn1-f2.kkmh.com/image/200430/khhhTiBkP.webp-t.w207.webp.h',
            bookName: '强者永生',
            suspenseAuthor: 'JAY KUN',
        },
        {
            id: 2,
            src: 'https://tn1-f2.kkmh.com/image/200110/cfXUZbqaK.webp-t.w207.webp.h',
            bookName: '须弥千愿卷',
            suspenseAuthor: '奥兹（主笔）+加缪（编剧）',
        },
        {
            id: 3,
            src: 'https://tn1-f2.kkmh.com/image/200109/nzequoNNC.webp-t.w207.webp.h',
            bookName: '神泽',
            suspenseAuthor: 'Djade(主笔）+KRE（编剧）',
        },
        {
            id: 4,
            src: 'https://tn1-f2.kkmh.com/image/170123/33h3huvuw.webp-t.w207.webp.h',
            bookName: '反转现实',
            suspenseAuthor: '天极焉加+快看漫画团队',
        },
        {
            id: 5,
            src: 'https://tn1-f2.kkmh.com/image/200417/TdrJAkUsh.webp-t.w207.webp.h',
            bookName: '唐人街小先生',
            suspenseAuthor: '三老爷',
        },
        {
            id: 6,
            src: 'https://tn1-f2.kkmh.com/image/190627/7ca0LRvVk.webp-t.w207.webp.h',
            bookName: '灵烛少女',
            suspenseAuthor: 'leu',
        },
        {
            id: 7,
            src: 'https://tn1-f2.kkmh.com/image/190118/7wFkUEjHk.webp-t.w207.webp.h ',
            bookName: '傀园',
            suspenseAuthor: 'BING',
        },
        {
            id: 8,
            src: 'https://tn1-f2.kkmh.com/image/191130/lDyEeKoWS.webp-t.w207.webp.h',
            bookName: '看见禽兽的声音',
            suspenseAuthor: '好饭+新果十二三',
        },
        {
            id: 9,
            src: ' https://tn1-f2.kkmh.com/image/180705/Z8fSi2plu.webp-t.w207.webp.h',
            bookName: '狼的谎言',
            suspenseAuthor: '金丘（主笔）+谨斯里（编剧）',
        },
        {
            id: 10,
            src: ' https://tn1-f2.kkmh.com/image/170922/43h4885wg.webp-t.w207.webp.h',
            bookName: '第二模式',
            suspenseAuthor: '幽·灵',
        },
        {
            id: 11,
            src: 'https://tn1-f2.kkmh.com/image/180706/K3O0ERxy5.webp-t.w207.webp.h',
            bookName: '人类进化论',
            suspenseAuthor: '祝耕夫',
        },
        {
            id: 12,
            src: ' https://tn1-f2.kkmh.com/image/200327/AmfqfPkOh.webp-t.w207.webp.h',
            bookName: '未来航班',
            suspenseAuthor: '非人哉工作室',
        },
    ],
    // 4.新作榜图片
    newWorkImgsList: [
        {
            id: 1,
            top: 'TOP.1',
            rank: '新晋黑马',
            bookName: 'FOG[电竞]',
            author: '漫漫何其多/晋江文学城+吃饱饭工厂',
            description: '两年前，余邃被传卖队友，被人口诛笔伐，他可以…',
            src: 'https://tn1-f2.kkmh.com/image/200925/kLFxrFMAV.webp-t.w180.webp.h',
        },
        {
            id: 2,
            top: 'TOP.2',
            rank: '新晋黑马',
            bookName: '成为伯爵家的废物',
            author: 'PAN4+PING+Yu Ryeo Han+COPIN',
            description: '一个出场5秒就下线的贵族混混，一个高冷霸气的…',
            src: 'https://tn1-f2.kkmh.com/image/200923/BFjxwqSfy.webp-t.w180.webp.h',
        },
        {
            id: 3,
            top: 'TOP.3',
            rank: '新晋黑马',
            bookName: '龙脉守护者',
            author: '娃哈哈-哈宝',
            description: '在华夏，先贤称之为“龙脉”，其强弱与流向，决…',
            src: 'https://tn1-f2.kkmh.com/image/201119/McGOGMJoa.webp-t.w180.webp.h',
        },
        {
            id: 4,
            top: 'TOP.4',
            rank: '下降2名',
            bookName: '恋人夜间营业',
            author: '大雨儿（主笔）+谨斯里（编剧）',
            description: '和未婚夫一起匿名参加相亲节目！？一对很穷的职…',
            src: 'https://tn1-f2.kkmh.com/image/200923/DCdolEdES.webp-t.w180.webp.h',
        },
        {
            id: 5,
            top: 'TOP.5',
            rank: '下降2名',
            bookName: '妻为上',
            author: '绿野千鹤/晋江文学城+博易漫画',
            description: '景韶战功赫赫，却遭人诬陷落得鸟尽弓藏，没想到…',
            src: 'https://tn1-f2.kkmh.com/image/200925/kFqcvilNm.webp-t.w180.webp.h',
        },
        {
            id: 6,
            top: 'TOP.6',
            rank: '下降1名',
            bookName: '他那么撩',
            author: '曲小蛐（原著）+这块瓜有毒（主笔）+花村蘑菇（编剧）',
            description: '乖乖女学霸秦晴转学第一天，意外被卷入到一场约…',
            src: 'https://tn1-f2.kkmh.com/image/200925/nLtcHbBAW.webp-t.w180.webp.h',
        },
        {
            id: 7,
            top: 'TOP.7',
            rank: '下降6名',
            bookName: '他的苹果',
            author: '橘枳',
            description: '普通高中生竟是红发魔女的女儿————满级大佬…',
            src: 'https://tn1-f2.kkmh.com/image/201111/dkzBFiFIO.webp-t.w180.webp.h',
        },
        {
            id: 8,
            top: 'TOP.8',
            rank: '上升六名',
            bookName: '月光雕刻师',
            author: 'PARK JUNG YEOL',
            description: '在现实体感游戏风靡的未来，游戏天才少年李贤为…',
            src: 'https://tn1-f2.kkmh.com/image/200610/ZunryLzNj.webp-t.w180.webp.h',
        },
        {
            id: 9,
            top: 'TOP.9',
            rank: '新晋黑马',
            bookName: '胖子英雄',
            author: '插座君+俊男桑',
            description: '他是个胖子，也是个英雄! 然而肥胖的烦恼却远大…',
            src: 'https://tn1-f2.kkmh.com/image/201118/ommUjrLfL.webp-t.w180.webp.h',
        },
    ],
    // 5.飙升榜
    riseWorkImgsList: [
        {
            id: 1,
            top: 'TOP.1',
            rank: '新晋黑马',
            bookName: '成为伯爵家的废物',
            author: 'PAN4+PING+Yu Ryeo Han+COPIN',
            description: '一个出场5秒就下线的贵族混混，一个高冷霸气的…',
            src: 'https://tn1-f2.kkmh.com/image/200923/BFjxwqSfy.webp-t.w180.webp.h',
        },
        {
            id: 2,
            top: 'TOP.2',
            rank: '新晋黑马',
            bookName: 'FOG[电竞]',
            author: '漫漫何其多/晋江文学城+吃饱饭工厂',
            description: '两年前，余邃被传卖队友，被人口诛笔伐，他可以…',
            src: 'https://tn1-f2.kkmh.com/image/200925/kLFxrFMAV.webp-t.w180.webp.h',
        },
        {
            id: 3,
            top: 'TOP.3',
            rank: '新晋黑马',
            bookName: '小心被梦魔吃掉哦',
            author: '西域儿',
            description: '因为生病而晚入学一个月的小透明，和最受欢迎的…',
            src: 'https://tn1-f2.kkmh.com/image/200929/gK7KHIE54.webp-t.w180.webp.h',
        },
        {
            id: 4,
            top: 'TOP.4',
            rank: '新晋黑马',
            bookName: '不协调的恋爱',
            author: '莉茉',
            description: '对周围女孩子没有兴趣的全校第一美男子才贺京助…',
            src: 'https://tn1-f2.kkmh.com/image/201119/bIrggfxiX.webp-t.w180.webp.h',
        },
        {
            id: 5,
            top: 'TOP.5',
            rank: '新晋黑马',
            bookName: '有妻徒刑',
            author: '绯小月',
            description: '妖异女督察与上百名穷凶极恶的囚犯一同被困于这…',
            src: 'https://tn1-f2.kkmh.com/image/200923/nPPQTalZG.webp-t.w180.webp.h',
        },
        {
            id: 6,
            top: 'TOP.6',
            rank: '新晋黑马',
            bookName: '八十一道超纲题',
            author: '条纹花瓶（原著）+常盘勇者',
            description: '2030年，世界末日来临，无数人神秘死亡，剩下的…',
            src: 'https://tn1-f2.kkmh.com/image/200405/RVYeKpepr.webp-t.w180.webp.h',
        },
        {
            id: 7,
            top: 'TOP.7',
            rank: '新晋黑马',
            bookName: 'MONSTER沉默野兽的温度',
            author: '六柴',
            description: '被黑蝴蝶诅咒的少女，从小就遭遇各种危险事故，…',
            src: 'https://tn1-f2.kkmh.com/image/200618/hdHAKBvev.webp-t.w180.webp.h',
        },
        {
            id: 8,
            top: 'TOP.8',
            rank: '新晋黑马',
            bookName: '魔女的逆袭',
            author: 'MinJakk',
            description: '斯佩拉多家族的次女莱斯莉，她的人生完全是为了…',
            src: 'https://tn1-f2.kkmh.com/image/200709/rAvHoSLMa.webp-t.w180.webp.h',
        },
        {
            id: 9,
            top: 'TOP.9',
            rank: '下降1名',
            bookName: '星辰于我',
            author: '犬一',
            description: '沐子星五岁时，一个好看的男孩子.司南，如春天…',
            src: 'https://tn1-f2.kkmh.com/image/200716/vdTwyZvcw.webp-t.w180.webp.h',
        },
    ],
    // 6.漫改图片
    cartoonChangeImgsList: [
        {
            id: 1,
            bookName: '斗罗大陆外传唐门英雄传',
            description:
                '被封印的神界，只有唐三的神力可以直接与外面联系。要战败的时候，从遥远…',
            src: 'https://tn1-f2.kkmh.com/image/190115/6uDRSET7T.webp-t.w320.webp.h',
        },
        {
            id: 2,
            bookName: '被遗忘的7月',
            description:
                '【热播剧《偶然发现的一天》原著漫画】记忆断片的女主俞璐丹以为自己患…',
            src: 'https://tn1-f2.kkmh.com/image/190703/4l7VcZNZN.webp-t.w320.webp.h',
        },
        {
            id: 3,
            bookName: '哑舍',
            description:
                '哑舍里的古物，每一件都有着自己的故事，承载了许多年，无人倾听，默然等…',
            src: 'https://tn1-f2.kkmh.com/image/170809/olw79erkq.webp-t.w320.webp.h',
        },
        {
            id: 4,
            bookName: '八十一道超纲题',
            description:
                '2030年，世界末日来临，无数人神秘死亡，剩下的幸存者被一款叫做“八十一…',
            src: 'https://tn1-f2.kkmh.com/image/200405/RVYeKpepr.webp-t.w320.webp.h',
        },
    ],
    // 7.上头图片
    toHeadImgsList: [
        {
            id: 1,
            src: 'https://tn1-f2.kkmh.com/image/200814/QNRIXWFQq.webp-t.w180.webp.h',
            bookName: '步天歌',
            ToheadAuthor: '夏达',
        },
        {
            id: 2,
            src: 'https://tn1-f2.kkmh.com/image/191025/HbtCpvYqz.webp-t.w180.webp.h',
            bookName: '桃与末世之书',
            ToheadAuthor: '晨曦',
        },
        {
            id: 3,
            src: 'https://tn1-f2.kkmh.com/image/200303/hWCVwjEfc.webp-t.w180.webp.h',
            bookName: '刀鞘的孩子',
            ToheadAuthor: ' Kyungil Yang（主笔）',
        },
        {
            id: 4,
            src: 'https://tn1-f2.kkmh.com/image/200727/edEjPcrEp.webp-t.w180.webp.h',
            bookName: '我独自升级',
            ToheadAuthor: 'DUBU(主笔)',
        },
        {
            id: 5,
            src: 'https://tn1-f2.kkmh.com/image/200714/juxCCvnxK.webp-t.w180.webp.h',
            bookName: '谷围南亭',
            ToheadAuthor: '墨飞',
        },
        {
            id: 6,
            src: 'https://tn1-f2.kkmh.com/image/181025/4diVYyMUJ.webp-t.w180.webp.h',
            bookName: '蝉女',
            ToheadAuthor: '宫缘乾 ',
        },
        {
            id: 7,
            src: 'https://tn1-f2.kkmh.com/image/200109/RZbXGSASA.webp-t.w180.webp.h',
            bookName: '第N次恋爱',
            ToheadAuthor: ' 栗路 ',
        },
        {
            id: 8,
            src: 'https://tn1-f2.kkmh.com/image/200202/thKbsYdzJ.webp-t.w180.webp.h',
            bookName: '万能恋爱杂货店',
            ToheadAuthor: ' 鲤鱼丸一 ',
        },
        {
            id: 9,
            src: 'https://tn1-f2.kkmh.com/image/191011/bAcCyBfCx.webp-t.w180.webp.h',
            bookName: '欺星客栈',
            ToheadAuthor: '抽纸小jin ',
        },
        {
            id: 10,
            src: 'https://tn1-f2.kkmh.com/image/171201/wd4irlrb9.webp-t.w180.webp.h',
            bookName: '魔道祖师',
            ToheadAuthor: '墨香铜臭（原著）',
        },
    ],
    // 8.上头排行榜
    toHeadPopularityList: [
        {
            id: 2,
            title: '爱情的样子：心之所向',
            dated: '第18话  心动不自知',
        },
        {
            id: 3,
            title: '八十一道超纲题',
            dated: '第69话 新副本又将来临',
        },
        {
            id: 4,
            title: 'FOG[电竞]',
            dated: '第2话 重逢',
        },
        {
            id: 5,
            title: '星辰于我',
            dated: '第18话 星星的夜空',
        },
        {
            id: 6,
            title: '怪奇实录',
            dated: '第334话  人头蜂巢',
        },
        {
            id: 7,
            title: '超能立方',
            dated: '第196话  交易的艺术',
        },
        {
            id: 8,
            title: '非友人关系',
            dated: '第18话  心动不自知',
        },
        {
            id: 9,
            title: '他那么撩',
            dated: '后记（下）好久不见',
        },
        {
            id: 10,
            title: '不可爱的TA',
            dated: '第9话  让他的眼里只...',
        },
    ],
}



// let Chapter = new homeModel()

// Chapter.save((err, res) => {
//     if (err) {
//         console.log('保存失败');
//     } else {
//         console.log('保存成功');
//         console.log(res); // 刚刚插入的数据
//     }
// })


// 把 router 导出
module.exports = router