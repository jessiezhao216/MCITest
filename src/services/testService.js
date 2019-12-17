import Api from '@/services/api'

export default {
  fetchTest () {
    return Api().get('/test')
  },
  postTest (test) {
    return Api().post('/test', test,
      { headers: {'Content-type': 'application/json'} })
  },
  deleteTest (id) {
    return Api().delete(`/test/${id}`)
  },
  editInfo (id, test) {
    console.log('REQUESTING ' + test._id + ' ' +
      JSON.stringify(test, null, 5))
    return Api().put(`/test/${id}/info`, test,
      { headers: {'Content-type': 'application/json'} })
  },
  giveGrade (id, test) {
    console.log('REQUESTING ' + test._id + ' ' +
      JSON.stringify(test, null, 5))
    return Api().put(`/test/${id}`, test,
      { headers: {'Content-type': 'application/json'} })
  }

}
