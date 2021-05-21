
# Instructions for creating an Ubuntu VM on Vultr

1. Create New Ubuntu Instance
- Signin or create an account on vultr.com

- Deploy new Server (Create Instance)

[![Vultr Create Instance](../images/fr0202-01_Vultr-Create-Instance.png#img2)](../images/fr0202-01_Vultr-Create-Instance.mp4 "Setup Vultr")

- Choose Server: Cloud Compute
- Server Location: ??????
- Server Type: Ubuntu 18.04 x64
- Server Size: 25GB SSD  $5/mo.
- Add SSH Key
    + Select an existing key, or
    + Use ssh-keygen to create your public key and paste it into the vultr form.

![Vultr-Add SSH key, Blank](../images/fr0202-04_Vultr-add-SSH-key-blank.png#img3 "Blank Key")

![Vultr-Add SSH keyTest](../images/fr0202-05_Vultr-add-SSH-key-pasted.png#img3 "Pasted Key")

- Server Host Name and Label: FormRx-Vultr for both

- Click Deploy Now

2. Open Vultr VM Console

[![Vultr Open Console](../images/fr0202-06_Vultr-console.png#img1)](../images/fr0202-06_Vultr-console.mp4 "Vultr Open Console")


- Click on Products
- then the Server Name i.e. FormRx-Vultr
- then the View Console icon

1. Click in the console window and then enter login: root and press enter.

2. From the Vultr server window click the copy password icon.

3. Go back to the console window click the Send clipboard button and press enter.

You will see the Welcome screen for Ubuntu and the command prompt:

    root@FormRx-Vultr:~#

### Next Step - Harden your server: 

[Harden Ubuntu](../setup/et0302_Basic-Hardening-Ubuntu.md)

