function containsDuplicate(arr){
    let seen = new Set()
    for(let i = 0; i < arr.length; i++){
        seen.add(arr[i])
    }
    return (arr.length === seen.size ? false : true)
}