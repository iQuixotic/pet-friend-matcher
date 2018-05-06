console.log('connected with questionLogic.js');
let showIt = true;
var app = new Vue({
    el: '#app',
    show: true,

    data: {          //Frame active pts
        activeArr: [ 'On an average weekday, I have several hours to spend with my pet.',
        'On the weekend, I have lots of time to spend playing with my new friend.',
        'I would take my doggy on vacation with me.',
        'I always make time to take my doggie on daily walks.',
        'I live an active lifestyle.',

        //Frame social pts
        'I need my bonding time just for me and my doggie :)',
        'I have other pets that my new friend can interact with.',
        'I have a large family, so someone is always at the house.',
        'I feel better when I snuggle with/pet something soft... And I\'\m not ashamed to admit it',
        'I feel good when a doggie lays in my lap',

        //Frame trained pts
        'I couldn\'\t handle a difficult pet',
        'I need my doggie to be house-trained',
        'My dog will often be exposed to new environments and situations.',
        'My best-friend can never have table scraps.',
        'My dog will have a service/duty that he/she will be expected to perform.', 
    
        ],
       
        activePts: 0,
        socialPts: 0,
        trainedPts: 0,
        message: 'Hello to you who may be reading this !! - I can Vue',
        count: 0,
        submit: 'Next',
        final: 'Find My Friend !!!',

        picked: 3, 
        pickedArr: []
    },
    methods: {
        countUp: function(arg){
            this.count +=1 
            
        }, 
        countDown: function(arg){
            this.count -=1
        },
        handlerMi: function(arg1, arg2){
            this.pickedArr.pop(arg1);
            this.countDown(arg2);
         },
         handlerPl: function(arg1, arg2, arg3){
            this.countUp(arg3);
            this.pickedArr.push(parseInt(this.picked))(arg1, arg2);
         },
        // showQ: function(){
        //     showIt=false;
        //     changeQ();
        // }, 
        // changeQ: setTimeout(function(){
        //     showIt = true;
        // }, 500) 
        act: function(arg1, arg2){
            for(i=0; i<5; i++){
                this.activePts += this.pickedArr[i];
            }
            this.soc(arg1);
            this.trai(arg2);
         },
        soc: function(arg){
            for(i=5; i<10; i++){
                this.socialPts += this.pickedArr[i];
            }
         },
         trai: function(arg){
            for(i=10; i<15; i++){
                this.trainedPts += this.pickedArr[i];
            }
         },
    }
})

