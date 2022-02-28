import spinner from '../assets/spinning-loading.gif'

function Spinner() {
  return (
    <img 
      source={spinner} 
      alt='Loading...' 
      style={{width: '100px', margin: 'auto', display: 'box'}}
    />
  ) 
}

export default Spinner