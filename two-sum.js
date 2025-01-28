const nums = [2, 7, 11, 15]

var twoSum = function (nums, target) {
    let cache = {} // 1
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i] // 4n
        if (cache[complement] !== undefined) { // 3n
            return [i, cache[complement]] // 4n
        }
        else {
            cache[nums[i]] = i // 4n
        }
    }
    return [] // 1
};
// 15n +2 > O(n)
console.log(twoSum(nums, 9))