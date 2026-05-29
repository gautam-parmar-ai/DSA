function twoSum(arr, target){
   
   let map = {}
    for(let i = 0; i < arr.length; i++){
        let expected = target - arr[i]
        if(map[expected] != undefined){
            return[i, map[expected]]
        }
        map[arr[i]] = i
    }
}