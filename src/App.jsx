import Box from './components/Box'
import './App.css'

function App() {
  return (
    <>
      <Box 
        movieTitle="The Matrix"
        movieAuthor="Wachowski Brothers"
        movieDuration="136 min"
        movieRate="8.7/10"
      />
      <Box 
        movieTitle="Inception"
        movieAuthor="Christopher Nolan"
        movieDuration="148 min"
        movieRate="8.8/10"
      />
      <Box 
        movieTitle="Interstellar"
        movieAuthor="Christopher Nolan"
        movieDuration="169 min"
        movieRate="8.6/10"
      />
      <Box 
        movieTitle="The Dark Knight"
        movieAuthor="Christopher Nolan"
        movieDuration="152 min"
        movieRate="9.0/10"
      />
    </>
  )
}

export default App
