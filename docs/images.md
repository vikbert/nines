<div align="center">
  <span class="iconify" data-icon="akar-icons:image" data-inline="false" width="100"></span>
</div>

<h3>table of content</h3>

[[toc]]

## resize image

resize a image or images matched by expression

```js
// resize the JPG images with given width `250px`
sips -Z 250 *.jpg

// resize the image and reduce the quality of images
sips -s formatOptions 80 *.jpg

// convert all PNG files to JPEG format: png => jpeg
sips -s format jpeg -s *.png
```

## video to GIF image
Use the video application `kap` to recode the screen, then save the screen as `gif`:
```js
// export setting I used for symfony flows gifs
width 760 FPS 5 GIF 
```

