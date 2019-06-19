import {fromJS} from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '最擅长泡妞的4大星座男',
        desc:'最擅长泡妞的4大星座男 白羊座 白羊男遇到喜欢的女生，就会开启穷追猛打模式。不仅会使出各种招数，还能禁受得住对方的白眼以及冷嘲热讽。他们敢爱敢恨...',
        author: '叽哩哇啦',
        earnNumber: '3.8',
        textNumber: '6',
        loveNumber: '129'
    }, {
        id: 2,
        title: '悟空问答能赚钱么？',
        desc:'如题，悟空问答能赚钱么？ 我也不知道，不过，我发现，同样是练笔，写在悟空问答里面，还有人看，目前正在努力继续。 现在轻松能一天写3000字了，没...',
        author: '叽哩哇啦',
        earnNumber: '4.6',
        textNumber: '16',
        loveNumber: '240'
    }],
    articleList: [{
        id: 1,
        title: '能喝最烈的酒，也能熬过没有你的深秋',
        desc: '闯入我生活的人是你， 说爱我的是你， 说分手的也是你， 最后哭的像条狗的， 却是我自己。 我们最默契的事就是： 你不找我， 我不找你， 我们互不...',
        imgUrl: '//upload-images.jianshu.io/upload_images/14205181-ddf91ad7c2ff29e8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        author: '叽哩哇啦',
        earnNumber: '5.2',
        textNumber: '62',
        loveNumber: '350'
    },{
        id: 2,
        title: '那些年网易云直戳泪点的评论(37)',
        desc: '@“今天你教了我一道15分的大题，我是不是就离你迈了15步” @故事里的少年们生活在一个不算遥远的过去，一个青瓦小巷，墙皮斑驳的小城，那里阳光温...',
        imgUrl: '//upload-images.jianshu.io/upload_images/13239320-ab0a14941e27d09a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        author: '叽哩哇啦',
        earnNumber: '1.8',
        textNumber: '21',
        loveNumber: '42'
    },{
        id: 3,
        title:'Learun快速开发平台：让有限的资源创造无限的价值',
        desc:'最近一直在研究自己的快速开发平台，主要应对针对C/S架构下的项目。然而对web开发这块，还真没有看到过相对好的快速开发平台。 何为快速，做开发这...',
        imgUrl:'//upload-images.jianshu.io/upload_images/13145909-f25ea02c47eafac2?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        author: '叽哩哇啦',
        earnNumber: '14.8',
        textNumber: '17',
        loveNumber: '31'
    },{
        id: 4,
        title:'性格越强势，过得越好',
        desc:'曾有研究表明，一个家庭的婚姻质量高低和最终结局，80%取决于女人的性格。如果说男人的能力决定了一个家的物质水平，那么女人的性格，强势或温柔，就是...',
        imgUrl:'//upload-images.jianshu.io/upload_images/8893844-7e2a627f1fe5aede.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        author: '叽哩哇啦',
        earnNumber: '33.8',
        textNumber: '6',
        loveNumber: '29'
    }],
    picList: [{
        id: 1,
        imgUrl:'//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
    },{
        id: 2,
        imgUrl:'//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },{
        id: 3,
        imgUrl:'//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    },{
        id: 4,
        imgUrl:'//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    }]
});

export default (state = defaultState, action) => {
    switch(action.type){
        default: 
            return state;
    }
}