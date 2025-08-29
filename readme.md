#-1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer: We can use **getElementById, getElementsByClassName, and querySelector / querySelectorAll** to get a particular html element or some elements from the DOM. By using getElementByID and querySelector, we can get a single html element whereas getElementsByClassName and querySelectorAll return multiple elements having same class name. If we want to get a particular html element with a unique id name, we use getElementByID. It returns null if there is no such element with the mentioned id name. If we want to get multiple html elements having same class name, we use getElementsByClassName and it returns a HTMLCollections[] array like object which is live meaning it updates automatically if any changes happen in DOM. It returns an empty array if there is no such class name. By using querySelectorAll, we can get multiple elements having same class name, the difference is we use CSS selectors to get the html elements. Any valid CSS selector can be used. It is particularly helpful for complex cases. It returns a nodelist which is also an array like object but unlike HTMLCollection, it is not live. querySelector returns the first element that matches the css selector search whereas querySelectorAll returns all the matches.

#-2. How do you **create and insert a new element into the DOM**?

There are 3 steps to create and insert a new element into the DOM:
1. The element needs to be created using document.createElement() method and the innerText or  innerHTML needs to be set.
For example if I want to create a new paragraph,
const p = document.createElement('p');
p.innerText = "This is a new paragraph";
2. Then we need to get the parent node where the new element will be added. To get the parent node, we need to provide the parent node with an id and get the parent node using getElementById.
const parentContainer = document.getElementById("parent-container");
3. Finally the newly created element needs to be appended to the parent node.
parentContainer.appendChild(p);
Thus a new paragraph element has been created with JS and has been inserted into the DOM as the last child of the parent element.

#-3. What is **Event Bubbling** and how does it work?

When an event is triggered at its target element, the event handler attached to this target element responds first. It then propagates upwards and if there is any event handler attached to its parent element, it then responds. The event then bubbles further upwards to the grand-parent element and great-grand-parent elements and so on, and event handler associated with all those elements respond to this event. It continues to propagate upwards until it reaches the root element.

#-4. What is **Event Delegation** in JavaScript? Why is it useful?

Event delegation is a technique where a event listener is added to the parent element in stead of child elements to manage the events triggered by the child elements.
1. Event delegation is particularly helpful to handle dynamic elements. As the event handler is added to the parent element, it can automatically handle the events triggerd by the newly added children to that parent element in the DOM.
2. Delegating the event makes the code simplified and makes maintenance easier.
3. Event delegation also improves the performance and processing time as a single event handler is used to the parent in stead of adding multiple event handlers to multiple children. It is particularly helpful while dealing with a large number of elements.

#-5. What is the difference between **preventDefault() and stopPropagation()** methods?

 stopPropagation() method is used to stop the event from bubbling upwards to the parent element.
 preventDefault() method is used to prevent occuring the default behaviour or action associated with an event.
