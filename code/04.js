// 三数之和
// 看见美好吧   （误敲击键盘打出来的，可能是有神人指引吧！哈哈20200913）

// 排序 + 双指针
function threeNumSum(nums){
    
    const length = nums.length;
    if(!length) return[];
    
    const result = [];
    nums  = nums.sort((a,b)=>a-b);

    for(let i = 0;i<length;i++){
        if(nums[i]>0)break; // notice
        if(nums[i] === nums[i-1]) continue; // notice
        let first = i,second = i+1,last = length-1;
        while(second<last){
            const total = nums[first]+nums[second]+nums[last];
            if(total<0){
                second++;
            }else if(total>0){
                last--;
            }else{
                result.push([nums[first],nums[second],nums[last]]);
                while(second<last && nums[second] === nums[second+1]) second++; // notice
                while(second<last && nums[last] === nums[last-1]) last--; // notice
                second++; // notice
                last--; // notice
            }
        }
    }
    return result;
}

console.log(threeNumSum( [-1, 0, 1, 2, -1, -4]));