<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-bookmark" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">

          <form @submit.prevent="submit">
            <div class="form-group">
              <label class="form__label" name="name">Please enter tester name:</label>
              <input class="form__input" type="text" v-model.trim="testername"/>
            </div>

            <div class="form-group">
              <label class="form__label">Please enter the age of the tester</label>
              <input class="form__input" type="number" v-model.trim="agetester"/>
            </div>

            <div class="form-group">
              <label class="form__label" name="name">Please enter test name:</label>
              <input class="form__input" type="text" v-model.trim="name"/>
            </div>

            <p>
              <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">Start</button>
            </p>
            <p class="typo__p" v-if="submitStatus === 'OK'">New test!</p>
            <p class="typo__p" v-if="submitStatus === 'PENDING'">Adding···</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import VueSweetalert from 'vue-sweetalert'
import TestService from '@/services/TestService'
Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)
Vue.use(VueSweetalert)
export default {
  name: 'NewTest',
  data () {
    return {
      file: null,
      messagetitle: ' New Test ',
      message: '',
      name: '',
      Testername: '',
      agetester: 0,
      submitStatus: null
    }
  },
  created () {
    this.isSign()
  },
  methods: {
    isSign: function () {
      if (!document.cookie) {
        this.$router.push('/login')
        alert('You need to sign in first')
      }
    },
    submit () {
      console.log('submit!')

      this.submitStatus = 'PENDING'
      setTimeout(() => {
        this.submitStatus = 'OK'
        var test = {
          name: this.name,
          testername: this.testername,
          agetester: this.agetester
        }
        this.test = test
        console.log('Submitting in TestHistory : ' + JSON.stringify(this.test, null, 3))
        this.submitHistory(this.test)
      }, 500)

      this.$router.params = this.file
      this.$router.push('TestContent')
      console.log(this.file.name)
    },
    submitHistory: function (test) {
      console.log('submit history!')
      console.log('Submitting in TestHistory : ' + test)
      TestService.postTest(test)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
  #app1 {
    width: 95%;
    margin: 20px;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
  }
  .typo__p {
    width: 540px;
    font-size: x-large;
  }
  .btn1 {
    width: 300px;
    font-size: x-large;
  }
  p {
    margin-top: 20px;
  }

  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }
  .error {
    border-color: red;
    background: #157ffb;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }
</style>
