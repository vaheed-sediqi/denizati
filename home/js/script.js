$(document).ready(function(){
  //riples
    $("#header, .info").ripples({
      dropRadius:15,
      perturbance:0,
    });
    
    
    //magnific popup
 $('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery:{
     enabled:true
 }
  // other options
});
    
});