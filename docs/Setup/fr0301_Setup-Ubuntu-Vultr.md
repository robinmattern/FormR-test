
# Instructions for creating an Ubuntu server on Vultr

1. Create New Ubuntu Instance
- Signin or create an account on vultr.com

- Deploy New Server 

![Vultr Deploy New Server](../images/fr0301-01_Vultr-Deploy-New-Server.png#img2 "Deploy New Server")

- Choose Server: Cloud Compute

![Vultr Cloud Compute](../images/fr0301-02_Vultr-Cloud-Compute.png#img2 "Cloud Compute")

- Server Location

![Vultr Server Location](../images/fr0301-03_Vultr-Server-Location.png#img2 "Server Location")

- Server Type: Ubuntu 18.04 x64

![Vultr Server Type](../images/fr0301-04_Vultr-Server-Type.png#img2 "Server Type")

- Server Size: 25GB SSD

![Vultr Server Size](../images/fr0301-05_Vultr-Server-Size.png#img2 "Server Size")

- Add SSH Key
    + Select an existing key, or
    + Use **ssh-keygen** to create your public key and paste it into the vultr form.

![Vultr-Add SSH keyTest](../images/fr0301-06_Vultr-add-SSH-key-pasted.png#img3 "Pasted Key")

- Server Host Name and Label: FormRx-Vultr for both

- Click Deploy Now

![Vultr Deploy Now](../images/fr0301-07_Vultr-Deploy-Now.png#img2 "Deploy Now")

- Installing

![Vultr Installing](../images/fr0301-08_Vultr-Installing.png#img2 "Installing")

2. Open Vultr VM Console to Log in

- Click on Products, then the Server Name i.e. FormRx-Vultr

![Vultr Open Console](../images/fr0301-09_Vultr-Open-Console.png#img2 "Open Console")

- Click the copy password icon

![Vultr Copy Password](../images/fr0301-10_Vultr-Copy-Password.png#img2 "Copy Password")

- Click the View Console icon

![Vultr View Console](../images/fr0301-11_Vultr-View-Console.png#img2 "View Console")

- Click in the console window and then enter login: root and press enter

- Click the Send clipboard button and press enter.

![Vultr Login](../images/fr0301-12_Vultr-Login.png#img2 "Login")


- You will see the Welcome screen for Ubuntu and the command prompt:

    root@FormRx-Vultr:~#

![Vultr Welcome](../images/fr0301-13_Vultr-Welcome.png#img2 "Welcome")

### Next Step - Harden your server: 

## [Harden Ubuntu](../setup/et0302_Basic-Hardening-Ubuntu.md)

