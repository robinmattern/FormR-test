sudo

# Setup Instructions for NodeJS on Ubuntu

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

### 4. Install nginx
- Install
```
apt-get install nginx
```
- Check
```
nginx -t
```
- Enable nginx to auto start
```
systemctl enable nginx
```
- Allow http & https through firewall
```
ufw allow 'Nginx Full'
```

### 5. Create webs directory

- Create a directory to hold your applications, and make that your working directory.
```
mkdir /webs
```
### 6. Install Certbot

Certbot is used to create SSL certificates using LetsEncrypt.

```
apt-get install python-certbot-nginx
```

### 7. Install git
```
apt install git
```
- Check Version
```
git --version
```
