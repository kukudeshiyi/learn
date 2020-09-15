function triangleNumber(nums){
    const length = nums.length;
    if(!length || length<3) return;
    nums.sort((a,b)=>a-b);

    let i,j,m = length-1,result = 0;

    for(;m>1;m--){
       i = 0,j = m-1;
       while(i<j){
        if(nums[i]+nums[j]>nums[m]){
            result+=j-i;
            j--;
        }else{
            i++;
        }
       }
    }
    return result;
}
console.log(triangleNumber([2,2,3,4]));