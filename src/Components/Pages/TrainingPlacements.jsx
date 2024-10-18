import React, { useState } from 'react';

const TrainingPlacements = () => {
  

  
  
  return (
    // <div>
    //   <header>
    //     <div class="page-header align-items-start min-vh-100">
    //     <video
    //           playsinline="playsinline"
    //           autoplay="autoplay"
    //           muted="muted"
    //           loop="loop"
    //           loading="lazy"
    //         >
    //           <source src="../../assets/Videos/commingsoon.mp4" type="video/mp4" />
    //         </video>
    //         <div class="container my-auto">
    //   <div class="row">
    //     <div class="col-lg-12 m-auto text-center">
    //       <h1 class="display-1 text-bolder text-white">Coming Soon</h1>
    //       <h2 class="text-white">Exciting Updates Are on the Horizon – Stay Tuned!</h2>
    //       <p class="lead text-white">Indicating a new website or feature that will be launched shortly.</p>

    //     </div>
    //   </div>
    // </div>
    //     </div>
    //   </header>
    // </div>
    <div

      className="  bg-gradient-to-b from-black via-black to-sky-800 pt-7"
    >

      <div class="container w-80">
        <div class="row">

          <div class="col-lg-8 col-10 d-flex justify-content-center flex-column mx-auto text-lg-start text-center ">
            <h2 class="mb-0 mt-lg-0 mt-4 text-gradient text-info">
              Building skills, Shaping futures
            </h2>
            <p class="lead mt-4">
              We turn ambition into achievement. Our cutting-edge training programs are designed to give you the skills that top employers are looking for, while our dynamic placement services connect you with exciting career opportunities. Whether you're aiming to enhance your expertise or land your dream job, we’re here to guide you every step of the way. Start your journey to career success with us today!{" "}
            </p>
            <p class="lead">

            </p>
          </div>
          <div class="col-lg-4 col-6 mx-lg-0 mx-auto px-lg-0 px-md-0 my-auto">
            <img
              class="w-100 border-radius-lg "
              src="../../assets/img/logo.png"
              alt="heftibaimg"
            />
          </div>
        </div>

      </div>

      <div class="container w-80">
        <div class="row">
          <div class="col-lg-4 col-6 mx-lg-0 mx-auto px-lg-0 px-md-0 my-auto">
            <img
              class="w-80 border-radius-lg shadow"
              src="../../assets/img/toa-heftiba.jpg"
              alt="heftibaimg"
            />
          </div>
          <div class="col-lg-8 col-10 d-flex justify-content-center flex-column mx-auto text-lg-start text-center">
            <h2 class="mb-0 mt-lg-0 mt-4 text-gradient text-info">
              About the courses
            </h2>
            <p class="lead mt-4 text-black">
              <b> Pack 1 :</b> JAVA BACKEND DEVELOPER
            </p>
            <p class="lead text-black">
              <b> Pack 2 :</b> REALTIME TOOLS
            </p>
            <p class="lead text-black ">
              <b> Pack 3 :</b> WEB DEVELOPMENT COURSES REACTJS
            </p>
            <p class="lead text-black">
              <b> Pack 4 :</b> JAVA FULL STACK DEVELOPER COURSE (COMBO PACK)
            </p>
            <p class="lead text-black">
              <b> Pack 5 :</b> JAVA AUTOMATION TESTING
            </p>
            <p class="lead text-black">
              <b> Pack 6 :</b> AWS CICD PIPELINES (DEVOPS)
            </p>

          </div>
        </div>
      </div>
      <div className="py-2">
        <section class="features-3">
          <div class="container">
            <div class="row text-center justify-content-center">
              <div class="col-lg-8">
                <span class="badge rounded-pill badge-primary mb-2 text-2xl ">
                  Courses Offering
                </span>
                <h2 className="source-serif-4 text-normal font-weight-light">
                  "It's not just course, it's an experience
                </h2>
              </div>
            </div>
            <div class="row mt-5 ">
              <div class="col-lg-4 mb-lg-0 mb-4 ">
                <div class="card ">
                  <div class="card-header p-0 position-relative mt-n4 mx-2 z-index-2 ">
                    <a class="d-block blur-shadow-image">
                      <img
                        src="../../assets/imgs/java-spring-boot-hibernate-microservices.png"
                        alt="img-blur-shadow"
                        className="img-fluid shadow border-radius-lg services-images"
                        loading="lazy"
                      />
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class=" mb-0 mt-lg-0 mt-4 text-gradient text-info "><b>Pack 1 Content</b></h4>
                    <p class="text-black">
                      <b> JAVA 22 VERSION, SPRINGBOOT,SPRING JPA, MYSQL, HTML 5, JAVASCRIPT, CSS, MICROSERVICE, ECLIPSE OR STS, MAVEN
                      </b> </p>

                  </div>
                </div>
                <div class="card mt-5">
                  <div class="card-header p-0 position-relative mt-n4 mx-2 z-index-2">
                    <a class="d-block blur-shadow-image">
                      <img
                        src="./../assets/imgs/mobilecloud.jfif"
                        alt="img-blur-shadow"
                        className="img-fluid shadow border-radius-lg services-images"
                        loading="lazy"
                      />
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class=" mb-0 mt-lg-0 mt-4 text-gradient text-info "><b>Pack 4 Content</b></h4>
                    <p class="text-black">
                      <b>
                        Pack 1 + Pack 2 + Pack3


                      </b>
                    </p>
                    <div className="mt-3">
                      <button
                        class="btn btn-outline-dark btn-sm mb-0"
                        type="button"
                        name="button"
                        data-bs-toggle="modal"
                        data-bs-target="#devopsModal"
                      >
                        More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 mb-lg-0 mb-4">
                <div class="card">
                  <div class="card-header p-0 position-relative mt-n4 mx-2 z-index-2">
                    <a class="d-block blur-shadow-image">
                      <img
                        src="../../assets/imgs/devops-automation-tools.png"
                        alt="img-blur-shadow"
                        className="img-fluid shadow border-radius-lg services-images"
                        loading="lazy"
                      />
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class=" mb-0 mt-lg-0 mt-4 text-gradient text-info "><b>Pack 2 Content</b></h4>
                    <p class="text-black"><b>
                      GITHUB, JUNITS, SPRING, MOCKITO LOG4J-SLF4J, GRADLE, POSTMAN, INTELIJ, AGILE METHODOLOGY, SDLC, JAVA 17,21,22 FEATURES, MONGODB, DESIGN PATTERNS
                    </b> </p>

                  </div>
                </div>
                <div class="card mt-5">
                  <div class="card-header p-0 position-relative mt-n4 mx-2 z-index-2">
                    <a class="d-block blur-shadow-image">
                      <img
                        src="../../assets/imgs/advjava.jpeg"
                        alt="img-blur-shadow"
                        className="img-fluid shadow border-radius-lg services-images"
                        loading="lazy"
                      />
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class=" mb-0 mt-lg-0 mt-4 text-gradient text-info "><b>Pack 5 Content</b></h4>
                    <p class="text-black">      <b>
                      CORE JAVA, SELENIUM AUTOMATION, PAGE OBJECT MODEL DESIGN PATTERN, TESTING & BDD FRAMEWORK, MAVEN, GITHUB, ECLIPSE</b>
                    </p>

                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="card ">
                  <div class="card-header p-0 position-relative mt-n4 mx-2 z-index-2 ">
                    <a class="d-block blur-shadow-image">
                      <img
                        src="../../assets/imgs/uiuximg"
                        alt="img-blur-shadow"
                        className="img-fluid shadow border-radius-lg services-images"
                        loading="lazy"
                      />
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class=" mb-0 mt-lg-0 mt-4 text-gradient text-info "><b>Pack 3 Content</b></h4>
                    <p class="text-black">      <b>
                      HTML 5, JAVASCRIPT, CSS3, REACTJS, REALTIME PROJECT DEVELOPMENT</b>
                    </p>

                  </div>
                </div>
                <div class="card mt-5">
                  <div class="card-header p-0 position-relative mt-n4 mx-2 z-index-2">
                    <a class="d-block blur-shadow-image">
                      <img
                        src="../../assets/imgs/robot.jpg"
                        alt="img-blur-shadow"
                        className="img-fluid shadow border-radius-lg services-images"
                        loading="lazy"
                      />
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class=" mb-0 mt-lg-0 mt-4 text-gradient text-info "><b>Pack 6 Content</b></h4>
                    <p class="text-black">      <b>
                      AWS SS3 BUCKET, EC2 ECS,, CICD PIPELINES, DOCKER IMAGE</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* UI/UX Design Modal */}

        {/* Devops Modal */}
        <div
          class="modal fade"
          id="devopsModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="devopsModalLabel"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-xl"
            role="document"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="devopsModalLabel">
                  <b>
                    Pack 4 Content </b>
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i class="fa fa-times text-dark" aria-hidden="true"></i>
                </button>
              </div>
              <div class="modal-body">
                <div class="container-fluid">
                  <h4 class="mb-2 text-rose text-normal "><b>
                    Pack 1 + Pack2 + Pack3</b>
                  </h4>
                  <div class="row align-items-center">
                    <div class="col-md-7 mb-md-0 ">
                      <div class="col-md-12 ">
                        <div class="p-3 info-horizontal d-flex">
                          <div>
                            <h4 class=" mb-0 mt-lg-0 mt-4 text-gradient text-info "><b>Pack 1 Content</b></h4>
                            <p class="text-black">
                              <b> JAVA 22 VERSION, SPRINGBOOT,SPRING JPA, MYSQL, HTML 5, JAVASCRIPT, CSS, MICROSERVICE, ECLIPSE OR STS, MAVEN
                              </b> </p>
                          </div>
                        </div>
                        <div class="p-3 info-horizontal d-flex">
                          <div>
                            <h4 class=" mb-0 mt-lg-0 mt-4 text-gradient text-info "><b>Pack 2 Content</b></h4>
                            <p class="text-black"><b>
                              GITHUB, JUNITS, SPRING, MOCKITO LOG4J-SLF4J, GRADLE, POSTMAN, INTELIJ, AGILE METHODOLOGY, SDLC, JAVA 17,21,22 FEATURES, MONGODB, DESIGN PATTERNS
                            </b> </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-5">
                      <div class=" p-0 border-radius-lg">
                        <div class="blur-shadow-image">
                          <img
                            src="https://singlepointsol.com/assets/img/Cloud-DevOps.png"
                            alt="img-blur-shadow"
                            class="img-fluid border-radius-lg"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row align-items-center mt-4">
                    <div class="col-md-5">
                      <div class=" p-0 border-radius-lg">
                        <div class="blur-shadow-image">
                          <img
                            src="../../assets/imgs/advjava.jpeg"
                            alt="img-blur-shadow"
                            class="img-fluid border-radius-lg"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-7 mb-md-0 ">
                      <div class="p-3 info-horizontal d-flex">
                        <div>
                          <h4 class=" mb-0 mt-lg-0 mt-4 text-gradient text-info "><b>Pack 3 Content</b></h4>
                          <p class="text-black">      <b>
                            HTML 5, JAVASCRIPT, CSS3, REACTJS, REALTIME PROJECT DEVELOPMENT</b>
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        {/* WebApps Modal */}
        <div
          class="modal fade"
          id="javaWebAppModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="javaWebAppModalLabel"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-xl"
            role="document"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="javaWebAppModalLabel">
                  Web Apps - JAVA/J2EE
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i class="fa fa-times text-dark" aria-hidden="true"></i>
                </button>
              </div>
              <div class="modal-body">
                <div class="container-fluid">
                  <div>
                    <h4 class="mb-2 text-black text-normal">
                      Java/J2EE powers robust and scalable web applications with
                      enterprise-grade reliability and performance.
                    </h4>
                  </div>
                  <div class="row align-items-center">
                    <div class="col-md-7 mb-md-0 ">
                      <div class="col-md-12 ">
                        <div class="p-3 info-horizontal d-flex">
                          <div>
                            <h5>1. Enterprise-Grade Scalability:</h5>
                            <p>
                              Java/J2EE architecture supports scalable
                              applications that handle high traffic and large
                              volumes of data reliably.
                            </p>
                          </div>
                        </div>
                        <div class="p-3 info-horizontal d-flex">
                          <div>
                            <h5>2. Security:</h5>
                            <p>
                              Built-in security features and frameworks ensure
                              robust protection against vulnerabilities and data
                              breaches.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-5">
                      <div class=" p-0 border-radius-lg">
                        <div class="blur-shadow-image">
                          <img
                            src="https://www.spec-india.com/wp-content/uploads/2022/08/Java_web_development_Banner_graphic1.png"
                            alt="img-blur-shadow"
                            class="img-fluid border-radius-lg"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row align-items-center mt-4">
                    <div class="col-md-5">
                      <div class=" p-0 border-radius-lg">
                        <div class="blur-shadow-image">
                          <img
                            src="https://d3puhl2t51lebl.cloudfront.net/uploads/2022/01/java-1.png"
                            alt="img-blur-shadow"
                            class="img-fluid border-radius-lg"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-7 mb-md-0 ">
                      <div class="col-md-12 ">
                        <div class="p-3 info-horizontal d-flex">
                          <div>
                            <h5>3. Rich Ecosystem:</h5>
                            <p>
                              Extensive libraries, frameworks (e.g., Spring,
                              Hibernate), and tools support rapid development and
                              maintenance of complex web applications.
                            </p>
                          </div>
                        </div>
                        <div class="p-3 info-horizontal d-flex">
                          <div>
                            <h5>4. Integration Capabilities:</h5>
                            <p>
                              Seamless integration with other enterprise systems
                              and APIs, facilitating interoperability and data
                              exchange.
                            </p>
                          </div>
                        </div>
                        <div class="p-3 info-horizontal d-flex">
                          <div>
                            <h5>5. Scalability:</h5>
                            <p>
                              Easily scale horizontally or vertically to meet
                              increasing user demands and business growth
                              requirements.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* AI & ML Technologies Modal */}
        <div
          class="modal fade"
          id="aimlModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="aimlModalLabel"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-xl"
            role="document"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="aimlModalLabelLabel">
                  AI & ML Technologies
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i class="fa fa-times text-dark" aria-hidden="true"></i>
                </button>
              </div>
              <div class="modal-body">
                <div class="container-fluid">
                  <div>
                    <h4 class="mb-2 text-black text-normal">
                      AI & ML technologies harness data-driven insights to
                      automate processes, predict trends, and optimize
                      decision-making.
                    </h4>
                  </div>
                  <div class="row align-items-center">
                    <div class="col-md-7 mb-md-0 ">
                      <div class="col-md-12 ">
                        <div class="p-3 info-horizontal d-flex">
                          <div>
                            <h5>1. Data-Driven Insights:</h5>
                            <p>
                              AI & ML analyze large datasets to uncover patterns,
                              trends, and correlations that drive informed
                              decision-making.
                            </p>
                          </div>
                        </div>
                        <div class="p-3 info-horizontal d-flex">
                          <div>
                            <h5>2. Automation:</h5>
                            <p>
                              Automates repetitive tasks and processes, increasing
                              efficiency and allowing human resources to focus on
                              higher-value activities.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-5">
                      <div class=" p-0 border-radius-lg">
                        <div class="blur-shadow-image">
                          <img
                            src="https://static.wixstatic.com/media/db6335_3e33423bbe1a453da55e5e50fdaaaa83~mv2.png/v1/crop/x_72,y_36,w_756,h_600/fill/w_592,h_474,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IA%20ML%20ilustra.png"
                            alt="img-blur-shadow"
                            class="img-fluid border-radius-lg"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row align-items-center mt-4">
                    <div class="col-md-5">
                      <div class=" p-0 border-radius-lg">
                        <div class="blur-shadow-image">
                          <img
                            src="https://png.pngtree.com/png-vector/20230912/ourmid/pngtree-business-team-creating-artificial-intelligence-machine-learning-and-artificial-intelligence-concept-png-image_10027729.png"
                            alt="img-blur-shadow"
                            class="img-fluid border-radius-lg"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-7 mb-md-0 ">
                      <div class="col-md-12 ">
                        <div class="p-3 info-horizontal d-flex">
                          <div>
                            <h5>3. Predictive Capabilities:</h5>
                            <p>
                              Predicts outcomes and trends by learning from
                              historical data, enhancing forecasting accuracy and
                              proactive decision-making.
                            </p>
                          </div>
                        </div>
                        <div class="p-3 info-horizontal d-flex">
                          <div>
                            <h5>4. Natural Language Processing (NLP):</h5>
                            <p>
                              Enables machines to understand, interpret, and
                              generate human language, facilitating chatbots,
                              virtual assistants, and sentiment analysis.
                            </p>
                          </div>
                        </div>
                        <div class="p-3 info-horizontal d-flex">
                          <div>
                            <h5>5. Ethical Considerations:</h5>
                            <p>
                              Addresses ethical and regulatory challenges
                              surrounding AI & ML deployment, ensuring fairness,
                              transparency, and responsible use of technology.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="py-0 fadeIn1 fadeInBottom">
        <div class="container">
          <div class="row">
            <div class="col-md-8 mx-auto text-center">
              <h4 class="text-gradient text-primary text-border font-monospace">
                OUR TRAINERS
              </h4>
            </div>
          </div>
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active ">
                <div class="row container mt-lg-5 mt-4 ">
                  <div class="col-lg-4 col-sm-6 mb-4">
                    <div class="card card-body">
                      <div class="row">
                        <div class="col-lg-9">
                          <h5 class="mb-2 text-rose ">KESHAVULU A</h5>
                          <h6>
                            <small>
                              M.Tech(CSE)
                            </small>
                            <br />
                            <b>

                              EXPERIENCE:
                            </b>
                            <br />
                            15+ Years (Realtime)
                            <br />
                            10+ Years (Training)
                            {" "}

                          </h6>
                        </div>
                        <div class="col-lg-3 text-end my-auto">
                          <img
                            class="avatar avatar-xl"
                            src="../../assets/Traineeimgs/kesav.jpeg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 col-sm-6">
                    <div class="card card-body">
                      <div class="row">
                        <div class="col-lg-9">
                          <h5 class=" text-rose">DHANYAVANI A</h5>

                          <h6>
                            <small>
                              M.Tech(PE)
                            </small>
                            <br />


                            <b>

                              EXPERIENCE:
                            </b>
                            <br />
                            12+ Years (Realtime)
                            <br />
                            9+ Years (Training)
                            {" "}

                          </h6>
                        </div>
                        <div class="col-lg-3 text-end my-auto">
                          <img
                            class="avatar avatar-xl"
                            src="../../assets/Traineeimgs/Dhanya.jpeg"   />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 col-sm-6">
                    <div class="card card-body">
                      <div class="row">
                        <div class="col-lg-9">
                          <h5 class=" text-rose">LELLA VINOD G</h5>

                          <h6>
                            <small>
                              MCA
                            </small>
                            <br />


                            <b>

                              EXPERIENCE:
                            </b>
                            <br />
                            12+ Years (Realtime)
                            <br />
                            5+ Years (Training)
                            {" "}

                          </h6>
                        </div>
                        <div class="col-lg-3 text-end my-auto">
                          <img
                            class="avatar avatar-xl"
                            src="../../assets/Traineeimgs/LeelaVinod.jpeg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="carousel-item">
                <div class="row container mt-lg-5 mt-4">
                  <div class="col-lg-4 col-sm-6">
                    <div class="card card-body">
                      <div class="row">
                        <div class="col-lg-9">
                          <h5 class=" text-rose">THULASI KUMAR A</h5>

                          <h6>
                            <small>
                              B.SC(Math), B.Ed
                            </small>
                            <br />


                            <b>

                              EXPERIENCE:
                            </b>
                            <br />
                            12+ Years (Realtime)
                            <br />
                            9+ Years (Training)
                            {" "}

                          </h6>
                        </div>
                        <div class="col-lg-3 text-end my-auto">
                          <img
                            class="avatar avatar-xl"
                            src="../../assets/Traineeimgs/ThulasiKumar.jpeg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 col-sm-6">
                    <div class="card card-body">
                      <div class="row">
                        <div class="col-lg-9">
                          <h5 class=" text-rose">UDAY RAJ SINGH</h5>

                          <h6>
                            <small>
                              B.Tech(CSE)
                            </small>
                            <br />


                            <b>

                              EXPERIENCE:
                            </b>
                            <br />
                            16+ Years (Realtime)
                            <br />
                            10+ Years (Training)
                            {" "}

                          </h6>
                        </div>
                        <div class="col-lg-3 text-end my-auto">
                          <img
                            class="avatar avatar-xl"
                            src="../../assets/Traineeimgs/UdayRaj.jpeg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>

            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            
<button
  className="carousel-control-next"
  type="button"
  data-bs-target="#carouselExampleIndicators"
  data-bs-slide="next"
>
  <span
    className="carousel-control-next-icon"
    style={{ filter: 'invert(1)' }} // Correctly formatted as an object
    aria-hidden="true"
  ></span>
  <span className="visually-hidden">Next</span>
</button>

          </div>
        </div>
      </section>

      <section className="py-5 fadeIn1 fadeInBottom">
  <div className="container">
    <div className="row">
      <div className="col-md-8 mx-auto text-center">
        <h4 className="text-gradient text-primary text-border font-monospace">
          STUDENT FEEDBACK
        </h4>
      </div>
    </div>
    <div id="carouselStudentFeedback" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {Array.from({ length: Math.ceil(8 / 4) }).map((_, carouselIndex) => (
          <div className={`carousel-item ${carouselIndex === 0 ? 'active' : ''}`} key={carouselIndex}>
            <div className="row container mt-lg-5 mt-4">
              {[
                {
                  name: "Supriya",
                  feedback: "Great training! It helped me a lot in my career.",
                  image: "../../assets/Traineeimgs/supriya.jpeg",
                  videoLink: "https://www.youtube.com/shorts/-ggM7POjSR8",
                },
                {
                  name: "Gnana Sekhar M",
                  feedback: "The best experience I've ever had. Highly recommend!",
                  image: "../../assets/Traineeimgs/GnanaSekhar.jpg",
                  videoLink: "https://www.youtube.com/shorts/KE0RzxQDENA",
                },
                {
                  name: "Sarat",
                  feedback: "I learned so much! The trainers are very experienced.",
                  image: "../../assets/Traineeimgs/sarat.jpeg",
                  videoLink: "https://www.youtube.com/watch?v=F96xYewAn1g",
                },
                {
                  name: "Prasad A",
                  feedback: "An amazing experience! I gained a lot of practical knowledge.",
                  image: "../../assets/Traineeimgs/prasad.jpeg",
                  videoLink: "https://www.youtube.com/shorts/VHpVhNDdvCY",
                },
                {
                  name: "Thulasi Kumar A",
                  feedback: "The trainers were very helpful and knowledgeable.",
                  image: "../../assets/Traineeimgs/ThulasiKumar.jpeg",
                  videoLink: "https://www.youtube.com/watch?v=8lUYxN32LFc",
                },
                {
                  name: "Tharun Tripurala",
                  feedback: "Highly informative and practical sessions.",
                  image: "../../assets/img/team-4.jpg",
                  videoLink: "https://www.youtube.com/watch?v=example6",
                },
                {
                  name: "Sai Deepak Tripurala",
                  feedback: "I am more confident in my skills now. Thank you!",
                  image: "../../assets/img/team-4.jpg",
                  videoLink: "https://www.youtube.com/watch?v=example7",
                },
                {
                  name: "Mounika A",
                  feedback: "The course was fantastic and very engaging.",
                  image: "../../assets/Traineeimgs/Mouni.jpeg",
                  videoLink: "https://www.youtube.com/watch?v=2HyNwdjHhms",
                },
                {
                  name: "Reddi Kumari",
                  feedback: "Elevating skills through expert Java training.",
                  image: "../../assets/Traineeimgs/Reddi.jpeg",
                  videoLink: "https://youtu.be/DjYZk8nrXVY?si=FARPr2NwfZXguZQn",
                },
                {
                  name: "Likith Kumar K",
                  feedback: "Mastering Java for future innovators.",
                  image: "../../assets/Traineeimgs/LikithKumar.jpeg",
                  videoLink: "https://youtu.be/DjYZk8nrXVY?si=FARPr2NwfZXguZQn",
                },
                {
                  name: "Babu Reddy B",
                  feedback: "Transforming learners into Java experts.",
                  image: "../../assets/Traineeimgs/BabuReddy.jpeg",
                  videoLink: "https://www.youtube.com/shorts/MWedp3V3A_k",
                },
                {
                  name: "Kumar",
                  feedback: "Transforming learners into Java expert.",
                  image: "../../assets/Traineeimgs/kumar.jpeg",
                  videoLink: "https://youtube.com/shorts/U8ab9DHawoI",
                },
                {
                  name: "Manish",
                  feedback: "Transforming learners into Java expert.",
                  image: "../../assets/Traineeimgs/manish.jpeg",
                  videoLink: "https://youtu.be/DjYZk8nrXVY?si=FARPr2NwfZXguZQn",
                }
              ]
              .slice(carouselIndex * 4, carouselIndex * 4 + 4) // Display 4 cards per slide
              .map((student, index) => (
                <div className="col-lg-3 col-sm-6 mb-4" key={index}> {/* Adjusted to col-lg-3 for 4 cards */}
                  <div
                    className="card"
                    style={{
                      position: 'relative',
                      overflow: 'hidden',
                      height: '240px', // Set a reduced height for the card
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = 0.7; // Change opacity on hover
                      const overlay = e.currentTarget.querySelector('.overlay');
                      overlay.style.opacity = 1; // Show overlay text
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = 1; // Reset opacity on leave
                      const overlay = e.currentTarget.querySelector('.overlay');
                      overlay.style.opacity = 0; // Hide overlay text
                    }}
                  >
                    <img
                      className="card-img-top"
                      src={student.image}
                      alt={student.name}
                      style={{ width: '100%', height: '140px', objectFit: 'cover' }} // Adjust image height
                    />
                    <div className="card-body text-center" style={{ padding: '2px'  }}>
                      <h5 className="text-rose">{student.name}</h5>
                      <p>“{student.feedback}”</p>
                      <div className="overlay" style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                        opacity: 0,
                        transition: 'opacity 0.3s',
                        pointerEvents: 'none',
                      }}>
                        <a 
                          href={student.videoLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          style={{ 
                            color: 'white', 
                            fontSize: '1.2rem', 
                            textDecoration: 'none', 
                            pointerEvents: 'auto'
                          }} 
                        >
                          Watch Video
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselStudentFeedback"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselStudentFeedback"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</section>

{/* student training and placements */}
<section className="py-0 fadeIn1 fadeInBottom ">
      <div className="container text-center">
        <h4 className="text-gradient text-primary text-border font-monospace mb-4">STUDENT TRAINING AND PLACEMENTS</h4>
        <button
  className="btn btn-outline-dark btn-sm mb-0"
  type="button"
  name="button"
  data-bs-toggle="modal"
  data-bs-target="#placementsModal"
  style={{
    background: 'linear-gradient(45deg, #007bff, #0056b3)', 
    border: '2px solid orange',
    boxShadow: '0 0 10px rgba(255, 165, 0, 0.5)',
    padding: '10px 12px', 
    color: 'white', 
    fontWeight: 'bold', 
    transition: 'all 0.3s ease', 
    margin : '10px'
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 165, 0, 0.7)';
    e.currentTarget.style.transform = 'scale(1.05)'; 
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.boxShadow = '0 0 10px rgba(255, 165, 0, 0.5)';
    e.currentTarget.style.transform = 'scale(1)';
  }}
>
  View Placement Details
</button>

<button
  className="btn btn-outline-dark btn-sm mb-0"
  type="button"
  name="button"
  data-bs-toggle="modal"
  data-bs-target="#traineeModal"
  style={{
    background: 'linear-gradient(45deg, #007bff, #0056b3)', 
    border: '2px solid orange',
    boxShadow: '0 0 10px rgba(255, 165, 0, 0.5)',
    padding: '10px 12px', 
    color: 'white', 
    fontWeight: 'bold', 
    transition: 'all 0.3s ease', 
    margin : '10px'
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 165, 0, 0.7)';
    e.currentTarget.style.transform = 'scale(1.05)'; // Slightly enlarge on hover
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.boxShadow = '0 0 10px rgba(255, 165, 0, 0.5)';
    e.currentTarget.style.transform = 'scale(1)'; // Reset size
  }}
>
  View trainee Details
</button>


<button
  className="btn btn-outline-dark btn-sm mb-0"
  type="button"
  name="button"
  data-bs-toggle="modal"
  data-bs-target="#alumnimodel"
  style={{
    background: 'linear-gradient(45deg, #007bff, #0056b3)', 
    border: '2px solid orange',
    boxShadow: '0 0 10px rgba(255, 165, 0, 0.5)',
    padding: '10px 12px', 
    color: 'white', 
    fontWeight: 'bold', 
    transition: 'all 0.3s ease', 
    margin : '10px'
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 165, 0, 0.7)';
    e.currentTarget.style.transform = 'scale(1.05)'; // Slightly enlarge on hover
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.boxShadow = '0 0 10px rgba(255, 165, 0, 0.5)';
    e.currentTarget.style.transform = 'scale(1)'; // Reset size
  }}
>
  View Our Alumni Details
</button>

      </div>

      
              
       
     
    </section>
   
    {/* Placements details */}
    <div
  className="modal fade"
  id="placementsModal"
  tabIndex="-1"
  role="dialog"
  aria-labelledby="placementsModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="placementsModalLabel" style={{ color: 'black' }}>
          <b>Placement Details</b>
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <i className="fa fa-times text-dark" aria-hidden="true"></i>
        </button>
      </div>
      <div className="modal-body">
        <div className="container-fluid">
          <h4 className="mb-2 text-rose text-normal" style={{ color: 'black' }}><b>Placed Candidates</b></h4>
          <div className="row">
            <div className="col-md-12">
              <table className="table">
                <thead>
                  <tr>
                    <th style={{ color: 'black' }}>Image/Video</th>
                    <th style={{ color: 'black' }}>Name</th>
                    <th style={{ color: 'black' }}>Package</th>
                    <th style={{ color: 'black' }}>Placed Company</th>
                    <th style={{ color: 'black' }}>Education</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      image: "../../assets/Traineeimgs/prasad.jpeg",
                      youtubeLink: "https://www.youtube.com/watch?v=m7OWXtbiXX8",
                      name: "Prasad",
                      package: "26 LPA",
                      company: "PureSoftware Technologies Pvt Ltd",
                      education: "Degree"
                    },
                    {
                      image: "../../assets/Traineeimgs/ThulasiKumar.jpeg",
                      youtubeLink: "",
                      name: "Thulasi",
                      package: "22 LPA",
                      company: "InfoSys",
                      education: "Degree"
                    },
                    {
                      image: "../../assets/Traineeimgs/sarat.jpeg",
                      youtubeLink: "https://www.youtube.com/watch?v=anotherLink",
                      name: "Sarat",
                      package: "14 LPA",
                      company: "Intellishift Technology Pvt Ltd",
                      education: "B.Tech"
                    },
                    {
                      image: "../../assets/Traineeimgs/mukunda.jpeg",
                      youtubeLink: "https://www.youtube.com/watch?v=someLink",
                      name: "Mukunda",
                      package: "14 LPA",
                      company: "HSBC Bank",
                      education: "Degree"
                    },
                    {
                      image: "../../assets/Traineeimgs/veeresh.jpeg",
                      youtubeLink: "",
                      name: "Veeresh",
                      package: "9 LPA",
                      company: "CGI",
                      education: "Degree"
                    },
                    {
                      image: "../../assets/Traineeimgs/pramod.jpeg",
                      youtubeLink: "https://www.youtube.com/watch?v=videoLink",
                      name: "Pramod",
                      package: "10 LPA",
                      company: "DevCrafts",
                      education: ""
                    },
                    {
                      image: "../../assets/Traineeimgs/anuradha.jpeg",
                      youtubeLink: "",
                      name: "Anuradha",
                      package: "10 LPA",
                      company: "DevCrafts",
                      education: "MCA"
                    },
                    {
                      image: "../../assets/img/team-10.jpg",
                      youtubeLink: "https://www.youtube.com/watch?v=anotherVideoLink",
                      name: "Gautham Giri",
                      package: "12 LPA",
                      company: "Tech Systems",
                      education: "B.Tech"
                    },
                    {
                      image: "../../assets/Traineeimgs/thulasi ram.jpeg",
                      youtubeLink: "",
                      name: "Thulasi Kumar",
                      package: "9 LPA",
                      company: "TCS",
                      education: "B.Tech"
                    },
                    {
                      image: "../../assets/Traineeimgs/pavithra.jpeg",
                      youtubeLink: "https://www.youtube.com/watch?v=someOtherLink",
                      name: "Lavanya",
                      package: "13 LPA",
                      company: "HCL",
                      education: "B.Tech"
                    },
                    {
                      image: "../../assets/Traineeimgs/supriya.jpeg",
                      youtubeLink: "",
                      name: "Supriya",
                      package: "10 LPA",
                      company: "Virtusa",
                      education: "B.Tech"
                    },
                    {
                      image: "../../assets/Traineeimgs/Raviteja.JPG",
                      youtubeLink: "",
                      name: "Ravi",
                      package: "10 LPA",
                      company: "InfoSys",
                      education: "B.Tech"
                    },
                    {
                      image: "../../assets/img/team-15.jpg",
                      youtubeLink: "https://www.youtube.com/watch?v=videoForPramod",
                      name: "Pramod",
                      package: "13 LPA",
                      company: "BlueYandor",
                      education: "B.Tech"
                    },
                    {
                      image: "../../assets/Traineeimgs/ravi.jpeg",
                      youtubeLink: "",
                      name: "Ravi",
                      package: "12 LPA",
                      company: "IGT",
                      education: "Degree"
                    },
                    {
                      image: "../../assets/img/team-17.jpg",
                      youtubeLink: "https://www.youtube.com/watch?v=videoForShilpa",
                      name: "Shilpa",
                      package: "11 LPA",
                      company: "Blackboard India Pvt Ltd",
                      education: "M.Tech"
                    },
                    {
                      image: "../../assets/Traineeimgs/selvi.jpeg",
                      youtubeLink: "",
                      name: "Kalai Selvi",
                      package: "15 LPA",
                      company: "Wipro",
                      education: "M.Tech"
                    },
                    {
                      image: "../../assets/Traineeimgs/deepya.jpeg",
                      youtubeLink: "",
                      name: "Deepya",
                      package: "13 LPA",
                      company: "Majesco",
                      education: "B.Tech"
                    },
                    {
                      image: "../../assets/img/team-20.jpg",
                      youtubeLink: "",
                      name: "Sumanth",
                      package: "18 LPA",
                      company: "Majesco",
                      education: "B.Tech"
                    },
                    {
                      image: "../../assets/img/team-21.jpg",
                      youtubeLink: "",
                      name: "Guarav",
                      package: "15 LPA",
                      company: "Coforge",
                      education: "B.Tech"
                    },
                    {
                      image: "../../assets/img/team-22.jpg",
                      youtubeLink: "https://www.youtube.com/watch?v=videoForVaralakshmi",
                      name: "Varalakshmi",
                      package: "12 LPA",
                      company: "Infogain India Pvt Ltd",
                      education: "MCA"
                    },
                    {
                      image: "../../assets/img/team-23.jpg",
                      youtubeLink: "",
                      name: "Sundeep",
                      package: "13 LPA",
                      company: "Cient",
                      education: "B.Tech"
                    },
                    {
                      image: "../../assets/img/team-24.jpg",
                      youtubeLink: "",
                      name: "Harathi Priya",
                      package: "12 LPA",
                      company: "Harman International",
                      education: "B.Tech"
                    },
                    {
                      image: "../../assets/img/te.jpg",
                      youtubeLink: "https://www.youtube.com/watch?v=yetAnotherLink",
                      name: "SriRaghavendra",
                      package: "24 LPA",
                      company: "Birdeye Software India Private Limited",
                      education: "MBA"
                    },
                    {
                      image: "../../assets/img/saf.jpg",
                      youtubeLink: "",
                      name: "Naveen Kumar",
                      package: "15 LPA",
                      company: "IntApp",
                      education: "B.Tech"
                    },
                    {
                      image: "../../assets/img/team-25.jpg",
                      youtubeLink: "",
                      name: "Sahana",
                      package: "14 LPA",
                      company: "Trigen",
                      education: "Degree"
                    },
                    {
                      image: "../../assets/Traineeimgs/saveetha.jpeg",
                      youtubeLink: "https://www.youtube.com/watch?v=videoForSavitha",
                      name: "Savitha",
                      package: "13 LPA",
                      company: "Capgemini",
                      education: "B.Tech"
                    },
                    {
                      image: "",
                      youtubeLink: "",
                      name: "Thulasi Ram",
                      package: "12 LPA",
                      company: "Xoriant",
                      education: "Degree"
                    },
                    {
                      image: "../../assets/Traineeimgs/divya.jpeg",
                      youtubeLink: "",
                      name: "Divya",
                      package: "11 LPA",
                      company: "Capgemini",
                      education: "B.Tech"
                    },
                    {
                      image: "../../assets/Traineeimgs/rama mohan.jpeg",
                      youtubeLink: "",
                      name: "Mohan Kumar",
                      package: "12 LPA",
                      company: "Capgemini",
                      education: "Degree"
                    },
                    {
                      image: "../../assets/Traineeimgs/yuvaprasad.jpeg",
                      youtubeLink: "",
                      name: "Yuvaprasad",
                      package: "11 LPA",
                      company: "Cognizant",
                      education: "Degree"
                    },
                    {
                      image: "../../assets/Traineeimgs/neerosha.jpeg",
                      youtubeLink: "",
                      name: "Nirosha",
                      package: "8 LPA",
                      company: "Capgemini",
                      education: "Degree"
                    },
                    {
                      image: "../../assets/Traineeimgs/LikithKumar.jpeg",
                      youtubeLink: "",
                      name: "LikithKumar",
                      package: "4.5 LPA",
                      company: "K7InfoTech",
                      education: "Degree"
                    }
                  ].map((placement, index) => (
                    <tr key={index}>
                      <td>
                        {placement.image && placement.youtubeLink ? (
                          <div style={{ position: 'relative', display: 'inline-block' }}>
                            <a href={placement.youtubeLink} target="_blank" rel="noopener noreferrer">
                              <img src={placement.image} alt={placement.name} style={{ width: '100px' }} loading="lazy" />
                              <i className="fa fa-youtube" style={{ 
                                  position: 'absolute', 
                                  top: '50%', 
                                  left: '50%', 
                                  transform: 'translate(-50%, -50%)', 
                                  fontSize: '30px', 
                                  color: 'red', 
                                  opacity: 0, 
                                  transition: 'opacity 0.3s' 
                                }}></i>
                            </a>
                          </div>
                        ) : placement.image ? (
                          <a href={placement.image} target="_blank" rel="noopener noreferrer">
                            <img src={placement.image} alt={placement.name} style={{ width: '100px' }} loading="lazy" />
                          </a>
                        ) : null}
                      </td>
                      <td style={{ color: 'black' }}>{placement.name}</td>
                      <td style={{ color: 'black' }}>{placement.package}</td>
                      <td style={{ color: 'black' }}>{placement.company}</td>
                      <td style={{ color: 'black' }}>{placement.education}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>





{/* trainee details */}
<div
  className="modal fade"
  id="traineeModal"
  tabIndex="-1"
  role="dialog"
  aria-labelledby="placementsModalLabel"
  aria-hidden="true"
>
  <div
    className="modal-dialog modal-dialog-centered modal-xl"
    role="document"
  >
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="placementsModalLabel" style={{ color: 'black' }}>
          <b>Trainee Details</b>
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <i className="fa fa-times text-dark" aria-hidden="true"></i>
        </button>
      </div>
      <div className="modal-body">
        <div className="container-fluid">
          <h4 className="mb-2 text-rose text-normal" style={{ color: 'black' }}><b>Our Students</b></h4>
          <div className="row">
            <div className="col-md-12">
              <table className="table">
                <thead>
                  <tr>
                    <th style={{ color: 'black' }}>Image</th>
                    <th style={{ color: 'black' }}>Name</th>
                    <th style={{ color: 'black' }}>College Name</th>
                    <th style={{ color: 'black' }}>Degree</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { image: "../../assets/Traineeimgs/anuradha.jpeg", name: "Biradar Anuradha", college: "Gulbarga University Main Campus", degree: "Degree" },
                    { image: "../../assets/Traineeimgs/supriya.jpeg", name: "Yalla Supriya", college: "", degree: "Btech" },
                    { image: "../../assets/Traineeimgs/selvi.jpeg", name: "K Kalai Selvi", college: "A1.Ameen Engineering College", degree: "Mtech" },
                    { image: "../../assets/Traineeimgs/neerosha.jpeg", name: "Silpi Nirosha", college: "Sitams College", degree: "Mtech" },
                    { image: "../../assets/Traineeimgs/praneetha.jpeg", name: "Ganginani Praneetha", college: "Sri Venkateshwara Engineering College", degree: "Btech" },
                    { image: "../../assets/Traineeimgs/aruna.jpeg", name: "P Aruna", college: "VignanaSudha Degree College", degree: "Degree" },
                    { image: "../../assets/Traineeimgs/latha.jpeg", name: "G Latha", college: "VPKN Government Degree College", degree: "Degree" },
                    { image: "../../assets/Traineeimgs/deepya.jpeg", name: "Kalavakunta Deepya", college: "Vemu Institute of Engineering And Technology", degree: "Btech" },
                    { image: "../../assets/Traineeimgs/divya.jpeg", name: "D Divya", college: "MVSR Engineering College", degree: "Btech" },
                    { image: "../../assets/Traineeimgs/pavithra.jpeg", name: "R Pavithra", college: "", degree: "Btech" },
                    { image: "../../assets/Traineeimgs/vidya.jpeg", name: "BC Vidya", college: "SSIT", degree: "Btech" },
                    { image: "../../assets/Traineeimgs/saveetha.jpeg", name: "P Savitha", college: "KNS Institute of Technology", degree: "Btech" },
                    { image: "../../assets/Traineeimgs/adeshwaramma.jpeg", name: "Neelam Adeshwaramma", college: "A.L.M.N Womens Degree College", degree: "Degree" },
                    { image: "../../assets/Traineeimgs/veeresh.jpeg", name: "Panchal Veeresh", college: "MITS (Manglore Institute)", degree: "Btech" },
                    { image: "../../assets/Traineeimgs/udaykiran.jpeg", name: "R S UdayKumar Reddy", college: "RGM Engineering College", degree: "Btech" },
                    { image: "../../assets/Traineeimgs/rama mohan.jpeg", name: "Koduru Rama Mohan", college: "", degree: "MSC" },
                    { image: "../../assets/Traineeimgs/thulasi ram.jpeg", name: "R Thulasi Ram", college: "", degree: "Degree" },
                    { image: "../../assets/Traineeimgs/image18.jpeg", name: "Kovuru Nikhil Sai", college: "SVCE Tirupathi", degree: "Btech" },
                    { image: "../../assets/Traineeimgs/siva.jpeg", name: "Maddu Siva Krishna", college: "Andhra University", degree: "MSC" },
                    { image: "../../assets/Traineeimgs/ravi.jpeg", name: "Waghmare Ravi Suryakanth", college: "Radhai BCA College", degree: "Degree" },
                    { image: "../../assets/Traineeimgs/udaykiran.jpeg", name: "Nallabothu Uday Kiran", college: "SV Engineering College", degree: "Btech" },
                    { image: "../../assets/Traineeimgs/pramod.jpeg", name: "Gaikwad Pramod", college: "DR.BAM University", degree: "Btech" },
                    { image: "../../assets/Traineeimgs/kiran.jpeg", name: "Mekalathuru Kiran Kumar", college: "SVV Degree College", degree: "Degree" },
                    { image: "../../assets/Traineeimgs/shantanu.jpeg", name: "Jondhale Shantanu", college: "U.D.C.T Aurangabad", degree: "Btech" },
                    { image: "../../assets/Traineeimgs/sasi.jpeg", name: "Apithiri Sasi Kiran", college: "SV Engineering College", degree: "Btech" },
                    { image: "../../assets/Traineeimgs/image26.jpeg", name: "K Gowtham", college: "VignanaSudha Degree College", degree: "Degree" },
                    { image: "../../assets/Traineeimgs/harish.jpeg", name: "S Harish", college: "S.E.A College Of Engineering And Technology", degree: "Btech" },
                    { image: "../../assets/Traineeimgs/babu.jpeg", name: "Mallele Babu", college: "", degree: "Degree" },
                    { image: "../../assets/Traineeimgs/likith.jpeg", name: "Konapareddy Likith Kumar", college: "SDHR Degree College", degree: "Degree" },
                    { image: "../../assets/Traineeimgs/yuvaprasad.jpeg", name: "N Yuva Prasad", college: "Siddhartha Institute Of Engineering And Technology", degree: "Btech" },
                    { image: "../../assets/Traineeimgs/chandrakanth.jpeg", name: "Umachagi Chandrakanth", college: "S.K.S.V.M.A.C.E.T Lakshmeshwar", degree: "Btech" },
                    { image: "../../assets/Traineeimgs/krishna chaitanya.jpeg", name: "A Krishna Chaitanya", college: "", degree: "MBA" },
                    { image: "../../assets/Traineeimgs/mukunda.jpeg", name: "N Mukunda", college: "Teksystems", degree: "MSC" },
                    { image: "../../assets/Traineeimgs/shivareddy.jpeg", name: "Gangula Shiva Reddy", college: "Vaagdevi Engineering College", degree: "Btech" },
                    { image: "../../assets/Traineeimgs/chaitanya.jpeg", name: "Chaitanya Varma", college: "Banglore University", degree: "Degree" },
                    { image: "../../assets/Traineeimgs/Mouni.jpeg", name: "Guruka Mounika", college: "Sri Rama Educational Group Of Institutions", degree: "Btech" },
                    { image: "../../assets/Traineeimgs/kumar.jpeg", name: "Sirapuram Kumar", college: "Annamacharya Engineering College", degree: "Btech" },
                    { image: "../../assets/Traineeimgs/Reddi.jpeg", name: "Gudda Reddi Kumari", college: "SVCE Tirupathi", degree: "MCA" },
                    { image: "../../assets/Traineeimgs/Gnana.jpeg", name: "Mekalathuri GnanaSekhar", college: "Siddhartha Institute Of Engineering And Technology", degree: "Btech" },
                    { image: "../../assets/Traineeimgs/manish.jpeg", name: "C Manish", college: "Sitams College", degree: "Btech" },
                    { image: "../../assets/Traineeimgs/image41.jpeg", name: "T Sai Tharun", college: "Annamacharya Engineering College", degree: "Btech" },
                    { image: "../../assets/Traineeimgs/image42.jpeg", name: "T Sai Deepak", college: "Annamacharya Engineering College", degree: "Btech" },
                    { image: "../../assets/Traineeimgs/image43.jpeg", name: "A BabuReddy", college: "Geethanjali Institute of P.G Studies", degree: "MBA" },
                  ].map((student, index) => (
                    <tr key={index}>
                      <td><img src={student.image} alt={student.name} style={{ width: '100px' }} loading="lazy" /></td>
                      <td style={{ color: 'black' }}>{student.name}</td>
                      <td style={{ color: 'black' }}>{student.college}</td>
                      <td style={{ color: 'black' }}>{student.degree}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


{/* alumni details */}

<div
  className="modal fade"
  id="alumnimodel"
  tabIndex="-1"
  role="dialog"
  aria-labelledby="placementsModalLabel"
  aria-hidden="true"
>
  <div
    className="modal-dialog modal-dialog-centered modal-xl"
    role="document"
  >
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="placementsModalLabel" style={{ color: 'black' }}>
          <b>Alumni Details</b>
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <i className="fa fa-times text-dark" aria-hidden="true"></i>
        </button>
      </div>
      <div className="modal-body">
        <div className="container-fluid">
          <h4 className="mb-2 text-rose text-normal" style={{ color: 'black' }}><b>Our Alumni</b></h4>
          <div className="row">
            <div className="col-md-12">
              <table className="table">
                <thead>
                  <tr>
                    <th style={{ color: 'black' }}>Image</th>
                    <th style={{ color: 'black' }}>Name</th>
                    <th style={{ color: 'black' }}>College Name</th>
                    <th style={{ color: 'black' }}>Degree</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { image: "../../assets/Alumniimgs/Surendra nath reddy.jpg", name: "Y Surendharnath Reddy", college: "EAIMS, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/K.Anil kumar.jpg", name: "K Anil Kumar Raju", college: "EAIMS, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/V Mahendra.jpg", name: "V Mahendra", college: "EAIMS, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/Mohan reddy.jpg", name: "Mutra Mohan Reddy", college: "EAIMS, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/Lavanya.jpg", name: "E Lavanya", college: "EAIMS, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/Shaheena.jpg", name: "Sunkesula Shaheena", college: "Emeralds, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/Yeturi pavani.jpg", name: "Yeturi Pavani", college: "Emeralds, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/Usha.jpg", name: "Pasupuleti Usha", college: "Emeralds, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/Neeraja.jpg", name: "Neeraja Varma", college: "EAIMS, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/Swetha.jpg", name: "Swetha", college: "EAIMS, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/Nagamani.jpg", name: "Nagamani Komarika", college: "EAIMS, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/Nagamani.k.jpg", name: "Nagamani Kasumuru", college: "Emeralds, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/Rovilla rani.jpg", name: "Ravilla Rani", college: "EAIMS, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/Chinnaiah.jpg", name: "Pallapu Chinnaiah", college: "EAIMS, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/suresh.jpeg", name: "Gosala Suresh", college: "EAIMS, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/Sivanath reddy.jpg", name: "N Sivanath Reddy", college: "EAIMS, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/Subramanyam reddy.jpg", name: "K Subramanyam Reddy", college: "Emeralds, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/Hussain.jpg", name: "G Hussain", college: "Emeralds, Tirupathi Advance Institute", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/Ramakrishna reddy.jpg", name: "Cherpati Ramakrishna Reddy", college: "Emeralds, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/Suneel kumar.jpg", name: "S Suneel Kumar", college: "EAIMS, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/Rajasekhar reddy.jpg", name: "Reddivari RajaSekharReddy", college: "Emeralds, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/Sudhakar reddy.jpg", name: "S Sudhakar Reddy", college: "EAIMS, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/Adi seshu.jpg", name: "K Adhi Sheshu", college: "EAIMS, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/Raja.jpg", name: "K Raja", college: "EAIMS, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/Rajesh.jpg", name: "Buggapati Rajesh", college: "EAIMS, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/Mahendra reddy.jpg", name: "Mahendra Reddy", college: "Emeralds, Tirupathi College", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/Dasari ravi.jpg", name: "Dasari Ravi", college: "Emeralds, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/Ramanji.jpg", name: "Gogula Ramanji", college: "Emeralds, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/Lavanya.jpg", name: "Yedlapalli Lavanya", college: "S.P.M.V.V, Tirupathi", degree: "Btech" },
                    { image: "../../assets/Alumniimgs/siva.jpg", name: "B Siva Kumar", college: "S.P.M.V.V, Tirupathi", degree: "Btech" },
                    { image: "../../assets/Alumniimgs/sai_sampath.jpeg", name: "Malla Sai Sampath", college: "Sri Padmavathi Mahila University, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/keerti.jpeg", name: "Bole Keerthi", college: "Emeralds, Tirupathi", degree: "Btech" },
                    { image: "../../assets/Alumniimgs/sreejitha.jpeg", name: "K Sreejitha", college: "Emeralds, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/jayasimha.jpg", name: "M Jayasimha Gouda", college: "EAIMS, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/suraj.jpeg", name: "Gnana Suraj", college: "Seshachala Institute Of Technology, Puttur", degree: "Btech" },
                    { image: "../../assets/Alumniimgs/mahesh.jpeg", name: "R Mahesh Kumar", college: "Seshachala Institute Of Technology, Puttur", degree: "Btech" },
                    { image: "../../assets/Alumniimgs/koti.jpeg", name: "Gudi Koti Reddy", college: "EAIMS, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/devapathni.jpeg", name: "Devapathni Rani", college: "Swetha College, Tirupathi", degree: "Btech" },
                    { image: "../../assets/Alumniimgs/siva.jpeg", name: "G Siva Prasad Naidu", college: "SEAGI, Tirupathi", degree: "Btech" },
                    { image: "../../assets/Alumniimgs/pavithra.jpeg", name: "Banala Pavithra", college: "S.P.M.V.V, Tirupathi", degree: "Btech" },
                    { image: "../../assets/Alumniimgs/rekha.jpeg", name: "Venkatachalam Rekha", college: "S.P.M.V.V, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/thulasi.jpeg", name: "Kusumurthi Thulasi", college: "S.P.M.V.V, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/vikram.jpeg", name: "Kadathukalam Vikram", college: "A.I.T.S, Tirupathi", degree: "Btech" },
                    { image: "../../assets/Alumniimgs/venkat.jpeg", name: "G Venkat Lakshman", college: "Emeralds, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/preethi.jpeg", name: "Maddineni Preethi Purnima", college: "Sri Padmavathi Mahila University, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/keerthi.jpeg", name: "Samireddy Keerthi", college: "SPMVV, Tirupathi", degree: "Btech" },
                    { image: "../../assets/Alumniimgs/kala_priya.jpeg", name: "Yasam KalaPriya", college: "Sri Padmavathi Mahila University, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Neelima", college: "Sri Padmavathi Mahila University, Tirupathi, Tirupathi", degree: "B.Tech" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Sowjanya", college: "Sri Padmavathi Mahila University, Tirupathi, Tirupathi", degree: "B.Tech" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Kalpana", college: "Sri Padmavathi Mahila University, Tirupathi, Tirupathi", degree: "B.Tech" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Shanthi", college: "Sri Padmavathi Mahila University, Tirupathi, Tirupathi", degree: "B.Tech" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Sujitha", college: "Sri Padmavathi Mahila University, Tirupathi, Tirupathi", degree: "B.Tech" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Sindhuja", college: "Sri Padmavathi Mahila University, Tirupathi", degree: "B.Tech" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Vijaya Lakshmi", college: "Sri Padmavathi Mahila University, Tirupathi", degree: "B.Tech" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Monika", college: "Sri Padmavathi Mahila University, Tirupathi", degree: "B.Tech" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Ramanjaneyulu", college: "JBICT, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "D.S.L. Pragna", college: "Sri Padmavathi Mahila University, Tirupathi", degree: "B.Tech" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Kalpana", college: "Sri Padmavathi Mahila University, Tirupathi", degree: "B.Tech" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Thejaswini", college: "Sri Padmavathi Mahila University, Tirupathi", degree: "B.Tech" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Geethanjali", college: "Sri Padmavathi Mahila University, Tirupathi", degree: "B.Tech" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Venkata Teja", college: "Sri Padmavathi Mahila University, Tirupathi", degree: "B.Tech" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Sandeep Kumar", college: "MIST, Tirupathi", degree: "B.Tech" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Tharun Kumar", college: "MIST, Tirupathi", degree: "B.Tech" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Priyamvada", college: "Sri Padmavathi Mahila University, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "N. Sudhakar", college: "SVCET, Tirupathi", degree: "B.Tech" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "P. Ravi", college: "SVCET, Tirupathi", degree: "B.Tech" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Maheswari", college: "Sri Padmavathi Mahila University, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Polaiah", college: "SVCET, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "T. Harish", college: "S.V.U, Tirupathi", degree: "M.SC" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Prabhavathi", college: "Sri Padmavathi Mahila University, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Thulasi", college: "Sri Padmavathi Mahila University, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Priyanka", college: "Sri Padmavathi Mahila University, Tirupathi", degree: "B.Tech" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "P. Varalakshmi", college: "Sri Padmavathi Mahila University, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "V.Amulya", college: "Sri Padmavathi Mahila University, Tirupathi", degree: "B.Tech" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Koduru Charishma", college: "Sri Padmavathi Mahila University, Tirupathi", degree: "B.Tech" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Beesabattina Harsha Vardhini`", college: "Sri Padmavathi Mahila University, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Vinodh Kumar Tirupathi", college: "SEICOM, Tirupathi", degree: "Degree" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "CH. Charisree", college: "JBWEC, Tirupathi", degree: "B.Tech" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "D. Kalyan", college: "S.V.U, Tirupathi", degree: "B.Tech" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "N. Thulasi", college: "Swetha Engineering, Tirupathi", degree: "B.Tech" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Prudhvi Devineni", college: "Sree Vidyanikethan,Tirupathi", degree: "B.Tech" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Chamarthi Surishna", college: "KMMITS, Tirupathi", degree: "B.Tech" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "M. Kodanhaih", college: "SVNE, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Mukka Hari Priya", college: "Priyadarshi, Tirupathi", degree: "B.Tech" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Godi Deepa", college: "NECG, Tirupathi", degree: "B.Tech" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Chevuru Keerthi", college: "Sri Padmavathi Mahila University, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Talluri Uma Devi", college: "Sri Padmavathi Mahila University, Tirupathi", degree: "MCA" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Shaik Mohammad Chowhan", college: "S.V.C.E, Tirupathi", degree: "B.Tech" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "Hari Krishna Thopugunta", college: "SVNE, Tirupathi", degree: "B.Tech" },
                    { image: "../../assets/Alumniimgs/naveena.jpeg", name: "K. Vijaya Kumar", college: "S.V.U, Tirupathi", degree: "B.Tech" },

                  ].map((student, index) => (
                    <tr key={index}>
                      <td><img src={student.image} alt={student.name} style={{ width: '100px' }} loading="lazy" /></td>
                      <td style={{ color: 'black' }}>{student.name}</td>
                      <td style={{ color: 'black' }}>{student.college}</td>
                      <td style={{ color: 'black' }}>{student.degree}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>






    </div>



  );
};

export default TrainingPlacements;
