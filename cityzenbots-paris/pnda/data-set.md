# Introduction to data sets

## Smartcity: data sets available

Video analytics:
- List measurement point (id, loc)
- Time series API count per id, direction

Noise sensors:
- List measurement points
- Laeq (1mn, min, max)

WIFI analytics:
- List measurement point (id, loc)
- CSV
- Time series API count per id

Air Quality:
- List measurement points
- Temp, Humidity, Pressure, NO2, SO2, PM25, PM10, PM1

## About time serie api

Time Serie API:
Pull data by using mathematic operation and downsample methode (reduce the amount of data returned over an interval)
Query logic
• Search for a source
• With a start date (mandatory): relative or absolute timestamp
• Optional end date: relative or absolute timestamp
• With filter
• With math operand (sum, avg, min, max etc ...)
• With downsample function (avg over an interval)

Response format
• metric: source
• tag: filter for data source
• dps: list of timestamp/value
• Timestamp are GMT (no local offset)

￼Details about GET API syntax: see opentsdb [GET /api/query online](http://opentsdb.net/docs/build/html/api_http/query/index.html)


## Video Analytics

Sample JSON:
```json
{
"id": 6177,
"name": "Terre plein - Kiosque", "type": "turnstile",
"metrics": [
{
"id": "direction_1", "name": "Vers le Nord"
}, {
"id": "direction_2",
"name": "Vers le Sud" }
], "classes": [
"all" ],
"location": {
"latitude": 48.8483899, "longitude": 2.3957845
}}
```

Explanation about measurements [here](https://docs.google.com/document/d/11GVyJ aKvCXPfhH70TkKo3- DdjsSrzaoYm3U00pswUy8)


### Measurement zones
Array made of the following elements
```json
{
"id": 7124,
"name": "Passage - Bel Air Fabre d'Eglantine", "type": "turnstile",
￼}
"metrics": [
"classes": [ "location": {
{
{ "all"
"id": "direction_1",
"id": "direction_2", ],
"name": "Direction 1" },
"latitude": 48.847629,
"name": "Direction 2" "longitude": 2.396243 }
} ],
```


List of metrics available:
- all
- bike
- vehicle

Note: parse the measurement zone to know which class is supported on the said zone


## Time serie
Delay from real time: 2 minutes

/api/query?start=2016/05/26-12:00:00&end=2016/05/26-13:00:00&m=sum:15m-sum-none:placemeter.all{host=6201,class=*}

```json
[
{
metric: "placemeter.all", tags: {
host: "6201",
class: "direction_1"
},
aggregateTags: [ ], dps: {
1464264000: 20, 1464264900: 28, 1464265800: 59, 1464266700: 64, 1464267600: 66
}
},
{
metric: "placemeter.all", tags: {
host: "6201",
class: "direction_2"
},
aggregateTags: [ ], dps: { 1464264000: 37, 1464264900: 58, 1464265800: 74,
1464266700: 48, 1464267600: 69 }
}
]
```


api/query?start=2016/05/24-12:00:00&end=2016/05/24-13:00:00&m=sum:15m-sum-none:placemeter.vehicle{host=7068}
```json
￼[
{
metric: "placemeter.vehicle", tags: {
host: "7068"
},
aggregateTags: [
"class"
],
dps: {
1464091200: 9, 1464092100: 12, 1464093000: 10, 1464093900: 12, 1464094800: 8
}
}
]
```

/api/query?start=2016/05/24-12:00:00&end=2016/05/24-13:00:00&m=sum:15m-sum-none:placemeter.vehicle{host=7068,class=*}
```json
[
{
metric: "placemeter.vehicle", tags: {
host: "7068",
class: "direction_1"
},
aggregateTags: [ ],
dps: {
1464091200: 9, 1464092100: 12, 1464093000: 10, 1464093900: 12, 1464094800: 8
}
},
{
metric: "placemeter.vehicle", tags: {
host: "7068",
class: "direction_2"
},
aggregateTags: [ ],
dps: {
1464091200: 0, 1464092100: 0, 1464093000: 0, 1464093900: 0, 1464094800: 0
}
}
]
```

The figures below are representing one day of measurement (24 hours):
- Vehicle
  - Number of data points: 40500
  - JSON file size: 591 KB
- Bike
  - Number of data points: 60600
  - JSON file size: 956 KB
- All
  - Number of data points: 198000
  - JSON file size: 2.9 MB


Response looks like:
```json
[ {
"host": "88:15:44:55:0f:b4", "description": "AP_14", "latitude": 48.8493926941556, "longitude": 2.39337081089616
}, {
"host": "88:15:44:2d:22:e6", "description": "AP_13", "latitude": 48.848675, "longitude": 2.394519
} 
....
```

/api/query?start=2016/05/24-12:00:00&end=2016/05/24-12:01:00&m=sum:meraki.count{host=*}
```json
[
...
{  metric: "meraki.count",
tags: {
host: "88-15-44-2d-20-aa"
},
aggregateTags: [
"manufacturer"
],
dps: {
1464091200: 1,
1464091201: 2,
1464091204: 2,
1464091205: 2,
1464091207: 3,
1464091210: 4,
1464091215: 5,
1464091219: 5,
1464091228: 5,
1464091235: 5,
1464091239: 5,
1464091240: 5,
1464091242: 6,
1464091250: 7,
1464091256: 9
}
}
...
]
```



/api/query?start=2016/05/24-12:00:00&end=2016/05/24-12:01:00&m=sum:meraki.count{host=*,manufacturer=*}
```json
[
...
{
metric: "meraki.count",
tags: {
host: "88-15-44-2d-20-aa", manufacturer: "Cisco-Systems" },
aggregateTags: [ ],
dps: { }
},
{
metric: "meraki.count",
tags: {
host: "88-15-44-2d-20-aa", manufacturer: "Apple"
},
aggregateTags: [ ],
dps: {
1464091201: 1,
1464091204: 1,
1464091215: 1,
1464091219: 1,
1464091228: 1,
1464091235: 1,
1464091239: 1
}
},
...
]
```


The figures below are representing one day of measurement (24 hours):
- Count
  - Number of data points: Between 450 000 and 600 000
  - JSON file size for 450 000: 5.4 MB


### Raw data
aw History Data (since 25/03/2016) One file per day
No CSV header. One record per line. 8 attributes:
• Access Point Mac Address
• Timestamp
• Mac Address for the device (anonymous, but same value over period)
• Manufacturer (network board)
• Latitude
• Longitude
• Uncertainty about the measure (unit: meter)
• Strength of the signal
Note: Device Mac Address is anonymous but static over the time for each device. Daily file properties: 16 MB, 600 000 lines (average)

Examples: 
88:15:44:55:0f:a2;1459468782;80:e6:50:40:1d:83;Apple;48.84785825114992;2.396305873935489;4.6987;14 88:15:44:55:0f:a2;1459468787;70:de:e2:69:09:49;Apple;48.84840968758106;2.395711511380796;55.65302217395604;17 
88:15:44:55:0f:a2;1459468763;00:1f:65:80:5a:f1;Korea Electric TERMINAL;48.848561170213024;2.396342611325963;39.909732923107065;18 
88:15:44:55:0f:a2;1459468748;00:0d:65:27:a6:61;Cisco Systems;48.84821281059017;2.395739037206738;66.75130032320664;21 
88:15:44:55:0f:b2;1459468758;00:0d:65:27:a6:61;Cisco Systems;48.848235131769776;2.3957136631238427;65.74441356319727;23 
88:15:44:55:0f:b2;1459468777;24:0a:64:44:2e:c5;AzureWave Technology;48.84913381135899;2.395629599723179;21.22561727138957;17 
88:15:44:55:0f:b2;1459468772;24:09:95:ee:73:83;Huawei Technologies;48.848177597920724;2.3953126631431587;41.68472449537461;13 88:15:44:55:0f:b2;1459468767;84:fc:fe:cb:5d:08;Apple;48.84870011312329;2.3956535160323256;32.87136554295605;15 
88:15:44:55:0f:b2;1459468791;6c:ad:f8:6c:21:9e;AzureWave Technology;48.84913381135899;2.395629599723179;21.22561727138957;11 
88:15:44:55:0f:b2;1459468794;60:f8:1d:e6:0b:17;Apple;48.84892786395727;2.395844757447776;49.0;7


## NOISE sensors

![NOISE sensors](./citizen_bots_pnda_noise.tiff)

List all measurements zone:
```json
[ ...
{
"host": “NATION-CISCO-P12", "description": "3 Place de la Nation", "latitude": 48.848941,
"longitude": 2.394842,
"altitude": 51,
"height": 6
}, {
"host": “NATION-CISCO-P2", "description": "15 Place de la Nation", "latitude": 48.848719,
"longitude": 2.396933,
"altitude": 51,
"height": 6
}, 
....
```


### Noise data (time serie)

List of metrics available:
- laeq_1mn
- max_laeq_1s
- min_laeq_1s

Delay from real time: 5 minutes 
Granularity: 1 minute

How to understand laeq? Refer to: [bruitparif](http://www.bruitparif.fr/glossary/4/letterl#.Vvz1SRKLSEI)

### Noise sensor (time serie)

/api/query?start=2016/05/24-12:00:00&end=2016/05/24-12:01:00&m=sum:bruitparif.laeq_1mn{host=*} 
```json
[
{
metric: "bruitparif.laeq_1mn",
tags: {
host: ”NATION-CISCO-P9"
},
aggregateTags: [ ],
dps: {
1464091200: 64.30000305175781, 1464091260: 63.5
}
},
{
metric: "bruitparif.laeq_1mn",
tags: {
host: ”NATION-CISCO-P7"
},
aggregateTags: [ ],
dps: {
1464091200: 66.5,
1464091260: 69.4000015258789
}
},
{
metric: "bruitparif.laeq_1mn",
tags: {
host: ”NATION-CISCO-P2"
},
aggregateTags: [ ],
dps: {
1464091200: 66.4000015258789, 1464091260: 66.4000015258789
}
},
....
]
c

The figures below are representing one day of measurement (24 hours):
- Count
   - Number of data points with 14 sensors : 72304
   - JSON file size for 450 000: 164 KB


## Air Quality

List all measurements zone:
```json
[
...
{id: "CISCO_PARIS_001", lat: 48.848683333333334,
lon: 2.3970055555555554, type: "libelium", measures:
["temp",
"rh",
"pressure",
"no2",
"co",
"so2",
"o3",
"pm10",
"pm25"
]
},
...
{id: "CISCO_CT_PARIS_257", lat: 48.848,
lon: 2.39698,
type: "citytree",
measures:
["rh",
"temp",
"pm1",
"pm10",
"pm25"
]
}
```

List of metrics available
- breezometer.temp (unit deg Celsius)
- breezometer.pressure (unit pascal)
- breezometer.rh (unit percent)
- breezometer.co (unit ppb)
- breezometer.no2 (unit ppb)
- breezometer.o3 (unit ppb)
- breezometer.so2 (unit ppb)
~~- breezometer.pm10 (ug/m3)~~
~~- breezometer.pm10 (ug/m3)~~
~~- breezometer.pm25 (ug/m3)~~
- breezometer.aqi (unit from 1 [very bad] to 10
[excellent], every hour)

Notes: when listing measurement devices, check the type: libelium or citytree. There are 2 different sensors. You should also list the measures made by each sensor. Not all the sensors are measuring the same list of pollutants.


## Getting started with API

- https
- Self signed certificates
- Authorization: API key (will be provided you)
- Rating: 30r/mn, 2 max simultaneous requests
- URL base: https://{host}:{port}
- Example: if your APIkey is ThisIsMyKey:
wget --no-check-certificate --header="X-TSAPI-TOKEN: ThisIsMyKey" 'https://{host}:{port}/api/query?start=1h-ago&m=sum:meraki.count'

Reminder: details about GET API syntax: see opentsdb [GET /api/query](http://opentsdb.net/docs/build/html/api_http/query/index.html)

### API: measurement zones

- /dl/cmx/video-measurementpoints.json
- /dl/cmx/wifi-measurementpoints.json
- /dl/cmx/noise-measurementpoints.json • /dl/cmx/aqi-measurementpoints.json
- Example:
wget --no-check-certificate --header="X-TSAPI-TOKEN: ThisIsMyKey" 'https://{host}:{port}/dl/cmx/video-measurementpoints.json'

### API: video
https://{host}:{port}/api/query?start=1h-ago&m=sum:placemeter.all
https://{host}:{port}/api/query?start=1h-ago&m=sum:placemeter.all{host=*}
https://{host}:{port}/api/query?start=1h-ago&m=sum:placemeter.all{host=*,class=*}
https://{host}:{port}/api/query?start=1h-ago&m=sum:placemeter.all{host=6177,class=*}
https://{host}:{port}/api/query?start=1h-ago&m=sum:placemeter.all{host=6177,class=direction_1}

// Download sample example to reduce intervals (sum by sum of 10 minutes)
https://{host}:{port}/api/query?start=1h-ago&m=sum:10m-sum-none:placemeter.all{host=6177,class=direction_1}
Host shall be set to * (aggregated) or to one of the given zone id (see list measurement point)
Class can be set to * (aggregated) or to one of metrics for zone (see list measurement point)


### API: wifi
Delay from real time: 1-2 minutes

https://{host}:{port}/api/query?start=1h-ago&m=sum:meraki.count
https://{host}:{port}/api/query?start=1h-ago&m=sum:meraki.count{host=*}
https://{host}:{port}/api/query?start=1h-ago&m=sum:meraki.count{host=88-15-44-2d-20-aa}
https://{host}:{port}/api/query?start=1h-ago&m=sum:meraki.count{host=88-15-44-2d-20-aa,manufacturer=*}
https://{host}:{port}/api/query?start=1h-ago&m=sum:meraki.count{host=88-15-44-2d-20-aa,manufacturer=Apple|Samsung}

// download sample and date range https://{host}:{port}/api/query?start=2016/05/01-00:00:00&end=2016/05/01-23:59:59&m=sum:15m-sum-none:placemeter.all{host=6201,class=*}
Host shall be set to * (aggregated) or to one one the given access point MAC Address (see list measurement point), replacing ‘:’ with ‘-’.


### API: wifi (raw data)
Raw History Data (since 28/04/2016) One file per day
Example:
https://{host}:{port}:8444/dl/cmx/2016-05-01.csv.gz


### API: noise
https://{host}:{port}/api/query?start=1h-ago&m=sum:bruitparif.laeq_1mn{host=*}
https://{host}:{port}/api/query?start=1h-ago&m=sum:bruitparif.laeq_1mn{host=NATION-CISCO-P9}
https://{host}:{port}/api/query?start=1h-ago&m=sum:bruitparif.min_laeq_1s {host=*}
https://{host}:{port}/api/query?start=1h-ago&m=sum:bruitparif. min_laeq_1s {host=NATION-CISCO-P9}
https://{host}:{port}/api/query?start=1h-ago&m=sum:bruitparif. max_laeq_1s {host=*}
https://{host}:{port}/api/query?start=1h-ago&m=sum:bruitparif. max_laeq_1s {host=NATION-CISCO-P9}
Host shall be set to * (aggregated) or to one one the host as returned by list noise measurement point.


### API: api (Air Quality)
https://{host}:{port}/api/query?start=1h-ago&m=sum:breezometer.temp{host=*}
https://{host}:{port}/api/query?start=1h-ago&m=sum:breezometer.temp{host=CISCO_PARIS_005}
https://{host}:{port}/api/query?start=1h-ago&m=sum:breezometer.rh {host=*}
https://{host}:{port}/api/query?start=1h-ago&m=sum:breezometer.rh{host=CISCO_PARIS_005}
https://{host}:{port}/api/query?start=1h-ago&m=sum:breezometer.pressure{host=*}
https://{host}:{port}/api/query?start=1h-ago&m=sum:breezometer. pressure{host=CISCO_PARIS_005}
https://{host}:{port}/api/query?start=1h-ago&m=sum:breezometer.pressure{host=*}
https://{host}:{port}/api/query?start=1h-ago&m=sum:breezometer. pressure{host=CISCO_PARIS_005}
https://{host}:{port}/api/query?start=1h-ago&m=sum:breezometer.co{host=*}
https://{host}:{port}/api/query?start=1h-ago&m=sum:breezometer. co{host=CISCO_PARIS_005}
https://{host}:{port}/api/query?start=1h-ago&m=sum:breezometer.no2{host=*}
https://{host}:{port}/api/query?start=1h-ago&m=sum:breezometer. no2{host=CISCO_PARIS_005}

Host shall be set to * (aggregated) or to one one the id as returned by aqi measurement point.
