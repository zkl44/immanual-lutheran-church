<?php 

  $formAction = 'bulletins.html';

  $yearsStored = array( '07' => '2007',
                        '08' => '2008',
                        '09' => '2009',
                        '10' => '2010',
                        '11' => '2011',
                        '12' => '2012',
                        '13' => '2013',
                        '14' => '2014',
                        '15' => '2015',
                        '16' => '2016',
                        '17' => '2017',
                        '18' => '2018',
                        '19' => '2019',
                        '20' => '2020'
                       );

  $monthsArray = array('01' => array('Jan', 'January'),
                       '02' => array('Feb', 'February'),
                       '03' => array('Mar', 'March'),
                       '04' => array('Apr', 'April'),
                       '05' => array('May', 'May'),
                       '06' => array('Jun', 'June'),
                       '07' => array('Jul', 'July'),
                       '08' => array('Aug', 'August'),
                       '09' => array('Sep', 'September'),
                       '10' => array('Oct', 'October'),
                       '11' => array('Nov', 'November'),
                       '12' => array('Dec', 'December')
                       );

  $formSubmitted = 0;

  
  /*****************************************************************************************************************************/
  /* setting default selected to current year/month until the form is submitted and selected states get reset to chosen values */
  /*****************************************************************************************************************************/
  $yearSelected = date('Y');
  $monthSelected = date('m');

  /***********************************************************************/
  /* another way to check form submit -- if(isset($_POST['formSubmit'])) */
  /***********************************************************************/
  if($_POST['formSubmit'] == "Submit") {
      
      $formSubmitted = 1;

      $yearSelected = $_POST['year'];
      $monthSelected = $_POST['month'];
      
      $bulletinsDirectory = "archived/bulletins/$yearSelected/$monthSelected/";
    
      $announcementsDirectory = "archived/announcements/$yearSelected/$monthSelected/";

      $bulletinsFileCount = 0;
      $announcementsFileCount = 0;
      
      $bulletinsFiles = glob($bulletinsDirectory . "*");
      $announcementsFiles = glob($announcementsDirectory . "*"); //$announcementsFiles = glob($announcementsDirectory  . "*.pdf");

      if ($bulletinsFiles){
       $bulletinsFileCount = count($bulletinsFiles);
      }

      if ($announcementsFiles){
       $announcementsFileCount = count($announcementsFiles);
      }
    
      $formParameters = array( 'Bulletins' => array( 'directory' => $bulletinsDirectory,
                                                     'fileCount' => $bulletinsFileCount,
                                                     'files' => $bulletinsFiles
                                              ),
                              
                                'Announcements' => array( 'directory' => $announcementsDirectory,
                                                          'fileCount' => $announcementsFileCount,
                                                          'files' => $announcementsFiles
                                                   )
                          );
     
      /******************************************************************************************************************************/
      /* Get a list of file paths using the glob function. found here: http://thisinterestsme.com/php-list-all-files-in-a-directory */
      /* Loop through the array that glob returned.                                                                                 */
      /* Simply print them out onto the screen.   *note that php allows variable usage without . when using "" but not ''           */
      /*                                                                                                                            */
      /* Similiar function being used below inside of returned list                                                                 */
      /* foreach($files as $filename){                                                                                              */
      /*   echo "<div><a href='$filename'>$filename</a></div>";                                                                     */
      /*   echo basename($filename, ".txt"); // USE this once we have PDF -  ".pdf"                                                 */
      /* }                                                                                                                          */
      /******************************************************************************************************************************/
  }
?>
