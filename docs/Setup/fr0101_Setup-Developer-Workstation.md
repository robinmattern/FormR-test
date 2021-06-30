
## Instructions for setting up a MERN stack development workstation

- Introduction
The following steps create the development environment on your workstation for developing an MERN stack (MYSql, Express, React and Node) application. You will access a repository on github and modify it, run it and push changes back to github. We will be using an empty 'Windows Pro N' VM in these instructions. You should be able to use any workstation. Just follow the steps. 

## Steps to set up your development workstation
###    1. Install any updates to your workstation.

![Windows-Update](./images/fr0101-01_Windows-Update.png "Windows-Update")

###    2. Create folders and ssh keys

-  C:\

```
 'repos' (local copies of your gitHub repos)
 'remotes' (local copies of remote server files)
```

![Create-folders](./images/fr0101-02_Create-folders.png "Create-folders")

-  C:\users\(username)\

```
 '.ssh' (holds your ssh keys)
```

![Create-folders2](./images/fr0101-02_Create-folders2.png "Create-folders2")

###    3. Install or open Chrome browser

- Install Chrome Extensions

```
https://chrome.google.com/webstore/category/extensions?hl=en-US
```

![Chrome-extensions](./images/fr0101-03_Chrome-extensions.png "Chrome-extensions")

- Add Markdown Preview Plus

![Chrome-extensions1](./images/fr0101-03_Chrome-extensions1.png "Chrome-extensions1")

- Allow access to file URLs 

```
chrome://extensions/?id=febilkbfcbhebfnokafefeacimjdckgl
```

![Chrome-extensions2](./images/fr0101-03_Chrome-extensions2.png "Chrome-extensions2")

- Add React Developers Tools

![Chrome-extensions3](./images/fr0101-03_Chrome-extensions3.png "Chrome-extensions3")

- Check the installations

```
chrome://extensions/
```

![Chrome-extensions4](./images/fr0101-03_Chrome-extensions4.png "Chrome-extensions4")

###    4. Create an account or sign into GitHub with ssh key

- Create new ssh key

```
ssh-keygen -t rsa -N ""  -f "c:/Users/local_admin/.ssh/bruce.troutman@github_bruce_v210623_key" -C "bruce.troutman@github_bruce_v210623"
```

![Create New ssh key](./images/fr0101-04_Create-New-ssh-key.png "Create New ssh key")

- Add ssh key to your github account

![Add New ssh key](./images/fr0101-04_Add-New-ssh-key.png "Add New ssh key")


- Create a new repository: 'myProject'. 

![Create New Repository](./images/fr0101-04_Create-New-Repository.png "Create New Repository")


- Select Private and check ReadMe file. 

![GitHub-myProject](./images/fr0101-04_GitHub-myProject.png "GitHub-myProject")

- Edit the Readme.md file: 

![GitHub-myProject-readme](./images/fr0101-04_GitHub-myProject-readme.png "GitHub-myProject-readme")

```
# myProject was created on mm/dd/yyyy.
```

![GitHub-myProject-readme2](./images/fr0101-04_GitHub-myProject-readme2.png "GitHub-myProject-readme2")

- Commit changes

![GitHub-myProject-readme3](./images/fr0101-04_GitHub-myProject-readme3.png "GitHub-myProject-readme3")

![GitHub-myProject-readme4](./images/fr0101-04_GitHub-myProject-readme4.png "GitHub-myProject-readme4")

###    5. Install GitHub Desktop and Clone myProject

- Follow the instructions at: https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/installing-github-desktop

![GitHub-desktop](./images/fr0101-05_GitHub-desktop.png "GitHub-desktop")

- Login to your GitHub account        

![GitHub-Signin](./images/fr0101-05_GitHub-signin.png "GitHub-signin")

- From Let's get started select Clone a repository

- Select your myProjects repo

- Set the local path to your Repos folder from Step 2 above

- Click Clone

![GitHub-clone](./images/fr0101-05_GitHub-clone.png "GitHub-clone")

- Validate that the cloning was successful

![GitHub-validate-clone](./images/fr0101-05_GitHub-validate-clone.png "GitHub-validate-clone")

###    6. Download Git, if not already installed

- Download from
```
 https://git-scm.com/download/win
```

![Git-for-Windows](./images/fr0101-06_Git-for-Windows.png "Git-for-Windows")

- Allow changes

![Git-for-Windows1](./images/fr0101-06_Git-for-Windows1.png "Git-for-Windows1") 

- Select all the default values and install

![Git-for-Windows2](./images/fr0101-06_Git-for-Windows2.png "Git-for-Windows2")

- Finish Install

![Git-for-Windows3](./images/fr0101-06_Git-for-Windows3.png "Git-for-Windows3")

- Open Git Bash

![Git-for-Windows4](./images/fr0101-06_Git-for-Windows4.png "Git-for-Windows4")

###    7. Open or Install VSCode

![VSCode](./images/fr0101-07_VSCode.png "VSCode")

- Pin it to Task Bar 

![VSCode2](./images/fr0101-07_VSCode2.png "VSCode2")

- Install Extensions

![VSCode3](./images/fr0101-07_VSCode3.png "VSCode3")

    - GitLens

![VSCode4](./images/fr0101-07_VSCode4.png "VSCode4")

    - Prettier

![VSCode5](./images/fr0101-07_VSCode5.png "VSCode5")

    - React Snippets

![VSCode6](./images/fr0101-07_VSCode6.png "VSCode6")

![VSCode6a](./images/fr0101-07_VSCode6a.png "VSCode6a")


- Click File.. AutoSave

![VSCode7](./images/fr0101-07_VSCode7.png "VSCode7")

- Click File.. Open folder : repos/myproject

![VSCode8](./images/fr0101-07_VSCode8.png "VSCode8")

![VSCode8a](./images/fr0101-07_VSCode8a.png "VSCode8a")

![VSCode8b](./images/fr0101-07_VSCode8b.png "VSCode8b")

- Click File.. Save Workspace as: myProject.code.workspace

![VSCode9](./images/fr0101-07_VSCode9.png "VSCode9")

![VSCode9a](./images/fr0101-07_VSCode9a.png "VSCode9a")

- Close VSCode

- From File Explorer click on repos/myproject/myProject.code-workspace. VSCode will open to your local myProject code

![VSCode10](./images/fr0101-07_VSCode10.png "VSCode10")

![VSCode10a](./images/fr0101-07_VSCode10a.png "VSCode10a")

- Change default terminal in VSCode

```
Using Notepad, edit:
 
 C:\Users\xxxxxxxxxx\AppData\Roaming\Code\User\settings.json 
 
 and add this line at the bottom of the file:

"terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",  
```
  
![VSCode11](./images/fr0101-07_VSCode11.png "VSCode11")

![VSCode11a](./images/fr0101-07_VSCode11a.png "VSCode11a")

- From VSCode open a new Terminal

![VSCode11b](./images/fr0101-07_VSCode11b.png "VSCode11b")

![VSCode11c](./images/fr0101-07_VSCode11c.png "VSCode11c")


###    8. Markdown Preview test

- Open VSCode and click on the ReadMe.md file and add these lines:
```
    1. My first update was changed locally.
    
    2. I previewed it in VSCode and Chrome.
```

![Markdown-Preview](./images/fr0101-08_Markdown-Preview.png "Markdown-Preview")

![Markdown-Preview2](./images/fr0101-08_Markdown-Preview2.png "Markdown-Preview2")

- Click View.. Command Palette and type: >Markdown: Open Preview to the Side, your preview will display.

![Markdown-Preview3](./images/fr0101-08_Markdown-Preview3.png "Markdown-Preview3")

![Markdown-Preview4](./images/fr0101-08_Markdown-Preview4.png "Markdown-Preview4")

- From File Explorer right click on Readme.md then Open With and navigate to Chrome.exe, your preview will display.

![Markdown-Preview5](./images/fr0101-08_Markdown-Preview5.png "Markdown-Preview5")

![Markdown-Preview6](./images/fr0101-08_Markdown-Preview6.png "Markdown-Preview6") 


###    9. Push and Pull with GitHub

- From VSCode.. Click the Control Source icon with the 2

![Github-push](./images/fr0101-09_Github-push.png "Github-push") 

- In the Message textbox, type: Updated Readme.md

![Github-push](./images/fr0101-09_Github-push.png "Github-push") 

- Click on the Commit checkmark above the Message textbox

![Github-push](./images/fr0101-09_Github-push.png "Github-push") 

-  From the Source Control menu, click the three dots (...) More menu, and click Push.

![Github-push](./images/fr0101-09_Github-push.png "Github-push") 

- Login to GitHub and select the myProject repository then click Readme.md, it should be updated.

![Github-push](./images/fr0101-09_Github-push.png "Github-push")
 
- Modify Readme.md in Github by adding these lines:
```
3. I updated it in GitHub.

4. I pulled it to my local repo using VScode
``` 

![Github-push](./images/fr0101-09_Github-push.png "Github-push") 

- Commit the change.

![Github-push](./images/fr0101-09_Github-push.png "Github-push") 

- In VSCode, From the Source Control menu, click the three dots (...) More menu, and click Pull. 

![Github-push](./images/fr0101-09_Github-push.png "Github-push") 

- The Github changes will now appear in the Readme.md file.

![Github-push](./images/fr0101-09_Github-push.png "Github-push") 

###    10. Install Node for Windows
1. Browse to: nodejs.org/en/downloads
2. Install using all the defaults.

![Nodejs-install](./images/fr0101-17_Nodejs-install.png "Nodejs-install")

3. Test from Windows command prompt:
```
    node --version
    npm --version
```    
![Nodejs-install-check](./images/fr0101-18_Nodejs-install-check.png "Nodejs-install-check")


###    11. Install MySql for windows 
1. Follow the instructions at: https://dev.mysql.com/doc/mysql-windows-excerpt/5.7/en/windows-installation.html
2. Choose the version: mysql-installer-community-8.0.23.0.msi

![MySQL-community](./images/fr0101-19_MySQL-community.png "MySQL-community")

3. Select No, thanks, just start my download

![MySQL-no-thanks](./images/fr0101-20_MySQL-no-thanks.png "MySQL-no-thanks")

4. Choose Stup Type: Custom

![MySQL-custom](./images/fr0101-21_MySQL-custom.png "MySQL-custom")

5. Select Products (Version = 8.0.23 -x64)
    1. MySQL Server
    2. MySQL Workbench
    3. MySQL Shell
    4. MySQL Router
    5. Connector/ODBC
    6. Connector/J
    7. MySQL Documentation
    8. Samples and Examples

![MySQL-select-products](./images/fr0101-22_MySQL-select-products.png "MySQL-select-products")

6. Enter Account password

![MySQL-account-password](./images/fr0101-23_MySQL-account-password.png "MySQL-account-password")

7. Connect to Server

![MySQL-connect-server](./images/fr0101-24_MySQL-connect-server.png "MySQL-connect-server")

8. Windows Service

![MySQL-windows-service](./images/fr0101-25_MySQL-windows-service.png "MySQL-windows-service")

9. Apply Configuration

![MySQL-apply-configuration](./images/fr0101-26_MySQL-apply-configuration.png "MySQL-apply-configuration")

10. Installation Complete

![MySQL-installation-complete](./images/fr0101-27_MySQL-installation-complete.png "MySQL-installation-complete")

11. Open MySQL Shell and MySQL WorkBench.

![MySQL-shell-workbench](./images/fr0101-28_MySQL-shell-workbench.png "MySQL-shell-workbench")

12. WorkBench login

![MySQL-workbench-login](./images/fr0101-29_MySQL-workbench-login.png "MySQL-workbench-login")

13. WorkBench SHOW DATABASES

![MySQL-workbench-show-databases](./images/fr0101-30_MySQL-workbench-show-databases.png "MySQL-workbench-show-databases")

14. Shell login

![MySQL-shell-login](./images/fr0101-31_MySQL-shell-login.png "MySQL-shell-login")

15. Shell SHOW DATABASES

![MySQL-shell-show-databases](./images/fr0101-32_MySQL-shell-show-databases.png "MySQL-shell-show-databases")

###    12. Install BitVise ssh client and Pin to Task Bar
1. Install Bitvise from: https://www.bitvise.com/ssh-client-download

![Bitvise-download](./images/fr0101-33_Bitvise-download.png "Bitvise-download")

2. Accept the defaults.

![Bitvise-start](./images/fr0101-34_Bitvise-start.png "Bitvise-start")

###    13. Install TextPad
1. Install Textpad from: https://www.textpad.com/download#TextPad851

![Textpad-download](./images/fr0101-37_Textpad-download.png "Textpad-download")

2. Accept the defaults.

![Textpad-start](./images/fr0101-38_Textpad-start.png "Textpad-start")

## After all installations  27GB was used on Drive C:.
    