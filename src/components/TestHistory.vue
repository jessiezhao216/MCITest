<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-book" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="test" :options="options">
        <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteTest(props.row._id)"></a>
        <a slot="givegrade" slot-scope="props"  @click="giveGrade(props.row._id)">
        <b-button size="sm" class="fa fa-edit fa-2x"></b-button>
      </a>
      </v-client-table>
    </div>
  </div>
</template>

<script>
import testService from '@/services/testService'
import Vue from 'vue'
import VueTables from 'vue-tables-2'
Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})

export default {
  name: 'TestHistory',
  data () {
    return {
      messagetitle: ' Test History ',
      test: [],
      props: ['_id'],
      errors: [],
      columns: ['_id', 'name', 'testername', 'grade', 'givegrade', 'remove'],
      options: {
        perPage: 10,
        filterable: ['name', 'testername'],
        sortable: ['name', 'grade'],
        headings: {
          _id: 'ID',
          name: 'Test name',
          testername: 'Tester name',
          grade: 'Grade',
          remove: 'Delete Test'
        }
      }
    }
  },
  created () {
    this.loadTest()
    this.isSign()
  },
  methods: {
    isSign: function () {
      if (!document.cookie) {
        this.$router.push('/login')
        alert('You need to sign in first')
      }
    },
    loadTest: function () {
      testService.fetchTest()
        .then(response => {
          this.test = response.data
          console.log(this.test)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    deleteTest: function (id) {
      this.$swal({
        title: 'Are you sure?',
        text: 'You can\'t Undo this action',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'OK Delete it',
        cancelButtonText: 'Cancel',
        showCloseButton: true
        // showLoaderOnConfirm: true
      }).then((result) => {
        console.log('SWAL Result : ' + result)
        if (result === true) {
          testService.deleteTest(id)
            .then(response => {
              this.message = response.data
              console.log(this.message)
              this.loadTest()
              this.$swal('Deleted', 'You successfully deleted the test ' + JSON.stringify(response.data, null, 5), 'success')
            })
            .catch(error => {
              this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
              this.errors.push(error)
              console.log(error)
            })
        } else {
          this.$swal('Cancelled', 'Your Test still Counts!', 'info')
        }
      })
    },
    giveGrade: function (id) {
      this.$router.params = id
      this.$router.push('giveGrades')
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 90%;
    margin: 0 auto;

  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
