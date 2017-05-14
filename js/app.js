$(function () {
    var divs = $('div.element');
    var scene = $('div.scene');
    //ustawiamy wyjsciowe polozenie elementow
    //bazujac na danych z datasetu
    divs.each(function () {
        var zIndex = $(this).data('z');
        var left = $(this).data('x');
        var top = $(this).data('y');
        $(this).css({
            'z-index': zIndex,
            left: left,
            top: top
        });
    });
    var oldMousePositionX = 0;
    var oldMousePositionY = 0;
    //po wejsciu myszka na scene
    scene.on('mouseenter', function (e) {
        //uwstawiamy wspolrzedne wejscia na scene
        oldMousePositionX = e.pageX;
        oldMousePositionY = e.pageY;
    });

    var currentMousePositionX = 0;
    var currentMousePositionY = 0;
    scene.on('mousemove', function (e) {
        currentMousePositionX = e.pageX;
        currentMousePositionY = e.pageY;
        //obliczamy o ile myszka sie poruszyla
        var mouseMoveX = currentMousePositionX - oldMousePositionX;
        var mouseMoveY = currentMousePositionY - oldMousePositionY;
        //aktualizujemy stara pozycje
        oldMousePositionX = e.pageX;
        oldMousePositionY = e.pageY;
        //poruszamy elementami w zaleznosci od speed
        divs.each(function () {
            $(this).css({
                left: '+=' + (mouseMoveX * $(this).data('speed')),
                top: '+=' + (mouseMoveY * $(this).data('speed')),
            });
        });
    });
});