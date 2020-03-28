$( document ).ready(function() {
  
  //add class collapsedNav on container that will get background color on expanc
  $('#headerNav').addClass('collapsedNav');
  
  // change cover video playback speed
  var videoElement = document.getElementById("coverVideo");
  
  setCoverContainerHeight();
  
  //this callback is waiting until enough video has buffered to start playing - needed to remove autoplay attribute from video tag
  videoElement.addEventListener('canplaythrough',function(){
    videoElement.playbackRate = 0.5;
    this.play();
  });
  
  $('.navbar-toggler').click(function() {
    $('#headerNav').toggleClass('collapsedNav expandedNav');
  });
  
});

$(window).on('resize', function() {
  setCoverContainerHeight();
});




function setCoverContainerHeight() {
  var CoverContainer = document.getElementById("CoverContainer");
  var CoverContainerHeight = $('#CoverContainer').height();
  var windowHeight = $(window).height();
  var windowOuterHeight = $(window).outerHeight();
  var windowInnerHeight = $(window).innerHeight();
  
  
  $('#CoverContainer').css("height", windowInnerHeight);
  
  //alert("window heights " + windowHeight + ' / ' + windowOuterHeight + ' / ' + windowInnerHeight + ' / ' + CoverContainerHeight);
}
