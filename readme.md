<!-- @format -->

# Task for interview

## Run on local system

In order to run it on local outside of the container, comment out the chromeoptions from wdio.conf.js (line 57 and 58)

```bash
 'goog:chromeOptions': {
        args: ['--no-sandbox', '--disable-dev-shm-usage', '--headless']
 }
```

Now verify the chrome version on your local system and update the chrome driver dev dependency in your package.json file

```bash
  "chromedriver": "^94.0.0", //replace with your version
```

and then install the dependencies using

```bash
 npm install
```

and then run the script

```bash
npm test
```

## Run in a container

In order to run it the container, first of all uncomment the following lines from wdio.conf.js (line 57 and 58).

```bash
 'goog:chromeOptions': {
        args: ['--no-sandbox', '--disable-dev-shm-usage', '--headless']
 }
```

then build the image using

```bash
docker -t build containerapp:v1 .
```

verify image is created

```bash
docker images
```

once the image is build, run the image using

```bash
docker run -it containerapp:v1
```
