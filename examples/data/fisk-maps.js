var m4h = m4h || {};

m4h.fiskMaps = {
  streamCourses: {
    sheets: [
      {
        label: 'Fisk Plate 15 Sheet 1',
        id: 'FiskSheet1',
        tileJSON: {
          "tilejson": "2.2.0",
          "name": "Mississippi Stream Courses sheet 1 - Harold Fisk, US Army Corps of Engineers",
          "attribution": "Presidential Mississippi River Commission, 1944. Public Domain.",
          "scheme": "tms",
          "tiles": [
            "https://maps4html.github.io/FiskMississippiMapsStreamCourses/sheet01/{z}/{x}/{-y}.png"
          ],
          "bounds": [-92.73821874999945, 35.15156827115307, -88.58807837153826, 37.38372501845145],
          "minzoom": 6,
          "maxzoom": 12
        }
      },
      {
        label: 'Fisk Plate 15 Sheet 2',
        id: 'FiskSheet2',
        tileJSON: {
          "tilejson": "2.2.0",
          "name": "Mississippi Stream Courses sheet 2 - Harold Fisk, US Army Corps of Engineers",
          "attribution": "Presidential Mississippi River Commission, 1944. Public Domain.",
          "scheme": "tms",
          "tiles": [
            "https://maps4html.github.io/FiskMississippiMapsStreamCourses/sheet02/{z}/{x}/{-y}.png"
          ],
          "bounds": [-92.70756545472462, 33.02407078465588, -88.65406790680284, 35.27414929261117],
          "minzoom": 6,
          "maxzoom": 12
        }
      },
      {
        label: 'Fisk Plate 15 Sheet 3',
        id: 'FiskSheet3',
        tileJSON: {
          "tilejson": "2.2.0",
          "name": "Mississippi Stream Courses sheet 3 - Harold Fisk, US Army Corps of Engineers",
          "attribution": "Presidential Mississippi River Commission, 1944. Public Domain.",
          "scheme": "tms",
          "tiles": [
            "https://maps4html.github.io/FiskMississippiMapsStreamCourses/sheet03/{z}/{x}/{-y}.png"
          ],
          "bounds": [-92.64710999091871, 30.90807578948790, -88.67752165286296, 33.17549574297950],
          "minzoom": 6,
          "maxzoom": 12
        }
      },
      {
        label: 'Fisk Plate 15 Sheet 4',
        id: 'FiskSheet4',
        tileJSON: {
          "tilejson": "2.2.0",
          "name": "Mississippi Stream Courses sheet 4 - Harold Fisk, US Army Corps of Engineers",
          "attribution": "Presidential Mississippi River Commission, 1944. Public Domain.",
          "scheme": "tms",
          "tiles": [
            "https://maps4html.github.io/FiskMississippiMapsStreamCourses/sheet04/{z}/{x}/{-y}.png"
          ],
          "bounds": [-92.60431421311640, 28.79036396296392, -88.72531489137181, 31.04551669046586],
          "minzoom": 6,
          "maxzoom": 12
        }
      },
    ]
  }

};
