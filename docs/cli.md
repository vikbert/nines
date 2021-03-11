<div align="center">
    <span class="iconify" data-icon="grommet-icons:cli" data-inline="false" width="100"></span>
</div>

---

My favorite CLI tools used for the most of daily work. Most of basic command line tools, like `git`, `curl`, `npm`..., will not listed here.

<h3>table of content</h3>

[[toc]]

## `fx`: json terminal viewer
```bash
npm install -g fx

# open json file
fx data/pointer.json

# view json via pipe
curl https://my-json-server.typicode.com/vikbert/jsonfaker/db | fx

# Enter "q" to exit
```

## `hub`: enhanced CLI for GitHub
```bash
hub --help

# create a remote repository on GitHub in terminal
hub create remote-repository 
```

## `symfony`: symfony powered cli
```bash
symfony -h
symfony new my-blog

# usful wrapper
symfony composer [sub-command]
symfony console [sub-command]
```

## `pngquant`: reduce the size of png image
```bash
pngquant 16 --skip-if-larger --strip --ext=.png --force screenshot.png

# use always as alias
alias png16='pngquant 16 --skip-if-larger --strip --ext=.png --force '
png16 screenshot.png
```

## `cheat.sh`: command line tool cheater
```bash
# use always as alias
alias cheat='curl cheat.sh/'
cheat tar 
```

## `youtbue-dl`: download youtube as mp3
```bash
# use as alias
alias yd='youtube-dl -x --audio-format mp3 '
yd "http://url_your_youtbue" 
```

## `cf`: cli for cloud foundry
```bash
cf -h 
```

## `mkfile` create the file with given size
```bash
mkfile 2m test.pdf 
mkfile 2g a_very_large.pdf 
```


