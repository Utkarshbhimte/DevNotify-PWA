$(document).ready(function() {
    $('article').on('click', function(event) {
        $(this).find('.article-body').slideToggle(300);
    });

    $.getJSON('../test.JSON', function(json) {
      console.log('json fetched');
      console.log(json);
        $.each(json.articles, function(index, article) {
            $('#notifywrap').append("<article><span>" + article.date + "</span><h2>" + article.title + "</h2> <div class = 'article-body'><hr ><p >" + article.body + "</p> </div> </article>");
        });

    });

    $.getJSON('/test.JSON', function(json) {
      console.log('json fetched');
      console.log(json);

    });

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then(function() {
                console.log('Service Worker Registered');
            });
    }
});
