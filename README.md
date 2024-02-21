# TBG Computers (simple mvc)

### Build in PHP and React

Configure docker to up container.

## Getting Started

### Usage

Build container in `LOCAL` version in the background

```shell
docker compose -f docker-compose.yml up --build -d
```

or use

```shell
./create_docker.sh
```

Create tables in DB

```shell
docker compose exec api sh
```

```shell
./create_tables.sh
```

#### In browser
* [Front](http://127.0.0.1)
* [API](http://127.0.0.1/api)
* [PhpMyAdmin](http://127.0.0.1:8080/) (`login: root; pass: root`)