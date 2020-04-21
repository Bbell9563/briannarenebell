import React from 'react'
import { desktop , mobile} from '../../styles/ResumeStyle'
import { Icon, Image } from 'semantic-ui-react'
import Postgresql from '../../images/postgresql.png'

const makeIconBigger = (id) => { document.getElementById(id).style.transform = 'scale(1.1)' }
const makeIconSmaller = (id) => { document.getElementById(id).style.transform = 'scale(.9)' }

export const Skills = ({ isMobile }) => (
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div style={isMobile ? mobileStyle.header : style.header}>
        Skills
        </div>
    </div>
    <div style={isMobile ? mobile.skills :desktop.skills}>
      <div style={isMobile ? mobile.icon :desktop.icon} id='html' onMouseEnter={() => makeIconBigger('html')} onMouseOut={() => { makeIconSmaller('html') }}>
        <Icon name='html5' />
      </div>
      <div style={isMobile ? mobile.icon :desktop.icon} id='js' onMouseEnter={() => makeIconBigger('js')} onMouseOut={() => { makeIconSmaller('js') }}>
        <Icon name='js' />
      </div>
      <div style={isMobile ? mobile.icon :desktop.icon} id='react' onMouseEnter={() => makeIconBigger('react')} onMouseOut={() => { makeIconSmaller('react') }}>
        <Icon name='react' />
      </div>
      <div style={isMobile ? mobile.icon :desktop.icon} id='git' onMouseEnter={() => makeIconBigger('git')} onMouseOut={() => { makeIconSmaller('git') }}>
        <Icon name='git' />
      </div>
      <div style={isMobile ? mobile.icon :desktop.icon} id='ruby' onMouseEnter={() => makeIconBigger('ruby')} onMouseOut={() => { makeIconSmaller('ruby') }}>
        <Icon name='gem outline' />
      </div>
      <div style={isMobile ? mobile.icon :desktop.icon} id='css' onMouseEnter={() => makeIconBigger('css')} onMouseOut={() => { makeIconSmaller('css') }}>
        <Icon name='css3 alternate' />
      </div>
      <div style={isMobile ? mobile.imageIcon :desktop.imageIcon} id='postgres' onMouseEnter={() => makeIconBigger('postgres')} onMouseOut={() => { makeIconSmaller('postgres') }}>
        <div style={desktop.crop} onMouseEnter={() => makeIconBigger('postgres')} onMouseOut={() => { makeIconSmaller('postgres') }}><Image src={Postgresql} style={desktop.image} /></div>
      </div>
    </div>
  </div>
)

export const Contact = ({ isMobile }) => (
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div style={isMobile ? { ...mobileStyle.header, width: '45%', padding: '3% 4% 5% 4%', } : { ...style.header, width: '26%', padding: '2% 3% 5% 4%', }}>
        Contact
        </div>
    </div>
    <div style={isMobile ? mobileStyle.infoHolder :style.infoHolder}>
      <div>
        <div style={isMobile ? mobileStyle.subHeader : style.subHeader}>Email</div>
        <div style={isMobile ? mobileStyle.description : style.description}>Bbell9563@gmail.com</div>
      </div>
      <div>
        <div style={isMobile ? mobileStyle.subHeader : style.subHeader}>Phone</div>
        <div style={isMobile ? mobileStyle.description : style.description}>(801) 946-4684</div>

      </div>
      <div>
        <div style={isMobile ? mobileStyle.subHeader : style.subHeader}>GitHub</div>
        <div style={isMobile ? mobileStyle.description : style.description}><a style={{ color: 'white' }} href="https://github.com/Bbell9563">github.com/Bbell9563</a></div>
      </div>
      <div>
        <div style={isMobile ? mobileStyle.subHeader : style.subHeader}>LinkedIn</div>
        <div style={isMobile ? mobileStyle.description : style.description}><a href='https://www.linkedin.com/in/briannarenebell/' style={{ color: 'white' }}>linkedin.com/in/briannarenebell/</a></div>
      </div>
    </div>
  </div>
)

export const Experience = ({ isMobile }) => (
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div style={isMobile ? { ...mobileStyle.header, width: '55%', padding: '3% 4% 5% 4%', } : { ...style.header, width: '40%', padding: '2% 3% 5% 4%', }}>
        Experience
        </div>
    </div>
    <div style={isMobile ? mobileStyle.infoHolder :style.infoHolder}>
      <div>
        <div style={isMobile ? mobileStyle.subHeader : style.subHeader}>Geospatial Engineer</div>
        <div style={isMobile ? mobileStyle.subDescription : style.subDescription}>Utah Army National Guard</div>
        <div style={isMobile ? mobileStyle.description : style.description}>

        </div>

      </div>
      <div>
        <div style={isMobile ? mobileStyle.subHeader : style.subHeader}>Engineer</div>
        <div style={isMobile ? mobileStyle.subDescription : style.subDescription}>Camp Williams DPW</div>
        <div style={isMobile ? mobileStyle.description : style.description}>

        </div>

      </div>
      <div>
        <div style={isMobile ? mobileStyle.subHeader : style.subHeader}>Handyman</div>
        <div style={isMobile ? mobileStyle.subDescription : style.subDescription}>Precision Residential Solutions</div>
        <div style={isMobile ? mobileStyle.description : style.description}>

        </div>

      </div>
      <div>
        <div style={isMobile ? mobileStyle.subHeader : style.subHeader}>Fabricator</div>
        <div style={isMobile ? mobileStyle.subDescription : style.subDescription}>Empire Iron</div>
        <div style={isMobile ? mobileStyle.description : style.description}>

        </div>
      </div>
      <div>
        <div style={isMobile ? mobileStyle.subHeader : style.subHeader}>Key Holder</div>
        <div style={isMobile ? mobileStyle.subDescription : style.subDescription}>Dollar General</div>
        <div style={isMobile ? mobileStyle.description : style.description}>

        </div>
      </div>
    </div>
  </div>
)

export const Education = ({ isMobile }) => (
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div style={isMobile ? { ...mobileStyle.header, width: '57%', padding: '3% 4% 5% 4%', } : { ...style.header, width: '36%', padding: '2% 3% 5% 4%', }}>
        Education
        </div>
    </div>
    <div style={isMobile ? mobileStyle.infoHolder :style.infoHolder}>
      <div>
        <div style={isMobile ? {...mobileStyle.subHeader, fontSize:'3.5vw'} : style.subHeader}>DevPoint Labs</div>
        <div style={isMobile ? mobileStyle.subDescription : style.subDescription}>Full-Stack Web Development</div>
        <div style={isMobile ? mobileStyle.description : style.description}>

        </div>
      </div>
      <div>
        <div style={isMobile ? {...mobileStyle.subHeader, fontSize:'3.5vw'} : style.subHeader}>Neosho County Community College</div>
        <div style={isMobile ? mobileStyle.subDescription : style.subDescription}>Generals of Arts (Only one Year)</div>
        <div style={isMobile ? mobileStyle.description : style.description}>
          
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
const mobileStyle = {
  header: {
    padding: '3% 4% 4% 4%',
    fontFamily: 'Russo One',
    fontSize: '5vw',
    backgroundColor: 'rgba(25, 27, 41, .15)',
    width: '35%',
    textAlign: 'right',
    borderBottomLeftRadius: '80%'
  },
  infoHolder: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  subHeader: {
    fontSize: '4vw',
    margin: '6% 3% 2% 3%',
    fontFamily: 'Russo One',
  },
  description: {
    fontSize: '3.5vw',
    margin: '4% 3%'
  },
  subDescription: {
    fontSize: '3vw',
    margin: '4% 3%'
  }
}