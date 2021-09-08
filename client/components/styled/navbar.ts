import styled from "styled-components";

export const NavbarWrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1;
  box-shadow: rgb(204 204 204) 0px 0px 10px;
  background-color: #1447a6;
  .navbar {
    padding: 12px 30px;
    height: 45px;
    @media only screen and (max-width: 992px) {
      padding: 8px 30px;
    }
    .desktopLogo {
      display: block;
    }
    .mobileLogo {
      display: none;
    }
    @media only screen and (max-width: 992px) {
      .desktopLogo {
        display: none;
      }
      .mobileLogo {
        display: block;
      }
    }
    .navbar-brand {
      padding: 0;
    }
    .dropdown-toggle::after {
      display: inline-block;
      margin-left: 5px;
      vertical-align: 1px;
    }
    .userDropDown {
      margin: 0 20px;
    }
    .dropdown {
      .btn-primary {
        background-color: transparent;
        border: none;
        padding: 0 15px;
        @media only screen and (max-width: 992px) {
          padding: 10px 15px;
        }
        &::focus {
          box-shadow: none;
        }
        ::after {
          display: none !important;
        }
      }
    }
    .nav-link {
      padding: 6px 0px;
      font-size: 18px;
      font-weight: 600;
      line-height: 14px;
      margin-right: 20px;
      margin-left: 20px;
      color: rgb(255, 255, 255) !important;
    }
    .nav-link.active {
      border-bottom: 2px solid rgb(255, 255, 255);
      color: rgb(255, 255, 255) !important;
    }
    .mobilePoints {
      display: none;
    }
    .mobileMenu {
      display: none;
    }
  }
  .signUp.nav-link {
    background: linear-gradient(
        180deg,
        #ffffff -81.58%,
        rgba(255, 255, 255, 0) 76.32%
      ),
      #21c466;
    background-blend-mode: soft-light, normal;
    border: 1px solid #21c466;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 10px 16px !important;
    color: #fff;
    text-transform: uppercase;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    &:hover {
      color: #fff !important;
    }
  }
  .signUp.nav-link.active {
    border-bottom: 0;
  }
  .after_login_navabr {
    padding: 12px 30px;
    @media only screen and (max-width: 768px) {
      padding: 8px 30px;
    }
  }
  .navbarBg {
    .mbl_logo {
      display: none;
    }
    .navbar-nav {
      align-items: center;
    }
    .dropdown-menu {
      border-radius: 0;
      box-shadow: 0px 0px 5px #ccc;
      border: none;
      padding: 0;
      left: -80px;
    }
    .dropdown-item {
      border-bottom: 1px solid #ccc;
      font-weight: 400;
      color: #262626;
      padding: 12px 20px;
      cursor: pointer;
      img {
        cursor: pointer;
      }
    }
    .navbar-light .navbar-nav .nav-link:hover,
    .navbar-light .navbar-nav .nav-link:focus {
      color: #b1b1b1;
    }
    .dropdown-menu {
      top: 48px;
    }
    .dropdownMenu {
      justify-content: flex-end;
      a {
        padding: 0 15px;
      }
    }
    .logoutOptions {
      width: 100%;
      position: absolute;
      bottom: 0;
      margin-bottom: 0;
      li a {
        font-weight: bold;
        text-align: left;
        text-transform: uppercase;
        font-size: 14px;
      }
    }
    .subscribe {
      background: #0cc6bb;
      border: 1px solid #0cc6bb;
      box-sizing: border-box;
      border-radius: 4px;
      padding: 10px 16px !important;
      color: #fff;
      text-transform: uppercase;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 15px;
      margin: 0;
      &:hover {
        color: #fff !important;
      }
    }
    .goldIcon {
      span {
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 18px;
        text-transform: capitalize;
        margin-left: 5px;
        color: #fff;
        @media only screen and (max-width: 992px) {
          color: #000;
        }
      }
      img {
        width: 20px;
      }
    }
    .userName {
      font-size: 12px;
      margin-left: 0px;
      font-weight: 600;
      display: inline-block;
    }
    @media only screen and (max-width: 992px) {
      .navbar-collapse {
        background-color: #fff;
        box-shadow: 0px 0px 10px #ccc;
        margin-top: 10px;
      }
      .nav-link {
        color: #000 !important;
        padding: 10px 0;
        display: block;
        border-bottom: 1px solid #e3e3e3;
        width: 100%;
      }
      .nav-link.active {
        color: #000 !important;
        padding: 10px 0;
        display: block;
        border-bottom: 1px solid #e3e3e3;
        width: 100%;
      }
      .dropup,
      .dropright,
      .dropdown,
      .dropleft {
        width: 100%;
      }
      .navbar-nav {
        text-align: center;
        margin: 0px auto;
      }
      .dropdown-menu {
        text-align: center;
        display: block;
        visibility: visible;
      }
      .signUp.nav-link {
        background: transparent;
        border: transparent;
        font-size: 18px;
        text-transform: capitalize;
        font-weight: 600px !important;
        &:hover {
          color: #000 !important;
        }
      }
      .mobilePoints {
        position: absolute;
        left: 25%;
        display: block;
        top: 11px;
        a {
          color: #fff !important;
          border-bottom: none;
          display: inline-block;
          width: 14%;
        }
        span {
          color: #fff;
          font-size: 13px;
        }
      }
      .goldIcon {
        display: none;
      }
      .mobileDropdown {
        display: none;
      }
      .mobileMenu {
        display: block;
      }
    }
    @media only screen and (max-width: 768px) {
      .mbl_logo {
        display: block;
      }
      .desktop_logo {
        display: none;
      }
    }

    @media only screen and (max-width: 575px) {
      .navbar-collapse {
        margin-top: 7px;
      }
    }
  }
`;
