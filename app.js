const DATA = {
    docente: {
        encuesta: "https://docs.google.com/forms/d/e/1FAIpQLSegc0tcnshSPLuPfuNAoTdcE8nngbo5RP6AfGd_-mTEedizfw/viewform?embedded=true",
        simulador: "https://simusimu-t7.bubbleapps.io/version-test?debug_mode=true"
    },
    estudiante: {
        encuesta: "https://docs.google.com/forms/d/e/1FAIpQLScQziaYJ7qXg2Kka09Cn5rk4Sz2mUWdKNB-Iqu1fIBIjNvVmg/viewform?embedded=true",
        simulador: "https://simusimu-t7.bubbleapps.io/version-test?debug_mode=true"
    }
};

function cargar(tipo){
    const data = DATA[tipo];

    document.getElementById('contenido').style.display = 'block';
    document.getElementById('titulo').innerText = `Encuesta para ${tipo}`;
    document.getElementById('formulario').src = data.encuesta;
    document.getElementById('link').href = data.encuesta;
    document.getElementById('simulador').onclick = () => {
    window.open(data.simulador, '_blank');
};

    document.getElementById('simulador').style.display = 'none';

    window.scrollTo({
        top: document.getElementById('contenido').offsetTop,
        behavior: 'smooth'
    });
}

function activarSimulador(){
    document.getElementById('simulador').style.display = 'inline-block';
}