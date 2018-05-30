# notes-app
An app written in node js to read, write, delete, list notes.   
The repo contains two files:  
1. app.js   
2. notes.js   
  
> app.js is the code where main app resides.   
> notes.js is the code where all the functions reside. 

How to use:

> Open terminal.  
> Type 'npm init' to import all the basic modules.  
> Type 'npm install yargs --save' to import yargs which is used to parse the arguments in the command line.  
> Run the app using 'node app.js #command #parameters'.  
> #command includes add, list, remove, read.  
> add requires title and body as parameters, list requires title, remove requires title, read requires title.  
> #parameter needs to be specified as --title='Some random title' and --body='Some random body', or a format that yargs supports.   
> The app automatically checks for a note with an already given title, so the title remains unique.   
