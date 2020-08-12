<div align="center">
<span class="iconify" data-icon="wpf:mac-os" data-inline="false" width="100"></span>
</div>

---

<h3>table of content</h3>

[[toc]]

## Allow to open app everywhere
```bash
# disable the master, you are able to open any app everywhere
sudo spctl --master-disable
# enable the master, you will be notified, and you are not able to open the app that is downloaded from internet
sudo spctl --master-enable 
```
