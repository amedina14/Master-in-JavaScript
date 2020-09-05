var bicicleta = {
    color: 'red',
    model: 'BMX',
    frenos: 'De disco',
    velocidadMaxima: '60km',
    cambiaColor: function(nuevo_color){
        //bicicleta.color = nuevo_color;
        this.color = nuevo_color;
    }
};

bicicleta.cambiaColor('azul');
console.log(bicicleta);