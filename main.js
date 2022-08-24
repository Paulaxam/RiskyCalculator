let numero = '';
let datos = [];
let ans = 0;
let n1 = document.querySelector('#n1');
let n2 = document.querySelector('#n2');
let n3 = document.querySelector('#n3');
let n4 = document.querySelector('#n4');
let n5 = document.querySelector('#n5');
let n6 = document.querySelector('#n6');
let n7 = document.querySelector('#n7');
let n8 = document.querySelector('#n8');
let n9 = document.querySelector('#n9');
let n0 = document.querySelector('#n0');
let mas = document.querySelector('#suma');
let menos = document.querySelector('#resta');
let div = document.querySelector('#div');
let por = document.querySelector('#mult');
let perc = document.querySelector('#porcent');
let punto = document.querySelector('#punto');
let borrar = document.querySelector('#borrar');
let pantalla = document.getElementById('numero');
let igual = document.querySelector('#igual');
let operacion = document.getElementById('operacion');

let botones = [n1,n2,n3,n4,n5,n6,n7,n8,n9,n0,mas,menos,div,por,perc,punto,borrar,igual];

botones.forEach(element => {
    element.addEventListener('click', obtenerDato);
});

function obtenerDato(e) {
    let boton = e.target.id;

    switch (boton) {
        case 'n1':
            if(numero.length <= 10) {
                numero = numero + '1';
                pantalla.innerHTML = numero;
            }
            break;

        case 'n2':
            if(numero.length <= 10) {
                numero = numero + '2';
                pantalla.innerHTML = numero;
            }
            break; 
            
        case 'n3':
            if(numero.length <= 10) {
                numero = numero + '3';
                pantalla.innerHTML = numero;
            }
            break;
    
        case 'n4':
            if(numero.length <= 10) {
                numero = numero + '4';
                pantalla.innerHTML = numero;
            }
            break;

        case 'n5':
            if(numero.length <= 10) {
                numero = numero + '5';
                pantalla.innerHTML = numero;
            }
            break;
    
        case 'n6':
            if(numero.length <= 10) {
                numero = numero + '6';
                pantalla.innerHTML = numero;
            }
            break; 
                
        case 'n7':
            if(numero.length <= 10) {
                numero = numero + '7';
                pantalla.innerHTML = numero;
            }
            break;
        
        case 'n8':
            if(numero.length <= 10) {
                numero = numero + '8';
                pantalla.innerHTML = numero;
            }
            break;
            
        case 'n9':
            if(numero.length <= 10) {
                numero = numero + '9';
                pantalla.innerHTML = numero;
            }
            break;

        case 'n0':
            if(numero.length <= 10) {
                numero = numero + '0';
                pantalla.innerHTML = numero;
            }
            break;

        case 'punto':
            if(numero.indexOf('.') == -1 && numero.length <= 10) {
                numero = numero + '.';
                pantalla.innerHTML = numero;
            }
            break;

        case 'borrar':
            numero = '';
            datos = [];
            pantalla.innerHTML = numero;
            operacion.innerHTML = '';
            break;

        case 'suma':
                datos.push(Number(numero));
                datos.push('+');
                numero = '';
                operacion.innerHTML = datos.join('');
                pantalla.innerHTML = numero;
            break; 

        case 'resta':
            datos.push(Number(numero));
            datos.push('-');
            numero = '';
            operacion.innerHTML = datos.join('');
            pantalla.innerHTML = numero;
            break;
        
        case 'mult':
            datos.push(Number(numero));
            datos.push('x');
            numero = '';
            operacion.innerHTML = datos.join('');
            pantalla.innerHTML = numero;
            break;

        case 'div':
            datos.push(Number(numero));
            datos.push('/');
            numero = '';
            operacion.innerHTML = datos.join('');
            pantalla.innerHTML = numero;
            break;

        case 'porcent':
            datos.push(Number(numero));
            datos.push('%');
            numero = '';
            operacion.innerHTML = datos.join('');
            pantalla.innerHTML = numero;
            break;
        
        case 'igual':
            if(datos.length >= 2 && numero !== '') {
                datos.push(Number(numero));
            }
            operacion.innerHTML = datos.join('');
            if(datos.length > 2) {
                pantalla.innerHTML = operar();
            }
            numero = '';
            datos = [];
            break;

    }

    function operar() {
        for(let i=1; i<datos.length; i = i+2) {
            if (datos.indexOf('%') === -1) {
                let preans

                if(datos[i] === '+') {
                    datos[i+1] = datos[i-1] + datos[i+1];
                } else if (datos[i] === '-') {
                    datos[i+1] = datos[i-1] - datos[i+1];
                } else if (datos[i] === '/') {
                    datos[i+1] = datos[i-1] / datos[i+1];
                } else if (datos[i] === 'x' && datos[i+2] !== '%') {
                    datos[i+1] = datos[i-1] * datos[i+1];
                } 

                preans = String(datos[datos.length-1]);

                if (preans.length >= 11) {
                    operacion.classList.add('smalltxt')
                    pantalla.classList.add('smalltxt');
                    ans = "Too long, didn't read 😘"
                } else {
                    ans = datos[datos.length-1];
                }
                
            } else if (datos.indexOf('%') !== -1) {
                if(datos.length === 4 && datos[3] === '%' && datos[1] === 'x') {
                    ans = datos[0]*datos[2]*0.01;
                } else {
                    operacion.classList.add('smalltxt')
                    pantalla.classList.add('smalltxt');
                    ans = 'Are you serious?'
                }
            } 
        }

        return ans

    }
}