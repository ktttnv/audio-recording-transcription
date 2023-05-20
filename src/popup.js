import { initRecording, stopRecording } from './scripts/recording.js';
document.querySelector(".commonButton").addEventListener("click", startRecording);
let counter = 0;
const storeFolder = "D:\\Projects\\Personal\\TRASH";
function startRecording() {
    if (counter % 2 == 0) {
        initRecording(storeFolder);
    } else {
        stopRecording();
    }
    counter++;
}
