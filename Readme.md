# Random Chat

## Functionality
Simple Chat App that allows users to create and join rooms. 

## Run (For myslef)
 1. Use ngrok to obtain https
 2. Update https address on Facebook Dev
 3. Update Config file (gitignore) 
 2. npm start
 3. ./src/redis-server (from Redis folder)

## Technology Stack

![](./tech-stack.jpg =250x)

### Framework 
* Express (middleware manager)

### Front End
* **BootStrap**

### Authentification
* **Passport** (Authentificaiton Driver)

### Users Database 
* **MongoLab** (MongoDb on the cloud)
* **Mongoose** (MongoDb driver)

### Image Data 
* **Cloudinary** ( Allows Preprocessing)

### Comunication 
* **Sock.io** (TCP)
* **Redis** used as message buffer

### Logging
* **Winston** (can transport log to different channels) 
* **Morgan**   (logs HTTP requests)

