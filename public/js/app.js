


    const weather = document.querySelector('form');
    const loter = document.querySelector('input');
    const message_1 = document.querySelector('.message-1');
    const message_2 = document.querySelector('.message-2');
    weather.addEventListener('submit',(e) => {
        e.preventDefault();
        message_1.innerText = "loading...";
        message_2.innerText = "";
        fetch("http://localhost:8000/weather?location="+loter.value)
        .then((response) => {
            response.json().then((data) => {
                if(data.error)
                {
                    message_1.innerText = data.error;
                }
                else{
                    // console.log(data.address);
                    // console.log(data.temperature);
                    message_1.innerText = "location : "+data.address;
                    message_2.innerText = "Temperature : "+ data.temperature+"Celsius";
                }
            })
        })
        .catch((error) => {
            console.log("error in fetching the data");
        })
    });