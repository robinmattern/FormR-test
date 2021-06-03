npm i docsify-cli -g

https://docsify.js.org/#/quickstart

, { "key" : "ctrl+k"              , "command": "workbench.action.tasks.runTask"
  , "args": "Open Chrome",             "when": "editorTextFocus" }

, { "key" : "ctrl+d"              , "command": "workbench.action.tasks.runTask"
  , "args": "Open Docs",               "when": "editorTextFocus" }

## Hello from docs/index.html

This is a Docsify SPA (Single Page Application) containing Markdown pages
describing the building of a VPS (Virtual Private Server) to run our FormR
client / server application to quickly and easily edit database tables.   

Docsify was discovered by Fillip, and implemented at http://awesome.imade3d.com. 
He introduced us to writing Markdown pages that are stored in a central repository
at GitHub.  That turned out to be a great solution for multiple people authoring 
documentation for IMADE3D printers.

While there is some magic to moving the edited Markdown pages from GitHub to the IMADE3D
server, it turns out that 
- GitHub can publish the Docsify pages in a webserver available for each repository, and 
- Docsify can render the documentation from with VSCode while Markdown pages are being edited  

All that is needed is to put three initial files into a folder named docs.  
  ``` 
  ./docs/index.html -- contains links to the Docsify .css and .js code
  ./docs/README.md -- the main documentation page
  ./docs/_sidebar.md -- contains links to all other Markdown files
  ``` 
Then after the repository is pushed up to Github, all that is needed is to enable 
GitHub pages in the `Settings` page for the repository.  Note, it can only be done by the owner of the repository.  

![Setup Github Pages](./images/et0101-01_Setup-Github-Pages.png "Setup Github Pages")

And here is what Docsify looks like in GitHub Pages. 

![FormR Github Page](./images/et0101-02_FormR-Github-Page.png "FormR-Github-Page")