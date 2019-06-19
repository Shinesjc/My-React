import React,{ Component } from 'react';
import { RecommendWrapper, RecommendPic } from '../style'
import { connect } from 'react-redux';

class Recommend extends Component{
    render(){
        const {list} = this.props;
        return (
            <RecommendWrapper>
                {
                    list.map((item) => {
                        return(
                            <RecommendPic key={item.get('id')}>
                                <img 
                                    className = 'recommend-pic'
                                    alt='' 
                                    src ={item.get('imgUrl')}
                                />
                            </RecommendPic>
                        )
                    })
                }
            </RecommendWrapper>
        )
    }
}
const mapStateToProps = (state) => ({
    list: state.getIn(['home','picList'])
})
export default connect(mapStateToProps,null)(Recommend);