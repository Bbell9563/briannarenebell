export const style = {
  contactHolder: {
    border: '1px solid white',
    borderRadius: '5px',
    backgroundColor:'#393d59',
    padding:'1%',
    width:'25%',
    textAlign:'center',
  },
  menuHolder: {
    backgroundColor: '#0f111a',
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'space-between',
  },
  left: {
    width: '30%',
  },
  right: {
    display: 'flex',
    width: '70%',
    justifyContent: 'flex-end'
  },
  item: {
    marginLeft: '1%',
    color:'white',
    textDecoration:'none',
    margin: 'auto 1%',
    fontSize:'1em'
  }
}

export const appStyle = {
  window:{
    display:'flex',
    flexDirection:'column',
    backgroundImage: 'linear-gradient(to bottom right ,#17181f ,#393d59)'
  },
  navContainer:{
    height:'8%'
  },
  pageContainer:{
    height:'87%'
  },
  footerContainer:{
    height:'5%'
  }
}

export const homeStyle ={
  container:{
    color:'white',
    height:'100%',
    position:'relative',
  },
  photo: {
    display: 'block',
    minWidth: '100%',
    minHeight: '100%',
    margin: ' auto',
    position: 'absolute',
    top: '-100%',
    right: '-100%',
    bottom: '-100%',
    left: '-100%',
  },
  crop: {
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  photoHolder: {
    display: 'inline-block',
    verticalAlign: 'top',
    width: '40%',
    height:'500px',
    overflow: 'hidden',
  },
  backgroundImage:{
    filter:'blur(8px)',
  },
  mainInfo:{
    margin: '2% 10%',
    display:'flex',
    justifyContent:'space-between',
    position:'absolute',
    top:'40%',
    left:'40%',
    transform:'translate(-50%, -50%)',
    width:'70%',
    backgroundColor:'rgba(25, 27, 41, .6)',
    border:'1px solid #70738a',
    paddingTop:'2%'
  },
  description:{
    width:'70%',
    marginLeft:'5%',
    padding:'5%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    
  },
  header:{
    boxShadow:'0px 5px 20px #17181f',
    overflow:'hidden'
  },
  extraInfo:{
    margin:'3% 10%'
  }
}