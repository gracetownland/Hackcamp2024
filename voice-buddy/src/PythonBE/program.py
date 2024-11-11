import torch.cuda
import whisper
import yt_dlp as youtube_dl
from pydub import AudioSegment
import json
import pyphen
import os
from audio_separator.separator import Separator

def download_audio(url: str) -> str:
    '''
    takes in a url as a string and return the file name of mp3 file
    '''
    options = {
        "format": "bestaudio/best",
        "outtmpl": "%(title)s.%(ext)s",
    }
    with youtube_dl.YoutubeDL(options) as ydl:
        info_dict = ydl.extract_info(url)
        title = info_dict.get('title', None)
        ydl.download([url])

    print(f"Downloaded Webm File named {title}")
    path = webm_to_mp3(title)
    return separateAudio(path)
def separateAudio(path) -> str:

    separator = Separator(
        output_format='mp3'
    )

    separator.load_model(model_filename='UVR-MDX-NET-Inst_HQ_3.onnx')
    #model_filename='UVR-MDX-NET-Inst_HQ_3.onnx'

    stems = separator.separate(path,'vocals','instrumental')

    return "vocals.mp3"


def webm_to_mp3(s: str) -> str:
    '''
    takes in name of file that's webm and turns it into mp3 and returns file name
    '''
    input_file = f"{s}.webm"
    output_file = f"{s}.mp3"

    # Load the .webm file (pydub uses ffmpeg behind the scenes)
    webm_audio = AudioSegment.from_file(input_file, format="webm")

    # Export the audio as .mp3
    webm_audio.export(output_file, format="mp3")

    print("Conversion Complete")
    os.remove(input_file)
    return output_file

def jsonify(result):
    '''
    Make a json object from transcribed object.
    :param result: transcribe the object from whisper
    :return: json object of it.
    '''
    l = []
    for segment in result["segments"]:
        for word in segment["words"]:
            l.append({"word": word["word"],
                         "start": word["start"],
                         "end": word["end"]})

    result_json = json.dumps(l)
    return result_json

def add_hyphen(result):
    dic = pyphen.Pyphen(lang='en_US')
    result = json.loads(result)

    for word_obj in result:
        word = word_obj["word"].strip()
        pyphened = dic.inserted(word)
        word_obj["word"] = pyphened

    result = json.dumps(result)
    return result

def run_program(youtube_url: str):
    mp3_name = download_audio(youtube_url)
    model = whisper.load_model("medium")
    device = "cuda" if torch.cuda.is_available() else "cpu"
    model = model.to(device)
    result = model.transcribe(mp3_name, word_timestamps=True)

    result_json = jsonify(result)  # make the result as a json object
    result_json = add_hyphen(result_json)
    return result_json


def main():
    video_url = "https://www.youtube.com/watch?v=nFZP8zQ5kzk"
    result = run_program(video_url)
    with open("result.json", "w") as f:
        f.write(result)


if __name__ == '__main__':
    main()