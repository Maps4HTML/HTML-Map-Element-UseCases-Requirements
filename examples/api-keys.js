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
        'localhost8000': 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlI2QlY1QTlDR1YifQ.eyJpc3MiOiI0M0IyM044WjYzIiwiaWF0IjoxNTc5ODAxNTQ1LCJleHAiOjE2MTE0MjM5NDUsIm9yaWdpbiI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCJ9.JmPLfiFNE3PI_pt_vMnu0eMDtbmUmZF5H6cwqTX9Rv_3bJAPGlE-7WHV8WhPSAWfCYL8XRP0TgiUJ3-m14YpbA',
        'httpslocalhost8000': 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlI2QlY1QTlDR1YifQ.eyJpc3MiOiI0M0IyM044WjYzIiwiaWF0IjoxNTc5ODAxNTQ1LCJleHAiOjE2MTE0MjM5NDUsIm9yaWdpbiI6Imh0dHBzOi8vbG9jYWxob3N0OjgwMDAifQ.jPawXFUEqkI-QrpBITIveTQriuI1_euJaizmKxktwSonlFMK-fNNviacvSDclng96CCvH0ndRFrLlsgWJDIXMw',
        'maps4html': 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlI2QlY1QTlDR1YifQ.eyJpc3MiOiI0M0IyM044WjYzIiwiaWF0IjoxNTg1NjczMjAzLCJleHAiOjE2MTcyOTU2MDMsIm9yaWdpbiI6Imh0dHBzOi8vbWFwczRodG1sLm9yZyJ9.lrBZFDo7HyBgAh1hop2UkpTFf_aeOJn_3Ns7ZY_bAFVHeKD0njtjzTE58g3uKsTtUJs-N7jdSfX3k9Fs_5E-lg',
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
            signature: 'c_o9L3nf8QZ-Iz1pNyCF-yn8CvJxuM4ElCoD2lUBMinm3YbIp44DRIAAe_SgHiUMYD4t_CVZ84bQd5CAnGO6Ig'
        }
    }
};