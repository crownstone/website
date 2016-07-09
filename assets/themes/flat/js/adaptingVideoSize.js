$(window).resize(moveVideo);
$(window).load(moveVideo);

// this has to be overwritten per HTML file using this method.
//BACKGROUND_CLASS = '';

function moveVideo() {
  var repeatMove = false;
  var windowWidth = $( window ).width();
  var videoContainer = document.getElementById("videoContainer");
  var bannerContainer = document.getElementById("videoHeader");

//  console.log("video: ", videoContainer);

  // center the video in the div.
  var width = videoContainer.offsetWidth;
  var height = videoContainer.offsetHeight;
  var headerWidth = bannerContainer.offsetWidth;
  var headerHeight = bannerContainer.offsetHeight + 4; // 4 is for border

  // adapt the divs to the window size the way bootstrap does it. Add an XL version.
  var newBannerContainerClassname = "";
  var newVideoContainerClassname = "hidden-xs";

  if (headerWidth < 768) {
    newBannerContainerClassname = 'container-fluid bannerContainer xs ' + BACKGROUND_CLASS;
  }
  else if (headerWidth < 992) {
    newBannerContainerClassname = 'container-fluid bannerContainer sm ' + BACKGROUND_CLASS;
    newVideoContainerClassname = 'hidden-xs videoContainer sm';
  }
  else if (headerWidth < 1200) {
    newBannerContainerClassname = 'container-fluid bannerContainer md ' + BACKGROUND_CLASS;
    newVideoContainerClassname = 'hidden-xs videoContainer md';
  }
  else if (headerWidth < 1400) {
    newBannerContainerClassname = 'container-fluid bannerContainer mdlg ' + BACKGROUND_CLASS;
    newVideoContainerClassname = 'hidden-xs videoContainer mdlg';
  }
  else if (headerWidth < 1920) {
    newBannerContainerClassname = 'container-fluid bannerContainer lg ' + BACKGROUND_CLASS;
    newVideoContainerClassname = 'hidden-xs videoContainer lg';
  }
  else {
    newBannerContainerClassname = 'container-fluid bannerContainer xl ' + BACKGROUND_CLASS;
    newVideoContainerClassname = 'hidden-xs videoContainer xl';
  }

  // console.log("START")
  // console.log(bannerContainer.className, newBannerContainerClassname, videoContainer.className, newVideoContainerClassname)

  if (bannerContainer.className !== newBannerContainerClassname || videoContainer.className !== newVideoContainerClassname) {
    bannerContainer.className = newBannerContainerClassname;
    videoContainer.className = newVideoContainerClassname;
    repeatMove = true;
  }
  var newTopPosition = '0px';
  if (height > headerHeight)
    newTopPosition = -0.5 * (height - headerHeight) + 'px';

  var newLeftPosition = '0px';
  if (headerWidth < width)
    newLeftPosition = 0.5 * (headerWidth - width) + 'px';

  // console.log(width,  height, headerWidth, headerHeight)
  // console.log(videoContainer.style.top, newTopPosition, videoContainer.style.left, newLeftPosition)
  if (videoContainer.style.top !== newTopPosition || videoContainer.style.left !== newLeftPosition) {
    videoContainer.style.left = newLeftPosition;
    videoContainer.style.top = newTopPosition;
    repeatMove = true;
  }

  if (repeatMove) {
    console.log("here")
    setTimeout(moveVideo,10);
  }


}
