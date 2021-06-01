sudo

# Setup Instructions for the web server, NGINX, on Ubuntu

## Login as root to the Ubuntu server on your Vultr console

### 1. Install nginx
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
### 2. Install Certbot

Certbot is used to create SSL certificates using LetsEncrypt.

```
apt-get install python-certbot-nginx
```


### 3. Create webs directory

- Create a directory to hold your applications.
```
mkdir /webs
```

