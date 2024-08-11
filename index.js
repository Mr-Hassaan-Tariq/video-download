const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const {HttpsProxyAgent} = require('https-proxy-agent');

// const ytdl = require("@distube/ytdl-core");
const fs = require('fs-extra'); // use fs-extra here
const ytdl = require('ytdl-core');



async function downloadVideo() {
    let url = 'https://www.youtube.com/watch?v=f6Jcm5HNscQ&ab_channel=HanShengLiang'
    let orderId = 'asfsfs'
    let linkNumber = 1
    try {

        
        
        // const proxyAgent = ytdl.createProxyAgent({ uri: "http://43.204.218.102:6002" });
        // const agent = ytdl.createAgent([
        //     {
        //         "domain": ".youtube.com",
        //         "expirationDate": 1749606522,
        //         "hostOnly": false,
        //         "httpOnly": false,
        //         "name": "__Secure-1PAPISID",
        //         "path": "/",
        //         "sameSite": "unspecified",
        //         "secure": true,
        //         "session": false,
        //         "storeId": "0",
        //         "value": "BZj_8DY3EO3WLhiX/AgIqKFrpZrfrggOEC",
        //         "id": 1
        //     },
        //     {
        //         "domain": ".youtube.com",
        //         "expirationDate": 1749606522,
        //         "hostOnly": false,
        //         "httpOnly": true,
        //         "name": "__Secure-1PSID",
        //         "path": "/",
        //         "sameSite": "unspecified",
        //         "secure": true,
        //         "session": false,
        //         "storeId": "0",
        //         "value": "g.a000jQja4aHfuQP5XHdtLus-ZStHmiRaltfsbFwcMz5BJYsxkEnZieQAeDrv7dFUO992k3u1NAACgYKAbESAQASFQHGX2MiyJNrfr2tQvL6X_M5liAyxxoVAUF8yKqBZde5hows-U3wJwwUg_fH0076",
        //         "id": 2
        //     },
        //     {
        //         "domain": ".youtube.com",
        //         "expirationDate": 1748368101.639964,
        //         "hostOnly": false,
        //         "httpOnly": true,
        //         "name": "__Secure-1PSIDCC",
        //         "path": "/",
        //         "sameSite": "unspecified",
        //         "secure": true,
        //         "session": false,
        //         "storeId": "0",
        //         "value": "AKEyXzUZQ1JE9GNVSU3_Jk_pMcSQ3gQdfuCYMtGs6jY5CJTK8VMD6nACD7uvbxoTlEyzrmDGooA",
        //         "id": 3
        //     },
        //     {
        //         "domain": ".youtube.com",
        //         "expirationDate": 1748367966.095567,
        //         "hostOnly": false,
        //         "httpOnly": true,
        //         "name": "__Secure-1PSIDTS",
        //         "path": "/",
        //         "sameSite": "unspecified",
        //         "secure": true,
        //         "session": false,
        //         "storeId": "0",
        //         "value": "sidts-CjIBLwcBXACsATfbuHRA8aHmOuFNwZjE15g2-PFbe6GVV4abu6-g3um0vHg48Lhipue33xAA",
        //         "id": 4
        //     },
        //     {
        //         "domain": ".youtube.com",
        //         "expirationDate": 1749606522,
        //         "hostOnly": false,
        //         "httpOnly": false,
        //         "name": "__Secure-3PAPISID",
        //         "path": "/",
        //         "sameSite": "no_restriction",
        //         "secure": true,
        //         "session": false,
        //         "storeId": "0",
        //         "value": "BZj_8DY3EO3WLhiX/AgIqKFrpZrfrggOEC",
        //         "id": 5
        //     },
        //     {
        //         "domain": ".youtube.com",
        //         "expirationDate": 1749606522,
        //         "hostOnly": false,
        //         "httpOnly": true,
        //         "name": "__Secure-3PSID",
        //         "path": "/",
        //         "sameSite": "no_restriction",
        //         "secure": true,
        //         "session": false,
        //         "storeId": "0",
        //         "value": "g.a000jQja4aHfuQP5XHdtLus-ZStHmiRaltfsbFwcMz5BJYsxkEnZYriAe3PFnZ5ecE8aGPuHkgACgYKAW0SAQASFQHGX2MiGIWgzzSXg864l1P5cbK5nhoVAUF8yKo3Rvp_VGgyEty6TtBGpfB90076",
        //         "id": 6
        //     },
        //     {
        //         "domain": ".youtube.com",
        //         "expirationDate": 1748368101.640005,
        //         "hostOnly": false,
        //         "httpOnly": true,
        //         "name": "__Secure-3PSIDCC",
        //         "path": "/",
        //         "sameSite": "no_restriction",
        //         "secure": true,
        //         "session": false,
        //         "storeId": "0",
        //         "value": "AKEyXzWFLZSH_VQC21-dp-PbPTTXbA8EwYWJhOEBkmrKLrWdWucfEsRDd0gyzriRHx0VDJa_qE8",
        //         "id": 7
        //     },
        //     {
        //         "domain": ".youtube.com",
        //         "expirationDate": 1748367966.095699,
        //         "hostOnly": false,
        //         "httpOnly": true,
        //         "name": "__Secure-3PSIDTS",
        //         "path": "/",
        //         "sameSite": "no_restriction",
        //         "secure": true,
        //         "session": false,
        //         "storeId": "0",
        //         "value": "sidts-CjIBLwcBXACsATfbuHRA8aHmOuFNwZjE15g2-PFbe6GVV4abu6-g3um0vHg48Lhipue33xAA",
        //         "id": 8
        //     },
        //     {
        //         "domain": ".youtube.com",
        //         "expirationDate": 1749606522,
        //         "hostOnly": false,
        //         "httpOnly": false,
        //         "name": "APISID",
        //         "path": "/",
        //         "sameSite": "unspecified",
        //         "secure": false,
        //         "session": false,
        //         "storeId": "0",
        //         "value": "EWQEm9Ma2NHyQ98i/AWK3e-Ztq0srff18S",
        //         "id": 9
        //     },
        //     {
        //         "domain": ".youtube.com",
        //         "expirationDate": 1749606522,
        //         "hostOnly": false,
        //         "httpOnly": true,
        //         "name": "HSID",
        //         "path": "/",
        //         "sameSite": "unspecified",
        //         "secure": false,
        //         "session": false,
        //         "storeId": "0",
        //         "value": "AMGL16aWfhR2EGiaJ",
        //         "id": 10
        //     },
        //     {
        //         "domain": ".youtube.com",
        //         "expirationDate": 1747173938,
        //         "hostOnly": false,
        //         "httpOnly": true,
        //         "name": "LOGIN_INFO",
        //         "path": "/",
        //         "sameSite": "no_restriction",
        //         "secure": true,
        //         "session": false,
        //         "storeId": "0",
        //         "value": "AFmmF2swRQIhAIB1kRPE5dnUuw16ctUs5LLqOgBF3Cuq9HZjH71CIkOPAiAkfiJ9bcfhTsITqEpg2YPb9vGa6e-tJRFHJyVBg-p-AA:QUQ3MjNmd1htdzlrSlZrLVBvMldWX0drTnNXYmEwc05UZS1yOE03YzFsSXo2NEdpY2F0N2VuM3VPTmpIOVFIb3NhTmhJREU5SjVlZElWVFprc3BPQ2k0UU1OeHF0X1FuNXlRcUJrWG5XMkVNeHNuZWRkRUlTdTNSRmpVU2Jkd1RiOGtfeUNvSmFhWXY3WndWQ1k3OWg5MUFEb2JLZlR5blVR",
        //         "id": 11
        //     },
        //     {
        //         "domain": ".youtube.com",
        //         "expirationDate": 1751383974,
        //         "hostOnly": false,
        //         "httpOnly": false,
        //         "name": "PREF",
        //         "path": "/",
        //         "sameSite": "unspecified",
        //         "secure": true,
        //         "session": false,
        //         "storeId": "0",
        //         "value": "f7=4100&tz=Asia.Karachi&f4=4000000&f5=20000",
        //         "id": 12
        //     },
        //     {
        //         "domain": ".youtube.com",
        //         "expirationDate": 1749606522,
        //         "hostOnly": false,
        //         "httpOnly": false,
        //         "name": "SAPISID",
        //         "path": "/",
        //         "sameSite": "unspecified",
        //         "secure": true,
        //         "session": false,
        //         "storeId": "0",
        //         "value": "BZj_8DY3EO3WLhiX/AgIqKFrpZrfrggOEC",
        //         "id": 13
        //     },
        //     {
        //         "domain": ".youtube.com",
        //         "expirationDate": 1749606522,
        //         "hostOnly": false,
        //         "httpOnly": false,
        //         "name": "SID",
        //         "path": "/",
        //         "sameSite": "unspecified",
        //         "secure": false,
        //         "session": false,
        //         "storeId": "0",
        //         "value": "g.a000jQja4aHfuQP5XHdtLus-ZStHmiRaltfsbFwcMz5BJYsxkEnZOPTmkljpsiqhwg-DXKFXfQACgYKAVASAQASFQHGX2MiPEpzmu1eaiacMQkMJNaD-hoVAUF8yKr4LWU0rr5lGGQDR2rGLuxO0076",
        //         "id": 14
        //     },
        //     {
        //         "domain": ".youtube.com",
        //         "expirationDate": 1748368101.639869,
        //         "hostOnly": false,
        //         "httpOnly": false,
        //         "name": "SIDCC",
        //         "path": "/",
        //         "sameSite": "unspecified",
        //         "secure": false,
        //         "session": false,
        //         "storeId": "0",
        //         "value": "AKEyXzXHCKBIcBg1LSYrTo5Sb0kFce4KVttWykGye-6LV_Tx-BmFNo6uGd8B8Km3YFmYH2Qd4ew",
        //         "id": 15
        //     },
        //     {
        //         "domain": ".youtube.com",
        //         "expirationDate": 1749606522,
        //         "hostOnly": false,
        //         "httpOnly": true,
        //         "name": "SSID",
        //         "path": "/",
        //         "sameSite": "unspecified",
        //         "secure": true,
        //         "session": false,
        //         "storeId": "0",
        //         "value": "A_Ct0xonlp_idMq86",
        //         "id": 16
        //     },
        //     {
        //         "domain": ".youtube.com",
        //         "expirationDate": 1731864215,
        //         "hostOnly": false,
        //         "httpOnly": true,
        //         "name": "VISITOR_PRIVACY_METADATA",
        //         "path": "/",
        //         "sameSite": "no_restriction",
        //         "secure": true,
        //         "session": false,
        //         "storeId": "0",
        //         "value": "CgJQSxIEGgAgRg%3D%3D",
        //         "id": 17
        //     }
        // ]);

        console.log("hello world");

        const agent1 = new HttpsProxyAgent('http://43.204.218.102:6002');

 

        const info = await ytdl.getInfo(url,{agent1});
        console.log("hello world 2");
        const format = ytdl.chooseFormat(info.formats, { quality: '18' });
        console.log("hello world 3");
        if (!format) {
            console.log('360p format not available.');
            return;
        }

        const dirPath = `videos/${orderId}/${linkNumber}`;
        await fs.ensureDir(dirPath);

        console.log("on first promise")
        const outputPath = `${dirPath}/video.mp4`;


        // Now Downlaod the audio file 
        // Output file path
        const outputFilePath = `${dirPath}/audio.mp3`;

        console.log("going in promise")
        // // Download the video with ytdl-core
        return { status: format };

    } catch (error) {
        console.error('Error downloading video:', error);
    }
}

async function getCookies(){
    let cookiesData = '';
    for(let i = 0;i<agentData.length;i++){
        cookiesData = cookiesData + agentData[i].name +'='+agentData[i].value+'; '
    }

    console.log("agentDatais ",cookiesData)
    return cookiesData;
}

app.get('/api', async (req, res) => {

    const resp =  await downloadVideo();
    return res.status(200).json({
        status: true,
        message:resp
    });

})


app.listen(process.env.PORT || 6002, () =>
    console.log('Example app is listening on port 6002.'),
);
