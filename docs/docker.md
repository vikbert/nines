<div align="center">
    <span class="iconify" data-icon="cib:docker" data-inline="false" width="120"></span>
</div>


## Favorite Commands

more read on <https://towardsdatascience.com/15-docker-commands-you-should-know-970ea5203421>

```bash
# CONTAINER
# kill all running containers
docker container kill $(docker ps -q)$$
# delete one or more containers
docker container rm $(docker ps -a -q)

# IMAGE
docker image ls
docker image rm -f {__image_id__}
# remove all images. careful with this one 
docker image rm $(docker images -a -q)
# build a docker image named my_image$$
docker image build -t my_repo/my_image:my_tag .
# push an image to a registry
docker image push my_repo/my_image:my_tag
# show lots of details about the image
docker image inspect my_image

# CLEAN UP
# clean up all unused containers, networks, and dangling images
docker system prune
# delete all unused images, not just dangling ones
docker system prune -a
```

## Useful Images

::: tip Mock API container
<http://httpbin.org/>
:::

```bash
docker run -p 80:80 kennethreitz/httpbin
```

::: tip Awesome Docker collection
<https://github.com/veggiemonk/awesome-docker>
:::

## docker hub
