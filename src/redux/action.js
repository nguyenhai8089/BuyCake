const INCREMENT ='INCREMENT';
const DECREMENT='DECREMENT';
function incrementCounter(){
    return {
        type: INCREMENT,
        info: 'First redux INCREMENT action'
    }
}
function decrementCounter(){
    return {
        type:DECREMENT,
        info:'Second redux DECREMENT action'
    }
}
export {INCREMENT,DECREMENT,incrementCounter,decrementCounter}