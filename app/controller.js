const days = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
const hour = new Date().getHours()
const minute =  new Date().getMinutes()
const time = `${hour}:${minute}`
const now = new Date().getTime()
const today =  new Date().getDate()
const oneDay = now + 86400000
const day =  new Date(oneDay).getDate()
const month =  new Date().getMonth()
const year =  new Date().getFullYear()
const tomorrow = `${hour}:${minute} - ${day}/${month + 1}/${year}`
const localArray = ['fr-fr','en-us','en-gb','de-de','es-es','it-it']

function myDate(){
  const date = `${year}/${month + 1}/${today}`
  return date
}

function myDateTomorrow(){
  const today =  new Date().getDate() + 1
  const date = `${hour}:${minute} - ${year}/${month + 1}/${today}`
  return date
}

const controller = {
  days(req, res) {
    res.json({ days })
  },
  hour(req, res) {
    res.json({time})
  },
  date(req, res) {
    const date = myDate()
    res.json({date})
  },
  tomorrow(req, res) {
    const tomorrow = myDateTomorrow()
    res.json({tomorrow})
  },
  data(req, res) {
    const date = `${year}/${month + 1}/${today}`
    const data = [{hour: time}, {date: myDate()}, {tomorrow: myDateTomorrow()}]
    res.json({data})
  },
  weekday(req, res) {
    const weekdayResult = new Date(`${req.params.y}/${req.params.m}/${req.params.d}`).getDay()
    const weekday = days[weekdayResult]
    res.json({weekday})
  },
  age(req, res) {
    const weekdayResult = new Date(`${req.params.y}/${req.params.m}/${req.params.d}`).getTime()
    const age = Math.trunc((now - weekdayResult) / (60 * 60 * 24 * 365 * 1000))
    res.json({age})
  },
  locals(req, res) {
    const local = req.params.locales
    if (local && local.length == 2) {
      const format = new Date(`${req.params.y}/${req.params.m}/${req.params.d}`).toLocaleDateString(`${local}`, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
      res.json({format})
    } else if (local == null){
        let format = []
        for (let f = 0; f < localArray.length; f++) {
          format.push(new Date(`${req.params.y}/${req.params.m}/${req.params.d}`).toLocaleDateString(`${localArray[f]}`, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
        }
        res.json({format})
      }
  },
  howMuchDodo(req, res) {
    const weekdayResult = new Date(`${req.params.y}/${req.params.m}/${req.params.d}`).getTime()
    const dodo = Math.trunc(((weekdayResult - now) + 86400000) / 86400000)
    res.json({dodo})
  }
};
export default controller;
