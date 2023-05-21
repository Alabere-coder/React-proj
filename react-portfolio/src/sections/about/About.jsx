import AboutImage from '../../assets/about.jpeg';
import { HiDownload } from 'react-icons/hi';
import Card from '../../components/Card';
import data from './data';
import './about.css';

import React from 'react';

const About = () => {
  return (
    <section id="about">
        <div className="container about__container">
          <div className="about__left">
            <div className="about__portrait">
              <img src={AboutImage} alt="" />
            </div>
          </div>
          <div className="about__right">
            <h2>About Me</h2>
            <div className="about__cards">
              {
                data.map(item => {
                  return <Card key={item.id} className="about__card">
                    <span className="about__card-icon">{item.icon}</span>
                    <h5>{item.title}</h5>
                    <small>{item.desc}</small>
                  </Card>
                })
              }
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Magnam maxime, aliquam veritatis perferendis inventore blanditiis 
              totam veniam facere, harum numquam ullam est doloribus quasi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Voluptatem, sint, sunt eum recusandae numquam velit, 
              accusamus repellendus doloremque autem nemo culpa. Quod 
              perspiciatis similique dolorem quam quasi iusto voluptates 
              laudantium repellat ex et minima sed, veritatis explicabo 
              voluptatibus, vel facilis corrupti exercitationem id nihil 
              
            </p>
            <a href="#" download className='btn primary'>{<HiDownload />} Download CV</a>

          </div>
        </div>
    </section>
  )
}

export default About;






// import AboutImage from '../../assets/about.jpeg'
// import { HiDownload } from 'react-icons/hi'
// import { Card } from '../../components/Card';
// import data from './data';
// import './about.css'

// import React from 'react'

// const About = () => {
//   return (
//     <section id="about">
//         <div className="container about__container">
//           <div className="about__left">
//             <div className="about__portrait">
//               <img src={AboutImage} alt="" />
//             </div>
//           </div>
//           <div className="about__right">
//             <h2>About Me</h2>
//             <div className="about__cards">
//               {
//                 data.map(item => {
//                   return(
//                     <Card key={item.id} className="about__card">
//                     <span className="about__card-icon">{item.icon}</span>
//                     <h5>{item.title}</h5>
//                     <small>{item.desc}</small>
//                   </Card>
//                   )
//                 })
//               }
//             </div>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//               Magnam maxime, aliquam veritatis perferendis inventore blanditiis 
//               totam veniam facere, harum numquam ullam est doloribus quasi.
//             </p>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//               Voluptatem, sint, sunt eum recusandae numquam velit, 
//               accusamus repellendus doloremque autem nemo culpa. Quod 
//               perspiciatis similique dolorem quam quasi iusto voluptates 
//               laudantium repellat ex et minima sed, veritatis explicabo 
//               voluptatibus, vel facilis corrupti exercitationem id nihil 
              
//             </p>
//             <a href="#" download className='btn primary'><HiDownload/> Download CV</a>

//           </div>
//         </div>
//     </section>
//   )
// }

// export default About