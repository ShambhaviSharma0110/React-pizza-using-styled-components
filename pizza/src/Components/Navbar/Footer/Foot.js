import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import {
  FooterCont
  ,
  FooterWrap,
  Social,
  SocialWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from "./FootEl";

const Foot = () => {
    return (
      <FooterCont>
        <FooterWrap>
          <Social>
            <SocialWrap>
              <SocialLogo to="/">Pizza</SocialLogo>
              <SocialIcons>
                <SocialIconLink
                  href="/"
                  target="_blank"
                  aria-label="Facebook"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href="/"
                  target="_blank"
                  aria-label="Instaram"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href="/"
                  target="_blank"
                  aria-label="Youtube"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink
                  href="/"
                  target="_blank"
                  aria-label="Twitter"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </SocialIconLink>
              </SocialIcons>
            </SocialWrap>
          </Social>
        </FooterWrap>
      </FooterCont>
    );
}

export default Foot
