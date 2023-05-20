import { audioconcat } from "audioconcat";

const timeSliceMillis = 10 * 60 * 1000;
let recorder;
let chunkNum = 0;
function createFilename(chunkNum = "") {
    return `recording${chunkNum}.mp3`;
}

export function initRecording(pathToStore) {
    // Получаем доступ к звуковым данным из системы
    navigator.mediaDevices.getUserMedia({audio: {mediaSource: 'audio'} }).then(function(systemStream) {
        // Получаем доступ к микрофону
        navigator.mediaDevices.getUserMedia({ audio: true }).then(function(micStream) {
        // Создаем AudioContext
        var ctx = new AudioContext();
    
        // Создаем MediaStreamAudioSourceNode для звука из системы
        var systemSource = ctx.createMediaStreamSource(systemStream);
    
        // Создаем MediaStreamAudioSourceNode для аудио с микрофона
        var micSource = ctx.createMediaStreamSource(micStream);
    
        // Создаем MediaStreamAudioDestinationNode для записи звука
        var destination = ctx.createMediaStreamDestination();
    
        // Подключаем звук из системы к записывающему устройству
        systemSource.connect(destination);
    
        // Подключаем аудио с микрофона к записывающему устройству
        micSource.connect(destination);
    
        // Создаем MediaRecorder для записи звука
        recorder = new MediaRecorder(destination.stream);
    
        // Начинаем запись
        recorder.start(timeSliceMillis);

        // Обработчик события на завершение записи
        recorder.ondataavailable = function(e) {
            // Отправляем данные на сервер или сохраняем на диск
            const blob = new Blob([e.data], { type: 'audio/mp3' });
            const chunkName = `audioChunks${chunkNum}`;
            const dataToStorage = {};
            dataToStorage[chunkName] = blob;
            chrome.storage.local.set(dataToStorage, function() { alert("Chunk created!") });
            chunkNum++;
            // ...
        };
    
        // Обработчик события на остановку записи
        recorder.onstop = function() {
            let result = [];
            for (let i = 0; i < chunkNum; i++) {
                chrome.storage.local.get([`audioChunks${i}`], function(value) {
                    result.push(value[`audioChunks${i}`]);
                });
            }
            audioconcat(result).concat().then((blob) => {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'audio.mp3';
                a.click();
            })
            alert("RECORDING FINISHED");
            // ...
        };
        }).catch(function(err) {
            alert('Ошибка при получении доступа к микрофону: ' + err);
        });
    }).catch(function(err) {
        alert('Ошибка при получении доступа к звуковым данным из системы: ' + err);
    });
  
    alert("RECORDER EXECUTED");
}

export function stopRecording() {
    if (recorder) {
        recorder.stop();
    }
}