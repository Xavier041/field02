async function fieldRendering(){
   const response = await fetch('http://agro.energomera.ru:3060/api/field?lastChangeDate=2010-08-03T16:47:01.307&skip=90&take=1');
   const data = await response.json();
   const coordinates = JSON.parse(data[0].Location);
   const latitude = coordinates.Center[0];
   const longitude = coordinates.Center[1];
   const map = L.map('map').setView([latitude, longitude], 13);
     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'OpenStreetMap',
                maxZoom: 18,
            }).addTo(map);
     const polygon = L.polygon(coordinates.Polygon).addTo(map);
     const marker = L.marker([latitude, longitude]).addTo(map);
    console.log("Latitude:", latitude);
console.log("Longitude:", longitude);
}

fieldRendering();

