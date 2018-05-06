

// get request ()

let k;
let pick;

var app = new Vue({
    el: '#poster',
    show: true,

    data: {

        breedDogArr: [{ breed: 'Golden Retriever', link:'https://dog.ceo/api/breed/retriever/golden/images' },
        { breed: 'Hound', link: 'https://dog.ceo/api/breed/hound/images' },
        { breed: 'Pug' , link: 'https://dog.ceo/api/breed/pug/images' },
        { breed: 'Lab', link: 'https://dog.ceo/api/breed/lab/images'},
        { breed: 'Collie', link: 'https://dog.ceo/api/breed/collie/images' },
        { breed: 'Husky', link: 'https://dog.ceo/api/breed/husky/images'},
        { breed: 'Pomeranian', link: 'https://dog.ceo/api/breed/pomeranian/images'},
        { breed: 'Corgi', link: 'https://dog.ceo/api/breed/corgi/images'},
        { breed: 'Otterhound', link: 'https://dog.ceo/api/breed/otterhound/images'},
        { breed: 'Mastiff', link: 'https://dog.ceo/api/breed/mastiff/images'},
        { breed: 'Poodle', link: 'https://dog.ceo/api/breed/poodle/images'},
        { breed: 'Doberman', link: 'https://dog.ceo/api/breed/doberman/images'},
        { breed: 'Bulldog', link: 'https://dog.ceo/api/breed/bulldog/images'},
        ],
        breedDog: 'r',
        name: '',
        activeDog: 0,
        socialDog: 0,
        trainedDog: 0,
        breedHref: 't',
    },
    methods: {
        numGenReceiver: function (arg1, arg2, arg3, arg4, arg5, arg6) {
            this.actNum(arg1);
            this.indNum(arg2);
            this.trainNum(arg3);
            this.breedChooser(arg4);
            this.breedImgFu(arg5);
            this.nameGiven(arg6)
        },
        actNum: function () {
            this.activeDog = (Math.floor(Math.random() * 25 + 1))
        },
        indNum: function () {
            this.socialDog = (Math.floor(Math.random() * 25 + 1))
        },
        trainNum: function () {
            this.trainedDog = (Math.floor(Math.random() * 25 + 1))
        },
        breedChooser: function () {
            pick = (Math.floor(Math.random() * this.breedDogArr.length))
            this.breedDog = this.breedDogArr[pick].breed;
        },
        breedImgFu: function () {
            let i = this.breedDogArr[pick].link
          
            $.ajax({
                type: 'GET',
                url: i,
                data: { get_url: 'value' }, 
                dataType: 'json',
                success: function (data) {
                    k = (Math.floor(Math.random() * data.message.length))
                    app.breedHref = String(data.message[k])
                }
            });
        },
        nameGiven: function () {
            $.ajax({
                type: 'GET',
                url: 'http://localhost:3010/api/dog/names',
                dataType: 'json',
                success: function (data) {
                    console.log(data.vills.length)
            let i = (Math.floor(Math.random() * data.vills.length))
            console.log(i)
            app.name = data.vills[i]
            console.log(app.name)
                }
            });
        }
    }
})

                          

