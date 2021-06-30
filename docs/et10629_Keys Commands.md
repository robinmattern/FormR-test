
## The Goal

 The goal is to be able to do the following commands to access Hosts using SSH Key Certificates.

- `ssh {HostAlias}`
- `letsencrypt {HostAlias} {Server}`
- `git pull {RemoteAlias} {RepoName} {BranchName}`
- `git push {RemoteAlias} {RepoName} {BranchName}`

## Make a Key Certificate file
```
  Syntax:
   Keys  Make SSH Key    {Account} [{Host}] [{KeyName}]          Make SSH Key Certificate file
                         {Account}                               UserID to Log into Host Server
                                    {Host}                       IP Address or Name of Host (e.g. Github)
                                                                   if not given, "All-accounts"
                                             {KeyName}           Key Owner and/or Repo Name
                                                                   can be "account", or
                                             {KeyOwner}-[{Repo}]
                                             {KeyOwner}          Owner of Account or Repository you can access
                                                         {Repo}  Name of Respository you can access
```
 0. Just a UserId and Password
    <br>

 1. Key for any Host
    - `1. {KeyOwner}@All-accounts            `
    - `1. Bruce.Troutman@All-accounts_key.pub`
    - `1. keys Make Key Bruce.Troutman `
    - `1. ssh-keygen -t rsa -f "~/.ssh/Bruce.Troutnam@All-accounts_v210630_key" -C "bruce@All-accounts_v210630"`
    <br>
    <br>

 2. Key for a Specific Host and UserID
    - `2. {KeyOwner}@{Host}_{HostUserID}-account           `
    - `2. Bruce.Troutman@Vultr-FormR1_nimda-account_key.pub`
    - `2. keys Make Key Bruce.Troutman Vultr-FormR1 nimda  `
    - `2. ssh-keygen -t rsa -f "~/.ssh/Bruce.Troutman@Vultr-FormR1_nimda-account_v210630_key" -C "Bruce.Troutman@Vultr-FormR1_nimda-account_v210630"`
    <br>

 -  Key for a Specific Host and UserID (without '-account' suffix)
    - `2a {KeyOwner}@{Host}_{HostUserID}                   `
    - `2a Bruce.Troutman@Vultr-FormR1_nimda_key.pub        `
    - `2a keys Make Key Bruce.Troutman Vultr-FormR1 nimda  `
    - `2a ssh-keygen -t rsa -f "~/.ssh/Bruce.Troutman@Vultr-FormR1_nimda_v210630_key" -C "Bruce.Troutman@Vultr-FormR1_nimda_v210630"`
    <br>

 3. Key for a Specific Host and UserID, that is different
    - `3. {KeyOwner}@{Host}_{HostUserID}_{KeyAccount}           `
    - `3. Bruce.Troutman@Vultr-FormR1_nimda_bruce_key.pub       `
    - `3. keys Make Key Bruce.Troutman Vultr-FormR1 nimda bruce `
    - `3. ssh-keygen -t rsa -f "~/.ssh/Bruce.Troutman@Vultr-FormR1_nimda_bruce_v210630_key" -C "Bruce.Troutman@Vultr-FormR1_nimda_bruce_v210630"`
    <br>
    <br>

 4. Key for a GitHub Account
    - `4. {KeyOwner}@GitHub_{GitUserID}-account`
    - `4. Bruce.Troutman@GitHub_brucetroutman-email-account_key.pub`
    - `4. keys Make Key Bruce.Troutman GitHub brucetroutman-email`
    - `4. ssh-keygen -t rsa -f "~/.ssh/Bruce.Troutman@GitHub_brucetroutman-gmail-account_v210630_key" -C "Bruce.Troutman@GitHub_brucetroutman-gmail-account_v210630"`
    <br>

 -  Key for a GitHub Account (without '-account' suffix)

    - `4a {KeyOwner}@GitHub_{GitUserID}`
    - `4a Bruce.Troutman@GitHub_brucetroutman-gmail_key.pub`
    - `4a keys Make Key Bruce.Troutman GitHub brucetroutman-email`
    - `4a ssh-keygen -t rsa -f "~/.ssh/Bruce.Troutman@GitHub_brucetroutman-gmail_v210630_key" -C "Bruce.Troutman@GitHub_brucetroutman-gmail_v210630"`   
    <br>

 5. Key for a GitHub Repository with the same Account (not usable)  
    - `5. {KeyOwner}@GitHub_{GitUserID}-{RepoName}`
    - `5. Bruce.Troutman@GitHub_brucetroutman-email_FormR_key.pub`
    - `5. keys Make Key Bruce.Troutman GitHub brucetroutman-gmail FormR`
    - `5. ssh-keygen -t rsa -f "~/.ssh/Bruce.Troutman@GitHub_brucetroutman-gmail_FormR_v210630_key" -C "Bruce.Troutman@GitHub_brucetroutman-gmail_FormR_v210630"`   
    &nbsp;        

 6. Key for a GitHub Account that is different   
    - `6. {KeyOwner}@GitHub_{GitUserID}_{GitAccount}-account`
    - `6. Bruce.Troutman@GitHub_brucetroutman-email_suzeeparker-account_key.pub`
    - `6. keys Make Key Bruce.Troutman GitHub brucetroutman-email suzeeparker`
    - `6. ssh-keygen -t rsa -f "~/.ssh/Bruce.Troutman@GitHub_brucetroutman-email_suzeeparker-account_v210630_key" -C "Bruce.Troutman@GitHub_brucetroutman-email_suzeeparker-account_FormR_v210630"`
    <br>    
   
 -  Key for a GitHub Account that is different (without {GitUserID} if same as {KeyOwner})
    - `6a {KeyOwner}@GitHub_{GitAccount}-account`
    - `6a Bruce.Troutman@GitHub_suzeeparker-account_key.pub`
    - `6a keys Make Key Bruce.Troutman GitHub brucetroutman-email suzeeparker`
    - `6a ssh-keygen -t rsa -f "~/.ssh/Bruce.Troutman@GitHub_suzeeparker-account_v210630_key" -C "Bruce.Troutman@GitHub_suzeeparker-account_v210630_v210630"`
    <br>    

 7. Key for a GitHub Repository at a different Account
    - `7. {KeyOwner}@GitHub_{GitUserID}_{GitAccount}-{RepoName}`
    - `7. Bruce.Troutman@GitHub_brucetroutman-email_suzeeparker-FormR_key.pub`
    - `7. keys Make Key Bruce.Troutman GitHub brucetroutman-email suzeeparker FormR`
    - `7. ssh-keygen -t rsa -f "~/.ssh/Bruce.Troutman@GitHub_brucetroutman-email_suzeeparker-FormR_v210630_key" -C "Bruce.Troutman@GitHub_brucetroutman-email_suzeeparker-FormR_v210630"`

---------------------------------------------------------------------------

## Create an SSH Host Alias Name
```
  Syntax:
   Keys  Set SSH Host {KNo} {Host} {Account} [{KeyName}]         Set  Host Alias Name in SSH Config
                      {KNo}                                      Key Number listed with Keys Show
                                                                   if missing, assume Password Login
                            {Host}                               IP Address or Name of Host (e.g. Github)
                                                                   or both: {Name}:{IPAddress}
                                   {Account}                     UserId to Log into Host Server
                                              {KeyName}          Key Owner and/or Repo Name
                                                                   can be "account", or
                                              {KeyOwner}-[{Repo}]
                                              {KeyOwner}         Owner of Account or Repository
                                                          {Repo} Name of Respository you can access
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


