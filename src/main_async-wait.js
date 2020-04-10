const minhaPromisse = () => new Promise((resolve, reject) =>{
    setTimeout(() => {resolve('OK'), 2000});
});

async function executaPromisse(){
    const  response = await minhaPromisse();
    console.log(response);
}

executaPromisse();