var imageSlider = {};

imageSlider.init = function ( options ) {
  var slider = $( options.slider );
  var caption = options.caption;
  var title = options.title;
  var desc = options.desc;
  var collapse = options.collapse;

  slider.addClass( 'ics-slider' );
  $( caption ).addClass( 'ics-caption' );
  $( title ).addClass( 'ics-title' );
  $( desc ).addClass( 'ics-desc' );
  $( collapse ).addClass( 'ics-collapse' );


  slider.click(function () {
    $( this ).children( caption ).toggleClass( 'ics-collapse' );
  })
};
