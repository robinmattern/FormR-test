# Setup Instructions for application server, NodeJS, on Ubuntu

## Login as root to the Ubuntu server on your Vultr console

### 1. Install nodejs

- Install
```
apt-get install nodejs
```

![Install NodeJS](./images/fr0304-01_Ubuntu-install-nodejs.png "Install NodeJS")

- Check
```
nodejs --version
```

![Check NodeJS](./images/fr0304-02_Ubuntu-check-nodejs.png "Check NodeJS")

### 2. Install npm

- Install
```
apt-get install npm
```

![Install NPM](./images/fr0304-03_Ubuntu-install-npm.png "Install NPM")

- Check
```
npm --version
```

![Check NPM](./images/fr0304-04_Ubuntu-check-npm.png "Check NPM")

### 3. Install  pm2

- Install
```
npm install -g pm2
```

![Install PM2](./images/fr0304-05_Ubuntu-install-pm2.png "Install PM2")

- Check
```
ps -aux | egrep 'pm2'
```

![Check PM2](./images/fr0304-06_Ubuntu-check-pm2.png "Check PM2")

- Configure pm2 to start automatically on system startup
```
pm2 startup systemd
```

![Autostart PM2](./images/fr0304-07_Ubuntu-autostart-pm2.png "Autostart PM2")

### 4. Install Docsify
```
 npm install docsify -g
 ```

![Install Docsify](./images/fr0304-08_Ubuntu-install-docsify.png "Install Docsify")

- Check
```
ps -aux | egrep 'docsify'
```

![Check Docsify](./images/fr0304-09_Ubuntu-check-docsify.png "Check Docsify")


### 5. Install Express
```
cd /webs
npm init
```

![npm init](./images/fr0304-10_Ubuntu-npm-init.png "npm init")
```
npm install express
```

![Install Express](./images/fr0304-11_Ubuntu-install-express.png "Install Express")

### 6. Create Snapshot of server in Vultr
``` 
Use label: FormR-Installed-App-Server
```

![Take Snapshot](./images/fr0304-12_Ubuntu-take-snapshot.png "Take Snapshot")


### Next Step - Install Database Server: 

## [Install Database Server](../Setup/fr0305_Setup-Data-Server-Ubuntu.md)
