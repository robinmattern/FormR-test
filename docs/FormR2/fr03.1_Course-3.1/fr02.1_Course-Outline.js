pCourse = 
   { Doit     :  false
   , Noisy    :  false
   , NameWdt  : 32

   , Title    : 'Subject 2'
   , SubTitle : 'Course 2.1'
   , RootDir  : 'fr02.1'

   , SideBar1 : `
 <h>[![](/assets/home.svg)Home](/)          </h>
<hb>{Title}   
    &nbsp; {SubTitle}</hb>
`
   , SideBar2 : `
<h>[![](../assets/home.svg)Back](/{RootDir}/_home.md)</h>
   }
`    
   , Steps    : `
### Step 1
This is a description of Step 1
- Item 1.1
- item 1.2 
<sp></sp>

### Step 2   
This is a description of Step 2
<sp></sp>

### Step 3
This is a description of Step 3
 1. Item 3.1
 2. Item 3.2
 3. Item 3.3
 4. Item 3.4
 5. Item 3.5
 6. Item 3.6
 7. Item 3.7
 8. Item 3.8
 9. Item 3.9
10. Item 3.10
<sp></sp>

### Step 4  
This is a description of Step 4
- Item 4.1
- item 4.2 
- Item 4.3
- item 4.4 
<sp></sp>

### Step 5   
This is a description of Step 5
<sp></sp>

### Step 6   
<sp></sp>

### Step 7
<sp></sp>

### Step 8
<sp></sp>

### Step 9
<sp></sp>

### Step 10
<sp></sp>

### Step 11
<sp></sp>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>


` 

    }

  pCourse.Guides =

   [ [ "01-01" , "Topic 1", "Guide 1.1" ]
   , [ "01-02" , "Topic 1", "Guide 1.2" ]

   , [ "02-01" , "Topic 2", "Guide 2.1" ]

   , [ "03-01" , "Topic 3", "Guide 3.1" ]
   , [ "03-02" , "Topic 3", "Guide 3.2" ]
   , [ "03-03" , "Topic 3", "Guide 3.3" ]

     ]

    aNJSs = __dirname.replace( /[\\/]docs.+/, '/_3/NJSs/') 

//  pCourse.Noisy = true 
    pCourse.Doit = true 

    require( `${aNJSs}/makDocsCourse.njs` )


