    
const numbers = [2, 3, 15, 6, 9, 4]
const total = 7

const twoSum = (nums, target) => {

let obj = {}

for(i = 0; i < nums.length; i++){

let current = nums[i]
let needed = target - current


if(!obj[needed]){

	obj[current] = i
}

else{
	return [obj[needed], i]
}



}






}

console.log(twoSum(numbers, total))