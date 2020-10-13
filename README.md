# async_rendering_with_reactjs
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
* 