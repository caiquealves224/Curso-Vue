new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods : {
        alertar(){
            alert("Uahauuu")
        },
        setValor(){
            this.valor = event.target.value;
        }
    }
})