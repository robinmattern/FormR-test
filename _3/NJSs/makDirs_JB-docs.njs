
  pFS = require( 'fs' )

  mGuides =
   [ [ "01-01" , "Get Started"           , "Pro Tips"                        ]
   , [ "01-02" , "Get Started"           , "Tighten"                         ]
   , [ "01-03" , "Get Started"           , "Peel Protective Film"            ]

   , [ "02-01" , "Prep the Y Axis"       , "Y Motor Bracket"                 ]
   , [ "02-02" , "Prep the Y Axis"       , "Y Assembly"                      ]

   , [ "03-01" , "Hotend & Extruder"     , "Assemble the HotEnd"             ]
   , [ "03-02" , "Hotend & Extruder"     , "Assemble the Extruder"           ]

   , [ "04-01" , "Prep the X Axis"       , "X Assembly Frame"                ]
   , [ "04-02" , "Prep the X Axis"       , "X Assembly Motion Platform"      ]
   , [ "04-03" , "Prep the X Axis"       , "X Assembly Fans and Z Probe"     ]
   , [ "04-04" , "Prep the X Axis"       , "X Assembly Wire Harness"         ]
   , [ "04-05" , "Prep the X Axis"       , "Insert and Connect Extruder"     ]

   , [ "05-01" , "The Frame Part I"      , "Build the Basic Frame"           ]
   , [ "05-02" , "The Frame Part I"      , "Felt Pads"                       ]

   , [ "06-01" , "The Power & Brains"    , "Electronics"                     ]

   , [ "07.01" , "Checkpoint"            , "Its alive"                       ]

   , [ "08-01" , "Y Axis"                , "Install the Y Assembly"          ]

   , [ "09-01" , "X Axis"                , "Install the X Assembly"          ]

   , [ "10-01" , "Z Axis"                , "Install the Z Motor"             ]
   , [ "10-02" , "Z Axis"                , "Connect the Z and X Axes"        ]

   , [ "11-01" , "The Frame Part II"     , "Prettify the Wiring"             ]
   , [ "11-02" , "The Frame Part II"     , "Brace"                           ]
   , [ "11-03" , "The Frame Part II"     , "Front"                           ]
   , [ "11-04" , "The Frame Part II"     , "Top"                             ]
   , [ "11-05" , "The Frame Part II"     , "Back"                            ]
   , [ "11-06" , "The Frame Part II"     , "Tighten Your Belts"              ]
   , [ "11-07" , "The Frame Part II"     , "Lubricate the Z Rod"             ]

   , [ "12-01" , "Preflight Check"       , "Prerequisites"                   ]
   , [ "12-02" , "Preflight Check"       , "All Systems Go"                  ]


   , [ "13-01" , "Finishing Touches"     , "Lots of Zip Ties"                ]
   , [ "13-02" , "Finishing Touches"     , "Back Cover"                      ]
   , [ "13-03" , "Finishing Touches"     , "Front Door"                      ]

   , [ "14-01" , "The HotEnd"            , "Hot-Tighten the HotEnd"          ]

   , [ "15.01" , "Checkpoint"            , "Your First Print"                ]

   , [ "16-01" , "What Next! READ THIS"  , "Print the Part Scraper"          ]
   , [ "16-02" , "What Next! READ THIS"  , "Cura 3 Slicer Quick Start Guide" ]
   , [ "16-03" , "What Next! READ THIS"  , "Adjust the Feed Tensioner"       ]
   , [ "16.04" , "What Next! READ THIS"  , "Disable Beep before Print"       ]
     ]

bDoit    = true
bNoisy   = 1

aRootDir = `JB2.1bb/EC`
aRootName= 'JellyBox 2.2 Easy Cold Build Guide'

aSideBar1 = `
 <h>[![](/assets/home.svg)Home](/)          </h>
<hb>JellyBox 2.2
    East Cold Bed Build Guide               </hb>

`
aSideBar2 = `
<h>[![](../assets/home.svg)Back](/${ aRootDir }/_home.md)</h>
`
aDocsDir = __dirname + '/docs/'
aLastID  = ''
nWdt     = 32

// ----------------------------------------------------------------------------------------------------------------

         makDir( aRootDir )
         savFile( `${aRootDir}/_home.md`, `<h2>${aRootName}</h2>` )

         mGuides.map( fmtGuide )

     if (bNoisy) { console.log( "----------------------------------------------------------------------" ) }
         savFile( `${aRootDir}/_sidebar.md`, aSideBar1 )

// ----------------------------------------------------------------------------------------------------------------

function fmtGuide( mGuide ) {

         aID        =  mGuide[0]
         aTopicName = (aID.substr(0,2).replace( /^0/, '0' ) + " - " + mGuide[1]).padEnd( nWdt )
         aTopicDir  =  aRootDir + "/" + aID.substr(0,2) + "." + mGuide[1].replace( / /g, "-" )
         aGuideName =  mGuide[2].padEnd( nWdt )
         aGuideFile =  aID.replace( /-/, "." ) + "." + mGuide[2].replace( / /g, "-" )
         aSideBar   = `${aTopicDir}/_sidebar_.md`
         aGuide     = `-  [${ aID } - ${ aGuideName }](${ aTopicDir }/${ aGuideFile }.md)`

//       console.log( "" ); console.log( aLastID, aID )
     if (aID.substr(0,2) != aLastID) {

     if (bNoisy) { console.log( "----------------------------------------------------------------------" ) }
         aLastID    =  aID.substr(0,2)
         aSideBar1 += `-<h>${ aTopicName.padEnd( nWdt + 8 ) }</h>` + "\n"
         makTopicDir(  aTopicDir )
         }
         aSideBar1 +=  aGuide + "\n"
         appFile(                `${ aSideBar }`, "\n" + aGuide )
         savFile(   `${aTopicDir}/${ aGuideFile }.md`, `<hb>${aID} - ${aGuideName}</hb>` )
         }
// ----------------------------------------------------------------------------------------------------------------

function makTopicDir(  aTopicDir )  {
    if (!chkDir(       aTopicDir )) { makDir( aTopicDir ) }
    if (!chkFile(      aSideBar  )) {
         aSideName  =  aTopicName.replace( /^0/, "" ).replace( /\.0/, "." )
//       aSideItem  = `<hb>${ aTopicName.replace( / +$/, "" ).padEnd( nWdt + 8 )  }</hb>`
         aSideItem  = `# ${ aTopicName1.replace( / +$/, "" ) }`
//       savFile( aTopicDir + "/" + aSideBar, aSideBar2 + "\n" + aSideItem )
         savFile(                   aSideBar, aSideBar2 + "\n" + aSideItem )
     }   }
// -----------------------------------------------------------------------------------------

function chkFile( aFile ) {
  return pFS.existsSync( aDocsDir + aFile )
         }
// -----------------------------------------------------------------------------------------

function chkDir( aDir ) {
  return pFS.existsSync( aDocsDir + aDir )
         }
// -----------------------------------------------------------------------------------------

function makDir( aDir ) {
    if (!pFS.existsSync( aDocsDir + aDir )){
     if (bDoit ) { pFS.mkdirSync( aDocsDir + aDir ) }
     if (bNoisy) { console.log( `making dir:        ${aDir }` ) }
         }  }
// -----------------------------------------------------------------------------------------

function savFile( aFile, aText ) {
     if (bNoisy) { console.log( `checking file,     ${ aFile }:` ) }
    if (!pFS.existsSync( aDocsDir + aFile )){
     if (bDoit ) { pFS.writeFileSync(  aDocsDir + aFile, aText, 'ASCII' ) }
     if (bNoisy) { console.log( `saving to file,    ${ aFile }:`.padEnd(32) + "'" + aText + "'" ) }
         } }
// -----------------------------------------------------------------------------------------

function appFile( aFile, aText ) {
     if (pFS.existsSync( aDocsDir + aFile )){
     if (bDoit ) { pFS.appendFileSync( aDocsDir + aFile, aText, 'ASCII' ) }
     if (bNoisy) { console.log( `appending to file, ${ aFile }:`.padEnd(32) + "'" + aText + "'" ) }
         }  }
// -----------------------------------------------------------------------------------------



