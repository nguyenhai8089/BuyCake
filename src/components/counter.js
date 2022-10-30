import React,{Component} from 'react';
import { connect } from 'react-redux';
import { decrementCounter, incrementCounter } from '../redux/action';

const mapStateToProps=(state)=>({
    count:state
})
const mapDispatchToProps=(dispatch)=>({
    decrementCounter:()=>dispatch(decrementCounter()),
    incrementCounter:()=>dispatch(incrementCounter()),
})

 class Counter extends Component{
    render(){
        const {count,decrementCounter,incrementCounter}=this.props
        return(
            <div>
                <button onClick={()=>decrementCounter()}> - </button>
                 <span>{count}</span>
                <button onClick={()=>incrementCounter()}> + </button>
            </div>
        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);