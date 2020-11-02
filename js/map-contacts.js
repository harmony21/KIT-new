var mapContacts;
DG.then(function () {
    mapContacts = DG.map('map', {
        center: [48.49, 135.08],
        zoom: 15,
        scrollWheelZoom: false
    });

    var myIcon1 = DG.icon({
        iconUrl: 'images/map-icon-color.svg',
        iconSize: [45, 45],
        iconAnchor: [0, 0],
        popupAnchor: [0, 76],
    });

    marker1 = DG.marker([48.49, 135.09], {icon: myIcon1}).addTo(mapContacts);
});