//Dieses Script importiert einen aktuellen Datensatz des Robert-Koch-Instituts zu COVID19 Erkrankungen. Mehr infos zur Quelle gibt es hier: https://npgeo-corona-npgeo-de.hub.arcgis.com/
//Quellenanganbe: "Bundesamt für Kartographie und Geodäsie / Robert Koch-Institut"

geolayers3.addToBrowser("https://opendata.arcgis.com/datasets/ef4b445a53c1406892257fe63129a8ea_0.geojson", function(err, data){
    if(err){
        alert(err.message)
    }else{
        var style = {
			"fill": {
				"addFill": true,
				"fillColor": { "r": 122, "g": 122, "b": 122, "a": 1 },
			},
			"dataTransformers": {
				"fillColor": {
					"active": true,
					"type": "color",
					"propName": "cases7_bl_per_100k",
					"curveFunctionName": "linear",
					"clip": true,
					"stops": [
						{
							"inV": "0",
							"outV": { "r": 0, "g": 81, "b": 39, "a": 1 }
						},
						{
							"inV": "50",
							"outV": { "r": 5, "g": 220, "b": 52, "a": 1 }
						},
						{
							"inV": "51",
							"outV": { "r": 255, "g": 244, "b": 0, "a": 1 }
						},
						{
							"inV": "100",
							"outV": { "r": 255, "g": 166, "b": 0, "a": 1 }
						},
						{
							"inV": "101",
							"outV": { "r": 225, "g": 16, "b": 44, "a": 1 }
						},
						{
							"inV": "200",
							"outV": { "r": 102, "g": 8, "b": 61, "a": 1 }
						}
					]
				}
			}
		}
        geolayers3.drawBrowserSelection(app.project.activeItem, {shapeLayerStyle:style})
    }
}, {
    returnData:true,
    pointGeometries:true,
    normalizeToFeatureArray: true,
    namingProp:"LAN_ew_GEN",
    name:"RKI Bundesländer " + (new Date).toDateString()
})