const btn = document.getElementById('btn');

function seleccionado( num){
    document.getElementById('texto').innerHTML = `You sected ${num} out of 5`;
}

function ponderacion(){
    document.getElementById('calificar').classList.add('inactive');
    document.getElementById('agradeser').classList.remove('inactive');
}