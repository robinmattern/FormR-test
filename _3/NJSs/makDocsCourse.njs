
  pFS = require( 'fs' )
  
// ----------------------------------------------------------------------------------------------------------------

          bDoit     =  typeof( pCourse.Doit    ) != 'undefined' ? pCourse.Doit    : false
          bNoisy    =  typeof( pCourse.Noisy   ) != 'undefined' ? pCourse.Noisy   : false
          bReplace  =  typeof( pCourse.Replace ) != 'undefined' ? pCourse.Replace : true
          nWdt      =          pCourse.NameWdt                  ? pCourse.NameWdt : 32

          aRootDir  =  pCourse.RootDir
          aSideBar1 =  pCourse.SideBar1.replace( /{Title}/,   pCourse.Title ).replace( /{SubTitle}/, pCourse.SubTitle.padEnd( nWdt ) )
          aSideBar2 =  pCourse.SideBar2.replace( /{RootDir}/, aRootDir )
          aRootName =  pCourse.RootName ? pCourse.RootName :  pCourse.Title + " " + pCourse.SubTitle 
          aSteps    =  pCourse.Steps    ? pCourse.Steps    :  '' 

          aDocsDir  =  __dirname.replace( /[\\/]_3.+/, '') + '/docs/'
          aLastID   = ''

      if (bNoisy) {    console.log( `Making Course Outline for: '${aRootName}'\n`
                                  + "-------------------------------------------------------------------------------------------------" ) }
          makDir(      aRootDir )
          savFile( `${ aRootDir }/_home.md`, `<h2>${ aRootName.padEnd( nWdt + 8 ) }</h2>` )

                       pCourse.Guides.map( fmtGuide )

      if (bNoisy) {    console.log( "----------------------------------------------------------------------" ) }
          aSideBar1  = aSideBar1.replace( /-<h/, " <h" )
          savFile( `${ pCourse.RootDir }/_sidebar.md`, aSideBar1 )

// ----------------------------------------------------------------------------------------------------------------

function  fmtGuide( mGuide ) {

          aID        =  mGuide[0]
          aTopicName = (aID.substr(0,2).replace( /^0/, '0' )  + " - " + mGuide[1]).padEnd( nWdt )
          aTopicDir  =  aRootDir + "/" + aID.substr(0,2) + "." + mGuide[1].replace( / /g, "-" )
          aGuideName =  mGuide[2].padEnd( nWdt )
          aGuideFile =  aID.replace( /-/, "." ) + "." + mGuide[2].replace( / /g, "-" )
          aSideBar   = `${aTopicDir}/_sidebar_.md`
          aGuide     = `-  [${ aID } - ${ aGuideName }](${ aTopicDir }/${ aGuideFile }.md)`

//        console.log( "" ); console.log( aLastID, aID )
      if (aID.substr(0,2) != aLastID) {                          // New Topic 

      if (bNoisy) {     console.log( "----------------------------------------------------------------------" ) }
          aLastID    =  aID.substr(0,2)
          aSideBar1 += `-<hb>${ aTopicName.padEnd( nWdt + 6 ) }</hb>` + "\n"
          makTopicDir(  aTopicDir )
          }
          aSideBar1 +=  aGuide + "</li>\n"                       // Each Guide                      // .(10507.01.1 RAM Inserted </li>???) 

          aHomePage  = `<h2>${ aID } - ${ aGuideName }</h2>  `
          aHomePage += (aSteps  ?  "\n" + aSteps  :  '' ) + "\n<span></span>"

          appFile(                `${ aSideBar }`, "\n" +  aGuide )
          savFile(   `${aTopicDir}/${ aGuideFile }.md`, aHomePage )
          }
// ----------------------------------------------------------------------------------------------------------------

function  makTopicDir(  aTopicDir )  {
      if (!chkDir(      aTopicDir )) { makDir( aTopicDir ) }
      if (bReplace || !chkFile( aSideBar )) {
          aSideName  =  aTopicName.replace( /^0/, "" ).replace( /\.0/, "." )
          aSideItem  = `<hb>${ aTopicName.replace( / +$/, "" ).padEnd( nWdt + 8 )  }</hb>`         // .(10507.02.1 RAM Which is it?)  
//        aSideItem  = `<h>${  aTopicName.replace( / +$/, "" ).padEnd( nWdt + 8 )  }</h>`          // .(10507.02.2)  
//        aSideItem  = `# ${   aTopicName.replace( / +$/, "" ) }`                                  // .(10507.02.3)  
//        savFile(      aTopicDir + "/" + aSideBar, aSideBar2 + "\n" + aSideItem )
          savFile(      aSideBar, aSideBar2 + "\n" + aSideItem )
        } }
// -----------------------------------------------------------------------------------------

function  chkFile( aFile ) {
  return  pFS.existsSync( aDocsDir + aFile )
          }
// -----------------------------------------------------------------------------------------

function  chkDir( aDir ) {
  return  pFS.existsSync( aDocsDir + aDir )
          }
// -----------------------------------------------------------------------------------------

function  makDir( aDir ) {
      if (!pFS.existsSync( aDocsDir + aDir )){
      if (bDoit ) { pFS.mkdirSync( aDocsDir + aDir ) }
      if (bNoisy) { console.log( `making dir:        ${aDir }` ) }
          }  }
// -----------------------------------------------------------------------------------------

function  savFile( aFile, aText ) {
      if (bNoisy) { console.log( `checking file,     ${ aFile }:` ) }
      if (bReplace || !pFS.existsSync( aDocsDir + aFile )) {
      if (bDoit ) { pFS.writeFileSync( aDocsDir + aFile, aText, 'ASCII' ) }
      if (bNoisy) { console.log( `saving to file,    ${ aFile }:`.padEnd(32) + "'" + aText + "'" ) }
          } }
// -----------------------------------------------------------------------------------------

function  appFile( aFile, aText ) {
      if (pFS.existsSync( aDocsDir + aFile )) {
      if (bDoit ) { pFS.appendFileSync( aDocsDir + aFile, aText, 'ASCII' ) }
      if (bNoisy) { console.log( `appending to file, ${ aFile }:`.padEnd(32) + "'" + aText + "'" ) }
          } }
// -----------------------------------------------------------------------------------------



