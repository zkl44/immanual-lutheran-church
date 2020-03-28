<?php 
 
  $formAction = "calendar.html";

  $yearsStored = array(
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

  if($_POST['formSubmit'] == "Submit") {
      
      $formSubmitted = 1;

      $yearSelected = $_POST['year'];
      $monthSelected = $_POST['month'];
      
      $calendarsDirectory = "archived/calendars/$yearSelected/$monthSelected/";

      $calendarsFileCount = 0;
      
      $calendarsFiles = glob($calendarsDirectory . "*");
    
      if ($calendarsFiles){
       $calendarsFileCount = count($calendarsFiles);
      }
    
      $formParameters = array( 'Calendars' => array( 'directory' => $calendarsDirectory,
                                                     'fileCount' => $calendarsFileCount,
                                                     'files' => $calendarsFiles
                                                )
                            );
  }
?>
