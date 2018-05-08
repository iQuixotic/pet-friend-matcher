console.log('you there tommy ?')

var app2 = new Vue({
  el: '#app2',
  show: true,

  data: {

    // breedDog: '',
    // name: '',
    // activeDog: 0,
    // socialDog: 0,
    // trainedDog: 0,
    // breedHref: '',
  },
  methods: {
    getDogInfo: function () {

      // $.ajax({
      //   type: 'GET',
      //   url: 'http://localhost:3010/admin/shelter',
      //   // data: { },
      //   dataType: 'json',
      //   success: function (data) {
      console.log('awesome');
      // console.log(data);
      //}
      //});
    },
    // getHumanInfo: function () {
    //   $.ajax({
    //     type: 'GET',
    //     url: 'http://localhost:3010/api/dog/names',
    //     dataType: 'json',
    //     success: function (data) {
    //       console.log(data.vills.length)
    //       let i = (Math.floor(Math.random() * data.vills.length))
    //       console.log(i)
    //       app.name = data.vills[i]
    //       console.log(app.name)
    //     }
    //   });
    // },
    // board: function () {

    //   data = {
    //     breed: this.breedDog,
    //     name: this.name,
    //     act: this.activeDog,
    //     soc: this.socialDog,
    //     train: this.trainedDog,
    //     img: this.breedHref,
    //   }

    //   $.ajax({
    //     load: console.log(data),
    //     type: 'POST',
    //     url: 'http://localhost:3010/admin/shelter',
    //     data: data,

    //     success: function (data) {
    //       console.log(data)

    // }
    //   });
  }
});




