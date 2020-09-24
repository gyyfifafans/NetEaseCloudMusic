import React, { Component } from 'react'
import { observable, action, computed } from 'mobx'
class MineModel {
  @observable createList = [{
    'subscribers': [],
    'subscribed': false,
    'creator': {
      'defaultAvatar': true,
      'province': 310000,
      'authStatus': 0,
      'followed': false,
      'avatarUrl': 'http://p1.music.126.net/RLeBJe4D1ZzUtltxfoKDMg==/109951163250239066.jpg',
      'accountStatus': 0,
      'gender': 0,
      'city': 310101,
      'birthday': -2209017600000,
      'userId': 1812919102,
      'userType': 0,
      'nickname': 'cesna',
      'signature': '',
      'description': '',
      'detailDescription': '',
      'avatarImgId': 109951163250239070,
      'backgroundImgId': 109951162868126480,
      'backgroundUrl': 'http://p1.music.126.net/_f8R60U9mZ42sSNvdPn2sQ==/109951162868126486.jpg',
      'authority': 0,
      'mutual': false,
      'expertTags': null,
      'experts': null,
      'djStatus': 0,
      'vipType': 0,
      'remarkName': null,
      'avatarImgIdStr': '109951163250239066',
      'backgroundImgIdStr': '109951162868126486',
      'avatarImgId_str': '109951163250239066'
    },
    'artists': null,
    'tracks': null,
    'cloudTrackCount': 0,
    'subscribedCount': 0,
    'totalDuration': 0,
    'updateTime': 1554195403589,
    'commentThreadId': 'A_PL_0_2737180728',
    'trackCount': 1,
    'ordered': false,
    'status': 0,
    'userId': 1812919102,
    'tags': [],
    'coverImgUrl': 'https://p1.music.126.net/OCF-QhGPu9juSipvomeIBw==/109951163469524326.jpg',
    'playCount': 0,
    'trackUpdateTime': 1554195403616,
    'coverImgId': 109951163469524320,
    'createTime': 1554195176006,
    'highQuality': false,
    'newImported': false,
    'specialType': 5,
    'anonimous': false,
    'privacy': 0,
    'description': null,
    'adType': 0,
    'trackNumberUpdateTime': 1554195403589,
    'name': 'cesna喜欢的音乐',
    'id': 2737180728,
    'coverImgId_str': '109951163469524326'
  }]
  @observable favList = [
    {
      'subscribers': [],
      'subscribed': true,
      'creator': {
        'defaultAvatar': false,
        'province': 410000,
        'authStatus': 0,
        'followed': false,
        'avatarUrl': 'http://p1.music.126.net/nYNPV4UrX-FISmfbSa5W8A==/109951163837392764.jpg',
        'accountStatus': 0,
        'gender': 0,
        'city': 410100,
        'birthday': 913305600000,
        'userId': 60689372,
        'userType': 200,
        'nickname': '跨过凌晨',
        'signature': '要努力 要有所期待 要身体健康 | v x ：baekhyun_4_',
        'description': '',
        'detailDescription': '',
        'avatarImgId': 109951163837392770,
        'backgroundImgId': 109951163871583740,
        'backgroundUrl': 'http://p1.music.126.net/90IqxLXatXKeH7A6lvXpyw==/109951163871583752.jpg',
        'authority': 0,
        'mutual': false,
        'expertTags': [
          '电子',
          '韩语',
          '欧美'
        ],
        'experts': null,
        'djStatus': 10,
        'vipType': 0,
        'remarkName': null,
        'avatarImgIdStr': '109951163837392764',
        'backgroundImgIdStr': '109951163871583752',
        'avatarImgId_str': '109951163837392764'
      },
      'artists': null,
      'tracks': null,
      'cloudTrackCount': 0,
      'subscribedCount': 79956,
      'totalDuration': 0,
      'updateTime': 1540785870048,
      'commentThreadId': 'A_PL_0_975469597',
      'trackCount': 50,
      'ordered': true,
      'status': 0,
      'userId': 60689372,
      'tags': [
        '日语',
        '流行',
        '治愈'
      ],
      'coverImgUrl': 'https://p2.music.126.net/HBFw-yTkNl2QcjfciV67BA==/19228259347118494.jpg',
      'playCount': 1837274,
      'trackUpdateTime': 1553896998599,
      'coverImgId': 19228259347118496,
      'createTime': 1509194346461,
      'highQuality': false,
      'newImported': false,
      'specialType': 0,
      'anonimous': false,
      'privacy': 0,
      'description': '强推:\n① おやすみパラレル\n② ヘンゼルとグレーテルの森\n③ インドア系ならトラックメイカー\n\n———————————————————————\n\n听首甜甜的歌\n做一个可爱的小仙女\n然后把全世界都变可爱°\n\n———————————————————————\n感谢收听 ♡Heart Heart♡',
      'adType': 0,
      'trackNumberUpdateTime': 1536508245903,
      'name': '「日系甜萌」想做你的最甜 可爱且乖',
      'id': 975469597,
      'coverImgId_str': '19228259347118494'
    },
    {
      'subscribers': [],
      'subscribed': true,
      'creator': {
        'defaultAvatar': false,
        'province': 410000,
        'authStatus': 0,
        'followed': false,
        'avatarUrl': 'http://p1.music.126.net/bkw27zvrZy41GjGMKeIfLg==/109951163969457710.jpg',
        'accountStatus': 0,
        'gender': 0,
        'city': 411300,
        'birthday': -2209017600000,
        'userId': 129377889,
        'userType': 200,
        'nickname': '莉犬',
        'signature': '人間廢物 活着就是一场孤身一人的游行  / 春茶 /れい /',
        'description': '',
        'detailDescription': '',
        'avatarImgId': 109951163969457710,
        'backgroundImgId': 109951163948789460,
        'backgroundUrl': 'http://p1.music.126.net/TmkBbLdNcc4_n5E7zkK4GA==/109951163948789451.jpg',
        'authority': 0,
        'mutual': false,
        'expertTags': [
          '日语',
          'ACG'
        ],
        'experts': null,
        'djStatus': 10,
        'vipType': 11,
        'remarkName': null,
        'avatarImgIdStr': '109951163969457710',
        'backgroundImgIdStr': '109951163948789451',
        'avatarImgId_str': '109951163969457710'
      },
      'artists': null,
      'tracks': null,
      'cloudTrackCount': 0,
      'subscribedCount': 636706,
      'totalDuration': 0,
      'updateTime': 1553050879751,
      'commentThreadId': 'A_PL_0_2105681544',
      'trackCount': 182,
      'ordered': true,
      'status': 0,
      'userId': 129377889,
      'tags': [
        '日语',
        'ACG',
        '流行'
      ],
      'coverImgUrl': 'https://p2.music.126.net/05-lGy9hKTqtDWZuKeHWlQ==/109951163608414649.jpg',
      'playCount': 18001216,
      'trackUpdateTime': 1553969518279,
      'coverImgId': 109951163608414660,
      'createTime': 1518832598692,
      'highQuality': false,
      'newImported': false,
      'specialType': 0,
      'anonimous': false,
      'privacy': 0,
      'description': '喜欢无需铺垫，只需一秒便沦陷。\n无前奏日语歌，开口直接秒杀你。\n\n歌单里精选了些无前奏日语歌，\n相信你们听完这些歌的第一句后，你们就会喜欢这些歌的~感谢大家的收听w\n\n歌单随机播放食用更佳w\n歌单前十首单主强烈推荐，都是自己超喜欢的歌，会经常更换哦～\n\n封面p站id：58893318 画师：おくたこす',
      'adType': 0,
      'trackNumberUpdateTime': 1553050879751,
      'name': '日系/无前奏：开口即跪 一秒沦陷',
      'id': 2105681544,
      'coverImgId_str': '109951163608414649'
    },
    {
      'subscribers': [],
      'subscribed': true,
      'creator': {
        'defaultAvatar': false,
        'province': 420000,
        'authStatus': 0,
        'followed': false,
        'avatarUrl': 'http://p1.music.126.net/NI9y_hWC7HEGmPwhrXZqzQ==/109951163835553393.jpg',
        'accountStatus': 0,
        'gender': 2,
        'city': 420100,
        'birthday': 908812800000,
        'userId': 283230319,
        'userType': 0,
        'nickname': '小仙女七七酱',
        'signature': '斗鱼直播间：503866   ID：小仙女七七酱。',
        'description': '',
        'detailDescription': '',
        'avatarImgId': 109951163835553390,
        'backgroundImgId': 109951163093336050,
        'backgroundUrl': 'http://p1.music.126.net/YUlvN-f-6d3oNk1UIlh0lw==/109951163093336051.jpg',
        'authority': 0,
        'mutual': false,
        'expertTags': null,
        'experts': null,
        'djStatus': 10,
        'vipType': 0,
        'remarkName': null,
        'avatarImgIdStr': '109951163835553393',
        'backgroundImgIdStr': '109951163093336051',
        'avatarImgId_str': '109951163835553393'
      },
      'artists': null,
      'tracks': null,
      'cloudTrackCount': 0,
      'subscribedCount': 454360,
      'totalDuration': 0,
      'updateTime': 1539924867479,
      'commentThreadId': 'A_PL_0_443797814',
      'trackCount': 323,
      'ordered': true,
      'status': 0,
      'userId': 283230319,
      'tags': [
        '日语',
        '清新',
        '治愈'
      ],
      'coverImgUrl': 'https://p2.music.126.net/Yn8-GCMLZJ-NbwSM8Yj6lw==/109951162972995997.jpg',
      'playCount': 12978030,
      'trackUpdateTime': 1554193724744,
      'coverImgId': 109951162972996000,
      'createTime': 1471210803978,
      'highQuality': false,
      'newImported': false,
      'specialType': 0,
      'anonimous': false,
      'privacy': 0,
      'description': '【七七斗鱼直播房间号：503866】超好听的动漫歌~欢迎收藏~\n【欢迎大家收藏七七的晚安好梦电台哦！你的专属女友~】\nPS:我不接受什么批评，你批评我，我就骂你。',
      'adType': 0,
      'trackNumberUpdateTime': 1539924867479,
      'name': '超好听の二次元日文歌',
      'id': 443797814,
      'coverImgId_str': '109951162972995997'
    },
    {
      'subscribers': [],
      'subscribed': true,
      'creator': {
        'defaultAvatar': false,
        'province': 510000,
        'authStatus': 0,
        'followed': false,
        'avatarUrl': 'http://p1.music.126.net/9PfOjc-YQTszNgCfN9hbwg==/109951163769652354.jpg',
        'accountStatus': 0,
        'gender': 1,
        'city': 510100,
        'birthday': 1431705600000,
        'userId': 81635197,
        'userType': 200,
        'nickname': '佐仓小小千代',
        'signature': '音乐和动漫都能带来感动，不是吗？',
        'description': '',
        'detailDescription': '',
        'avatarImgId': 109951163769652350,
        'backgroundImgId': 1393081239057549,
        'backgroundUrl': 'http://p1.music.126.net/FE4DOB8ski9JhTCkU9uK1g==/1393081239057549.jpg',
        'authority': 0,
        'mutual': false,
        'expertTags': [
          '影视原声',
          '日语',
          'ACG'
        ],
        'experts': {
          '1': '二次元视频达人',
          '2': '动漫图文达人'
        },
        'djStatus': 10,
        'vipType': 11,
        'remarkName': null,
        'avatarImgIdStr': '109951163769652354',
        'backgroundImgIdStr': '1393081239057549',
        'avatarImgId_str': '109951163769652354'
      },
      'artists': null,
      'tracks': null,
      'cloudTrackCount': 0,
      'subscribedCount': 628567,
      'totalDuration': 0,
      'updateTime': 1553499102452,
      'commentThreadId': 'A_PL_0_158010361',
      'trackCount': 675,
      'ordered': true,
      'status': 0,
      'userId': 81635197,
      'tags': [
        '日语',
        '影视原声',
        'ACG'
      ],
      'coverImgUrl': 'https://p2.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.jpg',
      'playCount': 20477654,
      'trackUpdateTime': 1554166254898,
      'coverImgId': 3272146613241669,
      'createTime': 1453439189757,
      'highQuality': true,
      'newImported': false,
      'specialType': 0,
      'anonimous': false,
      'privacy': 0,
      'description': '介绍：部分动画年代表： \n1979 多啦A梦 \n1983 足球小将 猫眼三姐妹 \n1984 北斗神拳 \n1985 棒球英豪 \n1986 龙珠 圣斗士星矢 \n1987 城市猎人 \n1988 魔神英雄传 魔神坛斗士 \n1990 樱桃小丸子 \n1992 蜡笔小新 美少女战士 幽游白书 \n1993 灌篮高手 \n1995 新世纪福音战士 秀逗魔导士 高达W \n1996 名侦探柯南 \n1997 中华小当家 精灵宝可梦 \n1998 百变小樱 头文字d \n1999 数码宝贝 海贼王 全职猎人 \n2000 游戏王 犬夜叉 \n2001 棋魂 网球王子 通灵王 \n2002 火影忍者 全金属狂潮 高达seed \n2003 钢之炼金术师\n2004 死神\n2005 家庭教师 AIR 灼眼的夏娜\n2006 银魂 反叛的鲁鲁修 凉宫春日的忧郁 Fate stay night\n2007 Clannad 幸运星 高达00 黑之契约者\n2008 魔法禁书目录 夏目友人帐 龙与虎\n2009 妖精的尾巴 科学的超电磁炮 轻音少女 好想告诉你\n2010 Angel Beats 无头骑士异闻录 迷糊餐厅\n2011 Fate zero 世界第一初恋\n2012 刀剑神域 JOJO的奇妙冒险 冰菓 K\n2013 白色相簿2\n2014 四月是你的谎言 游戏人生 月刊少女野崎君\n2015 干物妹小埋 路人女主的养成方法 Overlord\n2016 Re：从零开始的异世界生活 在下坂本，有何贵干？ 冰上的尤里 \n2017 小林家的龙女仆 月色真美 埃罗芒阿老师\n2018 紫罗兰永恒花园 工作细胞 青春期笨蛋不做兔女郎学姐的梦\n2019 家有女友',
      'adType': 0,
      'trackNumberUpdateTime': 1552998026954,
      'name': '『1979-至今』全年代日本动漫OP大盘点-持更',
      'id': 158010361
    },
    {
      'subscribers': [],
      'subscribed': true,
      'creator': {
        'defaultAvatar': false,
        'province': 310000,
        'authStatus': 0,
        'followed': false,
        'avatarUrl': 'http://p1.music.126.net/WtwwS5JQ0xDN5fmsH-xQVQ==/109951163855951487.jpg',
        'accountStatus': 0,
        'gender': 1,
        'city': 310101,
        'birthday': 884448000000,
        'userId': 102279512,
        'userType': 0,
        'nickname': 'xx香蕉船',
        'signature': '爱让我们变得唯心～',
        'description': '',
        'detailDescription': '',
        'avatarImgId': 109951163855951490,
        'backgroundImgId': 109951163865750700,
        'backgroundUrl': 'http://p1.music.126.net/ONFRjT1aG7nSB0Vtfp60tA==/109951163865750709.jpg',
        'authority': 0,
        'mutual': false,
        'expertTags': null,
        'experts': null,
        'djStatus': 10,
        'vipType': 11,
        'remarkName': null,
        'avatarImgIdStr': '109951163855951487',
        'backgroundImgIdStr': '109951163865750709',
        'avatarImgId_str': '109951163855951487'
      },
      'artists': null,
      'tracks': null,
      'cloudTrackCount': 0,
      'subscribedCount': 26730,
      'totalDuration': 0,
      'updateTime': 1543217952471,
      'commentThreadId': 'A_PL_0_708830449',
      'trackCount': 100,
      'ordered': true,
      'status': 0,
      'userId': 102279512,
      'tags': [
        '欧美',
        '韩语',
        '翻唱'
      ],
      'coverImgUrl': 'https://p2.music.126.net/SnDS89aXVwUgrTiCBl3e0A==/109951162914415435.jpg',
      'playCount': 1415419,
      'trackUpdateTime': 1553907682426,
      'coverImgId': 109951162914415440,
      'createTime': 1493200026441,
      'highQuality': false,
      'newImported': false,
      'specialType': 0,
      'anonimous': false,
      'privacy': 0,
      'description': 'J.Fla，原名Kim Jeong Hwa，韩国歌手,歌曲制作人。生于1987年6月10日，身高163cm，体重43kg，B Cup(目测)，目前在Ostereo Records唱片公司，唱歌的时候喜欢闭眼睛晃悠，偶尔录下玩游戏做饭等。\n2013年正式出道并发行首张原创EP《바보 같은 Story》,出道后不久就迅速在日本和韩国成为热门话题.2016年，J.Fla的翻唱作品在国内转载而得到关注，因其甜美声线和惊艳侧颜得到许多人的喜爱。\n油管（YouTube）主页user/JFlaMusic 喜欢的走起~\n推荐大家看MV听歌，\n因为，始于侧颜，陷于歌声，忠于马尾，痴于摇头。是我们的信仰~\n还有很多翻唱都只有MV版的，大家可以搜索她的MV看（目前有188个），当然有新的翻唱出来后，我会第一时间收录进来的~\n同时，我会陆续开通这个歌单的3D环绕版，可以去我的电台收听~',
      'adType': 0,
      'trackNumberUpdateTime': 1543217952471,
      'name': '☀️J.Fla【翻唱原声收录】',
      'id': 708830449,
      'coverImgId_str': '109951162914415435'
    },
    {
      'subscribers': [],
      'subscribed': true,
      'creator': {
        'defaultAvatar': false,
        'province': 110000,
        'authStatus': 0,
        'followed': false,
        'avatarUrl': 'http://p1.music.126.net/YUDAnswzzBas9Rdb9iYutQ==/109951163240891777.jpg',
        'accountStatus': 0,
        'gender': 1,
        'city': 110101,
        'birthday': 796233600000,
        'userId': 41751076,
        'userType': 200,
        'nickname': '流年忧光影',
        'signature': '好好听歌～～',
        'description': '',
        'detailDescription': '',
        'avatarImgId': 109951163240891780,
        'backgroundImgId': 109951163240889420,
        'backgroundUrl': 'http://p1.music.126.net/1yrCS_dACD9IlXlM_KdmCw==/109951163240889431.jpg',
        'authority': 0,
        'mutual': false,
        'expertTags': [
          '华语',
          '流行',
          '民谣'
        ],
        'experts': {
          '1': '影视视频达人',
          '2': '生活资讯达人'
        },
        'djStatus': 10,
        'vipType': 11,
        'remarkName': null,
        'avatarImgIdStr': '109951163240891777',
        'backgroundImgIdStr': '109951163240889431',
        'avatarImgId_str': '109951163240891777'
      },
      'artists': null,
      'tracks': null,
      'cloudTrackCount': 0,
      'subscribedCount': 1371019,
      'totalDuration': 0,
      'updateTime': 1546831855956,
      'commentThreadId': 'A_PL_0_988690134',
      'trackCount': 115,
      'ordered': true,
      'status': 0,
      'userId': 41751076,
      'tags': [
        '粤语',
        '怀旧',
        '华语'
      ],
      'coverImgUrl': 'https://p2.music.126.net/VFd5cboNTbnYsWZ5DBn9bg==/18953381440004340.jpg',
      'playCount': 72376992,
      'trackUpdateTime': 1553906279249,
      'coverImgId': 18953381440004340,
      'createTime': 1510066731009,
      'highQuality': true,
      'newImported': false,
      'specialType': 0,
      'anonimous': false,
      'privacy': 0,
      'description': '在时光中沉淀的首首经典老歌，承载了一段段印刻在内心最深处的回忆。重温经典，回味那些逝去的时光...',
      'adType': 0,
      'trackNumberUpdateTime': 1545886648012,
      'name': '经典老歌，久听不厌',
      'id': 988690134,
      'coverImgId_str': '18953381440004340'
    },
    {
      'subscribers': [],
      'subscribed': true,
      'creator': {
        'defaultAvatar': false,
        'province': 440000,
        'authStatus': 0,
        'followed': false,
        'avatarUrl': 'http://p1.music.126.net/-Jm-q5-2J235-ViH4MvTlQ==/109951163944049490.jpg',
        'accountStatus': 0,
        'gender': 1,
        'city': 440100,
        'birthday': 872870400000,
        'userId': 564487518,
        'userType': 0,
        'nickname': '我到底有几个',
        'signature': '另一个声音  另一种爱好 另一个性格 另一个自己',
        'description': '',
        'detailDescription': '',
        'avatarImgId': 109951163944049490,
        'backgroundImgId': 109951163922976060,
        'backgroundUrl': 'http://p1.music.126.net/l5t0N_FCEr3gA3rO4jCtKA==/109951163922976065.jpg',
        'authority': 0,
        'mutual': false,
        'expertTags': null,
        'experts': null,
        'djStatus': 0,
        'vipType': 11,
        'remarkName': null,
        'avatarImgIdStr': '109951163944049490',
        'backgroundImgIdStr': '109951163922976065',
        'avatarImgId_str': '109951163944049490'
      },
      'artists': null,
      'tracks': null,
      'cloudTrackCount': 0,
      'subscribedCount': 32955,
      'totalDuration': 0,
      'updateTime': 1553267512843,
      'commentThreadId': 'A_PL_0_2112164721',
      'trackCount': 248,
      'ordered': true,
      'status': 0,
      'userId': 564487518,
      'tags': [
        '日语',
        'ACG',
        '夜晚'
      ],
      'coverImgUrl': 'https://p2.music.126.net/tv_vsVDa_FqzyigpghYopA==/109951163896164723.jpg',
      'playCount': 1098891,
      'trackUpdateTime': 1554169607548,
      'coverImgId': 109951163896164720,
      'createTime': 1519267528116,
      'highQuality': false,
      'newImported': false,
      'specialType': 0,
      'anonimous': false,
      'privacy': 0,
      'description': '为什么我歌单的描述不见了？\n为什么',
      'adType': 0,
      'trackNumberUpdateTime': 1553267512843,
      'name': '『日漫 二次元』那些无法跳过的op ed',
      'id': 2112164721,
      'coverImgId_str': '109951163896164723'
    },
    {
      'subscribers': [],
      'subscribed': true,
      'creator': {
        'defaultAvatar': false,
        'province': 420000,
        'authStatus': 0,
        'followed': false,
        'avatarUrl': 'http://p1.music.126.net/7-hYrO5pw5sB_AMOXNF2HQ==/109951163656016988.jpg',
        'accountStatus': 0,
        'gender': 1,
        'city': 421300,
        'birthday': 1038996442507,
        'userId': 337034112,
        'userType': 0,
        'nickname': '死于脚气攻心的道友',
        'signature': '想成为达人，',
        'description': '',
        'detailDescription': '',
        'avatarImgId': 109951163656017000,
        'backgroundImgId': 18608134790552524,
        'backgroundUrl': 'http://p1.music.126.net/fi_cf_YN8IDn2Tp0INA2gg==/18608134790552524.jpg',
        'authority': 0,
        'mutual': false,
        'expertTags': null,
        'experts': null,
        'djStatus': 10,
        'vipType': 0,
        'remarkName': null,
        'avatarImgIdStr': '109951163656016988',
        'backgroundImgIdStr': '18608134790552524',
        'avatarImgId_str': '109951163656016988'
      },
      'artists': null,
      'tracks': null,
      'cloudTrackCount': 0,
      'subscribedCount': 89499,
      'totalDuration': 0,
      'updateTime': 1552831445871,
      'commentThreadId': 'A_PL_0_2041511544',
      'trackCount': 24,
      'ordered': true,
      'status': 0,
      'userId': 337034112,
      'tags': [
        '日语'
      ],
      'coverImgUrl': 'https://p2.music.126.net/SIs_10DiBewEWnuoqS_cfg==/18974272161047030.jpg',
      'playCount': 1405877,
      'trackUpdateTime': 1553828359393,
      'coverImgId': 18974272161047030,
      'createTime': 1514934346695,
      'highQuality': false,
      'newImported': false,
      'specialType': 0,
      'anonimous': false,
      'privacy': 0,
      'description': '我希望我能活很久很久。看着你生老病死，直到你的生命消耗殆尽。我可以目睹你的一生，从出生到死亡，你所有珍贵的时间，都会有我的影子。直到印在你的灵魂里无法遗忘。',
      'adType': 0,
      'trackNumberUpdateTime': 1552831445871,
      'name': '病娇【魔音】緋色月下、狂咲ノ絶',
      'id': 2041511544,
      'coverImgId_str': '18974272161047030'
    },
    {
      'subscribers': [],
      'subscribed': true,
      'creator': {
        'defaultAvatar': false,
        'province': 410000,
        'authStatus': 0,
        'followed': false,
        'avatarUrl': 'http://p1.music.126.net/YQpQHA449oz3Xa2yYvSDqw==/1410673432348525.jpg',
        'accountStatus': 0,
        'gender': 1,
        'city': 411700,
        'birthday': 888681600000,
        'userId': 267679591,
        'userType': 200,
        'nickname': '右心丶',
        'signature': '可以卑微如蝼蚁，不可扭曲如蛆虫。',
        'description': '',
        'detailDescription': '',
        'avatarImgId': 1410673432348525,
        'backgroundImgId': 18759867395301630,
        'backgroundUrl': 'http://p1.music.126.net/Hih-v2fFz6o8ShUZav1uKQ==/18759867395301630.jpg',
        'authority': 0,
        'mutual': false,
        'expertTags': [
          '轻音乐'
        ],
        'experts': null,
        'djStatus': 10,
        'vipType': 11,
        'remarkName': null,
        'avatarImgIdStr': '1410673432348525',
        'backgroundImgIdStr': '18759867395301630'
      },
      'artists': null,
      'tracks': null,
      'cloudTrackCount': 0,
      'subscribedCount': 233238,
      'totalDuration': 0,
      'updateTime': 1553669917587,
      'commentThreadId': 'A_PL_0_692659541',
      'trackCount': 34,
      'ordered': true,
      'status': 0,
      'userId': 267679591,
      'tags': [
        '日语',
        '翻唱',
        'ACG'
      ],
      'coverImgUrl': 'https://p2.music.126.net/riqStNN8e1bcGoNIycIgHA==/19132601835001829.jpg',
      'playCount': 7335728,
      'trackUpdateTime': 1553898095231,
      'coverImgId': 19132601835001828,
      'createTime': 1491799248304,
      'highQuality': false,
      'newImported': false,
      'specialType': 0,
      'anonimous': false,
      'privacy': 0,
      'description': '偶然随机到这些歌曲\n没想到这些都是国人翻唱的歌曲，\n简直太惊艳了有没有\n已经沉迷这样的声线中了\n无法自拔(≧ω≦)/\n\n封面Pid=59528808',
      'adType': 0,
      'trackNumberUpdateTime': 1553669917587,
      'name': '『日系翻唱』惊艳双耳的国人翻唱！',
      'id': 692659541,
      'coverImgId_str': '19132601835001829'
    },
    {
      'subscribers': [],
      'subscribed': true,
      'creator': {
        'defaultAvatar': false,
        'province': 510000,
        'authStatus': 0,
        'followed': false,
        'avatarUrl': 'http://p1.music.126.net/vBv8kO3qvSekKOA-70BNww==/109951163834784937.jpg',
        'accountStatus': 0,
        'gender': 1,
        'city': 510100,
        'birthday': -2209017600000,
        'userId': 336222661,
        'userType': 0,
        'nickname': '洋洋muster',
        'signature': '花椒平台主播',
        'description': '',
        'detailDescription': '',
        'avatarImgId': 109951163834784940,
        'backgroundImgId': 109951163661878270,
        'backgroundUrl': 'http://p1.music.126.net/poE8-AcRF5M6cQtlNQgX_Q==/109951163661878274.jpg',
        'authority': 0,
        'mutual': false,
        'expertTags': null,
        'experts': null,
        'djStatus': 0,
        'vipType': 11,
        'remarkName': null,
        'avatarImgIdStr': '109951163834784937',
        'backgroundImgIdStr': '109951163661878274',
        'avatarImgId_str': '109951163834784937'
      },
      'artists': null,
      'tracks': null,
      'cloudTrackCount': 0,
      'subscribedCount': 41116,
      'totalDuration': 0,
      'updateTime': 1553934883453,
      'commentThreadId': 'A_PL_0_647795806',
      'trackCount': 225,
      'ordered': false,
      'status': 0,
      'userId': 336222661,
      'tags': [
        '日语',
        '旅行',
        '怀旧'
      ],
      'coverImgUrl': 'https://p2.music.126.net/ZwiW4jgfUS_c-btd_i39Jw==/109951163078872781.jpg',
      'playCount': 1142426,
      'trackUpdateTime': 1554165823625,
      'coverImgId': 109951163078872780,
      'createTime': 1491010504284,
      'highQuality': false,
      'newImported': false,
      'specialType': 0,
      'anonimous': false,
      'privacy': 0,
      'description': '欢迎大家来到洋洋卡拉OK大舞厅，不定时会更新，大家多多收藏',
      'adType': 0,
      'trackNumberUpdateTime': 1553934883453,
      'name': '中日系蒸汽波每首都是精品',
      'id': 647795806,
      'coverImgId_str': '109951163078872781'
    }
  ]
  @observable showCreate = false
  @observable showFav = true

  @action isShowItem = (index, status) => {
    if (index === 0) {
      this.showCreate = status
    } else {
      this.showFav = status
    }
  }

  @computed get MineList () {
    return [{
      index: 0,
      title: '我创建的歌单',
      data: this.showCreate ? this.createList.slice() : []
    }, {
      index: 1,
      title: '我收藏的歌单',
      data: this.showFav ? this.favList.slice() : []
    }]
  }
}

export default MineModel
