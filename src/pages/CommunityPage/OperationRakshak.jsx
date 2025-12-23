import React from 'react';
// import styles from './OperationRakshak.module.css';
import style from '../../css/career.module.css';
import { FaArrowRight } from 'react-icons/fa';


const OperationRakshak = () => {
  const operations = [
    { icon: '🌊', title: 'Flood relief' },
    { icon: '⚡', title: 'Earthquake response' },
    { icon: '🌀', title: 'Cyclone/Storm assistance' },
    { icon: '🔥', title: 'Fire rescue support' },
    { icon: '🫂', title: 'Humanitarian aid' }
  ];

  const features = [
    'Rapid response training',
    'Digital volunteer ID',
    'NDRF/SDRF partnerships',
    'Service certificates & recognition'
  ];

  const featureData = [
    {
      icon: "fas fa-bolt",
      title: "Rapid Response Training",
      desc: "Comprehensive emergency training with certified instructors and simulation exercises."
    },
    {
      icon: "fas fa-id-card",
      title: "Digital Volunteer ID",
      desc: "Official identification with QR verification for authorized emergency zone access."
    },
    {
      icon: "fas fa-handshake",
      title: "NDRF/SDRF Partnerships",
      desc: "Direct collaboration with National and State Disaster Response Forces."
    },
    {
      icon: "fas fa-award",
      title: "Service Recognition",
      desc: "Certificates and awards for volunteers contributing to relief efforts."
    }
  ];


  const veerGearProducts = [
    {
      img: "/assets/img/about/shirt.webp",
      name: "Agniveer Alumni T-Shirts",
      type: "Premium cotton with custom insignia"
    },
    {
      img: "/assets/img/about/hoodie.webp",
      name: "Battalion Hoodies",
      type: "Heavyweight with battalion designs"
    },
    {
      img: "/assets/img/about/duffle.webp",
      name: "Military Duffle Bags",
      type: "Rugged and water-resistant"
    },
    {
      img: "/assets/img/about/caps.webp",
      name: "Caps & Badges",
      type: "Official military accessories"
    },
    {
      img: "/assets/img/about/poster.webp",
      name: "Desk Flags & Posters",
      type: "Display your pride"
    },
    {
      img: "/assets/img/about/notebook.webp",
      name: "Tactical Notebooks",
      type: "Field-tested stationery"
    }
  ];



  return (
    <>

      <section style={{ backgroundColor: 'var(--light-bg)' }} className={style.benefitsSection}>
        <div className={style.benefitsContainer}>

          {/* Section Header */}
          <div className={style.benefitsHeader}>


            <div className={style.headerDecorator}>
              <div className={style.decLine}></div>
              <span className={style.decText}>  Operation Rakshak Force </span>
              <div className={style.decLine}></div>
            </div>

            <h2 className={style.sectionTitle}>
              When the Nation Calls, We Always Answer.
            </h2>


          </div>


          {/* features-area pt-70 pb-70 p-relative  z-index-2 cs-rak-section */}

          <div className="col-12 mx-auto">

            {/* <!-- Mission Overview --> */}
            <div className="cs-miss-card">
              <h3 className="cs-miss-title">Community Volunteer Force</h3>
              <p>
                A dedicated volunteer force deployed for emergency
                response and humanitarian assistance across critical
                situations.
              </p>

              <div className="row col-12 gy-4">
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  <div className="cs-miss-deploy-item">
                    <i className="fas fa-water cs-miss-deploy-icon"></i>
                    <div className="cs-miss-deploy-text">
                      Flood Relief
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  <div className="cs-miss-deploy-item">
                    <i
                      className="fas fa-mountain cs-miss-deploy-icon"></i>
                    <div className="cs-miss-deploy-text">
                      Earthquake
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  <div className="cs-miss-deploy-item">
                    <i className="fas fa-wind cs-miss-deploy-icon"></i>
                    <div className="cs-miss-deploy-text">Cyclone</div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  <div className="cs-miss-deploy-item">
                    <i className="fas fa-fire cs-miss-deploy-icon"></i>
                    <div className="cs-miss-deploy-text">
                      Fire Rescue
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                  <div className="cs-miss-deploy-item">
                    <i
                      className="fas fa-hands-helping cs-miss-deploy-icon"></i>
                    <div className="cs-miss-deploy-text">
                      Humanitarian Aid
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Features --> */}
            <div className="cs-miss-feature-sec">
              <h3 className="cs-miss-feature-sec-title">Program Features</h3>
              <div className="row col-12 mx-auto">
                {featureData.map((item, index) => (
                  <div key={index} className="col-lg-3 col-sm-4 col-12">
                    <div className="cs-miss-feature-card">
                      <i className={`${item.icon} cs-miss-feature-icon`}></i>

                      <h4 className="cs-miss-feature-title">
                        {item.title}
                      </h4>

                      <p className="cs-miss-feature-desc">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>



            </div>

            <div className="col-lg-8 col-md-10 mx-auto">
              {/* <!-- CTA --> */}
              <div className="cs-rakksha-cta-card">
                <h3 className="cs-rakksha-cta-card-title">Join the Force</h3>
                <p className="cs-rakksha-cta-card-subtitle">
                  Be part of a national volunteer network ready to serve
                  during emergencies. Complete training provided.
                </p>

                {/* <button className="border-btn btn-light">

                  <span>Join Rakshak Force <i className="fa fa-arrow-right ms-2"></i></span>
                </button> */}

                <div className="mission-cta-buttons">
                  <button
                    style={{ border: "1px solid var(--primary-color)" }}
                    className="mission-btn fill-btn "
                  >
                    <span>Join Rakshak Force</span>
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* <!--Featured Tools & Modules end-- >

      < !--Veer Gear Product start-- > */}

      <section className={style.benefitsSection}>
        <div className={style.benefitsContainer}>

          {/* Section Header */}
          <div className={style.benefitsHeader}>


            <div className={style.headerDecorator}>
              <div className={style.decLine}></div>
              <span className={style.decText}> VeerGear Official Store </span>
              <div className={style.decLine}></div>
            </div>

            <h2 className={style.sectionTitle}>
              Wear Your Pride. Live Your Identity.
            </h2>
          </div>



          <div className="row col-12 mx-auto gy-4">
            {veerGearProducts.map((item, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-4">
                <div className="cs-veergear-prd-card">
                  <div className="cs-veergear-prd-img">
                    <img src={item.img} alt="product image" />
                  </div>

                  <div className="cs-veergear-prd-content">
                    <h3 className="cs-veergear-prd-name">{item.name}</h3>
                    <p className="cs-veergear-prd-type">{item.type}</p>
                    <button className="cs-veergear-prd-btn">View Product</button>
                  </div>
                </div>
              </div>
            ))}
          </div>


          {/* <!-- CTA --> */}
          <div className="cs-veergear-cta-div col-xl-8 mx-auto text-center mt-40">
            <h3 style={{ color: 'var(--primary-color)' }} className="cs-rakksha-cta-card-title">Ready to Wear Your Pride?</h3>
            <p className="cs-veergear-cta-desc text-center">
              Explore our premium collection of military-inspired gear and
              apparel. Each product is crafted with precision and built to
              last.
            </p>
            <span className="fill-btn" id="shopBtn">
              <span>Shop VeerGear Collection</span>
              <i className="fas fa-shopping-cart"></i>
            </span>
            <p className="cs-veergear-cta-partnership-badge text-center">
              <i className="fa fa-handshake fs-5 me-2"></i> partnership with Olive Planet
            </p>
          </div>

        </div>
      </section>
      {/* <!--Veer Gear Product end-- > */}
      <section className="cs-final-cta py-5">
        <div className="container">
          <div className="row justify-content-center">
            {/* <div className="col-lg-10"> */}
            {/* <div className="cs-final-cta-box text-center text-lg-start"> */}


            {/* <div className="col-lg-8 col-md-10 mx-auto"> */}
            {/* <!-- CTA --> */}
            <div className="cs-rakksha-cta-card">
              <h3 className="cs-rakksha-cta-card-title"> Join the Future of Growth & Innovation</h3>
              <p className="cs-rakksha-cta-card-subtitle">
                Be part of the VEER-NXT community where learning, collaboration,
                and opportunity come together.
              </p>

              {/* <button className="border-btn btn-light">

                  <span>Join Rakshak Force <i className="fa fa-arrow-right ms-2"></i></span>
                </button> */}

              <div className="mission-cta-buttons">
                <button
                  style={{ border: "1px solid var(--primary-color)" }}
                  className="mission-btn fill-btn "
                >
                  <span>Join VEER-NXT Community Today</span>
                  <FaArrowRight />
                </button>
              </div>
            </div>
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </section>
      {/* <!--final cta section end-- > */}
    </>
  );
};

export default OperationRakshak;