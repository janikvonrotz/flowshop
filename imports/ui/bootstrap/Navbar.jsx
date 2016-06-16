import React from 'react';
import classNames from 'classnames/bind';

// Navbar: { brandLink, srcLogo, className, brand, children}

export default class Navbar extends React.Component {
  render() {
    return(
      <nav className={classNames('navbar navbar-dark bg-inverse', this.props.className)} role="navigation">
        <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#navbar-header" aria-controls="navbar-header">
          ☰
        </button>
        <div className="navbar-toggleable-xs collapse" id="navbar-header">
          <a className="navbar-brand" href={ this.props.brandLink }><span><img className="navbar-logo" src={this.props.srcLogo} /> { this.props.brand }</span></a>
          { this.props.children }
        </div>
      </nav>
    );
  }
}
