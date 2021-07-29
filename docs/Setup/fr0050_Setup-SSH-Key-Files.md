<!-- ------------------------------------------------------------------------- -->

<div class="page-back disabled">

BACK
</div><div class="page-next">

[Setup Developer Workspace - NEXT](/Setup/fr0101_Setup-Developer-Workstation.md)
</div><div style="margin-top:35px">&nbsp;</div> 

<!-- ------------------------------------------------------------------------- -->

## Uses of SSH Keys

### 1. A Remote Linux Server

1. Make a Private and Public Key pair of files

   keys  Make  Key  Robin.Mattern  Vultr-FormR1  nimda  ram doit

       ssh-keygen -t rsa -P '' -q -f "/c/Users/robin/.ssh/Robin.Mattern@Vultr-FormR1_nimda_ram_a210719_key" -C "Robin.Mattern@Vultr-FormR1_nimda_ram_a210719"

2. Show Key Files

   keys Show

       ls -l ~/.ssh/*_key*    # */


3. Set up an SSH Host Alias Name using a KeyFile

   keys  Set  Host  0  Vultr-FormR1:155.138.238.182  nimda  ram  doit

       nano ~/.ssh/config

          Host Vultr-FormR1-nimda-ram
            HostName       155.138.238.182
            IdentityFile   /C/Users/robin/.ssh/Robin.Mattern@Vultr-FormR1_nimda_ram_a210719_key
            IdentitiesOnly yes
            User           nimda
            Port           22
          # UpdatedOn      Mon Jul 19 2021 09:18:54 (Eastern Daylight Time)


4. Set up a SSH Host Alias using a Password

   keys  Set  Host  Vultr-FormR1:155.138.238.182  nimda  doit

       nano ~/.ssh/config

          Host Vultr-FormR1-nimda Vultr-FormR1-nimda-account
            HostName       155.138.238.182
            User           nimda
            Port           22
         #  Password       Vul!nim!123
         #  UpdatedOn      Mon Jul 19 2021 09:19:51 (Eastern Daylight Time)

5. Copy the Public Key

   keys  Copy  0

       cat "C:/Users/robin/.ssh/Robin.Mattern@Vultr-FormR1_nimda_ram_a210719_key.pub" | clip    # (8)

6. Paste the Public Key

       ssh Vultr-FormR1-nimda
       nano ~/.ssh/authorized_keys
       ctrl-v
       ctrl-x y <cr>
       exit

7. Test logging into Server with the SSH Key

   keys  Test  SSH  Vultr-FormR1-nimda-ram

       ssh Vultr-FormR1-nimda-ram


8. Add Key to BitVise

   - Open BitVise
   - Create a New Profile: Vultr-FormR1 (155.138.238.182) via Nimda-ram.tlp
   - Click on Client Key Manager
   - Import Private Key File: C:\Users\robin\.ssh\Robin.Mattern@Vultr-FormR1_nimda_ram_a210719_key
   - Close the Client Key Manager window
   - Enter Host IP Address: 155.138.238.182
   - Enter Username: nimda
   - Select Initial Method: Publickey
   - Select Client key: Profile 1
   - Click on Options Tab
   - Check Open Terminal and Open SFTP
   - Save Profile
   - Click on Login

<!-- ---------------------------------------------------------------------------- -->

### 2. Your GitHub Account

1. Make a Private and Public Key pair of files

   keys  Make  Key  Robin.Mattern  GitHub  Vultr-FormR1 doit
   keys  Make  Key  Bruce.Troutman GitHub  Vultr-FormR1 doit
   keys  Make  Key  Robin.Mattern  GitHub  rm218d doit

       ssh-keygen -t rsa -f "/c/Users/robin/.ssh/Robin.Mattern@GitHub_a210715_key" -C "Robin.Mattern@GitHub_a210715"


2. Show Key Files

   keys Show

       ls -l ~/.ssh/*_key*    # */


3. Set up an SSH Host Alias Name

   keys  Set  Host  5  doit
   keys  Set  Host  0  doit

       nano ~/.ssh/config

           Host github-robin
              HostName       github.com
              IdentityFile   C:/Users/robin/.ssh/Robin.Mattern@GitHub_a210715_key
              IdentitiesOnly yes
              User           git
              Port           22
           #    UpdatedOn      Thu Jul 15 2021 10:24:38 (Eastern Daylight Time)


4. Copy the Public Key

   keys  Copy  5

       cat "C:/Users/robin/.ssh/Robin.Mattern@GitHub_a210715_key.pub"


5. Paste the Public Key

   - Log into GitHub with a browser
   - Goto you Account Settings, SSH and GPG keys
   - Paste the Public Key into the github.com account, robin.mattern


6. Test logging into GitHub with the SSH Key

   keys  Test  SSH  github-robin

       ssh github-robin


7. Clone a GitHub Repository

   gitr  clone  github-robin formr1
   gitr  clone  github  5  formr1 {branch}

       git clone github-robin:robinmattern/formr1.git
       cd formr1


8. Open Visual Studio code

       code .

   - Save the workspace: formr1.code.workspace
   - Pull the current set of changes

<!-- ---------------------------------------------------------------------------- -->

### 3. A Partner's GitHub Account

1. Make a Private and Public Key pair of files

   keys  Make  Key  Robin.Mattern  GitHub  suzeeparker  doit

       ssh-keygen -t rsa -f "/c/Users/robin/.ssh/Robin.Mattern@GitHub_a210715_key" -C "Robin.Mattern@GitHub_a210715"


2. Show Key Files

   keys Show

       ls -l ~/.ssh/*_key*    # */


3. Set up an SSH Host Alias Name

   keys  Set  Host  5  doit

       nano ~/.ssh/config

           Host github-robin
              HostName       github.com
              IdentityFile   C:/Users/robin/.ssh/Robin.Mattern@GitHub_a210715_key
              IdentitiesOnly yes
              User           git
              Port           22
           #    UpdatedOn      Thu Jul 15 2021 10:24:38 (Eastern Daylight Time)


4. Copy the Public Key

   keys  Copy  5

       cat "C:/Users/robin/.ssh/Robin.Mattern@GitHub_a210715_key.pub" # (5)


5. Paste the Public Key

   - Log into GitHub with a browser
   - Goto you Account Settings, SSH and GPG keys
   - Paste the Public Key into the github.com account, robin.mattern


6. Test logging into GitHub with the SSH Key

   keys  Test  SSH  github-robin

       ssh github-robin


7. Clone a GitHub Repository

   gitr  clone  github-robin formr1
   gitr  clone  github  5  formr1 {branch}

       git clone github-robin:robinmattern/formr1.git
       cd formr1


8. Open Visual Studio code

       code .

   - Save the workspace: formr1.code.workspace
   - Pull the current set of changes


<!-- ---------------------------------------------------------------------------- -->

### 4. A Partner's Github Repository

1. Log into Server with the SSH Key

   keys  SSH  Vultr-FormR1-nimda-ram

       ssh Vultr-FormR1-nimda-ram

2. Make a Private and Public Key pair of files

   keys  Make  Key  Robin.Mattern  GitHub  doit

       ssh-keygen -t rsa -f "/c/Users/robin/.ssh/Robin.Mattern@GitHub_a210715_key" -C "Robin.Mattern@GitHub_a210715"


3. Set up an SSH Host Alias Name

   keys  Set  Host  2  Vultr-FormR1  github  doit

       nano ~/.ssh/config

          Host Vultr-FormR1-github Vultr-FormR1-github-account
            HostName       github.com
            IdentityFile   /root/.ssh/Vultr-FormR1@GitHub_a210719_key
            IdentitiesOnly yes
            User           git
            Port           22
          # UpdatedOn      Mon Jul 19 2021 10:17:23 (EDT)


4. Copy the Public Key

   keys  Copy  2

        - cat "/root/.ssh/Vultr-FormR1@GitHub_a210719_key.pub"    # (2)


5. Paste the Public Key

   - Log into GitHub with a browser
   - Goto you Account Settings, SSH and GPG keys
   - Paste the Public Key into the github.com account, robin.mattern


6. Test logging into GitHub with the SSH Key

   keys  Test  SSH  github-robin

       ssh github-robin


7. Clone a GitHub Repository

   gitr  clone  Vultr-FormR1-github  {branch}

       git clone github-robin:robinmattern/formr1.git
       cd formr1


<div class="page-back disabled">

[BACK]()
</div><div class="page-next">

[Setup Developer Workspace - NEXT](/Setup/fr0101_Setup-Developer-Workstation.md)
</div>


