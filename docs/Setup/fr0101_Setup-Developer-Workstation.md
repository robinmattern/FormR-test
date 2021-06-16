
## Instructions for setting up a MERN stack development workstation

- Introduction
The following steps create the development environment on your workstation for developing an MERN stack (MYSql, Express, React and Node) application. You will access a repository on github and modify it, run it and push changes back to github. We will be using an empty 'Windows Pro N' VM in these instructions. You should be able to use any workstation. Just follow the steps. 

## Steps to set up your development workstation
###    1. Install any updates to your workstation.

![Windows-Update](./images/fr0101-01_Windows-Update.png "Windows-Update")

###    2. Create two folders:
```
 'repos' (local copies of your gitHub repos)
 'remotes' (local copies of remote server files)
```


![Create-folders](./images/fr0101-02_Create-folders.png "Create-folders")

###    3. Install or open Chrome browser

1. Install Extensions:

        1. React Developers Tools
        2. Markdown Preview Plus
            1. Turn on: Allow access to file URLs in Markdown Preview Plus settings

![Chrome-extensions](./images/fr0101-03_Chrome-extensions.png "Chrome-extensions")

###    4. Create an account or sign into GitHub
1. Create a new repository: 'myProject'. 
2. Select Private and check ReadMe file. 

![GitHub-myProject](./images/fr0101-04_GitHub-myProject.png "GitHub-myProject")

3. Change the Readme.md file to: 
```
# myProject was created on mm/dd/yyyy.
```
![GitHub-myProject-readme](./images/fr0101-05_GitHub-myProject-readme.png "GitHub-myProject-readme")

###    5. Install GitHub Desktop and Clone myProject
1. Follow the instructions at: https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/installing-github-desktop

![GitHub-desktop](./images/fr0101-06_GitHub-desktop.png "GitHub-desktop")

2. Clone myProject
    1. Login to your GitHub account        
    2. From Let's get started select Clone a repository
    3. Select your myProjects repo
    4. Set the local path to your Repos folder from Step 2 above
    5. Click Clone
    6. Validate that the cloning was successful

![GitHub-desktop-clone](./images/fr0101-07_GitHub-desktop-clone.png "GitHub-desktop-clone")

###    6. Download Git, if not already installed
1. Download from http://git.scm.com
2. Select all the default values

![Git-for-Windows](./images/fr0101-08_Git-for-Windows.png "Git-for-Windows")

###    7. Open or Install VSCode

![VSCode](./images/fr0101-09_VSCode.png "VSCode")

1. Pin it to Task Bar 
2. Install Extensions
    1. GitLens
    2. Prettier
    3. React Snippets
2. Click File.. AutoSave
3. Click File.. Open folder : repos/myproject
4. Click File.. Save Workspace as: myProject
5. Close VSCode
6. From File Explorer click on repos/myproject/myProject.code-workspace. VSCode will open to your local myProject code
7. Change default terminal in 
C:\Users\xxxxxxxxxx\AppData\Roaming\Code\User\settings.json
fix this

    "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",  

    "terminal.integrated.shell.windows": "C:\\Windows\\System32\\cmd.exe",  
   
![VSCode-extensions](./images/fr0101-10_VSCode-extensions.png "VSCode-extensions")

###    8. Markdown Preview test
1. Open VSCode
2. Click on the ReadMe.md file and add:
```
    1. My first update was changed locally.
    
    2. I previewed it in VSCode and Chrome.
```
6. Click View.. Command Palette
7. Type: >Markdown: Open Preview to the Side, your preview will display.
8. From File Explorer right click on Readme.md and open with Chrome, your preview will display.

![Markdown-preview](./images/fr0101-11_Markdown-preview.png "Markdown-preview")


###    9. Push to GitHub
1. From VSCode.. Click the Control Source icon with the 2
2. In the Message textbox, type: Updated Readme.md
3. Click on the checkmark above the Message textbox and enter "Updated Readme.md"

![VSCode-source-commit](./images/fr0101-12_VSCode-source-commit.png "VSCode-source-commit")

4. Click the Synchronize icon o the left bottom of the VSCode window. You will be asked to login with your GitHub credentials.

![VSCode-source-sync](./images/fr0101-13_VSCode-source-sync.png "VSCode-source-sync")

5. Login to GitHub
    1. Select the myProject repository
    2. Click Readme.md, it should be updated.

![GitHub-updated-readme](./images/fr0101-14_GitHub-updated-readme.png "GitHub-updated-readme")

6. Modify Readme.md in Github by adding these lines:
    ```
    3. I updated it in GitHub.

    4. I pulled it to my local repo using VScode
    ``` 
    then Commit the change.

7. In VSCode, From the Source Control menu, click the three dots (...) More menu, and click Pull. 

![VSCode-pull](./images/fr0101-15_VSCode-pull.png "VSCode-pull")

8. The Github changes will now appear in the Readme.md file.

![VSCode-updated-readme](./images/fr0101-16_VSCode-updated-readme.png "VSCode-updated-readme")
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
    