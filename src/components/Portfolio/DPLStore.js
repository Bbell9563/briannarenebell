import React from 'react'
import { Image } from 'semantic-ui-react'
import HomeImage from '../../images/DPS/HomePage.png'
import CartImage from '../../images/DPS/Cart.png'
import CategoryImage from '../../images/DPS/CategoryPage.png'
import CheckoutImage from '../../images/DPS/CheckOut.png'
import ProductImage from '../../images/DPS/Product.png'
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

class Store extends React.Component {
  state = {
    mainImage: HomeImage,
    altImages: [HomeImage, CartImage, CategoryImage, CheckoutImage, ProductImage]
  }

  setMainImage = (image) => {
    this.setState({
      mainImage: image
    })
  }
  componentDidMount() {
    this.changeActive('video', 'videoButton')
    // this.changeActive('photos', 'photoButton')

  }

  changeActive = (id, buttonId) => {
    document.getElementById('video').style.display = 'none'
    document.getElementById('photos').style.display = 'none'
    document.getElementById('videoButton').style.backgroundColor = 'rgba(25, 27, 41, .3)'
    document.getElementById('photoButton').style.backgroundColor = 'rgba(25, 27, 41, .3)'
    document.getElementById(buttonId).style.backgroundColor = 'rgba(73, 87, 138, 0)'
    document.getElementById(id).style.display = 'block'
  }


  render() {
    const { mainImage, altImages } = this.state
    return (
      <Card>
        <Header>DevPoint Store</Header>
        <Information>
          <MediaHolder >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div id='videoButton' style={{ fontSize: '30xp', textAlign: 'center', width: '50%', cursor: 'pointer' }}
                onClick={() => this.changeActive('video', 'videoButton')}
                onMouseEnter={() => this.changeActive('video', 'videoButton')}
              >
                Video
              </div>
              <div style={{ fontSize: '30xp', textAlign: 'center', width: '50%', cursor: 'pointer' }}
                id='photoButton'
                onClick={() => this.changeActive('photos', 'photoButton')}
                onMouseEnter={() => this.changeActive('photos', 'photoButton')}
              >
                Photo
              </div>
            </div>
            <PhotoHolder id='photos' style={{display:'none'}}>
              {/* <AltImage>
                {altImages.map(image => (
                  <AImage >
                    <Image
                      src={image}
                      onMouseEnter={() => { this.setMainImage(image) }}
                      onClick={() => { this.setMainImage(image) }}
                      style={altImages.length > 4 ? {height: '100px'}: {height: '150px'}}
                    />
                  </AImage>
                ))}
              </AltImage> */}
              <MainImage><Image src={mainImage} /></MainImage>
              
            </PhotoHolder>
            <PhotoHolder id='video' >
              <video width="100%" controls>
                <source src="https://res.cloudinary.com/dpo2wzfn1/video/upload/v1587665975/DevPointStore2020_v1_qqaiun.mp4" type="video/mp4" />
              </video>
            </PhotoHolder>
          </MediaHolder>
          <TextHolder>
            <div style={{ fontSize: '18px', fontFamily: 'Russo One' }}>Link To Live Site</div>
            <div >
              <a style={{ fontSize: '14px', color: 'white' }} href='https://devpoint-labs-store-2020.herokuapp.com/'>https://devpoint-labs-store-2020.herokuapp.com/</a>
            </div>

            <div style={{ fontSize: '18px', fontFamily: 'Russo One', marginTop: '2%' }}>Description</div>
            <div style={{ fontSize: '14px' }}>
              DevPoint Store is an online retail shop for DevPoint Labs. There customers can browse the companies range of merchandise,
              view photos of the products, along with information about the product's specifications. They can search for specific products
              or view items sorted by category. Upon completion of their purchase customers will receive via email a summary of their order.
            </div>
          </TextHolder>
        </Information>
      </Card>
    )
  }
}

export default Store