

// let showIt = true;
var app = new Vue({
    el: '#poster',
    show: true,

    data: {

        breedDogArr: [{ breed: 'German Shepard' },
        { breed: 'Hound' },
        { breed: 'Pug' }
        ],
        breedDog: '',
        activeDog: 0,
        socialDog: 0,
        trainedDog: 0,

    },
    methods: {
        numGenReceiver: function (arg1, arg2, arg3, arg4) {
            this.actNum(arg1);
            this.indNum(arg2);
            this.trainNum(arg3);
            this.breedChooser(arg4)
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
            let pick = (Math.floor(Math.random() * this.breedDogArr.length))
            this.breedDog = this.breedDogArr[pick].breed;
            // holderPasser = this.breedDog;
        },
    }
})




// console.log(holderPasser);
// let holderPasser = breedDog;
// breedChooser();
// console.log(breedDog);
// console.log('connected with questionLogic.js');

// module.exports = {holderPasser, app}