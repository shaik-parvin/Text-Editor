import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  BackgroundContainer,
  CentralContainer,
  ImageContainer,
  Heading,
  ImageElement,
  Image,
  EditorContainer,
  ButtonContainer,
  Button,
  ItalicButton,
  UnderlineButton,
  HrElement,
  TextAreaElement,
} from './styledComponents'

class TextEditor extends Component {
  state = {bold: false, italic: false, underline: false}

  bold = () => {
    this.setState(prevState => ({
      bold: !prevState.bold,
    }))
  }

  italic = () => {
    this.setState(prevState => ({
      italic: !prevState.italic,
    }))
  }

  underline = () => {
    this.setState(prevState => ({
      underline: !prevState.underline,
    }))
  }

  render() {
    const {bold, italic, underline} = this.state
    const colorE1 = bold === false ? '#f1f5f9' : '#faff00'
    const colorE2 = italic === false ? '#f1f5f9' : '#faff00'
    const colorE3 = underline === false ? '#f1f5f9' : '#faff00'
    const fontWeight = bold === false ? 'normal' : 'bold'
    const fontStyle = italic === false ? 'normal' : 'italic'
    const textDecoration = underline === false ? 'normal' : 'underline'

    return (
      <BackgroundContainer>
        <CentralContainer>
          <ImageContainer>
            <div>
              <Heading>Text Editor</Heading>
              <ImageElement>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
                  alt="text editor"
                />
              </ImageElement>
            </div>
            <EditorContainer>
              <ButtonContainer>
                <li>
                  <Button
                    data-testid="bold"
                    type="button"
                    onClick={this.bold}
                    color={colorE1}
                  >
                    <VscBold size={25} color={colorE1} />
                  </Button>
                </li>
                <li>
                  <ItalicButton
                    data-testid="italic"
                    type="button"
                    color={colorE2}
                    onClick={this.italic}
                  >
                    <GoItalic size={25} color={colorE2} />
                  </ItalicButton>
                </li>
                <li>
                  <UnderlineButton
                    data-testid="underline"
                    type="button"
                    color={colorE3}
                    onClick={this.underline}
                  >
                    <AiOutlineUnderline size={25} color={colorE3} />
                  </UnderlineButton>
                </li>
              </ButtonContainer>
              <HrElement />
              <TextAreaElement
                fontWeight={fontWeight}
                fontStyle={fontStyle}
                textDecoration={textDecoration}
              />
            </EditorContainer>
          </ImageContainer>
        </CentralContainer>
      </BackgroundContainer>
    )
  }
}

export default TextEditor
