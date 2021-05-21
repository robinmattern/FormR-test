
## Instructions for Hardening the Ubuntu server.

### 1. Login as root to the Ubuntu server on your Vultr console

### 2. Create a new sudo user
- Create a new user alias with root privileges
```
useradd -ou 0 -g 0 -d /root -s /bin/bash -G sudo nimda
passwd nimda
```

- Check to see if nimda is in sudo group
```
grep '^sudo' /etc/group
```
- Check user info
```
cat /etc/passwd
```

![SSH-Admin Group](../images/et0302-06_ssh-admin-group.png#img2 "SSH-Admin Group")


### 3. Update and upgrade server

```
apt-get update && apt-get upgrade
```

### 4. Install and Configure unattended-updates

- Install
```
apt-get install unattended-upgrades
```
- Check installation
```
systemctl status unattended-upgrades
```
- Modify apt.conf.d/50unattended-upgrades
```
nano /etc/apt/apt.conf.d/50unattended-upgrades
```
- Uncomment the “updates” line by deleting the two slashes at the beginning of it:
```
"${distro_id}:${distro_codename}-updates";
```
- Uncomment and modify:
```
Unattended-Upgrade::Remove-Unused-Kernel-Packages "true";
Unattended-Upgrade::Remove-Unused-Dependencies "true";
Unattended-Upgrade::Automatic-Reboot "true";
Unattended-Upgrade::Automatic-Reboot-Time "02:38";
```
- Save the file

- Enable Automatic Updates
```
nano /etc/apt/apt.conf.d/20auto-upgrades
```
- Add these lines:
```
APT::Periodic::Update-Package-Lists "1";
APT::Periodic::Download-Upgradeable-Packages "1";
APT::Periodic::AutocleanInterval "7";
APT::Periodic::Unattended-Upgrade "1";
```

- Save the file

- Check if it works

```
unattended-upgrades --dry-run --debug
```

- Reboot the server
```
reboot
```

### 5. Secure Shared Memory
     ```
     nano /etc/fstab
     ```
- Add the following line to the bottom of that file:
     ```
     tmpfs /run/shm tmpfs defaults,noexec,nosuid 0 0  
     ``` 
- Save and close the file and reboot the server.
     ```
     reboot
     ```
![Secure Shared Memory](../images/et0302-01_Hardening-secure-shared-memory.png#img2 "Secure Shared Memory")

### 6. Enable SSH Login for Specific Users Only

     ```
     nano /etc/ssh/sshd_config
     ```

    At the bottom of the file, add the line:

     ```
     AllowUsers nimda@10.1.*.*
     ```

    Save and close the file and restart sshd with this command:

     ```
     systemctl restart sshd
     ```

![SSH AllowUsers](../images/et0302-02_ssh-allowusers.png#img2 "SSH AllowUsers")

### 7. Include a Security Login Banner
     ```
     sudo nano /etc/issue.net
     ```

- Edit the file to add a suitable warning. Save and close the file.

![SSH-Banner Issue.net](../images/et0302-03_ssh-banner-issue-net.png#img2 "SSH-SSH-Banner Issue.net")

- Disable the banner message from Message Of The Day (motd).
     ```
     sudo nano /etc/pam.d/sshd
     ```

- With this file open for editing, comment out the following two lines (adding a # to the beginning of each line):
     ```
     #session optional pam_motd.so motd=run/motd.dynamic
     #session optional pam_motd.so noupdate
     ```

![SSH-Uncomment](../images/et0302-04_ssh-uncomment-pam-d.png#img2 "SSH-Uncomment")
     
- Next, open /etc/ssh/sshd_config with the command:

     ```
     sudo nano /etc/ssh/sshd_config
     ```
- Uncomment the line (remove the # symbol):

     ```
     #Banner none

     replace none  with  /etc/issue.net
     ```
- Save and close that file and restart the SSH server with the command:
     
     ```
     sudo systemctl restart sshd
     ```

![SSH-Banner Config](../images/et0302-05_ssh-banner-config.png#img2 "SSH-Banner Config")

- When someone logs into your server using SSH, they see your newly added banner warning them of any consequences of further action. 



### 8. Fail2ban
- Install
     ```
     apt-get install fail2ban
     ```
- Configure
     ```     
     nano /etc/fail2ban/jail.local
     ```

![SSH-jail-local](../images/et0302-065_ssh-jail-local.png#img2 "SSH-jail-local")

- In this new file, add the following contents:
     ```
     [sshd]
     enabled = true
     port = 22
     filter = sshd
     logpath = /var/log/auth.log
     maxretry = 3
     ```

- This configuration enables the jail, sets the SSH port to be monitored to 22, uses the sshd filter, and sets the log file to be monitored.

- Save and close that file and restart fail2ban with the command:
     ```
     sudo systemctl restart fail2ban
     ```

- If you attempt to Secure Shell into that server and fail the login three times (set as the default by fail2ban), access is blocked from the IP address you are working from. 

![SSH-fail2ban](../images/et0302-07_ssh-fail2ban.png#img2 "SSH-fail2ban")

### 9. Enable firewall

- Allow ssh connections through firewall
```
ufw allow OpenSSH
```

- Enable firewall
```
ufw --force enable
```

- Check firewall status
```
ufw status
```

### 10. Set the server time zone
```
timedatectl set-timezone America/New_York 
```

### Next Step - Install NodeJs: 

[Install NodeJs](../setup/et0303_Setup-NodeJS-Ubuntu.md)

