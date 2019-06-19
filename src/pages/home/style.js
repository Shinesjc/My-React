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
    width:240px;
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
    float: right;
    width: 280px;
    padding: 23px 0;
`;
export const RecommendPic = styled.div`
    overflow: hidden;
    .recommend-pic {
        padding-bottom: 6px;
        display: block;
        width: 100%;
}
`