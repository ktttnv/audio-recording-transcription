import fs from "fs";
import { Configuration, OpenAIApi } from "openai";

const PATH_TO_AUDIO = "PATH_TO_AUDIO";
const OPEN_AI_API_KEY = "OPEN_AI_API_KEY";

const configuration = new Configuration({
  apiKey: OPEN_AI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function transcribeAudioToText(filename) {
  const transcript = await openai.createTranscription(
    fs.createReadStream(filename),
    "whisper-1"
  );
  return transcript;
}

transcribeAudioToText(PATH_TO_AUDIO)
  .then((response) => console.log(response.data.text))
  .catch((error) => console.error(error));
