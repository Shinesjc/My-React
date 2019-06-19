import React,{Component,Fragment} from 'react';
import {ListItem,ListInfo, TopicIcon} from '../style';
import {connect} from 'react-redux';

class List extends Component{
    render(){
        const {list} = this.props;
        return (
            <Fragment>
                {
                    list.map((item) => {
                        return (
                            <ListItem key={item.get('id')}>
                                <img 
                                    className = 'list-pic' 
                                    alt=''
                                    src = {item.get('imgUrl')} 
                                />
                                <ListInfo>
                                    <h3 className = 'title'>{item.get('title')}</h3>
                                    <p className = 'desc'>{item.get('desc')}</p>
                                </ListInfo>
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
                            </ListItem>
                        )
                    })
                }
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'articleList'])
})
export default connect(mapStateToProps,null)(List);