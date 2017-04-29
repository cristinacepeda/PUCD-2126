var a = 0,
    para = $('.set p').data( 'place' ),
    paraSpan = $( '.set p span' ),
    pArray = para.split( '' );

var animate = function () {

  var timeout = setTimeout(function () {
    clearTimeout( timeout );

    if ( a === pArray.length ) {

      return false;

    } else {

      $( '.set p' ).append( '<span>' + pArray[a] + '</span>' );

      a++;

      animate();

    }

  }, 30 );
};

animate();
