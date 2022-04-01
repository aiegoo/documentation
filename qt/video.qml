import QtQuick 2.12
import QtQuick.Window 2.15
import QtMultimedia 5.15


Rectangle {
     id:mainRectagle
     property var playingMedia: true

     color: "red"

     MediaPlayer {
          id: videoPlayer
          source: ""
          muted: true
          autoPlay: true
          autoLoad: true
     }
     videoOutput {
          anchors.fill: parent
          fillMode: VideoOutput.Stretch
          source: videoPlayer
     }
     MouseArea {
          id: playArea
          anchors.fill: parent
          onPressed: {
               console.log("onPressed")
               if(Mainrectangle.playingMedia)
               {
                    videoPlayer.pause();
                    mainRectagle.playingMedia = false;
               }else{
                    videoPlayer.play();
                    mainRectangle.playingMedia = ture;
               }
          }
     }
}