# async_rendering_with_reactjs
##### Note : Read react's official doc[https://reactjs.org/docs/code-splitting.html]

### Observations
#### Commit 1
* In this case we are loading all the components at once. 
* Bundle.js
* 0.chunk.js
* main.chunk.js 

#### Commit 2
* In this case we are loading the components in chunks. So, the component "Page2" and "Page3" will get fetched on demand asynchronously.
* Bundle.js
* 0.chunk.js
* main.chunk.js
* 2.chunk.js (on Page2 click)
* 3.chunk.js (on Page3 click)

#### Commit 3
* In this case we are using HOC to build our logic.
* We also added Loader component to display user until our main component is ready.
* To see the loader component you should go to Network tab -> select Slow 3G.

#### Commit 4
* In this case we are using inbuild features of React16 React.lazy and Suspense.
* React.lazy takes a function that must call a dynamic import(). This must return a Promise which resolves to a module with a default export containing a React component.
* The lazy component should then be rendered inside a Suspense component, which allows us to show some fallback content (such as a loading indicator) while we’re waiting for the lazy component to load.
