import React, { Component } from "react";
import Header from "elements/Header";
import PageDetailTitle from "elements/PageDetailTitle";
import PageDetailDescription from "elements/PageDetailDescription";
import FeaturedImage from "elements/FeaturedImage";
import BookingForm from "elements/BookingForm";
import Category from "elements/Categories";
import Testimonial from "elements/Testimoni";
import Footer from "elements/Footer";
import ItemDetail from "json/itemDetails";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = `Details Page`;
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumbList = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle data={ItemDetail} breadcrumb={breadcrumbList} />
        <FeaturedImage data={ItemDetail.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5 detailPage">
              <PageDetailDescription data={ItemDetail} />
            </div>
            <div className="col-5">
              <BookingForm itemDetails={ItemDetail} />
            </div>
          </div>
        </section>
        <Category data={ItemDetail.categories} />
        <Testimonial data={ItemDetail.testimonial} />
        <Footer />
      </>
    );
  }
}
