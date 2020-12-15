# Cesium_first

This is the first crack, back in 2018, of using the cesium library.  I'm sure there are more new features. 

This is a dockerized version to make life easy.

Building:
```
docker build -t cesium_first .
```

Running:
```
docker run -d -v ${PWD}:/app -v /app/node_modules -p 8081:8080 --name cesium --rm cesium_first
```

Browser:
```
http://localhost:8081/
```

Different iterations:
```
http://localhost:8081/penny5.html
```