# Setup Instructions for application server, NodeJS, on Ubuntu

## Login as root to the Ubuntu server on your Vultr console

### 1. Install nodejs

- Install
```
apt-get install nodejs
```
- Check
```
nodejs --version
```

### 2. Install npm

- Install
```
apt-get install npm
```
- Check
```
npm --version
```

### 3. Install  pm2

- Install
```
npm install -g pm2
```
- Check
```
pm2 list
```

- Configure pm2 to start automatically on system startup
```
pm2 startup systemd
```

### 4. Install Docsify
```
 npm i docsify -g
 ```

