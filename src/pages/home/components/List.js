import React,{PureComponent,Fragment} from 'react';
import {ListItem,ListInfo, TopicIcon, LoadMore} from '../style';
import {connect} from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent{
    render(){
        const {list, getMoreList, page} = this.props;
        return (
            <Fragment>
                {
                    list.map((item,index) => {
                        return (
                            <Link key={index} to={'/detail' + item.get('id')}>
                                <ListItem>
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
                            </Link>
                        )
                    })
                }
                <LoadMore onClick = {() => getMoreList(page)}>更多文字</LoadMore>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
})
const mapDispatchToProps = (dispatch) => ({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(List);