import React from 'react'
import imgHero from 'assets/images/img-hero.jpg'
import imgHeroFrame from 'assets/images/img-hero-frame.jpg'
import travel from 'assets/icons/suitcase.svg'
import treasure from 'assets/icons/tools-and-utensils.svg'
// import maps from 'assets/icons/maps-and-location.svg'
import maps from 'assets/icons/signs.svg'
import Button from 'components/Button'

export default function Hero(props) {

    function showMostPick () {
        window.scrollTo({
            to: props.ref,
            behavior: 'smooth'
        })
    }
    return (
        <section className="container pt-4">
            <div className="row align-items-center">
                <div className="col-auto pr-5" style={{ width: 530 }}>
                    <h1 className="h2 font-weight-bold line-height-1 mb-3">
                        Let's Spent The Weekend, <br />
                        With Your Family.
                    </h1>
                    <p className="mb-5 font-weight-light text-gray-500 w-75">
                        We Provide what you need to enjoy your holiday with family. Time to make
                        another memorable moments.
                    </p>
                    <Button className="btn px-5" hasShadow isPrimary onClick={showMostPick}>
                        Show Me
                    </Button>
                <div className="row mt-5">
                    <div className="col-auto" width={{ marginRight: 35}}>
                        <img width="36" height="36" src={travel} alt={`${props.data.travelers} Travelers`}/>
                        <h6 className="mt-3">
                            {props.data.travelers}{" "}
                            <span className="text-gray-500 font-weight-light">
                                Travelers
                            </span>
                        </h6>
                    </div>
                    <div className="col-auto" width={{ marginRight: 35}}>
                        <img width="36" height="36" src={treasure} alt={`${props.data.treasures} Treasures`}/>
                        <h6 className="mt-3">
                            {props.data.treasures}{" "}
                            <span className="text-gray-500 font-weight-light">
                                Treasures
                            </span>
                        </h6>
                    </div>
                    <div className="col-auto">
                        <img width="36" height="36" src={maps} alt={`${props.data.cities} Cities`}/>
                        <h6 className="mt-3">
                            {props.data.cities}{" "}
                            <span className="text-gray-500 font-weight-light">
                                Cities
                            </span>
                        </h6>
                    </div>
                </div>
                </div>
                <div>
                    <img src={imgHero} alt="" width="200" height="200"/>
                </div>
            </div>
        </section>
    )
}
