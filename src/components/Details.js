import React from 'react'
import styled from 'styled-components'

function Details() {
  return (
    <Container>
        <Background>
            <img src='https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/5285/1365285-i-fe1d56ee6b43' />
        </Background>
        <ImageTitle>
          <img src='https://img1.hotstarext.com/image/upload/f_auto,h_136/sources/r1/cms/prod/5287/1365287-t-9b7448a95309' />
        </ImageTitle>
        <Controls>
          <PlayButton>
            <img src='/Images/play-icon-black.png' />
            <span>PLAY</span>


          </PlayButton>
          <TrailerButton>
          <img src='/Images/play-icon-white.png' />
            <span>TRAILER</span>

          </TrailerButton>
          <AddButton></AddButton>

          <GroupWatch></GroupWatch>


        </Controls>

    </Container>
  )
}

export default Details

const Container=styled.div`
min-height:cal(100vh-70px);
padding:0  calc(3.5vw+5px);
position:relative;
`

const Background=styled.div`
position:fixed;
top:0;

left:0;
right:0;
bottom:0;
z-index:-1;
opacity:0.8;


img{
  width:100%;
  height:100%;
  object-fit:cover;


}

`
const ImageTitle=styled.div`
height:30vh;
min-height:170px;
width:35vw;
min-width:200px;
img{
  width:100%;
  height:100%;
  object-fit:contain;

}
`

const Controls=styled.div`
display:flex;

`
const PlayButton=styled.button`
border-radius:4px;
background:rgb(249,249,249);
font-size:15px;
display:flex;
align-items:center;
height:56px;
border:none;
margin-right:22px;
letter-spacing:1.8px;
cursor:pointer;
&:hover{
  background:rgb(198,198,198);
}

padding:0px 24px;`
const TrailerButton=styled(PlayButton)`
background:rgba(0,0,0,0.3);
border:1px solid rgb(249,249,249);
text-transform:uppercase;
`
const AddButton=styled.button`
width:44px;
height:44px`
const GroupWatch=styled.button``
