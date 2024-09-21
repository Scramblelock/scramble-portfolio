import styled from '@emotion/styled'
import format from 'date-fns/format'
import { SOCIAL_ACCOUNTS, FOOTER, COLORS, FONTS } from '../const'

const FooterContainer = styled.footer`
  margin-bottom: 5%;
  text-align: center;
`

const SocialIcons = styled.ul`
  display: flex;
  justify-content: center;
  padding-left: 0;
  list-style: none;
`

const SocialIconItem = styled.li`
  margin: 0 5px;
`

const SocialIconLink = styled.a`
  display: block;
`

const SocialIconImage = styled.img`
  height: 75%;
  padding: 5px;
`

const CopyrightText = styled.p`
  font-family: ${FONTS.AVENIRNEXT};
  font-size: 20px;
  color: ${COLORS.BLACK};
`

export const Footer = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        {SOCIAL_ACCOUNTS.map((account, i) => (
          <SocialIconItem key={`${account.name}_${i}`}>
            <SocialIconLink
              href={account.link}
              target={!account.isEmail ? '_blank' : '_self'}
              rel={!account.isEmail ? 'noopener noreferrer' : undefined}
            >
              <SocialIconImage src={account.name} alt={account.name} />
            </SocialIconLink>
          </SocialIconItem>
        ))}
      </SocialIcons>
      <CopyrightText>
        {FOOTER.name} {format(new Date(), 'yyyy')}
      </CopyrightText>
    </FooterContainer>
  )
}
