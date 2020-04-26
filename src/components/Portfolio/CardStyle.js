import styled from 'styled-components'

export const MainImage = styled.div`{
  width:80%;
  margin: 2% 10%;
  height: 290px;
  border-radius: 10px;
  overflow:hidden;
}`

export const AImage = styled.div`{
  width:100px;
  height:100px;
  border-radius: 10px;
}`

export const MediaHolder = styled.div`{
  width: 44%;
  background-color: rgba(73, 87, 138, .8);
  border-radius: 10px;
  height: 350px;
  overflow:hidden;
}`

export const AltImage = styled.div`{
  width:100px;
  border-radius: 10px;
  overflow:hidden;
}`

export const Card = styled.div`{
  background-color: rgba(73, 87, 138, .5);
  box-shadow:0px 5px 10px #11141f;
  border-radius: 20px;
  margin: 3% 5%;
  width: 90%;
  color:white;
  padding:1%;
  @media(max-width: 600px) {
    background-color: rgba(73, 87, 138, .5);
    box-shadow:0px 5px 10px #11141f;
    border-radius: 20px;
    margin: 3% 5%;
    width: 90%;
    color:white;
    padding:3%
  }
}`

export const Header = styled.div`{
  text-align: center;
  font-size: 3vw;
  font-family:Russo One;
  padding:1%;
}`

export const Information = styled.div`{
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1%;
  @media(max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 1%;
  }
}
`

export const PhotoHolder = styled.div`{
  width: 100%;
  padding-top:2%;
}`

export const GameHolder = styled.div`{
  width: 44%;
  background-color: rgba(73, 87, 138, .8);
  border-radius: 10px;
  height: 300px;
  overflow:hidden;
  @media(max-width: 600px) {
    width: 100%;
    background-color: rgba(73, 87, 138, .8);
    border-radius: 10px;
    height: 300px;
    overflow:hidden;
  }
}`

export const TextHolder = styled.div`{
  width: 55%;
  background-color: rgba(73, 87, 138, .8);
  padding: 1%;
  border-radius: 10px;
  @media(max-width: 600px) {
    width: 100%;
    background-color: rgba(73, 87, 138, .8);
    padding: 3%;
    border-radius: 10px;
    margin-top: 2%
  }
}`