strs = ["eat","tea","tan","ate","nat","bat"]

const anagrams = (arr) => { 

	const obj = {}
	
	for(i = 0; i< arr.length; i++){
		
		let order = arr[i].split('').sort().join('')
		console.log(order)
		if(!obj[order]){
			obj[order] = [arr[i]]

		}else{
			obj[order].push(arr[i])
		}
    }
    return Object.values(obj)
}

    console.log(anagrams(strs))


    let string = 'hello from javascript'

    let array = string.split('').sort().join('')
    console.log(array)