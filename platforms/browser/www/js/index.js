/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        document.getElementById("playAudio").addEventListener("click", playAudio);
        document.getElementById("pauseAudio").addEventListener("click", pauseAudio);
        document.getElementById("stopAudio").addEventListener("click", stopAudio);
        document.getElementById("volumeUp").addEventListener("click", volumeUp);
        document.getElementById("volumeDown").addEventListener("click", volumeDown);
        document.getElementById("posicaoAtual").addEventListener("click", posicaoAtual);
        document.getElementById("adiantarAudio").addEventListener("click", adiantarAudio);
        document.getElementById("atrasarAudio").addEventListener("click", atrasarAudio);
        document.getElementById("duracao").addEventListener("click", duracao);
        
        //document.getElementById("gravarAudio").addEventListener("click", gravarAudio);
        //document.getElementById("pararGravar").addEventListener("click", stopGravar);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
var myMedia = null;
function playAudio() {
   var src = "src/Demons.mp3";

   if(myMedia === null) {
      myMedia = new Media(src, onSuccess, onError);

      function onSuccess() {
         console.log("playAudio Success");
      }

      function onError(error) {
         console.log("playAudio Error: " + error.code);
      }
   }
   myMedia.play();

}

function pauseAudio() {
   if(myMedia) {
      myMedia.pause();
   }
}

function stopAudio() {
   if(myMedia) {
      myMedia.stop();
      my_media.release(); 
   }
   myMedia = null;
}

var volumeValue = 0.5;
function volumeUp() {
   if(myMedia && volumeValue < 1) {
      myMedia.setVolume(volumeValue += 0.1);
   }
}

function volumeDown() {
   if(myMedia && volumeValue > 0) {
      myMedia.setVolume(volumeValue -= 0.1);
   }
}

function gravarAudio() {
    var src = "src/Demons.mp3";
    var midiaRec = new Media(src,
        // success callback
        function() {
            console.log("Sucesso na gravação");
        },

        // error callback
        function(err) {
            console.log("Erro: "+ err.code);
        });

    // Record audio
    midiaRec.startRecord();
}


function posicaoAtual(){
  myMedia.getCurrentPosition(
            // success callback
            function (position) {
                if (position > -1) {
                    console.log((position) + " sec");
                }
            },
            // error callback
            function (e) {
                console.log("Error getting pos=" + e);
            }
        );
}
function adiantarAudio(){
  var posicao = null;
  myMedia.getCurrentPosition(
            // success callback
            function (position) {
                if (position > -1) {
                    posicao = position;
                }
            },
            // error callback
            function (e) {
                console.log("Error getting pos=" + e);
            }
        );
    posicao = (posicao * 1000) + 1000;
  myMedia.seekTo(posicao);


}
function atrasarAudio(){
  var posicao = null;
  myMedia.getCurrentPosition(
            // success callback
            function (position) {
                if (position > -1) {
                    posicao = position;
                }
            },
            // error callback
            function (e) {
                console.log("Error getting pos=" + e);
            }
        );
    posicao = (posicao * 1000) - 1000;
  myMedia.seekTo(posicao);


}
function duracao(){
  var duracao = myMedia.getDuration();
  var min = null;
  var seg = null;
  min = Math.floor(duracao/60);
  seg = duracao % 60;
  console.log(min+":"+seg);
  console.log(duracao);
}