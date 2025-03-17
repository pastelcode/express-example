import app from './app'

app.listen(app.get('port'), (error) =>
  console.log(`Server is running at http://localhost:${app.get('port')}`)
)
