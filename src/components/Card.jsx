import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
  constructor() {
    super();
    this.state = {
    showMenu: false,
    };
  this.showMenu = this.showMenu.bind(this);
  this.closeMenu = this.closeMenu.bind(this);
  }


  showMenu(event) {
  event.preventDefault();
  this.setState({ showMenu: true }, () => {
  document.addEventListener('click', this.closeMenu);
  });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
      });
    }
  }

  render() {
  const linkStyling = {textDecoration: "none",}
    return (
      <div className="drop-down">
            <img onClick={this.showMenu} className="mobile-navbar-button" src="https://d9hhrg4mnvzow.cloudfront.net/promo.bizjournals.com/southflorida/leaders/invite/3ec560a8-white-menu-icon.png" alt="Menu Button" />

        {
          this.state.showMenu
            ? (
              <div className="menu" ref={(element) => {this.dropdownMenu = element;}}>
                <Link className="links" style={linkStyling} to="/"><p className="nav-link">Home</p></Link>
                <Link className="links" style={linkStyling} to="/galleries"><p className="nav-link">Galleries</p></Link>

                <p className="nav-link">About Me</p>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default Card;
