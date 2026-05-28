function containsDuplicate(arr){
    let seen = new Set()
    for(let i = 0; i < arr.length; i++){
        if(seen.has(arr[i])){
            return true;
        }
        seen.add(arr[i])
    }
    return false
}