import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import './Counter.css';
import {increment,dec,add5,mul5,sub5,div5,rem3,clear} from '../../store/actions/index';
import {storeResult,deleteResult} from '../../store/actions/index';
// import {storeResult,deleteResult}  from '../../store/actions/actions';
class Counter extends Component {
    // state = {
    //     counter: 0
    // };
    // clearData = () => {
    //     this.setState(state => (state.counter = 0));
    // };
    //
    // counterChangedHandler = (action, value) => {
    //     switch (action) {
    //         case "inc":
    //             this.setState(prevState => {
    //                 return { counter: prevState.counter + 1 };
    //             });
    //             break;
    //         case "dec":
    //             this.setState(prevState => {
    //                 return { counter: prevState.counter - 1 };
    //             });
    //             break;
    //         case "add":
    //             this.setState(prevState => {
    //                 return { counter: prevState.counter + value };
    //             });
    //             break;
    //
    //         case "sub":
    //             this.setState(prevState => {
    //                 return { counter: prevState.counter - value };
    //             });
    //             break;
    //         case "mul":
    //             this.setState(prevState => {
    //                 return { counter: prevState.counter * value };
    //             });
    //             break;
    //         case "div":
    //             this.setState(prevState => {
    //                 return { counter: prevState.counter / value };
    //             });
    //             break;
    //         case "rem":
    //             this.setState(prevState => {
    //                 return { counter: prevState.counter % value };
    //             });
    //             break;
    //     }
    // };

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl
                    label="Increment"
                    clicked={this.props.onIncrementCounter}
                />
                <CounterControl
                    label="Decrement"
                    clicked={this.props.onDecrementCounter}
                />
                <CounterControl
                    label="Add 10"
                    clicked={this.props.onAdd5Counter}
                />
                <CounterControl
                    label="Mul 5"
                    clicked={this.props.onMul5Counter}
                />
                <CounterControl
                    label="Div 5"
                    clicked={this.props.onDiv5Counter}
                />
                <CounterControl
                    label="Subtract 5"
                    clicked={this.props.onSub5Counter}
                />
                <CounterControl
                    label="remainder 3"
                    clicked={this.props.onRem3Counter}
                />
                <CounterControl label="clear" clicked={this.props.onClear} />
                <hr />
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>

                    {this.props.storedResult.map(strResult => (
                        <li onClick={()=>this.props.onDeleteResult(strResult.id)} key={strResult.id}> {strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResult: state.res.result
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(increment()),
        onDecrementCounter: () => dispatch(dec()),
        onAdd5Counter: () => dispatch(add5(10)),
        onSub5Counter: () => dispatch(sub5(5)),
        onMul5Counter: () => dispatch(mul5()),
        onDiv5Counter: () => dispatch(div5()),
        onRem3Counter: () => dispatch(rem3()),
        onClear: () => dispatch(clear()),
        onStoreResult: (result) => dispatch(storeResult(result*2)),
        onDeleteResult: (id) => dispatch(deleteResult(id))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
