import React from 'react'
import { desktop } from '../../../styles/ResumeStyle'
import { Icon, Image } from 'semantic-ui-react'
import Postgresql from '../../../images/postgresql.png'

const makeIconBigger = (id) => { document.getElementById(id).style.transform = 'scale(1.1)' }
const makeIconSmaller = (id) => { document.getElementById(id).style.transform = 'scale(.9)' }

export const Skills = () => (
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div style={style.header}>
        Skills
        </div>
    </div>
    <div style={desktop.skills}>
      <div style={desktop.icon} id='html' onMouseEnter={() => makeIconBigger('html')} onMouseOut={() => { makeIconSmaller('html') }}>
        <Icon name='html5' />
      </div>
      <div style={desktop.icon} id='js' onMouseEnter={() => makeIconBigger('js')} onMouseOut={() => { makeIconSmaller('js') }}>
        <Icon name='js' />
      </div>
      <div style={desktop.icon} id='react' onMouseEnter={() => makeIconBigger('react')} onMouseOut={() => { makeIconSmaller('react') }}>
        <Icon name='react' />
      </div>
      <div style={desktop.icon} id='git' onMouseEnter={() => makeIconBigger('git')} onMouseOut={() => { makeIconSmaller('git') }}>
        <Icon name='git' />
      </div>
      <div style={desktop.icon} id='ruby' onMouseEnter={() => makeIconBigger('ruby')} onMouseOut={() => { makeIconSmaller('ruby') }}>
        <Icon name='gem outline' />
      </div>
      <div style={desktop.icon} id='css' onMouseEnter={() => makeIconBigger('css')} onMouseOut={() => { makeIconSmaller('css') }}>
        <Icon name='css3 alternate' />
      </div>
      <div style={desktop.imageIcon} id='postgres' onMouseEnter={() => makeIconBigger('postgres')} onMouseOut={() => { makeIconSmaller('postgres') }}>
        <div style={desktop.crop} onMouseEnter={() => makeIconBigger('postgres')} onMouseOut={() => { makeIconSmaller('postgres') }}><Image src={Postgresql} style={desktop.image} /></div>
      </div>
    </div>
  </div>
)

export const Contact = () => (
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div style={{ ...style.header, width: '26%', padding: '2% 3% 5% 4%', }}>
        Contact
        </div>
    </div>
    <div style={style.infoHolder}>
      <div>
        <div style={style.subHeader}>Email</div>
        <div style={style.description}>Bbell9563@gmail.com</div>
      </div>
      <div>
        <div style={style.subHeader}>Phone</div>
        <div style={style.description}>(801) 946-4684</div>

      </div>
      <div>
        <div style={style.subHeader}>GitHub</div>
        <div style={style.description}><a style={{ color: 'white' }} href="https://github.com/Bbell9563">github.com/Bbell9563</a></div>
      </div>
      <div>
        <div style={style.subHeader}>LinkedIn</div>
        <div style={style.description}><a href='https://www.linkedin.com/in/briannarenebell/' style={{ color: 'white' }}>linkedin.com/in/briannarenebell/</a></div>
      </div>
    </div>
  </div>
)

export const Experience = () => (
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div style={{ ...style.header, width: '40%', padding: '2% 3% 5% 4%', }}>
        Experience
        </div>
    </div>
    <div style={style.infoHolder}>
      <div>
        <div style={style.subHeader}>Geospatial Engineer</div>
        <div style={style.subDescription}>Utah Army National Guard</div>
        <div style={style.description}>

        </div>

      </div>
      <div>
        <div style={style.subHeader}>Engineer</div>
        <div style={style.subDescription}>Camp Williams DPW</div>
        <div style={style.description}>

        </div>

      </div>
      <div>
        <div style={style.subHeader}>Handyman</div>
        <div style={style.subDescription}>Precision Residential Solutions</div>
        <div style={style.description}>

        </div>

      </div>
      <div>
        <div style={style.subHeader}>Fabricator</div>
        <div style={style.subDescription}>Empire Iron</div>
        <div style={style.description}>

        </div>
      </div>
      <div>
        <div style={style.subHeader}>Key Holder</div>
        <div style={style.subDescription}>Dollar General</div>
        <div style={style.description}>

        </div>
      </div>
    </div>
  </div>
)

export const Education = () => (
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div style={{ ...style.header, width: '36%', padding: '2% 3% 5% 4%', }}>
        Education
        </div>
    </div>
    <div style={style.infoHolder}>
      <div>
        <div style={style.subHeader}>DevPoint Labs</div>
        <div style={style.subDescription}>Full-Stack Web Development</div>
        <div style={style.description}>

        </div>
      </div>
      <div>
        <div style={style.subHeader}>Neosho County Community College</div>
        <div style={style.subDescription}>Generals of Arts (Only one Year)</div>
        <div style={style.description}>

        </div>
      </div>
    </div>
  </div>
)

const style = {
  header: {
    padding: '2% 3% 4% 4%',
    fontFamily: 'Russo One',
    fontSize: '3vw',
    backgroundColor: 'rgba(25, 27, 41, .15)',
    width: '25%',
    textAlign: 'right',
    borderBottomLeftRadius: '80%'
  },
  infoHolder: {
    padding: '3%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  subHeader: {
    fontSize: '2vw',
    margin: '3% 3% 1% 3%',
    fontFamily: 'Russo One',
  },
  description: {
    fontSize: '1.5vw',
    margin: '2% 3%'
  },
  subDescription: {
    fontSize: '1vw',
    margin: '.5% 3%'
  }
}