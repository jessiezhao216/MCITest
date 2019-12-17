<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-file-text" style="padding: 3px">{{messagetitle}}</i></h3>
    <div class="mt-4">
      <b-card img-src="../assets/background1.jpg" img-left title="About Me" border-variant="success">
        <b-row>
          <b-col class="bg-light">
            <br/>
            <b-row>
              <h5 class="toast-header">Username:</h5>
            </b-row>
            <b-row>
              <b-form-input
                v-model="username" type = "text" placeholder=this.username>
              </b-form-input>
            </b-row>
            <br/>
            <b-row>
              <h5 class="toast-header">Age:</h5>
            </b-row>
            <b-row>
              <b-form-input
                v-model="age" type = "number" placeholder=this.age>
              </b-form-input>
            </b-row>
            <br/>
            <b-row>
              <h5 class="toast-header">Gender:</h5>
            </b-row>
            <b-row>
              <b-form-input
                v-model="gender" type = "text" placeholder=this.gender>
              </b-form-input>
            </b-row>
            <br/>
            <b-row>
              <h5 class="toast-header">Email:</h5>
            </b-row>
            <b-row>
              <b-form-input
                v-model="email" type = "text" placeholder=this.email>
              </b-form-input>
            </b-row>
            <b-row>
              <h5 class="toast-header">Medical History:</h5>
            </b-row>
            <b-row>
              <b-form-input
                v-model="medical_history" type = "text" placeholder=this.medical_history>
              </b-form-input>
            </b-row>
            <br/>
            <b-row>
              <b-col><b-button variant="outline-info" @click = changeInfo>Confirm change</b-button></b-col>
              <b-col ><b-button to="/UserInfo" variant="outline-secondary" >Cancel</b-button></b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
import UserService from '@/services/userService'
export default {
  name: 'editInfo',
  data () {
    return {
      messagetitle: 'User Information',
      userData: '',
      user: [],
      username: '',
      age: 0,
      gender: '',
      email: '',
      medical_history: ''
    }
  },
  created () {
    this.getUser()
  },
  methods: {
    getUser: function () {
      if (!document.cookie) {
        this.$router.push('/login')
      } else {
        this.userData = document.cookie.substring(3)
        UserService.fetchUser(this.userData)
          .then(response => {
            console.log(this.userData)
            this.user = response.data
            this.username = response.data[0].username
            this.age = response.data[0].age
            this.gender = response.data[0].gender
            this.email = response.data[0].email
            this.medical_history = response.data[0].medical_history
            console.log(response.data)
          })
          .catch(error => {
            this.errors.push(error)
            console.log(error)
          })
      }
    },
    changeInfo: function (user) {
      this.user[0].username = this.username
      this.user[0].age = this.age
      this.user[0].gender = this.gender
      this.user[0].email = this.email
      this.user[0].medical_history = this.medical_history
      UserService.editInfo(this.userData, this.user[0])
        .then(response => {
          console.log(response)
          console.log('AFTER PUT ' + JSON.stringify(user, null, 5))
          this.$router.push('/UserInfo')
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

</style>
