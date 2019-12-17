<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-user" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id = "register form">
        <b-form-group
          label-cols-lg="3"
          label="User Information"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-group label-cols-sm="3" label="Username:" label-align-sm="right" >
            <b-form-input id = "input-live" :state="nameState" aria-describedby="input-live-feedback" v-model="username" placeholder="Enter your name"></b-form-input>
            <b-form-invalid-feedback id="input-live-feedback">
              Enter at least 3 letters
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group label-cols-sm="3" label="Email:" label-align-sm="right" >
            <b-form-input v-model="email" type = "email" placeholder="Enter your email"></b-form-input>
          </b-form-group>

          <b-form-group label-cols-sm="3" label="gender:" label-align-sm="right" >
            <b-form-radio-group id="radio-group-2" v-model="gender" name="radio-sub-component">
              <b-form-radio value="Female">Female</b-form-radio>
              <b-form-radio value="Male">Male</b-form-radio>
            </b-form-radio-group>
          </b-form-group>

          <b-form-group label-cols-sm="3" label="Age:" label-align-sm="right" >
            <b-form-input v-validate="{ required: true, min: 3, max: 100  }" type = "number" v-model="age"></b-form-input>
          </b-form-group>

          <b-form-group label-cols-sm="3" label="Password:" label-align-sm="right" >
            <b-form-input
              d = "input-psd" aria-describedby="input-psd-feedback" :state="psdState" v-model="password" type = "password" placeholder="Enter your password">
            </b-form-input>
            <b-form-invalid-feedback id="input-psd-feedback">
              The password must be at least 6 digital
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group label-cols-sm="3" label="Confirm Password:" label-align-sm="right" >
            <b-form-input id = "input-rpsd" aria-describedby="input-rpsd-feedback" :state="rpsdState" v-model="repassword" type = "password" placeholder="Repeat your password"></b-form-input>
            <b-form-invalid-feedback id="input-rpsd-feedback">
              The two password must be the same
            </b-form-invalid-feedback>
          </b-form-group>
          <b-form-group label-cols-sm="3" label="medical_history:" label-align-sm="right" >
            <b-form-input v-model="medical_history" type = "medical_history" placeholder="medical_history"></b-form-input>
          </b-form-group>
        </b-form-group>

      <b-button squared variant="secondary" @click="userRegister" class="btn btn-success btn-lg ">Register</b-button>
<!--      <p class="typo__p" v-if="submitStatus === 'OK'">Recommending a new novel!</p>-->
<!--      <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>-->
<!--      <p class="typo__p" v-if="submitStatus === 'PENDING'">Adding···</p>-->
    </div>
<!--    <b-container fluid>-->
<!--      <b-row>-->
<!--        <b-col class="mr-sm-2" align-self="center"><h6>Username: </h6></b-col>-->
<!--        <b-col><input class="form__input" type="text" v-model="username"/></b-col>-->
<!--      </b-row>-->
<!--      <b-row>-->
<!--        <b-col class="mr-sm-2" align-self="center"><h6>Gender: </h6></b-col>-->
<!--        <b-col><input class="form__input" type="text" v-model="gender"/></b-col>-->
<!--      </b-row>-->
<!--      <b-row>-->
<!--        <b-col class="mr-sm-2" align-self="center"><h6>Age: </h6></b-col>-->
<!--        <b-col><input class="form__input" type="text" v-model="age"/></b-col>-->
<!--      </b-row>-->
<!--      <b-row>-->
<!--        <b-col class="mr-sm-2" align-self="center"><h6>Password: </h6></b-col>-->
<!--        <b-col><input class="form__input" type="text" v-model="password"/></b-col>-->
<!--      </b-row>-->
<!--      <b-row>-->
<!--        <b-col class="mr-sm-2" align-self="center"><h6>Conform Password: </h6></b-col>-->
<!--        <b-col><input class="form__input" type="text" v-model="password"/></b-col>-->
<!--      </b-row>-->
<!--      <b-row>-->
<!--        <b-col class="mr-sm-2" align-self="center"><h6>Email: </h6></b-col>-->
<!--        <b-col><input class="form__input" type="text" v-model="email"/></b-col>-->
<!--      </b-row>-->
<!--    </b-container>-->
  </div>
</template>

<script>

import UserService from '@/services/userService'

export default {
  computed: {
    nameState () {
      return this.username.length > 2
    },
    psdState () {
      return this.password.length >= 6
    },
    rpsdState () {
      return this.password === this.repassword
    }
  },
  name: 'Register',
  data () {
    return {
      messagetitle: 'Register ',
      username: '',
      password: '',
      repassword: '',
      email: '',
      medical_history: '',
      gender: '',
      age: 0,
      user: {},
      submitStatus: null
    }
  },
  methods: {
    userRegister: function () {
      console.log('submit!')
      // this.submitStatus = 'PENDING'
      setTimeout(() => {
        // this.submitStatus = 'OK'
        var user = {
          username: this.username,
          email: this.email,
          age: this.age,
          gender: this.gender,
          password: this.password,
          medical_history: this.medical_history
        }
        this.user = user
        console.log('Successfully registered : ' + JSON.stringify(this.user, null, 5))
        this.submitUser(this.user)
      }, 500)
    },
    submitUser: function (user) {
      UserService.userRegister(user)
        .then(response => {
          console.log(response.data)
          console.log(response.data.message)
          if (response.data.message === 'The username is occupied') {
            alert('The username is occupied')
            this.username = ''
          } else {
            console.log('Register!')
            console.log('Submitting in submitUser : ' + user)
            this.$router.push('login')
          }
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
</style>
