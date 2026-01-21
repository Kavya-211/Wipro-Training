Functional Programming and Pure Functions.

What is pure functions  ---    where we focus on what to do rather then how to do 
traditional functions --- like for , foreach --
 here we were focussing on what to do but also on how to do (logic)


Pure functions are like : - map(), reduce() and filter()

map() -> when we want to transform each element in an array and it return a new array.

filter() -- when we want to select specific elements that meet a condition or when we want to extract the data 

reduce() -- when we want to return a single value after accumulating array values that we have or we want to 
summarize or to get aggregate data 

== We want to calculate the total sum of 10 natural numbers  sum += sum +n

// p arrow function will take each product p from an array and return a new object 
  // ...(spread) means- it will copy all properties of the original product and apply discount on it
  JSON -- It is a lightweight data- interchange format used to store and exchange data between client and Server
though there are different other sources too -- xml , csv ,mysql

format of json   :   "key":"stringvalue"  or    "key":numbervalue

JSON.parse(jsonString) -- converts json string to js object -- mainly we use when receiving the data from a server
JSON.stringify(obj) -- converts js object to json string -- mainly used when sending data to a server.



Asynchronous / Synchronous Based:

Sysnchronous --  when one execution will get completed then the other execution will take place --- Blocker 
               line by line , if there is any blocker then in that case the rest of the code will not work  

			   it is slow in process

			   XMLHttpRequest(sync)

Asynchronous -- It's a non-blocker , next code runs immediately 
We can implement asynchronous using
fetch() , using Promise() instead of fetch() , asyn/await , XMLHttpRequest(async)

basically fetch() will return a Promise Object and 
		 .then() will be called on that Promise object when it's fulfilled ( means data is received) 
		 .catch() will run if the Promise is rejected(due to wrong api , network error)