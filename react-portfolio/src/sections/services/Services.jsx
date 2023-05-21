import data from './data'
import './services.css'
import Card from '../../components/Card';

const Services = () => {
  return (
    <section id="section">
      <h2>My Services</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <div className="container services__container">
        {
          data.map(item => (
            <Card key={item.id} className='service light'>
              <div className="service__icon">{item.icon}</div>
              <div className="service__details">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </Card>
          ))
        }
      </div>
    </section>
  )
}

export default Services