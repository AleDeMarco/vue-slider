var app = new Vue({
  el: '#app',
  data: {
    counter: 0,
    photos: [
      'img/1.jpg',
      'img/2.jpg',
      'img/3.jpg',
      'img/4.jpg'
    ],
    timing: ''
  },
  created(){this.timing = setInterval(this.next,2000)},
  methods: {
    next(){(this.counter == (this.photos.length - 1)) ? this.counter = 0 : this.counter++;},
    prev(){(this.counter < 1) ? this.counter = (this.photos.length - 1) : this.counter--;},
    change(selected){
      this.counter = selected;
      clearInterval(this.timing);
    }
  }
});
