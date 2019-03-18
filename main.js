

window.addEventListener("load", ()=>{
    const dagur =["Sunnudaginn","Mánudaginn","Þriðjudaginn","Miðvikudaginn","Fimmtudaginn","Föstudaginn","Laugardaginn"];
    const months = ["janúar","febrúar","mars","apríl","maí","júní","júlí","ágúst","september","október","nóvember","desember"];
    fetch("https://apis.is/concerts")
    .then((results)=>{
        return results.json();
    })
    .then((json)=> {
        console.log(json);
        
        for(let i=0; i<json.results.length;i++){
            const card = document.getElementById("card");
            console.log(json.results[i]);
            
            const date = new Date(json.results[i].dateOfShow)
            let minutes = date.getMinutes()
            if (minutes < 10) {
                minutes="0"+ minutes;
            }

            const showDate = `
            ${dagur[date.getDay()]} 
            ${date.getDate()}. 
            ${months[date.getMonth()]}
            kl. ${date.getHours()}:${minutes}

            `   
                 
            card.innerHTML += `
           
            <div class="each">
                <h1>${json.results[i].eventDateName}</h1>
                <h3>${showDate}</h3>
                <img src="${json.results[i].imageSource}"/>
                <p>${json.results[i].eventHallName}</p>
                <p>${json.results[i].name}</p>
                <p>${json.results[i].userGroupName}</p> 
            </div>           
            `
        }   

    })
})

