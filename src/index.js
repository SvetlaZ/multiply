module.exports = function multiply(first, second) {
    first = first.split('').reverse();
    second = second.split('').reverse();
    let stack = [];

    for (let i = 0; i < first.length; i++) {
        for (let j = 0; j < second.length; j++) {
          let multiplay = first[i] * second[j];
          stack[i + j] = (stack[i + j]) ? stack[i + j] + multiplay : multiplay;
        }
    }
    
    for (i = 0; i < stack.length; i++) {
        let num = stack[i] % 10;              
        let move = Math.floor(stack[i] / 10); 
        stack[i] = num;                       
        
        if (stack[i + 1]) {
          stack[i + 1] += move;
        } else if (move != 0) {
          stack[i + 1] = move;
        }  
    }      

    return stack.reverse().join('');
}
