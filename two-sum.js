const nums = [2,7,11,15]

var twoSum = function (nums, target) {
    let cache = {}

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]
        if (cache[complement] !== undefined) {
            return [i, cache[complement]]
        }
        else {
            cache[nums[i]] = i
        }
    }
    console.log("cache", cache)
    return []
};

console.log(twoSum(nums, 9))