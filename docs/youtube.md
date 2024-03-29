<div align="center">
  <span class="iconify" data-icon="ant-design:youtube-outlined" data-inline="false" width="100"></span>
</div>

---

<h3>table of content</h3>

[[toc]]

## Create with `QuickTime`

####  Screen recode via `quicktime player`
> Quicktime Player: Ablage => neue Bildschirmaufnahme

####  Add the audio track per `drag & drop`
select the mp3 audi file, and drag the file to the open video in `quicktime player`

####  Export the `.mov` with resolution `1080p`
> Quicktime Player: Ablage => exportieren als

####  Create the thumbnail for the youtube video
[canva thumbnail creator](https://www.canva.com/folder/all-designs)


## download mp3 via youtube-dl
simple download mp3 audio from youtube
```bash
sudo wget https://yt-dl.org/downloads/latest/youtube-dl -O /usr/local/bin/youtube-dl
sudo chmod a+rx /usr/local/bin/youtube-dl
youtube-dl --version
```

```bash
 youtube-dl "https://www.youtube.com/watch?v=mV8N-V8F9j8" 
```
## youtube channel for web development
- Traversy Media
- FreeCodeCamp
- The Coding Train
- Dev Ed
- The Net Ninja
- Web Dev Simplified
- Academind
- Florin Pop
- Fireship
- Programming with Mosh
 
 ## youtube to mp3
 ### download youtube to mp3
 <https://mp3y.download/de/audio-easy-converter-youtube>

### CLI `youtube-dl` 
```bash
## download playlist
youtube-dl --extract-audio --audio-format mp3 -o "%(title)s.%(ext)s" playlist_URL 

## download single mp3
youtube-dl -x --audio-format mp3 -o "%(title)s.%(ext)s" video_URL
```
