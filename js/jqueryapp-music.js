$( "#go" ).click(function() {


  var artistName = $( "#artistInput" ).val();
  artistName = artistName.replace(/ /g,'%20');

  $.ajax({
    url: 'https://api.spotify.com/v1/search?q=' + artistName + '&type=artist&limit=1',
    dataType: 'json',
    type: 'get',
    success: function(data) {
      $(data.artists).each(function(index, value) {
        artistID = value.items[0].id;
      });

      $.ajax({
        url: 'https://api.spotify.com/v1/artists/' + artistID + '/albums?album_type=album&limit=8',
        dataType: 'json',
        type: 'get',
        success: function(data) {
          $(data.items).each(function(index, value) {
            albumArtwork = value.images[0].url;
            $( "#artwork" ).append( "<img src=" + albumArtwork + " width='40%' >" );
          });
        }
      });

    },
  });

});
