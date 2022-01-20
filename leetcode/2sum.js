const target = 6
const arr1 = [1, 2, 3, 4, 5]

const twoSum = (array ) => {
const obj = {}

for(i = 0; i< array.length; i++){
    const needed = target - array[i]
    if(!obj[needed]){
        obj[array[i]] = i
    }else if (obj[needed]){
        return [obj[needed], i ]
    }
}
}

console.log(twoSum(arr1))