/*
Objects are a type of hash table
python - dictionaries
java - maps

How they work:
1. the key runs through a hash function, and an index of where
to store the value is given

What is a hash function?
1. A function that generates a fixed length value for every key given
2. md5 hash generator is one type
3. An input always gives the same value
4. One directional, a hash value does not give us a key (called indepotent)


insert - O(1)
lookup - O(1)
delete - O(1)
search - O(1)

Hash Collisions
1. hash tables are given a limited amount of memory
2. multiple values can be hashed into the same address
3. slows down access to memory since the list in the address 
has to be iterated

hash functions
1. should avoid collisons
2. should be fast
Keys
Can be any data structure
In JS (maps allow this)

collisions
1. chaining - using linked lists

2. open addressing - linear probing
    - key value pairs are stored in the array
*/

