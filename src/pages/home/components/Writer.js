import React,{PureComponent} from 'react';
import {WriterWrapper,WriterList, WriterItem, WriterInfo} from '../style';
import { connect } from 'react-redux';
class Writer extends PureComponent{
    render(){
        const {list} = this.props;
        return (
            <WriterWrapper>
                <WriterList>
                    <span className = 'nameList'>推荐作者</span>
                </WriterList>
                {
                    list.map((item,index) => {
                        return (
                            <WriterItem key={index}>
                                <img 
                                    className = 'list-pic' 
                                    alt=''
                                    src = {item.get('imgUrl')} 
                                />
                                <WriterInfo>
                                    <span className = 'txt'> + 关注</span>
                                    <p className = 'title'>{item.get('title')}</p>
                                    <p className = 'desc'>{item.get('desc')}</p>
                                </WriterInfo>

                            </WriterItem>
                        )
                    })
                }
            </WriterWrapper>
        )
    }
}
const mapStateToProps = (state) => ({
    list: state.getIn(['home','writerList'])
})
export default connect(mapStateToProps,null)(Writer);