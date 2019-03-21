##Notes
*Scoping out the project, appears to be a standard react & redux app.
*When doing the first task, I mainly used flexbox, but there were scenarios where in order to have an element overlap another one, needed to set its position to absolute and have it overlay
*When I started to implement the cart, I chose to use a modal since it feels the most natural
*I noticed that it reused the product component, same one used in ProductList, but the styling of the css was not resizing properly at all
*When I came to better understand the layout, I realized that the styling was completly different, so I had 2 options.  
    1. let the Product component know when it is in the cart component
    2. create a new component specific to the cart
*When deciding between the 2, I knew that option 1 went against the principle of react where child components should know as little as possible about their parent component, so from this I decided to use option 2
*Honestly, after implementing the enhanced redux functions, now I know how redux **REALLY** works now. Hahahah, only took me a year 😉
*So I was unable to do the last task, of retrieving the data from the endpoint
*I researched more on how redux thunk works and was able to succesfully retrieve the JSON
*Only problem was dispatching the "RETRIEVING_PRODUCTS" action. I thought I set it up succesfully, but when everything was said and done, the store.getState() would fire before "RETRIEVING_PRODUCTS" action would finish, making the app miss some information.
*I finished up with the styling the responsivness of the app, I tested it with galaxy S5, ipad and regular desktop.
*Hope you enjoyed the project!