import React from "react";
import * as S from "./footer.js";
import github from "../../Assets/icons/github_fa.png";
import linkedin from "../../Assets/icons/linkedin_akar.png";

const Footer = () => {
  return (
    <S.Footer>
      <S.Copyright>
        <p>
          Developed with ❤️ by Vanessa Reis. &copy; One Blue Network. All Rights
          Reserved.
        </p>
      </S.Copyright>
      <S.SocialLinks>
        <a href="https://github.com/vanessacreis">
          <img src={github} alt="Logo do Github" />
        </a>
        <a href="https://www.linkedin.com/in/vanessacreisbh/">
          <img src={linkedin} alt="Logo do Linkedin" />
        </a>
      </S.SocialLinks>
    </S.Footer>
  );
};

export default Footer;
