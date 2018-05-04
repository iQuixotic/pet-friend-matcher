

// get request ()


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
        breedDog: '',
        name: '',
        activeDog: 0,
        socialDog: 0,
        trainedDog: 0,
        breedHref: '',

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
            console.log(pick)
            let k;
            let i = this.breedDogArr[pick].link
            console.log(i)
            $.ajax({
                type: 'GET',
                url: i,
                data: { get_url: 'value' }, 
                dataType: 'json',
                success: function (data) {
                    console.log(data.message.length)
                    k = (Math.floor(Math.random() * data.message.length))
                    console.log(k)
                    console.log(data.message[k])
                    breedHref = data.message[k]
                    console.log(breedHref) 
                   
                }

            });
            // let pic = (Math.floor(Math.random) * i)
            // this.breedImg = this.breedDogArr[pick].link.message[pic]       
            // console.log(this.breedImg) 
            // console.log(i);
            // console.log(pic);
        },
        nameGiven: function () {
            let i = (Math.floor(Math.random) * vills.length)
            this.name = vills[i]
        }
    }
})

                            // console.log(petNames.random());
                            // $($send).click($dogName=petNames.random());
                            // console.log('sucess', data);

