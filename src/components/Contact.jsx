import { useState } from 'react'
import styled from '@emotion/styled'
import canadianTuxedo from '../assets/Images/canadianTuxedo.jpg'
import axios from 'axios'
import { COLORS, FONTS } from '../const'

const ContactContainer = styled.div`
  padding: 5% 0 15% 0;
`

const ContactHeader = styled.div`
  font-family: ${FONTS.HELVETICA_NEUE};
  font-weight: bold;
  font-size: 36px;
  padding: 10%;
  color: ${COLORS.BLACK};
`

const ContactBody = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`

const InputForm = styled.div`
  font-family: ${FONTS.AVENIRNEXT};
  font-size: 25px;
  margin-top: -15px;
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`

const FormText = styled.p`
  color: ${COLORS.BLACK};
`

const StyledInput = styled.input`
  background: ${COLORS.WHITE};
  border: 1px solid ${COLORS.DARK_GREY};
  box-shadow: inset 0 1px 3px 0 ${COLORS.BOX_SHADOW_BLACK};
  border-radius: 3px;
  font-family: ${FONTS.AVENIRNEXT};
  font-size: 15px;
  padding: 10px 0 10px 5px;
  margin-bottom: 2%;
`

const NameInput = styled(StyledInput)``
const EmailInput = styled(StyledInput)``

const MessageInput = styled.textarea`
  background: ${COLORS.WHITE};
  border: 1px solid ${COLORS.DARK_GREY};
  box-shadow: inset 0 1px 3px 0 ${COLORS.BOX_SHADOW_BLACK};
  border-radius: 3px;
  font-family: ${FONTS.AVENIRNEXT};
  font-size: 15px;
  padding: 10px 0 200px 5px;
  margin-bottom: 2%;
`

const ErrorMessage = styled.div`
  color: ${COLORS.RED};
  font-size: 14px;
`

const ButtonContainer = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: flex-end;
`

const ButtonPrimary = styled.button`
  padding: 10px 20px;
  font-family: ${FONTS.AVENIRNEXT};
  font-size: 15px;
  border-radius: 10px;
  border: 2px solid ${COLORS.DARK_GREY};

  :hover {
    cursor: pointer;
  }
`

const PhotoContainer = styled.div``

const Image = styled.img`
  width: 100%;
`

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [buttonText, setButtonText] = useState('Send Message')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setErrors({ ...errors, [name]: '' }) // Reset error on change
  }

  const validateForm = () => {
    const newErrors = {}
    const { name, email, message } = formData

    // Check for empty fields
    if (!name) newErrors.name = 'Name is required'
    if (!email) newErrors.email = 'Email is required'
    if (!message) newErrors.message = 'Message is required'

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (email && !emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Character limits
    if (name && name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters long'
    }
    if (message && message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return // If there are errors, stop the form submission
    }

    setButtonText('...sending')

    try {
      const res = await axios.post(
        'https://portfolio-api-beta.vercel.app/api/send',
        formData
      )

      if (res.data.msg === 'success') {
        resetForm()
      } else {
        setButtonText('Send Message')
      }
    } catch (error) {
      console.log('Message not sent', error)
      setButtonText('Send Message')
    }
  }

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    })
    setButtonText('Message Sent')
  }

  return (
    <ContactContainer id='contact'>
      <ContactHeader>Contact</ContactHeader>
      <ContactBody>
        <InputForm>
          <FormText>Have a question or want to work together?</FormText>
          <ContactForm method='POST' onSubmit={handleSubmit}>
            <NameInput
              name='name'
              type='text'
              placeholder='Name'
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}

            <EmailInput
              name='email'
              type='email'
              placeholder='Email'
              required
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

            <MessageInput
              name='message'
              placeholder='Your message'
              required
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}

            <ButtonContainer>
              <ButtonPrimary type='submit'>{buttonText}</ButtonPrimary>
            </ButtonContainer>
          </ContactForm>
        </InputForm>
        <PhotoContainer>
          <Image src={canadianTuxedo} alt='' />
        </PhotoContainer>
      </ContactBody>
    </ContactContainer>
  )
}
