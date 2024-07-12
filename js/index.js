var dia = document.getElementById('dia')
var hora = document.getElementById('hora')
var minuto = document.getElementById('minuto')
var segundo= document.getElementById('segundo')

const data = "17 oct 2024"

function countDown(){
  const dataLanc = new Date(data)
  const hoje = new Date()

  const segTotal = (dataLanc - hoje)/1000

  const finalDias = Math.floor(segTotal / 60/60/24)
  const finalHoras = Math.floor(segTotal /60/60) %24
  const finalMinutos = Math.floor(segTotal /60) %60
  const finalSegundos = Math.floor(segTotal) %60

  dia.innerHTML = `${finalDias}D`
  hora.innerHTML = `${formato(finalHoras)}H`
  minuto.innerHTML = `${formato(finalMinutos)}M`
  segundo.innerHTML = `${formato(finalSegundos)}S`

}

function formato(tempo){
  return tempo < 10 ? `0${tempo}` : tempo
}

countDown();
setInterval(countDown, 1000)
