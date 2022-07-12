
function getData(){
    box.innerHTML=null;
    let city=document.getElementById('city1').value
     let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&&units=metric&appid=92ffd5174d1383d9732da8aa68c5dafb`
    fetch(url)
        .then(function (res){
            return res.json()
        })
        .then(function(res){
            console.log(res);
            append(res);
        }).catch(function(err){
            console.log(err)
        })
    }
    let box=document.getElementById('box')
    function append(data){
        let url=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
        let container=document.createElement('div'); 
        container.setAttribute("class","cards")
        container.innerHTML=null;
        let h2=document.createElement('h2');
        h2.innerText=data.name;
        let min_temp=document.createElement("p");
        min_temp.innerText=`Min-Temp: ${(data.main.temp_min)} ℃`;
        let max_temp=document.createElement("p");
        max_temp.innerText=`Max-Temp: ${(data.main.temp_max + 1)} ℃`;
        let wind = document.createElement('p');
        wind.innerText = `Wind:${data.wind.speed}`;
        let clouds = document.createElement('p');
        clouds.innerText = `Clouds:${data.clouds.all}`;
        let weather = document.createElement('p');
        weather.innerText = `weather:${data.weather[0].main}`;
        let img = document.createElement('img');
        img.src= `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        container.append(h2,min_temp,max_temp,wind,clouds,weather,img);
        box.append(container);
        let iframe=document.getElementById("gmap_canvas");
        iframe.src=url;
    }

    function getlocation(){
        navigator.geolocation.getCurrentPosition(success);
        function success(pos){
            const crd = pos.coords;
            console.log('Your current position is:');
            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);
            console.log(`More or less ${crd.accuracy} meters.`);
        }
    }
    getlocation();

    


    //let url=`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`