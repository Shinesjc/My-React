import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`;

export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    width:625px;
    float: left;
    .banner-img {
        width: 625px;
        height: 270px 
    }
`;
export const TopicItem = styled.div`
    overflow: hidden;
    padding: 20px 0 ;
`;

export const TopicInfo = styled.div`
    width: 100%;
    float: left;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .title {
        font-size: 18px;
        line-height: 27px;
        font-weight: bold;
        color: #333;
        padding-bottom: 5px;
        cursor: pointer;
    }
    .desc{
        font-size: 13px;
        line-height: 24px;
        color: #999
    }
`;
export const TopicIcon = styled.div` 
    float: left;
    padding-top: 10px;
    font-size:12px;
    display: block;
    color: #999;
    .iconfont{
        padding-left: 15px;
        padding-right: 3px;
        line-height: 20px;
    }
    .redWord{
        padding-right: 13px;
        display: inline-block;
        color:#ea6f5a;
    }
`;
export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .list-pic{
        display: block;
        width: 150px;
        height: 100px;
        float: right;
    }
`;
export const ListInfo = styled.div`
    width: 458px;
    float: left;
    .title {
        font-size: 18px;
        line-height: 27px;
        font-weight: bold;
        color: #333;
        padding-bottom: 5px;
    }
    .desc{
        font-size: 13px;
        line-height: 24px;
        color: #999
    }
`;
export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;

`;
export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`;
export const WriterWrapper = styled.div`
    width: 280px;
    border-radius: 3px;
    line-height: 300px;
    text-align: center;
`;
export const WriterList = styled.div`
    box-sizing: border-box;
    line-height: 20px;
    display: block;
    text-align: left;
    font-size: 14px;
    .nameList{
        color: #999;
    }
`;
export const WriterItem = styled.div`
    overflow: hidden;
    padding: 10px 0;
    .list-pic{
        border-radius: 100%;
        border: 1px solid #bcbcbc;
        display: block;
        width: 48px;
        height: 48px;
        float: left;
    }
`;
export const WriterInfo = styled.div`
    width: 220px;
    float: right;
    text-align: left;
    .title {
        font-size: 14px;
        line-height: 27px;
        color: #333;
        cursor: pointer;
    }
    .desc{
        font-size: 12px;
        line-height: 20px;
        color: #999;
    }
    .txt{
        float: right;
        line-height: 27px;
        padding: 0;
        color: #42c02e;
        font-size: 12px;
    }
`;
export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`;
export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
    cursor: pointer;
`