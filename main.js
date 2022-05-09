'use strict';

const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {
    const seconds = document.getElementById('seconds');
    const minutes = document.getElementById('minutes');
    const hours = document.getElementById('hours');
    const days = document.getElementById('days');

    const qtdSegundos = tempo % 60;
    const qtdMinutos = Math.floor((tempo % (60*60))/60);
    const qtdHoras = Math.floor((tempo % (60*60*24))/(60*60));
    const qtdDias = Math.floor(tempo /(60*60*24));

    seconds.textContent = formatarDigito(qtdSegundos);
    minutes.textContent = formatarDigito(qtdMinutos);
    hours.textContent = formatarDigito(qtdHoras);
    days.textContent = formatarDigito(qtdDias);
}

const contagemRegrassiva = (tempo) => {
    const pararContagem = () => clearInterval(id);
    const contar = () => {
        if(tempo === 0){
            pararContagem();
        }
        // console.log (tempo); (demo)
        atualizar(tempo);
        tempo--;
    }
    const id = setInterval(contar, 1000);
}

const tempoRestante = () => {
    // 01/01/1970 - contador inicial do js
    const dataEvento = new Date ('2022-06-22 00:00:01');
    const hoje = Date.now(); // data atual
    return Math.floor((dataEvento - hoje) / 1000);
}
contagemRegrassiva (tempoRestante());