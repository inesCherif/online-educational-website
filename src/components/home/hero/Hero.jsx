import React from 'react'
import './hero.css'
import Arrow from '@mui/icons-material/ArrowRightAlt';
import Title from '../../common/title/Title';

const Hero = () => {
  return (
    <div>
      <section className='hero'>
        <div className="container">
            <div className="row">
              <Title subtitle='BIENVENUE A HAL CONSULTING' title='Les Meilleures Formations'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum possimus in reiciendis iste recusandae repellendus pariatur hic officiis necessitatibus vitae laborum adipisci asperiores excepturi non sapiente voluptate itaque, porro quo.</p>
                <div className="button">
                    <button className='primary-btn'>
                         GET STARTED NOW <Arrow className="arrow"/>
                    </button>
                    <button>
                        VOIR LES FORMATIONS<Arrow className="arrow"/>
                    </button>
                </div>
            </div>
        </div>
      </section>
      <div className="marigin">

      </div>
    </div>
  )
}

export default Hero
