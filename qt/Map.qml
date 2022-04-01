import QtQuick 2.12
import QtLocation 5.6
import QtPositioning 5.6


Item {
     Plugin {
          id: mapPlugin // Id of the map plugins
          name: "mapboxgl" // name of the plugins
     }
     Map {
          anchors.fill: parent // fill up the whole space of the map area
          plugin: mapPlugin // setting up the plugin
          color: gray // the color of the map space if it won't load
          center: QtPositioning.coordinate(35.8708526,128.5583677)    
          zoomlevel: 14 //starting zoom level      
     }
}