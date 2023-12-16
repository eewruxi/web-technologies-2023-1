function GetIndex(nums, target){
    //проходим по каждому числу и сравниваем равна ли их сумму target
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if((nums[i] + nums[j]) === target){
                return [i,j];
            }
        }
    }
    return null;
}

nums = [2,7,11,15];
target = 9;
console.log(GetIndex(nums, target))