<img class="page__header" src="https://ertan-toker.de/wp-content/uploads/2018/05/docker-container-logo-256x256.png" width="200"/>

## Useful Commands

more read on <https://towardsdatascience.com/15-docker-commands-you-should-know-970ea5203421>

```bash
# CONTAINER
docker container ps
docker container logs
docker container stop {__container_name__}
docker container start {__container_name__}
docker container run -i -z -p 1000:1000 --rm my_docker_image
# kill all running containers
docker container kill $(docker ps -q)
# delete one or more containers
docker container rm {__my_container__}
# 🔥delete all containers that are not running🔥
docker container rm $(docker ps -a -q)

# IMAGE
docker image ls
docker image rm -f {__image_id__}
# 🔥remove all images. careful with this one 🔥
docker image rm $(docker images -a -q)
# build a docker image named my_image
docker image build -t my_repo/my_image:my_tag .
# push an image to a registry
docker image push my_repo/my_image:my_tag
# show lots of details about the image
docker image inspect my_image

# CLEAN UP
# clean up all unused containers, networks, and dangling images
docker system prune
# 🔥delete all unused images, not just dangling ones🔥
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
