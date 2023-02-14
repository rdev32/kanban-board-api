import app from './app'
import './database'

app.listen(app.get('port'), () => {
  console.log(`Server started on http://localhost:${app.get('port')}/`)
})