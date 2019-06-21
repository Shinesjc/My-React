import React,{PureComponent} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {DetailWrapper, Header, Content} from './style';
import {actionCreators } from './store';
class Detail extends PureComponent{

    render(){
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content 
                dangerouslySetInnerHTML = {{__html:this.props.content}} />
            </DetailWrapper>
        )
    }

    componentDidMount(){
        this.props.getDetails(this.props.match.params.id);
    }
}
const mapStateToProps = (state) => ({
    title: state.getIn(['detail','title']),
    content: state.getIn(['detail','content'])
});

const mapDispathToProps = (dispatch) => ({
    getDetails(id){
        dispatch(actionCreators.getDetails(id))
    }
});

export default connect(mapStateToProps,mapDispathToProps)(withRouter(Detail));