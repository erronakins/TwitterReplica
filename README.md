# TwitterReplica
Fully Functioning Replica of Twitter using React, Node, MongoDB, AWS

## Architecture
This twitter clone is comprised of three components - a React UI component, a server component and a DB component.

### React Component:
Renders the Twitter clone.

### Server Component:
Communicates with the DB and the React Component passing data to the React UI. The server utlizes caching techniques for efficiency while safely ensuring accuracy of permanent data posted to the DB.

### DB Component:
Stores data that will be pushed to the UI via the server to show accurate data - such as likes, followers, posts...

### To run:
Enter the Server component folder - serverComp - and run 'node server.js'
This creates a local Node server that communicates with the UI and DB(note this server can be changed: use commented out Heroku server for reference of how to optionally add a different server). 

Install MongoDB and run the command 'mongo' in the terminal(does not matter where this is run)
Run command 'mongod --dbpath data/db' from the Twitter Replica folder
This starts the MongoDB server and listener and populates the DB with starting data to add to the UI

Enter the React Component folder - UIcomponent - and run 'npm start'
This starts the web app via localhost

After this the clone is running and all components will interact. You can make user accounts, create posts, like posts, follow other users and much more just like Twitter. Best of all everything you do is safe as data is stored and pulled from a DB.
Server uses caching techniques to allow for effecient UI expierence. 
UI is preloaded with a crypto section which scrapes data from a crypto data set. 

![UML Class](https://user-images.githubusercontent.com/71099180/177922436-acccb7a6-0edc-4cc6-b547-d7b2829cc0d2.png)



