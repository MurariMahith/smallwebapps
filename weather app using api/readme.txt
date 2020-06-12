weather api used:

https://openweathermap.org/

css and js included in .html file only

apikey:

74bd79adc5c940c98613c71af5a1d05e

reference apifetching link for city london:

http://api.openweathermap.org/data/2.5/weather?q=london&appid=74bd79adc5c940c98613c71af5a1d05e&units=metric

format:
http://api.openweathermap.org/data/2.5/weather?q={////cityname////}&appid={////your api key////}&units={////metric or other two////}

q is cityname for querystring

youtube link for reference:

https://www.youtube.com/watch?v=GXrDEA3SIOQ


needed info if forgot

https://www.w3schools.com/jsref/jsref_tofixed.asp

https://www.w3schools.com/js/js_json_arrays.asp

accessing data in json

1.data["main"]["temp_max"]
or
data.main.temp_max

2.for arrays inside json objects

data.weather[0].main

data.weather[0].description



-murari mahith 