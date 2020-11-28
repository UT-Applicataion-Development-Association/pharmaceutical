# Varient Backend
## Structure
 ```
├── README.md
├── app.py
└── server
    ├── config.py
    ├── controller
    │   ├── index.py
    │   └── signin.py
    ├── db
    │   ├── User.py
    │   └── varient_database.db
    ├── middleware
    │   └── signin.py
    ├── routes
    │   ├── index.py
    │   ├── signin.py
    │   └── signup.py
    └── service
        └── signin.py

```
## Files
+ app.py: The running server of the entire app

+ server: The backend packages for handling different tasks
    + __init__.py: Initialize the server with proper configuration
    
    + config.py: The configurations for the server
    
    + .env this is an encrypted file storing the credentials this must be added using git secret
    
    + controller: The controller is responsible for sanitizing request data to make sure only data in the corrected form will be forwarded to the service
    
    + db: The sqlite databases for the backend 
        + common sqlite commands can be found on https://www.sitepoint.com/getting-started-sqlite3-basic-commands/
    
    + middleware: Storing middle handlers
    
    + routes: REST API handlers for requests sent to different routes
    
        + The general design of the API is that a file is only responsible for a specific route 
        
            + Every route in the roues should be a Flask BluePrint registered in the __init__
            
            + Avoid Almighty route
    
    + service: The service is responsible for providing the service sent to the route
    
An example of the work flow
+ Suppose a GET request is sent to the route of the homepage

    + There must a file in the **routes** that is responsible for listening the request sent to the route
    
    + The router will first call corresponding controller for sanitizing the request
        
        + Any error of request in the incorrect form or missing parameters should be handled here
    
    + After controller sanitizing the request the request should be forwarded to the corresponding service
        
        + The service will finish processing the request and send back the result to the router

