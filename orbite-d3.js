var data = [
    {"planete": "Mercure", "orbite": 88, "rayon": 2439, "distance": 57, "couleur": "#9b999a"},
    {"planete": "Venus", "orbite": 225, "rayon": 6051, "distance": 108, "couleur": "#90430f"},
    {"planete": "Terre", "orbite": 365, "rayon": 6371, "distance": 149, "couleur": "#0d48b4"},
    {"planete": "Mars", "orbite": 687, "rayon": 3389, "distance": 227, "couleur": "#cb7b61"},
    {"planete": "Jupiter", "orbite": 4380, "rayon": 69911, "distance": 778, "couleur": "#f4d1bd"},
    {"planete": "Saturne", "orbite": 10585, "rayon": 58232, "distance": 1434, "couleur": "#97967a"},
    {"planete": "Neptune", "orbite": 60225, "rayon": 24622, "distance": 4495, "couleur": "#5c9df7"},
    {"planete": "Uranus", "orbite": 30660, "rayon": 25362, "distance": 2871, "couleur": "#86a3b3"},
]
var taille = 90, i;
for (i = 0; i < 7; i++) {
taille += 90;
revolution = (data[i].orbite * 86400) / 5000000;
rayon = data[i].rayon / 1000;
var body = d3.select("body");
    body.style("background", "black")
    .data(data)
    .enter()
    .append("div")
    .attr("id", "n"+i)
    .style("width", taille)
    .style("height", taille);

body.append("circle")
    .style("z-index", "10")
    .style("width", "20px")
    .style("height", "20px")
    .style("background", data[i].couleur)
    .style("animation", data[i].planete+" "+revolution+"s linear infinite");
}

var noyau = body.append("circle").attr("id", "soleil");

d3.selectAll("div")
    .style("border", "0.1px dashed #fff3")
    .style("position", "absolute")
    .style("top", "0")
    .style("bottom", "0")
    .style("left", "0")
    .style("right", "0")
    .style("margin", "auto")
    .style("z-index", "0")
    .style("border-radius", "50%");

d3.selectAll("circle")
    .style("border-radius", "50%")
    .style("position", "absolute")
    .style("top", "0")
    .style("bottom", "0")
    .style("left", "0")
    .style("right", "0")
    .style("margin", "auto");

noyau.style("background", "orange")
    .style("width", "20px")
    .style("height", "20px");
