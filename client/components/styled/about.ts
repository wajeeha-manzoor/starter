// #region Global Imports
import styled from 'styled-components';
// #endregion Global Imports


export const HomeWrapper = styled.div`
  background-color: #fff;
  padding-top: 50px;
  .header-content {
    margin: 20px auto;
    width: 80%;
    max-width: 800px;
  }
`;
export const Heading = styled.h1`
  text-align: center;
  padding-bottom: 30px;
  font-weight: 700;
  font-size: 48px;
  color: #101535 !important;
  line-height: 70px;
  @media only screen and (max-width: 768px) {
    font-size: 40px;
    line-height: 48px;
  }
  @media only screen and (max-width: 550px) {
    font-size: 33px;
    line-height: 42px;
  }
`;
export const SubTitle = styled.p`
  padding: 0px 50px;
  text-align: center;
  color: #626262;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 150%;
  @media only screen and (max-width: 768px) {
    padding: 0px 0px;
  }
`;
export const HeadingSmall = styled.h4`
  padding: 23px 30px;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 150%;
  color: #333333;
  cursor: pointer;
  &:hover {
    color: #409eff;
  }
`;
export const ScenariosWrapper = styled.div`
  background-color: #f5f5f5;
  .viewScenario {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 120%;
    text-decoration: underline;
  }
  .mbl_v_show {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 54px 22px;
    .mbl_v {
      display: none;
    }
    .mbl_v_show {
      display: block;
    }
  }
`;
export const HeadingSection = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 120%;
  color: #333333;
  padding-top: 20px;
`;
