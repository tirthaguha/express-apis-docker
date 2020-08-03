# express-apis-docker

Express APIs with Docker with nginx routing and nginx load-balancing

## Just Docker

### Build the card-deck-test image

```bash=
cd card-deck-test
docker build -t card-deck-test .
```

### Build the harry-potter-test image

```bash=
cd harry-potter-test
docker build -t harry-potter-test .
```

### Build the nginx

```bash=
cd nginx-docker
docker build -t nginx-load-balancer .
```

## Run the services

### Run 2 instances of card-deck-test

```bash=
docker run -p 4000:4000 -d card-deck-test
docker run -p 4001:4000 -d card-deck-test
```

### Run 2 instances of harry-potter-test

```bash=
docker run -p 3000:3000 -d harry-potter-test
docker run -p 3001:3000 -d harry-potter-test
```

### Run nginx

```bash=
docker run -p 8080:80 -d nginx-load-balancer
```

## Run in Browser

http://localhost:8080/card-deck/shuffle
http://localhost:8080/harry-potter/characters

## Docker Compose

Run

```bash=
docker-compose up -d
```
