# Setup Instructions for creating a simple website with SSL

1. Use Bitvise securely. Open Bitvise on your local workstation and login as nimda to the Ubuntu server

 - Bitvise Initial Login with password
```
 "C:\Program Files (x86)\Bitvise SSH Client\BvSsh.exe"
```
 - Click New Profile
![BitVise New Profile](./images/fr0306-01_Ubuntu-Bitvise-New-Profile.png "BitVise New Profile")

 - Enter:
  Host IP address: xxx.xxx.xxx.xxx.
  Port: 22
  Username: nimda
  Initial Method: password
  Password: xxxxxxxxx

![BitVise Initial Login](./images/fr0306-02_Ubuntu-Bitvise-Initial-Login.png "BitVise Initial Login")
  
- Click log In (You will see Warning message and then be logged in via password)

![BitVise Click Login](./images/fr0306-03_Ubuntu-Bitvise-Click-Login.png "BitVise Click Login")

![BitVise Click Login2](./images/fr0306-03_Ubuntu-Bitvise-Click-Login2.png "BitVise Click Login2")


- Click Save profile icon and save as FormR1-Vultr-nimda

![BitVise Save Profile](./images/fr0306-04_Ubuntu-Bitvise-Save-Profile.png "BitVise Save Profile")

![BitVise Save Profile2](./images/fr0306-04_Ubuntu-Bitvise-Save-Profile2.png "BitVise Save Profile2")

2. Configure Login via Public Key (SSH keys are more secure than passwords)

- Open Bitvise profile, Formr-Vultr-nimda, click Log in, then click New SFTP window icon

![BitVise New SFTP window](./images/fr0306-05_Ubuntu-Bitvise-New-SFTP-window.png "BitVise New SFTP window")

![BitVise New SFTP window2](./images/fr0306-05_Ubuntu-Bitvise-New-SFTP-window2.png "BitVise New SFTP window2")

  - Right click in remote files pane (right)
    - create folder: /root/.ssh
![BitVise Create SSH Folder](./images/fr0306-05_Ubuntu-Bitvise-Create-SSH-Folder.png "BitVise Create SSH Folder")

![BitVise Create SSH Folder2](./images/fr0306-05_Ubuntu-Bitvise-Create-SSH-Folder2.png "BitVise Create SSH Folder2")

    - navigate to folder /root/.ssh and create file: authorized_keys
![BitVise Create File authorized_keys](./images/fr0306-05_Ubuntu-Bitvise-Create-File-authorized_keys.png "BitVise Create File authorized_keys")

![BitVise Create File authorized_keys2](./images/fr0306-05_Ubuntu-Bitvise-Create-File-authorized_keys2.png "BitVise Create File authorized_keys2") 

  - In local files panes (left)
    - Navigate to C:/users/(your local computer username)/.ssh and edit the public key file (This file was created when the Vultr server was created)
    - Copy the one line of text. e.g.
    ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDJjD5Am/Zphxu4m2kdd+5peA968irTcwmtp/uNglxgVe8FJCRmRriduuizc18UMprFoVA7yjI1Vk/OBc4LgW9F1R7RfQvq2T3KESqfKNbgxMUL5Kvy+7FoBHCUWd4fM+kG9jphAlUb2olVL+NfuU2bIX5q5L8pMURDPnTBROasfxUNhcYJCIsowC0J0tbZuSrmnfh5wyXMFjoQht0vCB2Fqp7RToTkCFCSoYSKOH0w69afIbEqbPLBz2T9ahiH6d59OQl8Zdnz0knGWYwHuWX9J6vku0H6JB72oLEnweETjuvELW3NX+QFZQQzNayaHiDXGexQ/kTEN1AxyuxbbVLL brucetroutman_v210511

![BitVise Copy public key](./images/fr0306-05_Ubuntu-Bitvise-Copy-public-key.png "BitVise Copy public key") 

![BitVise Copy public key2](./images/fr0306-05_Ubuntu-Bitvise-Copy-public-key2.png "BitVise Copy public key2") 


  - In the Remote Files pane (right)
      - Edit the file /root/.ssh/authorized_keys
![BitVise Edit authorized_keys](./images/fr0306-05_Ubuntu-Bitvise-Edit-authorized_keys.png "BitVise Edit authorized_keys") 

      - Paste the public key text and Save
![BitVise Paste public key](./images/fr0306-05_Ubuntu-Bitvise-Paste-public-key.png "BitVise Paste public key")


      - close SFTP window

  - From the Profile window
    - Logout 
    - Change Authentication, Initial method from 'password' to 'public key' and Click the Client Key Manager link, then click Import
![BitVise Client Key Manager](./images/fr0306-05_Ubuntu-Bitvise-Client-Key-Manager.png "BitVise Client Key Manager")

![BitVise Client Key Manager2](./images/fr0306-05_Ubuntu-Bitvise-Client-Key-Manager2.png "BitVise Client Key Manager2")

    - Select 'All files' then select the Private key file that matched the previously used Public key then Click Import and close Client Key Manager
![BitVise Select Private Key](./images/fr0306-05_Ubuntu-Bitvise-Select-Private-Key.png "BitVise Select Private Key")

![BitVise Select Private Key2](./images/fr0306-05_Ubuntu-Bitvise-Select-Private-Key2.png "BitVise Select Private Key2")

![BitVise Select Private Key3](./images/fr0306-05_Ubuntu-Bitvise-Select-Private-Key3.png "BitVise Select Private Key3")

    - Select the just imported key (Profile 1) from the Client key drop down and Click Login (You will be logged in via public key)
![BitVise Select Client Key](./images/fr0306-05_Ubuntu-Bitvise-Select-Client-Key.png "BitVise Select Client Key")

    - IMPORTANT -- Click Save Profile !!!
![BitVise Save Profile](./images/fr0306-05_Ubuntu-Bitvise-Save-Profile.png "BitVise Save Profile")

3. Using Bitvice New Terminal console delete nginx default files 

```
unlink /etc/nginx/sites-available/default

unlink /etc/nginx/sites-enabled/default
```
![BitVise Unlink nginx default](./images/fr0306-06_Ubuntu-Bitvise-Unlink-nginx-default.png "BitVise Unlink nginx default")

4. Clone simpleApp using git 
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
![BitVise Clone simpleApp](./images/fr0306-07_Ubuntu-Bitvise-Clone-simpleApp.png "BitVise Clone simpleApp")

- Start app.js on the server
```
node app.js
```
![BitVise Run simpleApp](./images/fr0306-07_Ubuntu-Bitvise-Run-simpleApp.png "BitVise Run simpleApp")

- Use your local browser to test your server
```
xxx.xxx.xxx.xxx:5000
```
![BitVise Browse simpleApp](./images/fr0306-07_Ubuntu-Bitvise-Browse-simpleApp.png "BitVise Browse simpleApp")

5. Setup pm2 to run website automatically
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

6. Setup nginx proxy 

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
7. Point DNS to server
```
Update your DNS record to point formr.net to the server IP address.
```
8. Test your website

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

9. Close port 5000
```
ufw status numbered

ufw delete 8

ufw delete 4
```
