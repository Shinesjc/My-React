import React,{PureComponent} from 'react';
import { connect } from 'react-redux';
import {TopicInfo, TopicItem, TopicIcon} from '../style';

class Topic extends PureComponent{
    render(){
        const { list } = this.props;
        return (
            <TopicItem>
                {
                    list.map((item) => {
                        return (
                            <TopicInfo key={item.get('id')}>
                                <h3 className = 'title'>{item.get('title')}</h3>
                                <p className = 'desc'>{item.get('desc')}</p>
                                <TopicIcon>
                                    <div className='redWord'>
                                        <span className="iconfont">&#xe7bc;</span>
                                        {item.get('earnNumber')}
                                    </div>
                                    {item.get('author')}
                                    <span className="iconfont">&#xe62f;</span>
                                    {item.get('textNumber')}
                                    <span className="iconfont">&#xe624;</span>
                                    {item.get('loveNumber')}
                                </TopicIcon>
                             </TopicInfo>
                        )
                    })
                }
            </TopicItem>
        )
    }
}
const mapStateToProps = (state) => ({
    list: state.getIn(['home','topicList']),
})
export default connect(mapStateToProps,null)(Topic);