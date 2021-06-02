# Setup Instructions for the web server, NGINX, on Ubuntu

## Login as root to the Ubuntu server on your Vultr console

### 1. Install nginx
- Install
```
apt-get install nginx
```
![Install NGINX](./images/fr0303-01_Ubuntu-install-nginx.png#img2 "Install NGINX")

- Check
```
nginx -t
```
![Check NGINX](./images/fr0303-02_Ubuntu-check-nginx.png#img2 "Check NGINX")

- Enable nginx to auto start
```
systemctl enable nginx
```
![Enable NGINX](./images/fr0303-03_Ubuntu-enable-nginx.png#img2 "Enable NGINX")

- Allow http & https through firewall
```
ufw allow 'Nginx Full'
```
![Allow NGINX Ports](./images/fr0303-04_Ubuntu-allow-nginx-ports.png#img2 "Allow NGINX Ports")

- Test the default web site by IP. Browse to your server's IP address.
```
http://xxx.xxx.xxx.xxx
```
![Test Web Site](./images/fr0303-05_Ubuntu-test-web-site.png#img2 "Test Web Site")

### 2. Install Certbot

Certbot is used to create SSL certificates using LetsEncrypt.

```
apt-get install python-certbot-nginx
```
![Install Certbot](./images/fr0303-06_Ubuntu-install-certbot.png#img2 "Install Certbot")


### 3. Create webs directory

- Create a directory to hold your applications.
```
mkdir /webs
```

- Check that /webs directory was created
```
cd /
ls -ld /webs
```
![Create Webs Directory](./images/fr0303-07_Ubuntu-create-webs-directory.png#img2 "Create Webs Directory")

### 4. Create Snapshot of server in Vultr
```
Use label: FormR-Installed-Web-Server
```

![Take Snapshot](./images/fr0303-08_Ubuntu-take-snapshot.png#img2 "Take Snapshot")


### Next Step - Install Application Server: 

## [Install App Server](../setup/fr0304_Setup-App-Server-Ubuntu.md)
