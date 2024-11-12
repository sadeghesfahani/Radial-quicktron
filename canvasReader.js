const canvas = document.querySelector('canvas');

console.log(canvas.onclick.toString())


const getFunctions = ()=>{
    return Object.keys(window).filter(key => typeof window[key] === 'function');
}


const runFunction = (functionName, args = []) => {
    if (typeof window[functionName] === 'function') {
        return window[functionName](...args); // Spread args to handle multiple arguments
    } else {
        console.error(`Function "${functionName}" does not exist in the global scope.`);
    }
}


// this is for inspect data that are comming from websocket
const originalWebSocket = WebSocket.prototype.send;
WebSocket.prototype.send = function(data) {
    console.log("WebSocket data:", data); // Inspect incoming data
    originalWebSocket.apply(this, arguments);
};