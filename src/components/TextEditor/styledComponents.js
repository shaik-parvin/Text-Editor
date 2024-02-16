import styled from 'styled-components'

export const BackgroundContainer = styled.div`
background-color:#25262c;
min-height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export const CentralContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
export const ImageContainer = styled.div`
background-color:#1b1c22;
display:flex;
flex-direction:row;
align-items:flex-start;
padding:20px;
`
export const Heading = styled.h1`
color:#ffffff;
font-family:"Roboto";
text-align:center;
font-size:20px;
padding-top:10px;
`
export const ImageElement = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
min-height:50vh;
`
export const Image = styled.img`
height:200px;
width:200px;
`
export const EditorContainer = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
background-color:#25262c;
min-height:50vh;
min-width:25vw;
margin-left:30px;
border:1px solid #cbd5e1;
border-radius:9px;
`
export const ButtonContainer = styled.ul`
list-style-type:none;
display:flex;
flex-direction:row;
padding-left:0px;
margin:10px;
`

export const Button = styled.button`
background-color:transparent;
border:none;
outline:none;
color: ${props => props.color};
`
export const ItalicButton = styled.button`
background-color:transparent;
border:none;
outline:none;
color: ${props => props.color};
`

export const UnderlineButton = styled.button`
background-color:transparent;
border:none;
outline:none;
color: ${props => props.color};
`

export const HrElement = styled.hr`
color:#cbd5e1;
width:100%;
border-radius:1px;
`
export const TextAreaElement = styled.textarea`
background-color:transparent;
border:none;
outline:none;
margin:20px;
color:#f1f5f9;
font-size:16px;
font-style: ${props => props.fontStyle};
font-weight: ${props => props.fontWeight};
text-decoration: ${props => props.textDecoration}
`
