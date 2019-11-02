/* Tokens are configured to work from the following domains:
   http://localhost:8000/
   https://maps4html.github.io/
*/
var m4h = m4h || {};
m4h.keys = {
  google: 'AIzaSyCP1y_kwKFUy_jBDb-4EvUjt7b5jCYftfc',
  mapboxGL: 'pk.eyJ1IjoibWFwczRodG1sLWFtZWxpYWJyIiwiYSI6ImNqeXhrampmMTB3d2EzZ3BlenFvMHVicmIifQ.zE60jyQ0QH_NlKFyo9EmvA',
  tomtom: 'kcm72J917QftQG43eSwuUeKmm5fyni3G',
  bing: 'AmD9pKWiGBXZ6XrD5jWzzJ5ikdkMiXjhLMbb8_drsxVFiyS_jjqDAbRYtkcaKI7r',
  mapkit: {
      'localhost8000': 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlI2QlY1QTlDR1YifQ.eyJpc3MiOiI0M0IyM044WjYzIiwiaWF0IjoxNTY2MjM0OTIzLCJvcmlnaW4iOiJodHRwOi8vbG9jYWxob3N0OjgwMDAiLCJleHAiOjE1Nzc4MzY3OTl9.oqGXdIKRSNHX3TlBL0SWgqcFHF_PATuZCWct9Gc1x4wEHFu4nxomwUZTf5yhIaMi_lNjXzBWqjT3k7cze5BOFQ',
      'httpslocalhost8000': 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlI2QlY1QTlDR1YifQ.eyJpc3MiOiI0M0IyM044WjYzIiwiaWF0IjoxNTY2MjM0OTIzLCJvcmlnaW4iOiJodHRwczovL2xvY2FsaG9zdDo4MDAwIiwiZXhwIjoxNTc3ODM2Nzk5fQ.mgp4OQhubUcXMXbeXSrFtqPX1o-3Vw2EBbV2pvieYZA-1xe7_PNZ281QsPPmeJqSORL-qY9DIjcCFeBVV7MFtQ',
      'maps4html': 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlI2QlY1QTlDR1YifQ.eyJpc3MiOiI0M0IyM044WjYzIiwiaWF0IjoxNTY2MjM0OTIzLCJvcmlnaW4iOiJodHRwczovL21hcHM0aHRtbC5naXRodWIuaW8iLCJleHAiOjE1Nzc4MzY3OTl9.anN2upPaCdexpSw30j0wVHBV3hIDJPGrOtqJECO-UOcqOXUmEvyvqJBhT10YyjxT_VTSrJQwcjda-CVBddEd5g'
  },
  mapkitstatic: {
      httpslocalhost8000: {
          referer: 'https://localhost:8000/',
          teamId: '43B23N8Z63',
          keyId: 'R6BV5A9CGV',
          signature: 'dIEhfVGXY4WHW2hq7FUWuqc41B0a0-zHJoom88pBZD_hfj3IohIHo06qv__qtxFOQjNbeeq0G_RZZgZ3yWQiQA'
      },
      maps4html: {
          referer: 'https://maps4html.github.io/',
          teamId: '43B23N8Z63',
          keyId: 'R6BV5A9CGV',
          signature: 'F13h3nOYuw3Al2xPLd-VrVYIACvSV8UlPyMt_VGPDIkbUVezgbjzCInclURMbFznfR6WLTDnEy_XzhzvEmSufA'
      }
  }
};