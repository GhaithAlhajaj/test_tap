function findMissingNumber(nums) {
    const n = nums.length;
    const sum = (n * (n + 1)) / 2;
    let total = 0;
    
    for (let i = 0; i < n; i++) {
        total += nums[i];
    }
    
    return sum - total;
}