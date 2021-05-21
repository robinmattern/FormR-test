# Setup Instructions for creating a simple website with SSL

## Open Bitvise on your local workstation and login as nimda to the Ubuntu server


1. Bitvise Setup

 - Open
```
 "C:\Program Files (x86)\Bitvise SSH Client\BvSsh.exe"
```
 - Click New Profile
 ```
 Enter:
  Host IP address: xxx.xxx.xxx.xxx.
  Port: 22
  Username: nimda
  Initial Method: password
  Check: Store password...
  Password: 
  
  Click: log In

  Click: Save profile

  Click: New terminal console
```
2. Delete nginx default files using Bitvice SFTP
```
navigate to and delete:

/etc/nginx/sites-available/default

/etc/nginx/sites-enabled/default
```
- Reload nginx
```
service nginx reload
```
3. Clone simpleApp using git 
```
cd /webs
git clone https://github.com/brucetroutman-gmail/simpleApp.git
```
- Confim clone
```
cd simpleApp
ls
```
- Open port 5000 through the firewall
```
ufw allow 5000
```
- Start app.js on the server
```
node app.js
```
App listening on port 5000!  

- Use your local browser to test your server
```
xxx.xxx.xxx.xxx:5000
```
Welcome to FormR ...

4. Setup pm2 to run website automatically
```
pm2 start app.js 
```
- Allow pm2 to start on boot up
```
pm2 startup systemd
```
- Save pm2 configuration
```
pm2 save --force
```
- Reboot server and test from local browser, xxx.xxx.xxx.xxx:5000

5. Setup nginx proxy 

- Copy simpleApp.conf file
```
Using Bitvise copy /webs/simpleApp /etc/nginx/sites-available/simpleApp.conf to
/etc/nginx/sites-available/simpleApp.conf
```

- Create symbolic link to /etc/nginx/sites-enabled  
```
ln -s /etc/nginx/sites-available/simpleApp.conf /etc/nginx/sites-enabled/simpleApp.conf
```
- Reload nginx
```
systemctl reload nginx
```
6. Point DNS to server
```
Update your DNS record to point formr.net to the server IP address.
```
7. Test your website

- Browse to your web site via http
```
http://yoururl
```
- Add Letsencrypt SSL certificate
```
certbot --nginx -d yoururl -d www.yoururl
```
- Browse to your web via https
```
https://yoururl
```

8. Close port 5000
```
ufw status numbered

ufw delete 8

ufw delete 4
```
