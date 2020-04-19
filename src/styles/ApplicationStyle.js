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
    backgroundImage: 'linear-gradient(to bottom right ,#0c0d12,#242b4d,#6d74a6'
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
    overflow: 'hidden',

    float:'right'
  },
  mainInfo:{
    margin: '2% 12%',
    display:'flex',
    justifyContent:'space-between',
    position:'absolute',
    top:'30%',
    left:'30%',
    transform:'translate(-40%, -40%)',
    width:'80%',
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
    overflow:'hidden',
  },
  extraInfo:{
    margin:'3% 10%'
  },
  partial:{
    width:'30%',
    backgroundColor:'#101321'
  },
  imagePartial:{
    overflow:'hidden',
    width:'100%',
    height:'100%',
    display: 'inline-block',
    verticalAlign: 'top',
    backgroundColor:'#161b30',
  },
  backgroundImage:{
    display:'flex',
  },
}