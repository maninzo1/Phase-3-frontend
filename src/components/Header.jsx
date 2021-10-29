import styled from 'styled-components'


function Header(){
    return (
      
        <Wrapper>
        <h1> Doctor's Portal v.1 </h1>
        </Wrapper>
     
    )
}

export default Header

const Wrapper = styled.h3 `
margin: 0;
background: #96DED1;

& h1{
    color: #848884
    
}
`
