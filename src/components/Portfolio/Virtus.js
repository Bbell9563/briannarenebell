import React from 'react'
import { Image } from 'semantic-ui-react'
import VirtusImage from '../../images/Virtus.png'
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

class Virtus extends React.Component {
  state = {
    mainImage: VirtusImage,
    altImages: []
  }

  setMainImage = (image) => {
    this.setState({
      mainImage: image
    })
  }

  componentDidMount() {
    this.changeActive('VirtusPhotos', 'VirtusPhotoButton')
    // this.changeActive('photos', 'photoButton')

  }

  changeActive = (id, buttonId) => {
    document.getElementById('VirtusVideo').style.display = 'none'
    document.getElementById('VirtusPhotos').style.display = 'none'
    document.getElementById('VirtusVideoButton').style.backgroundColor = 'rgba(25, 27, 41, .3)'
    document.getElementById('VirtusPhotoButton').style.backgroundColor = 'rgba(25, 27, 41, .3)'
    document.getElementById(buttonId).style.backgroundColor = 'rgba(73, 87, 138, 0)'
    document.getElementById(id).style.display = 'block'
  }


  render() {
    const { mainImage, altImages } = this.state
    return (
      <Card>
        <Header>Virtus Tactical Defense Training</Header>
        <Information>
          <MediaHolder >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div id='VirtusVideoButton' style={{ fontSize: '30xp', textAlign: 'center', width: '50%', cursor: 'pointer' }}
                onClick={() => this.changeActive('VirtusVideo', 'VirtusVideoButton')}
                onMouseEnter={() => this.changeActive('VirtusVideo', 'VirtusVideoButton')}
              >
                Video
              </div>
              <div style={{ fontSize: '30xp', textAlign: 'center', width: '50%', cursor: 'pointer' }}
                id='VirtusPhotoButton'
                onClick={() => this.changeActive('VirtusPhotos', 'VirtusPhotoButton')}
                onMouseEnter={() => this.changeActive('VirtusPhotos', 'VirtusPhotoButton')}
              >
                Photo
              </div>
            </div>
            <PhotoHolder id='VirtusPhotos' style={{display:'none'}}>
              
              <MainImage><Image src={mainImage} /></MainImage>
              
            </PhotoHolder>
            <PhotoHolder id='VirtusVideo' >
              {/* <video width="100%" controls>
                <source src="https://res.cloudinary.com/dpo2wzfn1/video/upload/v1587665975/DevPointStore2020_v1_qqaiun.mp4" type="video/mp4" />
              </video> */}
              No video Uploaded Yet
            </PhotoHolder>
          </MediaHolder>
          <TextHolder>
            <div style={{ fontSize: '18px', fontFamily: 'Russo One' }}>Link To Live Site</div>
            <div >
              <a style={{ fontSize: '14px', color: 'white' }} href='https://virtus-tdt.herokuapp.com/'>https://virtus-tdt.herokuapp.com</a>
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

export default Virtus