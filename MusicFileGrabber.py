from itertools import count
from pytube import Playlist, YouTube
import os

count = 0;
for link in Playlist('https://www.youtube.com/playlist?list=PLqYpuOxCs2qUNmulfMEq3SajmiSI_xeQ-'):

    video = YouTube(link)
    stream = video.streams.filter(only_audio=True).first()
    out_file = stream.download(output_path='\\media')
    os.rename(out_file, 'media\\' + str(count) + '.mp3')
    count += 1
    