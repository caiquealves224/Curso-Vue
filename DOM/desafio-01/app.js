new Vue ({
    el: '#desafio',
    data : {
        nome : "Caique",
        idade : "19",
        link : "https://scontent-ort2-2.cdninstagram.com/vp/8e14c20792b14b1440ab7ef2d0d7e7ea/5CCCCB9E/t51.2885-15/e35/47692515_396249324537552_7376084508702151747_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com"
    },

    methods : {
        random(){
            return Math.random() * 1
        }
    }
})