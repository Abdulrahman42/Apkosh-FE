import React, { Component } from 'react'
import Header from 'elements/Header'
import Hero from 'elements/Hero'

import landingPage from 'json/landingPage.json'

export default class LandingPage extends Component {
    render() {
        return (
            <>
            <Header {...this.props}></Header>
            <Hero data={landingPage.hero}/>
            </>
        )
    }
}
