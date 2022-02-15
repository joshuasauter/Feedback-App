import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About This Project</h1>
        <p>This is a react application for leaving feedback for a service.</p>
        <p>Version: 1.0.0</p>

        <p>
          <Link to='/'>Back To Home Page</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage