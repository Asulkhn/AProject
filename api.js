const petro = document.getElementById("Petro")
const tucson = document.getElementById("Tucson")
const tokyo = document.getElementById("Tokyo")
const saratov = document.getElementById("Saratov")
const zitomir = document.getElementById("Zitomir")
async function Api() {
    const response_petro=await fetch('https://api.open-meteo.com/v1/forecast?latitude=54.8667&longitude=69.15&current=temperature_2m&hourly=temperature_2m')
    const response_tokyo=await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current=temperature_2m&hourly=temperature_2m')
    const response_tucson=await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current=temperature_2m&hourly=temperature_2m')
    const response_saratov=await fetch('https://api.open-meteo.com/v1/forecast?latitude=51.5406&longitude=46.0086&current=temperature_2m&hourly=temperature_2m')
    const response_zitomir=await fetch('https://api.open-meteo.com/v1/forecast?latitude=50.2649&longitude=28.6767&current=temperature_2m&hourly=temperature_2m')
    const data_zitomir = await response_zitomir.json()
    const data_saratov = await response_saratov.json()
    const data_petro = await response_petro.json()
    const data_tokyo = await response_tokyo.json()
    const data_tucson = await response_tucson.json()
    return [data_petro, data_tokyo, data_tucson]
}

async function output() {
    try {
        let out = await Api()
        console.log(out)
        petro.textContent = `Air temperature: ${out[0].current.temperature_2m} \u0080C`
        tucson.textContent = `Air temperature: ${out[2].current.temperature_2m} \u0080C`
        tokyo.textContent = `Air temperature: ${out[1].current.temperature_2m} \u0080C`
        saratov.textContent = `Air temperature: ${out[4].current.temperature_2m} \u0080C`
        zitomir.textContent = `Air temperature: ${out[5].current.temperature_2m} \u0080C`
    }
    catch(error) {
        console.log(error)
    }
    finally {
        setTimeout(output, 10000)
    }
}

output()