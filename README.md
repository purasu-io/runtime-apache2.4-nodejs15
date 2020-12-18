# Apache 2.4 + Node.js 15

## Installation

Copy example Node.js application to `volumes/a-shared/app`
* `cp -R example/cpu-burner/* volumes/a-shared/app`

## Usage

* `docker-compose up`
  * Create local network if needed: `docker network create purasu-local`
  * Use `docker-compose up --build --force-recreate` to apply changes to the Docker image

* `curl localhost:80` (Node.js)
* `curl localhost:80/assets/` (Apache)

## Configuration

* Application: `volumes/a-shared/app`
* Static assets: `volumes/a-shared/public`

* The `layer/` directory is copied into the image `/` at build time.
* A default application entrypoint is copied from `/etc/default` to `/a/shared/app`
* Node.js application is started from `/a/shared/app/index.js`
  * This may be changed by modifying `/a/shared/app/_entrypoint`
* If `DEV_MODE=yes` is set (see docker-compose.yml), application is reloaded by `reflex`
  on code changes. Also `yarn install` is run if package.json is changed.
  * Default reflex.conf is copied from `/etc/default` to `/a/shared/app/_reflex.conf`
    if one doesn't exist at start time.
»
