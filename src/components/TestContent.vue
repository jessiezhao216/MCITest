/* eslint-disable */
<template>
  <div id= "app1" class="container">
  <div class="jumbotron jumbotron-fluid pt-1">
    <div class="container">
    <h1 class="vue-title">Online Test</h1>
    <p class="lead">single choice</p>
      <p class="lead">A represents 0 score</p>
      <p class="lead">B represents 20 score</p>
      <p class="lead">C represents 10 score</p>
    </div>
  </div>

<!--      <div class="progress">-->
<!--        <div class="progress-bar bg-success" role="progressbar"-->
<!--             v-bind:style="{width:\(progress\*100/quiz.length\)+'%'}"-->
<!--             aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">-->
<!--        </div>-->
<!--      </div>-->
<!--        题目-->
      <div v-if="progress < size" class="jumbotron jumbotron-fluid mt-3">
        <div class="container">
          <h1 class="display-4">{{quiz[progress].subject}}</h1>
          <p> single choice</p>
          <hr class="my-2">
<!--         选项-->
          <div v-for="(item,index) in quiz[progress].item" :key="index" class="form-check my-3">
            <label class="form-check-label">
            <input type="radio" class="form-check-input" name="item"
            v-model="answer" v-bind:value="itemsValue[index]">
                   <span class = "badge badge-pill badge-primary mx-3">{{itemsValue[index]}}</span>
              {{item}}
            </label>
          </div>
<!--          按钮-->
          <div class="row">
            <div class="col-lg-6 col-xm-12">
              <button @click="prev()" type="button" class="btn btn-danger btn-lg btn-block">previous question</button>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-xm-12">
              <button v-if="answer==''" v-on:click="next()" type="button" class="btn btn-primary btn-lg btn-block mt-lg-0 mt-3" disabled>next question</button>
              <button v-else v-on:click="next()" type="button" class="btn btn-primary btn-lg btn-block mt-lg-0 mt-3" >next question</button>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-xm-12">
              <button v-if="progress==4" v-on:click="giveGrade()" type="button" class="btn btn-success btn-lg btn-block mt-lg-0 mt-3" >submit</button>

            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script >
export default {
  name: 'TestContent',
  el: '#app1',
  data: function () {
    return {
      quiz: [
        {
          subject: 'Have you forgotten where you left your things?',
          item: ['Yes(0 score)', 'No(20 score)', 'Rarely(10 score)'],
          ans: 'B'
        },
        {
          subject: 'Do you forget your name when you meet someone you know, for example, you have known each other for more than five years, or have met frequently?',
          item: ['Yes(0 score)', 'No(20 score)', 'Rarely(10 score)'],
          ans: 'B'
        },
        {
          subject: 'Did you suddenly forget what you wanted to say during the conversation?',
          item: ['Yes(0 score)', 'No(20 score)', 'Rarely(10 score)'],
          ans: 'B'
        },
        {
          subject: 'When talking, can\'t find the right words to express? For example, words have come to the mouth, they can\'t speak, forget the name of the object, and so on.',
          item: ['Yes(0 score)', 'No(20 score)', 'Rarely(10 score)'],
          ans: 'B'
        },
        {
          subject: 'Compared with people of the same year, do you feel that you have a poor memory?',
          item: ['Yes(0 score)', 'No(20 score)', 'Rarely(10 score)'],
          ans: 'B'
        }
      ],
      progress: 0,
      itemsValue: ['A', 'B', 'C'],
      answer: '',
      answers: new Map(),
      submitted: false,
      size: 5
    }
  },
  methods: {
    prev: function () {
      if (this.progress > 0 && this.progress <= this.size) {
        this.progress--
        this.answer = this.answers.get(this.process)
      }
    },
    next: function () {
      if (this.progress < this.size) {
        this.answers.set(this.progress, this.answer)
        this.progress++
        console.log(this.answers)
        this.answer = ''
      }
    },
    giveGrade: function (id) {
      this.$router.params = id
      this.$router.push('TestHistory')
    }
  }
}

</script>

<style scoped>

</style>
