import {connect} from 'react-redux';
import {setTicketsAC} from '../Redux/JiraReducer';
import JiraAPIComponent from "./JiraAPIComponent";

let mapStateToProps = (state)=>{
    return{
        tickets:state
    }
}

export default connect(mapStateToProps,{
    setTickets:setTicketsAC
})(JiraAPIComponent)