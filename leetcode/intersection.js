let num1 = [2, 2, 2, ,9, 9, 4, 5, 6, 1 ]
let nums2= [7, 7, 9, 5, 2, 2, 2, 9]

let intersection = (arr1, arr2) => {

    let map = {}

    for(i = 0; i< arr1.length; i++){
        if(!map[arr1[i]]){
            map[arr1[i]] = i
        }
    }
    let arr3 = [... new Set(arr2)]
    let intersections = []
    for(i=0; i< arr3.length; i++){
        if(map[arr3[i]]){
            intersections.push(arr3[i])
        }
    }

    return intersections
    
}

console.log(intersection(num1, nums2))