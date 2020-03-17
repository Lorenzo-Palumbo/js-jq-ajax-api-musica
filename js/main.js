$(document).ready(function() {
    var source = $('#disco-template').html();
    var template = Handlebars.compile(source);

    $('.header .selettore-genere').change(function(){
        var genereSelezionato = $(this).val().toLowerCase();
        console.log(genereSelezionato);
        if (genereSelezionato == album.genre.toLowerCase()) {

        }
    });

    $.ajax({
        url : 'https://flynn.boolean.careers/exercises/api/array/music',
        method : 'GET',
        success : function(data){
            console.log(data);
            var albums = data.response;
            for (var i = 0; i < albums.length; i++) {
                var album = albums[i];
                var context = {
                    immagineAlbum: album.poster,
                    nomeAlbum: album.title,
                    autore: album.author,
                    anno: album.year,
                    genere: album.genre
                };
                var cardAlbum = template(context);
                $('.container').append(cardAlbum);

            }
        },
        error : function() {
            alert('errore')
        }
    });
});
