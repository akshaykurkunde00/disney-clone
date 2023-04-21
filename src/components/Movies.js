import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
        
        <h4>
            Recommended for you
        
        </h4>
        <Content>
            <Wrap>
                <img src='https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/4856/1414856-v-fa398217196a' />
            </Wrap>

            <Wrap>
                <img src='https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5041/1405041-v-3f9a1366bf49' />
            </Wrap>


            <Wrap>
                <img src='https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/5181/875181-v' />
            </Wrap>


            <Wrap>
                <img src='https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/8689/1508689-i-6d6ae7a67470   ' />
            </Wrap>




        </Content>
        </Container>
  )
}

export default Movies

const Container=styled.div`
`
const Content=styled.div`
display:grid;
grid-gap:25px;
grid-template-columns:repeat(4,minmax(0,1fr));


`

const Wrap=styled.div`
border-radius:10px;
cursor:pointer;
overflow:hidden;
border:3px solid rgba(249,249,249,0.1);
transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94)0s;
box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;


 img{
    width:100%;
    height:100%;
    object-fit:cover;



}

&:hover{
    transform:scale(1.05);
    border-color:rgba(249,249,249,0.8);
    box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px,
rgb(0 0 0 / 72%) 0px 30px 22px -10px;
border-color:rgba(249,249,249,0.8)
}

`