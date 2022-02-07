const cylce = (head) => {

    let slow = head
    let fast = head
    while(fast && fast.next !== null){
      slow = slow.next
      fast = fast.next.next
  
      if(slow == fast){
        return true
      }
    }
  return false
  
  }

  //notes

  /*
  (Run this on leetcode, since we don't have a linked list here)

  1. Floyds tortois and hare algorithm
  2. Since null will not be present, the heads will cycle through until they meet, and return true
  3. if null is reached, the cycle breaks and returns false

*/