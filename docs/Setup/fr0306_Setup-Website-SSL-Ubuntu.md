# Setup Instructions for creating a simple website with SSL

1. Open Bitvise on your local workstation and login as nimda to the Ubuntu server

 - Open and initial login
```
 "C:\Program Files (x86)\Bitvise SSH Client\BvSsh.exe"
```
 - Click New Profile
 
 Enter:
  Host IP address: xxx.xxx.xxx.xxx.
  Port: 22
  Username: nimda
  Initial Method: password
  Check: Store password...
  Password: xxxxxxxxx
  
  Click: log In (You will be logged in via password)

  Click: Save profile e.g. FormR1-Vultr

  - Configure Login via Public Key

  Click: New SFTP window

  - In remote files pane (right)
    - create /root/.ssh
    - create file authorized_keys

  - In local files panes (left)
    - Navigate to C:/users/(your username)/.ssh 
    - edit the public key file (This file was created when the Vultr server was created)
      - Copy the one line of text. e.g.
        ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDJjD5Am/Zphxu4m2kdd+5peA968irTcwmtp/uNglxgVe8FJCRmRriduuizc18UMprFoVA7yjI1Vk/OBc4LgW9F1R7RfQvq2T3KESqfKNbgxMUL5Kvy+7FoBHCUWd4fM+kG9jphAlUb2olVL+NfuU2bIX5q5L8pMURDPnTBROasfxUNhcYJCIsowC0J0tbZuSrmnfh5wyXMFjoQht0vCB2Fqp7RToTkCFCSoYSKOH0w69afIbEqbPLBz2T9ahiH6d59OQl8Zdnz0knGWYwHuWX9J6vku0H6JB72oLEnweETjuvELW3NX+QFZQQzNayaHiDXGexQ/kTEN1AxyuxbbVLL brucetroutman_v210511

  - In the Remote Files pane (right)
      - edit the file /root/.ssh/authorized_keys
      - paste the public key text
      - save the file
      - close SFTP window

  - From the Profile window
    - Logout 
    - Change Authentication, Initial method from 'password' to 'public key'
    - Click the Client Key Manager link
      - Click Import
        - Select 'All files' then select the Private key file that matched the previously used Public key
        - Click Import and close Client Key Manager
    - Select the just imported key from the Client key drop down
    - Click Login (You will be logged in via public key)
    - IMPORTANT -- Click Save Profile !!!



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
