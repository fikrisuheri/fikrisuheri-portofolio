import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarComp, HeaderComp, SkillComp, AppComp } from './component';
import { colorDark } from './assets/colors';
export default class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: colorDark }}>
        <NavbarComp />
        <HeaderComp />
        <SkillComp />
        <AppComp />
      </div>
    )
  }
}
