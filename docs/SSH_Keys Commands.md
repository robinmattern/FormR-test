Autocorrected to sour
None selected

Skip to content
Using Gmail with screen readers
Conversations
23.67 GB of 100 GB used
Terms · Privacy · Program Policies
Last account activity: 5 minutes ago
Details

## The Goal

 The goal is to be able to do the following commands to access Hosts using SSH Key Certificates.

- `ssh {HostAlias}`
- `letsencrypt {HostAlias} {Server}`
- `git pull {RemoteAlias} {RepoName} {BranchName}`
- `git push {RemoteAlias} {RepoName} {BranchName}`

## Make a Key Certificate file
```
   Keys  Make SSH Key {KeyOwner} {Host} [{HostUser}] [{Resource}]

                      {KeyOwner}                                 Owner of the Private and Public Key files
                                 {Host}                          IP Address or Name of Host (e.g. GitHub)
                                                                   if not given, "All-Hosts"
                                          {HostUser}             UserID within the Host Server or Service
                                                                   with access to Host Resources
                                                                   can be "account" for All Resources
                                                      {Resource} Name of Resource, e.g. GitHub Respository


```
 0. Just a UserId and Password
    <br>

----------------------------------------------------------------
 1.  Key for any Host

 - `1. {KeyOwner}@All-Hosts`
 - `1.  keys Make Key Robin.Mattern   `
 - `1.  Robin.Mattern@All_Hosts_v210705_key`
 - `1.  ssh-keygen -t rsa -N '' -q -f "/root/.ssh/Robin.Mattern@All_Hosts_v210705_key" -C "Robin.Mattern@All_Hosts_v210705"`

----------------------------------------------------------------

----------------------------------------------------------------
 2.  Key for a Specific Host and UserID

 - `2. {KeyOwner}@{Host}_{HostUser}`
 - `2.  keys Make Key Robin.Mattern et218t nimda `
 - `2.  Robin.Mattern@et218t_nimda_v210705_key`
 - `2.  ssh-keygen -t rsa -N '' -q -f "/root/.ssh/Robin.Mattern@et218t_nimda_v210705_key" -C "Robin.Mattern@et218t_nimda_v210705"`

----------------------------------------------------------------

----------------------------------------------------------------
 2a. Key for a Specific Host and UserID (with '-account' suffix)

 - `2a {KeyOwner}@{Host}_{HostUser}-account`
 - `2a. keys Make Key Robin.Mattern et218t nimda account`
 - `2a. Robin.Mattern@et218t_nimda-account_v210705_key`
 - `2a. ssh-keygen -t rsa -N '' -q -f "/root/.ssh/Robin.Mattern@et218t_nimda-account_v210705_key" -C "Robin.Mattern@et218t_nimda-account_v210705"`

----------------------------------------------------------------

----------------------------------------------------------------
 3.  Key for a Specific Host and UserID, that is different

 - `3. {KeyOwner}@{Host}_{HostUser}_{HostUser2}`
 - `3.  keys Make Key Robin.Mattern et218t nimda bruce`
 - `3.  Robin.Mattern@et218t_nimda-bruce_v210705_key`
 - `3.  ssh-keygen -t rsa -N '' -q -f "/root/.ssh/Robin.Mattern@et218t_nimda-bruce_v210705_key" -C "Robin.Mattern@et218t_nimda-bruce_v210705"`

----------------------------------------------------------------

----------------------------------------------------------------
 4.  Key for a GitHub Account

 - `4. {KeyOwner}@GitHub_{GitUser}`
 - `4.  keys Make Key Robin.Mattern GitHub robinmattern `
 - `4.  Robin.Mattern@GitHub_robinmattern_v210705_key`
 - `4.  ssh-keygen -t rsa -N '' -q -f "/root/.ssh/Robin.Mattern@GitHub_robinmattern_v210705_key" -C "Robin.Mattern@GitHub_robinmattern_v210705"`

----------------------------------------------------------------

----------------------------------------------------------------
 4a. Key for a GitHub Account (with '-account' suffix)

 - `4a {KeyOwner}@GitHub_{GitUser}-account`
 - `4a. keys Make Key Robin.Mattern GitHub robinmattern account`
 - `4a. Robin.Mattern@GitHub_robinmattern-account_v210705_key`
 - `4a. ssh-keygen -t rsa -N '' -q -f "/root/.ssh/Robin.Mattern@GitHub_robinmattern-account_v210705_key" -C "Robin.Mattern@GitHub_robinmattern-account_v210705"`

----------------------------------------------------------------

----------------------------------------------------------------
 5.  Key for a GitHub Repository with the same Account (not usable)

 - `5. {KeyOwner}@GitHub_{GitUser}-{RepoName}`
 - `5.  keys Make Key Robin.Mattern GitHub robinmattern FormR`
 - `5.  Robin.Mattern@GitHub_robinmattern-FormR_v210705_key`
 - `5.  ssh-keygen -t rsa -N '' -q -f "/root/.ssh/Robin.Mattern@GitHub_robinmattern-FormR_v210705_key" -C "Robin.Mattern@GitHub_robinmattern-FormR_v210705"`

----------------------------------------------------------------

----------------------------------------------------------------
 6.  Key for a GitHub Account that is different

 - `6. {KeyOwner}@GitHub_{GitUser}_{GitAccount}-account`
 - `6.  keys Make Key Robin.Mattern GitHub robinmattern suzeeparker`
 - `6.  Robin.Mattern@GitHub_robinmattern-suzeeparker_v210705_key`
 - `6.  ssh-keygen -t rsa -N '' -q -f "/root/.ssh/Robin.Mattern@GitHub_robinmattern-suzeeparker_v210705_key" -C "Robin.Mattern@GitHub_robinmattern-suzeeparker_v210705"`

----------------------------------------------------------------

----------------------------------------------------------------
 6a. Key for a GitHub Account that is different (without {GitUser} if same as {KeyOwner})

 - `6a {KeyOwner}@GitHub_{GitUser}-account`
 - `6a. keys Make Key Robin.Mattern GitHub suzeeparker account`
 - `6a. Robin.Mattern@GitHub_suzeeparker-account_v210705_key`
 - `6a. ssh-keygen -t rsa -N '' -q -f "/root/.ssh/Robin.Mattern@GitHub_suzeeparker-account_v210705_key" -C "Robin.Mattern@GitHub_suzeeparker-account_v210705"`

----------------------------------------------------------------

----------------------------------------------------------------
 7.  Key for a GitHub Repository at a different Account

 - `7. {KeyOwner}@GitHub_{GitUser}_{GitAccount}-{RepoName}`
 - `7.  keys Make Key Robin.Mattern GitHub robinmattern suzeeparker`
 - `7.  Robin.Mattern@GitHub_robinmattern-suzeeparker_v210705_key`
 - `7.  ssh-keygen -t rsa -N '' -q -f "/root/.ssh/Robin.Mattern@GitHub_robinmattern-suzeeparker_v210705_key" -C "Robin.Mattern@GitHub_robinmattern-suzeeparker_v210705"`

----------------------------------------------------------------

## Show Certificate Key Files
```
 No.  Key File Name / Comment                                  Date / Fingerprint
---- -------------------------------------------------------  -----------------------------------------------------
     Private keys for accessing remote servers from (sc167t)
---- -------------------------------------------------------  -----------------------------------------------------
  1. Robin.Mattern@All_Hosts_v210705_key.pub                     2021-07-05 11:12
     Robin.Mattern@All_Hosts_v210705                             f0:41:62:91:36:35:93:da:0a:4e:da:2e:75:c9:e4:f8

  2. Robin.Mattern@et218t_nimda_v210705_key.pub                  2021-07-05 11:12
     Robin.Mattern@et218t_nimda_v210705                          44:3c:90:79:32:ce:ab:1a:21:6d:a5:c8:50:cb:30:59

  3. Robin.Mattern@et218t_nimda-bruce_v210705_key.pub            2021-07-05 11:12
     Robin.Mattern@et218t_nimda-bruce_v210705                    fb:8c:e2:5c:bf:9c:82:11:2e:c2:28:a4:11:7e:e8:8a

  4. Robin.Mattern@GitHub_robinmattern_v210705_key.pub           2021-07-05 11:12
     Robin.Mattern@GitHub_robinmattern_v210705                   bf:52:60:6d:80:cc:13:91:62:72:18:36:78:71:7d:20

  5. Robin.Mattern@et218t_nimda-account_v210705_key.pub          2021-07-05 11:12
     Robin.Mattern@et218t_nimda-account_v210705                  8c:43:91:2b:91:22:95:23:06:f4:a0:f6:96:51:9b:d2

  6. Robin.Mattern@GitHub_robinmattern-FormR_v210705_key.pub     2021-07-05 11:12
     Robin.Mattern@GitHub_robinmattern-FormR_v210705             59:7e:1e:bc:40:14:c3:1a:86:94:dd:a1:48:b1:03:6a

  7. Robin.Mattern@GitHub_suzeeparker-account_v210705_key.pub    2021-07-05 11:12
     Robin.Mattern@GitHub_suzeeparker-account_v210705            1b:cc:85:27:73:2c:ca:60:9e:4c:c4:f4:ef:63:da:c0

  8. Robin.Mattern@GitHub_robinmattern-account_v210705_key.pub   2021-07-05 11:12
     Robin.Mattern@GitHub_robinmattern-account_v210705           4e:0a:f2:75:b5:18:86:57:34:83:0c:e4:21:56:f7:c1

  9. Robin.Mattern@GitHub_robinmattern-suzeeparker_v210705_key.pub 2021-07-05 11:12
     Robin.Mattern@GitHub_robinmattern-suzeeparker_v210705       aa:50:45:df:e9:78:da:80:2d:2d:81:22:9a:c3:a8:03


 No. Key Comment                                                 Date / Fingerprint
---- ----------------------------------------------------------  --------------------------------------------------
     Public keys for accessing this server (sc167t)
---- ----------------------------------------------------------  --------------------------------------------------
  *  There are no public keys in the file: ~/.ssh/authorized_keys
```

## Create an SSH Host Alias Name
```
   Keys  Set SSH Host {KNo} {Host} [{HostUser}] [{SubHost}]
                            {Host}                               IP Address or Name of Host (e.g. GitHub)
                                                                   if not given, "All-Hosts"
                                    {HostUser}                   UserID within the Host Server or Service
                                                                   with access to Host resources
                                                                   can be "account" for all resources
                                                 {SubHost}       Name of Resource, e.g. GitHub Respository```
```
 0. Specific Host with just a UserId and Password
    - `   keys Set SSH Host et218t                   nimda             # et218t_nimda`
    - `   keys Set SSH Host et218t:155.138.238.182   nimda             # et218t_nimda`
    - `   keys Set SSH Host 155.138.238.001          nimda             # 155.138.238.001_nimda`
    - `   keys Set SSH Host et001t                   nimda  # Invalid Hostname`
   <br>


 1. Specific Host with a Key for any Host
    - `   keys Set SSH Host 1 et218t                 nimda             # et218t_nimda`
    - `   SSH  et218t_nimda`
   <br>


 2. Specific Host with a Key for that Host and UserID
    - `   keys Set SSH Host 2 et218t:155.138.238.182 nimda`
    - `   keys Set SSH Host 2 155.138.238.001        nimda`
    - `   keys Set SSH Host 2 et001t                 nimda   # ** Invalid Hostname`
    - `   SSH  et218t_nimda`
    - `   SSH  155.138.238.001_nimda`
   <br>


 3. Specific Host with a Key for a Specific Host and UserID, that is different
    - `   keys Set SSH Host 3 155.138.238.182:et218t nimda_bruce`
    - `   SSH  et218t_nimda_bruce`
   <br>


 4. GitHub Host with a Key for a GitHub Account
    - `xx keys Set SSH Host 4 github`
    - `xx SSH -T github`
    - `   keys Set SSH Host 4 github       bruce`
    - `   SSH -T github_bruce`
    - `   Hi brucetroutman-gmail! You've successfully authenticated, but GitHub does not provide shell access.`
   <br>


 5. GitHub Host with a Key for a GitHub Repository with the same Account (not possible)
    - `   keys Set SSH Host 5 github       bruce-FormR`
    - `   SSH -T github_bruce-FormR`
   <br>


 6. GitHub Host with a Key for a GitHub Account that is different
    - `   keys Set SSH Host 6 github       bruce_suzee`
    - `   SSH -T github_bruce_suzee`
    - `   Hi brucetroutman-gmail! You've successfully authenticated, but GitHub does not provide shell access.`
   <br>


 7. GitHub Host Key for a GitHub Repository with different Account
    - `   keys Set SSH Host 7 github       bruce_suzee-FormR`
    - `   SSH -T github_bruce_suzee-FormR`
    - `   Hi suzeeparker/FormR! You've successfully authenticated, but GitHub does not provide shell access.`

---------------------------------------------------------------------------

## Clone a Repository Branch into a new Branch

- Create a New Directory for the Branch
```
    cd FormR/Main-test
    mkdir ../Main-test2
    cd    ../Main-test2
```
 0. With just a GitHub UserId and Password
```
    git clone https://github.com/suzeeparker/FormR.git  -b Main-test   Main-test2

    Cloning into 'Main-test2'...
    Username for 'https://github.com': suzeeparker
    Password for 'https://suzeeparker@github.com': xxxxxxx
    remote: Enumerating objects: 208, done.
    remote: Counting objects: 100% (208/208), done.
    remote: Compressing objects: 100% (160/160), done.
    remote: Total 208 (delta 35), reused 203 (delta 35), pack-reused 0
    Receiving objects: 100% (208/208), 17.60 MiB | 2.21 MiB/s, done.
    Resolving deltas: 100% (35/35), done.
    Checking connectivity... done.
```
 4. With a SSH Host Alias Name and/or a Certificate Key File (no workie)
```
    git clone git@github.com:suzeeparker/formr.git  -b Main-test   Main-test2 --config core.sshCommand="ssh -i /root/.ssh/suzeeparker@all-accounts_v210511_key"

    git config --global --add core.sshCommand "ssh  -i /root/.ssh/suzeeparker@all-accounts_v210511_key"
    git clone git@github.com:suzeeparker/nusvs.git  -b Main-test   Main-test2

    Cloning into 'Main-test2'...
    Permission denied (publickey).
    fatal: Could not read from remote repository.
```
---------------------------------------------------------------------------

## Create a New Branch and Make it active
```
   git checkout -b {NewBranchName} [{OldBranchName}]
```
---------------------------------------------------------------------------

## Switch to Existing Branch
```
   git checkout {BranchName}
```
---------------------------------------------------------------------------

## Create an Git Remote Alias Name
```
   gitr Set Remote {RemoteAlias} {RepoName} {BranchName}

   gitr Set Remote              FormR
   gitr Set Remote bruce        FormR
   gitr Set Remote suzee        FormR
   gitr Set Remote github_suzee-FormR
   gitr Set Remote github-bruce FormR Main-test

   git remote add {RemoteAlias} {RemoteAlias}:{GitAccount}/{RepoName}.git
   git remote add  github-bruce github-bruce:brucetroutman-gmail/FormR.git

   git remote add -t {Branch} {RemoteAlias} {RemoteAlias}:{GitAccount}/{RepoName}.git
   git remote add -t Main-test github-bruce github-bruce:brucetroutman-gmail/FormR.git
```
---------------------------------------------------------------------------

## Use a Git Remote Alias Name to Push and Pull a Branch, and set default "upstream" Remote Branch
```
    git pull -u {RemoteAlias} [{BranchName}]
    git push -u {RemoteAlias} [{BranchName}]
```
---------------------------------------------------------------------------

## Push to or Pull from the default "upstream" Remote Branch
```
    git pull
    git push
```
---------------------------------------------------------------------------

## Use a Git Remote Alias Name to View Commits
```
    gitr Show Commits {RemoteAlias} {RepoName}

    git ls-remote github-suzee-account:suzeeparker/nusvs.git
    git ls-remote github-suzee:suzeeparker/nusvs.git
    git ls-remote suzee-nusvs

    Commit       Comment
    -------  -------------------------------
    cf2b6d9  HEAD
    4f3dcaf  refs/heads/Main-test
    cf2b6d9  refs/heads/main
```

## View Latest Commits for All Branches
```
    git branch -va

    * Main-test                4f3dcaf Add something
      remotes/origin/HEAD      -> origin/main
      remotes/origin/Main-test 4f3dcaf Add something
      remotes/origin/main      cf2b6d9 Initial commit
```


et10705_Keys-Commands.md
Displaying et10705_Keys-Commands.md.
