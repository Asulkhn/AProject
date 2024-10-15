const petro = document.getElementById("Petro")
const tucson = document.getElementById("Tucson")
const tokyo = document.getElementById("Tokyo")

async function Api() {
    const response_petro=await fetch('https://api.open-meteo.com/v1/forecast?latitude=54.8667&longitude=69.15&current=temperature_2m&hourly=temperature_2m')
    const response_tokyo=await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current=temperature_2m&hourly=temperature_2m')
    const response_tucson=await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current=temperature_2m&hourly=temperature_2m')
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
    }
    catch(error) {
        console.log(error)
    }
    finally {
        setTimeout(output, 10000)
    }
}

output()