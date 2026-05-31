/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for(let i = 0; i < s.length; i++){
        let char = s[i];
        if(char === '(' || char === '[' || char === '{'){
            stack.push(char);
        }
        else {
            let prevVal = stack.pop()
            if(prevVal === '(' && char !== ')') return false;
            if(prevVal === '[' && char !== ']') return false;
            if(prevVal === '{' && char !== '}') return false;
            if(prevVal === undefined) return false;
        }
    }
    return stack.length === 0;
};