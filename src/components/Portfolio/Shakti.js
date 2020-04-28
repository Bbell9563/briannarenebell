import React from 'react'
import { Image } from 'semantic-ui-react'
import ShaktiImage from '../../images/Shakti.png'
import {
  Card,
  Header,
  Information,
  PhotoHolder,
  TextHolder,
  MainImage,
  AltImage,
  AImage,
  MediaHolder
} from './CardStyle'

class Shakti extends React.Component {
  state = {
    mainImage: ShaktiImage,
    altImages: []
  }

  setMainImage = (image) => {
    this.setState({
      mainImage: image
    })
  }

  componentDidMount() {
    this.changeActive('shaktiPhotos', 'shaktiPhotoButton')
    // this.changeActive('photos', 'photoButton')

  }

  changeActive = (id, buttonId) => {
    document.getElementById('shaktiVideo').style.display = 'none'
    document.getElementById('shaktiPhotos').style.display = 'none'
    document.getElementById('shaktiVideoButton').style.backgroundColor = 'rgba(25, 27, 41, .3)'
    document.getElementById('shaktiPhotoButton').style.backgroundColor = 'rgba(25, 27, 41, .3)'
    document.getElementById(buttonId).style.backgroundColor = 'rgba(73, 87, 138, 0)'
    document.getElementById(id).style.display = 'block'
  }


  render() {
    const { mainImage, altImages } = this.state
    return (
      <Card>
        <Header>Shakti Yoga and Holistics</Header>
        <Information>
          <MediaHolder >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div id='shaktiVideoButton' style={{ fontSize: '30xp', textAlign: 'center', width: '50%', cursor: 'pointer' }}
                onClick={() => this.changeActive('shaktiVideo', 'shaktiVideoButton')}
                onMouseEnter={() => this.changeActive('shaktiVideo', 'shaktiVideoButton')}
              >
                Video
              </div>
              <div style={{ fontSize: '30xp', textAlign: 'center', width: '50%', cursor: 'pointer' }}
                id='shaktiPhotoButton'
                onClick={() => this.changeActive('shaktiPhotos', 'shaktiPhotoButton')}
                onMouseEnter={() => this.changeActive('shaktiPhotos', 'shaktiPhotoButton')}
              >
                Photo
              </div>
            </div>
            <PhotoHolder id='shaktiPhotos' style={{display:'none'}}>
              
              <MainImage><Image src={mainImage} /></MainImage>
              
            </PhotoHolder>
            <PhotoHolder id='shaktiVideo' >
              {/* <video width="100%" controls>
                <source src="https://res.cloudinary.com/dpo2wzfn1/video/upload/v1587665975/DevPointStore2020_v1_qqaiun.mp4" type="video/mp4" />
              </video> */}
              No video Uploaded Yet
            </PhotoHolder>
          </MediaHolder>
          <TextHolder>
            <div style={{ fontSize: '18px', fontFamily: 'Russo One' }}>Link To Live Site</div>
            <div >
              <a style={{ fontSize: '14px', color: 'white' }} href='https://shakti-llc.herokuapp.com/'>https://shakti-llc.herokuapp.com</a>
            </div>

            <div style={{ fontSize: '18px', fontFamily: 'Russo One', marginTop: '2%' }}>Description</div>
            <div style={{ fontSize: '14px' }}>
              
            </div>
          </TextHolder>
        </Information>
      </Card>
    )
  }
}

export default Shakti