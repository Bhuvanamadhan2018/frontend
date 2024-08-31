const states=[
            {name:"AndraPradesh",cities:["Hyderabad","Chittoor","Kadapa","Nellore"]

            },{
                name:"TamilNadu",cities:["Chennai","Tirupattur","Pacchur","Selam","Thiruchi"]
            }
];
const stateSelect = document.getElementById("states");
const citySelect = document.getElementById("cities");

states.forEach((state) => {
    const option = document.createElement("option");
    option.value= state.name;
    option.textContent = state.name;
    stateSelect.appendChild(option);

});
stateSelect.addEventListener("change",(e)=>{
    const selectedState = states.find((state)=>
    state.name === e.target.value);
    citySelect.innerHTML ="";
    selectedState.cities.forEach((city)=>{
        const option = document.createElement("option");
        option.value=city;
        option.textContent = city;
        citySelect.appendChild(option);
    });
});