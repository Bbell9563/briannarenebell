import React from 'react'
import { desktop } from '../../../styles/ResumeStyle'
import { Icon, Image } from 'semantic-ui-react'
import Postgresql from '../../../images/postgresql.png'

export const Skills = () => (
  <div style={desktop.skills}>
    <div style={desktop.icon}><Icon name='html5' /></div>
    <div style={desktop.icon}><Icon name='js' /></div>
    <div style={desktop.icon}><Icon name='react' /></div>
    <div style={desktop.icon}><Icon name='git' /></div>
    <div style={desktop.icon}><Icon name='gem outline' /></div>
    <div style={desktop.icon}><Icon name='css3 alternate' /></div>
    <div style={desktop.imageIcon}><div style={desktop.crop}><Image src={Postgresql} style={desktop.image} /></div></div>
  </div>
)

export const Contact = () => (
  <div style={desktop.contact}>
    <div>Bbell9563@gmail.com</div>
    <div>801-946-4684</div>
    <div>GitHub: <a style={{color:'white'}} href="https://github.com/Bbell9563">
          github.com/Bbell9563</a></div>
    <div>LinkedIn: <a href='https://www.linkedin.com/in/briannarenebell/' style={{color:'white'}}>
          linkedin.com/in/briannarenebell/</a></div>
  </div>
)

export const Experience = () => (
  <div>
    Experience In Progress
  </div>
)

export const Education = () => (
  <div>
    Education In Progress
  </div>
)