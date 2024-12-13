var map = L.map('map', {
    center: [-12.489059186826271, -76.78636039847032],
    zoom: 13.5,
    minZoom: 12,
    maxZoom: 20,
    maxBounds: [[-12.489059186826271, -76.78636039847032], [-12.467696533880071, -76.76968696213346]]
});
var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var bgoogleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,subdomains:['mt0','mt1','mt2','mt3'] });

bgoogleSat.addTo(map);

var Pucusana = L.tileLayer.wms("http://localhost:8080/geoserver/web_pucusana/wms?", {
    layers: "web_pucusana:pucusana", //gisweb:Limite Pucusana
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 Pucusana.addTo(map);



 var Colegios = L.tileLayer.wms("http://localhost:8080/geoserver/web_pucusana/wms?", {
    layers: "web_pucusana:colegio_pucusana", //gisweb:Colegio Pucusana
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 Colegios.addTo(map);


 var Iglesia = L.tileLayer.wms("http://localhost:8080/geoserver/web_pucusana/wms?", {
    layers: "web_pucusana:iglesia_pucusana", //gisweb:Iglesia Pucusana
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 Iglesia.addTo(map);



 var Grifo = L.tileLayer.wms("http://localhost:8080/geoserver/web_pucusana/wms??", {
    layers: "web_pucusana:grifo", //gisweb:Grifo Pucusana
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 Grifo.addTo(map);



 var Paradero = L.tileLayer.wms("http://localhost:8080/geoserver/web_pucusana/wms?", {
    layers: "web_pucusana:paradero_pucusana", //gisweb:Paradero Pucusana
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 Paradero.addTo(map);


 var Curvas_nivel = L.tileLayer.wms("http://localhost:8080/geoserver/web_pucusana/wms?", {
    layers: "	web_pucusana:curvas_pucusana", //gisweb:Curvas nivel Pucusana
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 Curvas_nivel.addTo(map);

 var baseMaps = {
    "OSM": basemapOSM,
    "Google Satelite": bgoogleSat
};

var overlayMaps = {
    "Pucusana":Pucusana,
    "Colegios":Colegios,
    "Iglesia":Iglesia,
    "Grifo":Grifo,
    "Paradero":Paradero,
    "Curvas_nivel":Curvas_nivel
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);