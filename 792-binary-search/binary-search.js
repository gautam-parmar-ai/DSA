/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1

    for(let i = 0; i < nums.length; i++){
        let mid = left + Math.floor((right - left) / 2)
        if(nums[mid] === target) return mid;
        else{
            if(nums[mid] > target){
                right = mid - 1;
            }
            if(nums[mid] < target){
                left = mid + 1;
            }

        }
    }
    return -1
};