<template>
  <div class="hero">
    <h1 class="vue-title">Test for MCI Patients!!</h1>
    <b-carousel class="carousel"
      id="carousel-1"
      v-model="slide"
      :interval="2000"
      controls
      indicators
      background="#ababab"
      img-width="960"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide img-src="../assets/jpg1.jpg" img-height=200>
        <p class="vue-title"><b><i>Time for a change !!</i></b></p>
      </b-carousel-slide>

      <b-carousel-slide img-src="../assets/jpg2.jpeg" img-height=200>
        <p class="vue-title" ><b><i>Testing your mind</i></b></p>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="../assets/jpg3.jpg" img-height=200>
        <p class="vue-title"><b><i>ust click <a href ="#/newtest">here</a> to go to</i></b></p>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import UserService from '@/services/userService'
export default {
  data () {
    return {
      slide: 0,
      sliding: null,
      user: []
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    getUser: function () {
      UserService.fetchUser(this.userData)
        .then(response => {
          console.log(this.userData)
          this.user = response.data
          console.log(response.data)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}
</script>
<style>
  .hero {
    height: 100vh;
    margin-top: 0px;
    align-items: center;
    justify-content: center;
    text-align: center;

  }
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .carousel{
    margin-left: 200px;
    margin-right: 200px;
    margin-bottom: 400px;
  }
  .vue-title {
    font-family:"Times New Roman";
    font-size: 70pt;
    margin-bottom: 10px;
    color: #5DA4C2 ;
    text-align: center;
  }
</style>
