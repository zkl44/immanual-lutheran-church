<?php
  if(isset($_POST["login"])) {

      $PASSWORD = '#lcadmin_!';
			$loginInput = $_POST['loginInput'];
    
      if( $loginInput == $PASSWORD ) {
        $isLoggedIn = true;
      } else {
        echo '<h2 class="mt-3 mb-3 text-danger">Incorrect Password</h2>';
      }
			
  } else if(isset($_POST["upload"])) {
    
      $isLoggedIn = true;
      $rootDirectory = $_POST['rootDirectory'];
      $year = $_POST['year'];
      $month = $_POST['month'];

      if($rootDirectory != 'null' && $year != 'null' && $month != 'null') {

          $target_dir = "archived/$rootDirectory/$year/$month/";
          //echo $target_dir;
          $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
          $uploadOk = 1;
          $fileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

          // Allow certain file formats
          if($fileType != "pdf" && $fileType != "txt" ) {
              echo '<div class="text-danger mt-4">Sorry, only PDF allowed.</div>';
              $uploadOk = 0;
          }

          // Check if file already exists
          if (file_exists($target_file)) {
              echo '<div class="text-danger mt-4">Sorry, file already exists.</div>';
              $uploadOk = 0;
          }

          // Check if $uploadOk is set to 0 by an error
          if ($uploadOk == 0) {
              echo "Sorry, your file was not uploaded.";
               echo '<div class="text-danger mt-4">Sorry, your file was not uploaded.</div>';

            // if everything is ok, try to upload file
          } else {
              if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
                  echo '<div class="text-success mt-4">The file '.basename( $_FILES["fileToUpload"]["name"]).' has been uploaded.</div>';
              } else {
                  echo '<div class="text-danger mt-4">Sorry, there was an error uploading your file.</div>';
                  //echo $rootDirectory."   ".$year."   ".$month;
              }
          }
      } else {
          echo '<div class="text-danger mt-4">Please fill in all the fields</div>';
      }
  } else {
      echo '<h2 class="mt-3 mb-3">Validation</h2>';
  }

?>