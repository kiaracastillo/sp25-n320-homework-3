async function getApiData() {
    console.log("Getting API Data");

    try {
        const apiFetchResp =  await fetch(`https://digimon-api.vercel.app/api/digimon`);
    console.log("Api Response:", apiFetchResp);

    const apiJsonResp = await apiFetchResp.json();
    console.log("API JSON:", apiJsonResp[0]);
    }catch (err) {
        console.log("API Error:", err);
    }

    console.log("API Done");

  /**  fetch(`https://digimon-api.vercel.app/api/digimon`)

    .then(function (resp) {
        console.log("Api Response:", resp);
        return resp.json();
    })
    .then(function (resp) {
        console.log("API JSON:", resp[0]);
    })
    .catch(function (err) {
        console.log("API Error:", err);
    })
    .finally(function () {
        console.log("API Done");
    }); **/
}

getApiData();

function getSlowResource(timerAmount){
    return new Promise(function (resolve, reject) {
        if (timerAmount > 2000) {
            reject("I'm not waiting for that");
        } else {
            setTimeout(function () {
                resolve("Lo hiciste!");
            }, timerAmount);
        }
    });
}

function run() {
    console.log("Attempt Resource Load");
    getSlowResource(3000)
    .then(resp=> {
        console.log("Resource Loaded:", resp);
    }).catch((err) => {
        console.log("Resource Load Unsuccessful:", err);
    });
}

//run();