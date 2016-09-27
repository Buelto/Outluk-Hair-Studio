function init_map() {
    var myOptions = {
        zoom: 14,
        center: new google.maps.LatLng(42.3527931, -71.1604112),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
    marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(42.3527931, -71.1604112)
    });
    infowindow = new google.maps.InfoWindow({
        content: '<strong>Outluks Hair Studios</strong><br> 245 Faneuil St, Boston, MA<br>'
    });
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
}
google.maps.event.addDomListener(window, 'load', init_map);