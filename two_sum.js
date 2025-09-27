var twoSum = function(nums, target) {
    for(i=0;i<nums.length-1;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                console.log([i,j])

            }
        }
    }
};
let array=[2,7,11,15]
twoSum(array,9)