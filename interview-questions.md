# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer: The parameter is the things that are passed into a function and then used in the function itsself, while the arguments are the actual values that are passed into the function.

  Researched answer: Function parameters are the names listed in the parentheses while defining the function, and the arguments are the actual values that are passed to the function when it is called on.



2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: I think it takes in another function and an array or string, something to iterate over, and then runs  each argument through the entered function. Or it's a function that is put at the end of something *which is required* (a var name that holds an array or string) and iterates it through a function *the function is also required*. 

  Researched answer:
  The parameters that .map takes are 'function()' *required*, 'currentValue' *required*, 'index' *optional*, 'arr' *optional*, and 'thisValue' *optional*.
   with a syntax of `array.map(function(currentValue, index, arr), thisValue)`
  where:
  function() is the function that will be called for each element in the input array
  currentValue is  the current value of the item being iterated over from the input
  index is the index of the item being iterated over from the input
  arr is the original array, which ccan be passed as an argument in the function
  thisvalue can be used when calling a previous function that needs to be changed slightly



3. What is object destructuring?

  Your answer: Object desctructuring is when an object contains multiple parts and basically creates a shortcut to parts that are nested deeper inside the entire structure.

  Researched answer: It's the opposite of structuring an object, where you take the object and within the object now assign properties of the object to external variables so they can be referenced without having to use the entire location name when they are being referenced.



4. What is the difference between a function and a method?

  Your answer: A function is block of code that is written and designed to perform the same task mutliple times, and is declared by the user, while a method is a built in function

  Researched answer: A function is a block of code designed to perform a specific task and it runs when it is called on, and a method is a function that is held within an object, and operates solely on that object. the method also runs when it is called, but must be called in dot notation immediately following the name of the object that contains it.



5. What is the difference between a class and an object?

  Your answer: A class is a blueprint for an object, and as such can create new instances of the object with arguments passed in to assign properties to the object, and an object cannot create other objects but only contain information

  Researched answer: A class is a template for objects, the class will define the objects properties, including range and default values, and it will define the objects behaviour. The object is an instance of a class and has values for its properties.



6. STRETCH: What is hoisting in JavaScript?

  Your answer: Hoisting is when a function or variable is decfined in the code, but it can be called on before it was defined in the code. i.e. a function can be defined on like 234 but it can be called and used in line 123. const will be hoisted, but var and let will not be. Variables that are not assigned as const var or let will be automatically assigned to the global scale and will be hoisted as well.

  Researched answer: const and let variables are hoisted to the top of the code block, but are not initialized until they are declared. let will result in ReferenceError and const will give a syntax error. hoisting allows functions to be used before they are declared, as well as classes. It can be visualized by imagining the interpreter splitting the declaration and initialization of the variable. 



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance: Class inheritance allows for a child class to be made that has all of the properties of the parent class, and can make code more reusable. This allows for a child class to have the same properties of the parent class and then modify them (remove or add) without modifying the parent class.

2. React: React is a javascript library that lets you build a complex UI from base components. It was developed by facebook as it was growing more complex and allows things to scale well. Each React component is similar to functions in JS but using state can pass data up

3. React state: State is an object that determines how a component renders/behaves based on what it is stroing, and is updated using .setState this allows objects to be rerendered without having to use reactDOM.render() to update it

4. React lifecycle methods: React lifecycle methods is a way to free up processing power that was being used by an objhect that is no longer needed/"mounted" on the app

5. DOM: The Document Object Model (DOM) defines the logical structure of a document and it's interactions. Javascript does not understand the HTML tags but can understand the DOM tags, because DOM basically translates the HTML into something that JS can understand, objects.
