<?php
  if ($formSubmitted == 1) {
    
        $totalResults = 0;

        //echo "<div class='font-italic mt-2 mb-2'>Results for ".$monthsArray[$monthSelected][1]." $yearSelected</div>";

        foreach ($formParameters as $key => $value) {

            $totalResults += $formParameters[$key]['fileCount'];

            if ($formParameters[$key]['fileCount'] > 0) {
              echo "<div class='searchResults indentedGroup'>";
              echo "<h3 class='groupHeader h6 border-bottom mb-1 pb-1'>$key</h3>";
              echo "<ul class='searchResults-list'>";
              
                foreach($formParameters[$key]['files'] as $filename){
                    echo "<li class='searchResults-listItem groupItem pl-2'>";
                      echo "<a href='$filename' target='_blank'>".( $key != 'Calendars' ? $monthsArray[$monthSelected][1]." " : "").basename($filename, '.pdf').", $yearSelected <i class='fa fa-file-pdf ml-2' aria-hidden='true'></i></a>";
                     echo "</li>";
                }
                echo "</ul>"; 
             echo "</div>";
             }
        }
        if ($totalResults == 0) {
              echo "<div class='noResults'>Sorry, there are zero results for the selected time period.</div>";
        }
 
} else {
          echo "<div class='mt-2 mb-2'>Please select a year and month</div>";
      }
?>