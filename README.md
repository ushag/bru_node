BRU_NODE
=============
This is a sample application built to play with RequireJS, Backbone, Underscore and Node.

Setup
-----
Being a fully contained application, once you've downloaded this application,
you open the index.html as a file in a browser 


Or you can also serve it through Node (dont forget to install Node and the connect package) like so:
    node nodeserver.js
    localhost:9000/index.html

Build
-----
To run the application, you need not do a build. But this is an additional step to learn 
how minification and bundling works using RequireJS's r.js plugin.

Without the build, a request to index.html is followed by additional requests for 
require-0.27.1-min.js, main.js, src/app.js, jquery-1.6.4-min.js, underscore-1.2.0-min.js and backbone-0.5.3-min.js

If you run the build however, the dependencies for each module(configured in build.js) are bundled together to generate a single js file
To build, from the js directory 
   node r.js -o build.js

The above generates a build directory with all the required files for the application
Then you can run the Node server directly from the build directory
     node nodeserver.js
Now a request for index.html will only follow with require-0.27.1-min.js and main.js

Suggestions
-----------
If you have suggestions for other ways of doing this module or backbone stuff, I'd love to hear.
Do send me a message.
