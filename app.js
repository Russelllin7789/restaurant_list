const express = require('express')
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')
const app = express()
const port = 3000

// handelbars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// routes setting
app.get('/', (req, res) => {
  res.render('index', { restaurants: restaurantList.results })
})

// params
app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurant = restaurantList.results.filter(restaurant => {
    return restaurant.id === Number(req.params.restaurant_id)
  })
  res.render('show', { restaurant: restaurant[0] })
})

// start and listen to the Express server
app.listen(port, () => {
  console.log(`Express is listening to Localhost: ${port}`)
})

