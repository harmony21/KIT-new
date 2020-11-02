var map;

DG.then(function () {
    map = DG.map('map', {
        center: [48.49, 135.10],
        zoom: 15,
        scrollWheelZoom: false
    });

    var myIcon = DG.icon({
        iconUrl: 'images/map-icon-color.svg',
        iconSize: [45, 45],
        iconAnchor: [0, 0],
        popupAnchor: [0, 76],
    });

    marker = DG.marker([48.49, 135.09], {icon: myIcon}).addTo(map);
    var popup = DG.popup({minWidth: 355})
        .setContent('<div class="popup"><div class="popup__pic"><img src="../temp/project-pic-6.jpg" alt="Солнечная поляна"></div><div class="popup__desc"><div class="popup__top"><div class="popup__icon"></div><img src="images/arrow-right-black.svg" alt="Перейти"><h4>Солнечная поляна</h4></div><hr color="#1253C0"><div class="popup__bottom"><img src="images/square-icon-color.svg" alt="Площадь"><span>123 м <sup>2</sup></span><img src="images/floor-icon.svg" alt="Этажность"><span>2 этажа</span><a href="gallery-more.html"><span>Подробнее</span><img src="images/arrow-right-blue.svg" alt="Подробнее"></a></div></div></div>')
    marker.bindPopup(popup).openPopup();

    marker = DG.marker([48.4940, 135.10], {icon: myIcon}).addTo(map);
    var popup = DG.popup({minWidth: 355})
        .setContent('<div class="popup"><div class="popup__pic"><img src="temp/project-pic-6.jpg" alt="Солнечная поляна"></div><div class="popup__desc"><div class="popup__top"><div class="popup__icon"></div><img src="images/arrow-right-black.svg" alt="Перейти"><h4>Солнечная поляна</h4></div><hr color="#1253C0"><div class="popup__bottom"><img src="images/square-icon-color.svg" alt="Площадь"><span>123 м <sup>2</sup></span><img src="images/floor-icon.svg" alt="Этажность"><span>2 этажа</span><a href="gallery-more.html"><span>Подробнее</span><img src="images/arrow-right-blue.svg" alt="Подробнее"></a></div></div></div>')
    marker.bindPopup(popup).openPopup();

    marker = DG.marker([48.4880, 135.08], {icon: myIcon}).addTo(map);
    var popup = DG.popup({minWidth: 355})
        .setContent('<div class="popup"><div class="popup__pic"><img src="temp/project-pic-6.jpg" alt="Солнечная поляна"></div><div class="popup__desc"><div class="popup__top"><div class="popup__icon"></div><img src="images/arrow-right-black.svg" alt="Перейти"><h4>Солнечная поляна</h4></div><hr color="#1253C0"><div class="popup__bottom"><img src="images/square-icon-color.svg" alt="Площадь"><span>123 м <sup>2</sup></span><img src="images/floor-icon.svg" alt="Этажность"><span>2 этажа</span><a href="gallery-more.html"><span>Подробнее</span><img src="images/arrow-right-blue.svg" alt="Подробнее"></a></div></div></div>')
    marker.bindPopup(popup).openPopup();

    marker = DG.marker([48.4920, 135.11], {icon: myIcon}).addTo(map);
    var popup = DG.popup({minWidth: 355})
        .setContent('<div class="popup"><div class="popup__pic"><img src="temp/project-pic-6.jpg" alt="Солнечная поляна"></div><div class="popup__desc"><div class="popup__top"><div class="popup__icon"></div><img src="images/arrow-right-black.svg" alt="Перейти"><h4>Солнечная поляна</h4></div><hr color="#1253C0"><div class="popup__bottom"><img src="images/square-icon-color.svg" alt="Площадь"><span>123 м <sup>2</sup></span><img src="images/floor-icon.svg" alt="Этажность"><span>2 этажа</span><a href="gallery-more.html"><span>Подробнее</span><img src="images/arrow-right-blue.svg" alt="Подробнее"></a></div></div></div>')
    marker.bindPopup(popup).openPopup();
});
