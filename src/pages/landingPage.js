import React, { Component } from "react";
import Header from "elements/Header";
import Hero from "elements/Hero";
import MostPicked from "elements/MostPicked";
import Categories from "elements/Categories";
import Testimoni from "elements/Testimoni";
import landingPage from "json/landingPage.json";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        />
        <Categories data={landingPage.categories} />
        <Testimoni data={landingPage.testimonial} />
      </>
    );
  }
}
