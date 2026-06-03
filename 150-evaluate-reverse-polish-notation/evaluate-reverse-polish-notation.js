/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = new Array()

    for(let e of tokens){
        if(e.match(/[0-9]/)){
            stack.push(parseInt(e))
        }
        else{
            let b = stack.pop()
            let a = stack.pop()
            let c = 0;
            if(e === "+") c = a + b;
            else if (e === '-') c = a - b;
            else if (e === "*") c = a * b;
            else if (e === "/") c = parseInt(a / b); 
            stack.push(c)
            
        }
        
    }
    return stack.pop()
};