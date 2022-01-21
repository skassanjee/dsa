/*

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.""

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Constraints:
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/

const strings = strs = ["eat","tea","tan","ate","nat","bat"]

const groupAnagrams = (strs) => {

    let cache = {};

    for(let i of strs){


        if(!cache[str]){
            cache[str] = [i]
        }else{
            cache[str].push(i)
        }
    return Object.values(cache)
}
}
console.log(groupAnagrams(strings))
