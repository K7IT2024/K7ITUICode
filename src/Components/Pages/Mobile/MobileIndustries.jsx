import React from "react";
import MobileNavbar from "./MobileNavbar";
import MobileFooter from "./MobileFooter";

const MobileIndustries = () => {
  return (
    <div>
      <MobileNavbar />
      <div className="container-fluid py-5">
        <div class="mobscrollable-tabs-container ">
          <div className="card">
            <ul id="pills-tab" role="tablist">
              <li className="text-center px-3">
              <div>
                <a
                  class="avatar avatar-xl rounded-circle border border-warning p-2"
                  id="pills-ecommerce-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-ecommerce"
                  type="button"
                  role="tab"
                  aria-controls="pills-ecommerce"
                  aria-selected="true"
                >
                  <img
                    alt="Image placeholder"
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/announcement-of-product-discounts-in-e-commerce-7735410-6241789.png?f=webp"
                    className=""
                  />
                  
                </a>
            </div>
                <small class="mb-0 text-center mt-2 text-xs source-serif-4 font-color">
                  E-commerce
                </small>
              </li>
              <li className="text-center px-3">
                <div>
                <a
                  class="avatar avatar-xl rounded-circle border border-warning p-2"
                  id="pills-banking-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-banking"
                  type="button"
                  role="tab"
                  aria-controls="pills-banking"
                  aria-selected="false"
                >
                  <img
                    alt="Image placeholder"
                    src="https://cdn4.iconfinder.com/data/icons/accounting-99/512/accounting_1.png"
                    className=""
                  />
                </a>
                </div>
                <small class="mb-0 text-center mt-2 text-xs source-serif-4 font-color">
                  Banking
                </small>
              </li>
              <li className="text-center px-3">
                <div>
                <a
                  class="avatar avatar-xl rounded-circle border border-warning p-2"
                  id="pills-health-care-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-health-care"
                  type="button"
                  role="tab"
                  aria-controls="pills-health-care"
                  aria-selected="false"
                >
                  <img
                    alt="Image placeholder"
                    src="https://cdni.iconscout.com/illustration/premium/thumb/doctor-healthcare-app-5589869-4659507.png?f=webp"
                    className=""
                  />
                </a>
                </div> 
                <small class="mb-0 text-center mt-2 text-xs source-serif-4 font-color">
                  Health Care
                </small>
              </li>
              <li className="text-center px-3">
                <div>
                <a
                  class="avatar avatar-xl rounded-circle border border-warning p-2"
                  id="pills-education-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-education"
                  type="button"
                  role="tab"
                  aria-controls="pills-education"
                  aria-selected="false"
                >
                  <img
                    alt="Image placeholder"
                    src="https://static.vecteezy.com/system/resources/previews/010/871/684/original/3d-online-education-illustration-png.png"
                    className=""
                  />
                </a>
                </div>
                <small class="mb-0 text-center mt-2 text-xs source-serif-4 font-color">
                  Education
                </small>
              </li>
              <li className="text-center px-3">
                <div>
                <a
                  class="avatar avatar-xl rounded-circle border border-warning p-2"
                  id="pills-travel-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-travel"
                  type="button"
                  role="tab"
                  aria-controls="pills-travel"
                  aria-selected="false"
                >
                  <img
                    alt="Image placeholder"
                    src="https://www.iventurelabs.com/assets/images/travel-top.png"
                    className=""
                  />
                </a>
                </div>
                <small class="mb-0 text-center mt-2 text-xs source-serif-4 text-nowrap font-color">
                  Travel & Logistics
                </small>
              </li>
            </ul>
          </div>

          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-ecommerce"
              role="tabpanel"
              aria-labelledby="pills-ecommerce-tab"
            >
              <section class="py-5">
                <div class="container">
                  <div class="row mb-5">
                    <div class="col-lg-10 text-center mx-auto">
                      <p class="mb-1 text-success text-uppercase font-weight-bold">
                        E-Commerce
                      </p>
                      <h1 className="source-serif-4 text-normal">
                        Empowering e-commerce with seamless software solutions.
                      </h1>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-5">
                      <img
                        class="image-right border-radius-lg img-fluid shadow ms-md-n4 mb-4 mt-md-8 position-relative bg-cover"
                        src="https://myrepublica.nagariknetwork.com/uploads/media/eeee_20210524140327.png"
                      />
                      <div class="px-0">
                        <b className=" fw-bolder fs-4 font-color font-weight-normal">
                          E-commerce software facilitates online businesses by
                          providing platforms and tools that enable selling
                          products and services over the internet. It includes
                          features like inventory management, payment
                          processing, order tracking, and customer relationship
                          management, ensuring a seamless shopping experience
                          for both merchants and consumers.
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section class="py-1">
                <div class="container">
                  <div class="row">
                    <div class="col-md-8 ms-auto me-auto text-center">
                      <h3 className="source-serif-4 text-normal">
                        Enhancing Retail Success: E-commerce Software Solutions
                      </h3>
                    </div>
                  </div>
                  <div class="row mt-0">
                    <div class="col-md-5 ms-auto">
                      <div class="card shadow-blur bg-cover text-center">
                        <img
                          src="https://img.pikbest.com/origin/09/23/71/42xpIkbEsTXer.png!sw800"
                          alt=""
                        />
                      </div>
                    </div>

                    <div class="col-md-5 me-auto my-auto mt-md-auto mt-5">
                      <div class="p-3 info-horizontal d-flex">
                        <div class="icon me-3">
                          <i class="material-icons text-gradient text-primary text-3xl">
                            perm_phone_msg
                          </i>
                        </div>
                        <div class="ms-4">
                          <h4>Storefront Management :</h4>
                          <p>
                            Facilitates the creation and customization of online
                            storefronts with various design templates and
                            options.
                          </p>
                        </div>
                      </div>

                      <div class="p-3 info-horizontal d-flex">
                        <div class="icon me-3 mt-1">
                          <i class="material-icons text-gradient text-primary text-3xl">
                            fact_check
                          </i>
                        </div>
                        <div class="ms-4">
                          <h4>Inventory Management :</h4>
                          <p>
                            Tracks and manages product inventory, ensuring
                            accurate stock levels and availability.
                          </p>
                        </div>
                      </div>

                      <div class="p-3 info-horizontal d-flex">
                        <div class="icon me-3 mt-1">
                          <i class="material-icons text-gradient text-primary text-3xl">
                            manage_accounts
                          </i>
                        </div>
                        <div class="ms-4">
                          <h4>Payment Processing : </h4>
                          <p>
                            Integrates secure payment gateways to facilitate
                            smooth transactions and support multiple payment
                            methods.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr class="horizontal dark my-2 mx-0" />
                  <div class="row">
                    <div class="col-md-5 me-auto">
                      <div class="card bg-cover text-center">
                        <img
                          src="https://cdn3d.iconscout.com/3d/premium/thumb/man-got-shopping-discount-7129319-5791990.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-md-5 ms-auto my-auto">
                      <div class="p-3 info-horizontal d-flex">
                        <div class="icon me-3">
                          <i class="material-icons text-gradient text-info text-3xl">
                            sync_alt
                          </i>
                        </div>
                        <div class="ms-4">
                          <h4>Customer Relationship Management (CRM) : </h4>
                          <p>
                            Manages customer information, interactions, and
                            communications to build relationships and enhance
                            loyalty.
                          </p>
                        </div>
                      </div>

                      <div class="p-3 info-horizontal d-flex">
                        <div class="icon me-3 mt-1">
                          <i class="material-icons text-gradient text-info text-3xl">
                            groups
                          </i>
                        </div>
                        <div class="ms-4">
                          <h4>Marketing and Promotions : </h4>
                          <p>
                            Includes tools for digital marketing campaigns, SEO
                            optimization, and personalized promotions to attract
                            and retain customers.
                          </p>
                        </div>
                      </div>

                      <div class="p-3 info-horizontal d-flex">
                        <div class="icon me-3 mt-1">
                          <i class="material-icons text-gradient text-info text-3xl">
                            screen_share
                          </i>
                        </div>
                        <div class="ms-4">
                          <h4>Mobile Optimization :</h4>
                          <p>
                            Ensures compatibility and responsiveness across
                            mobile devices for a seamless shopping experience
                            on-the-go.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div
              class="tab-pane fade"
              id="pills-banking"
              role="tabpanel"
              aria-labelledby="pills-banking-tab"
            >
              <section class="py-md-7 mt-md-5">
                <div class="container-fluid px-0">
                  <div class="row justify-content-center text-center">
                    <div class="col-3 px-md-0"></div>
                    <div class="col-12 position-relative">
                      <div class="row">
                        <div class="col-xl-3"></div>
                        <div class="col-xl-5 col-md-8 col-12 text-start">
                          <div class="p-3 text-start border-radius-lg">
                            <h2>Banking</h2>
                            <p class="text-dark text-lg mt-3">
                              "Empowering the banking industry with advanced
                              software solutions that revolutionize customer
                              experiences, optimize operational efficiencies,
                              and ensure robust security measures. Our tailored
                              software integrates seamlessly with existing
                              systems, providing real-time insights and
                              personalized financial services. From mobile
                              banking to AI-driven analytics, we're committed to
                              driving innovation and excellence in financial
                              technology."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section class="py-1">
                <div class="container">
                  <div class="row">
                    <div class="col-md-5 ms-auto me-auto text-center">
                      <div class="p-3 info-hover-warning">
                        <div class="icon icon-shape bg-gradient-primary shadow icon-shape-circle text-primary">
                          <i class="fa fa-cogs"></i>
                        </div>
                      </div>
                      <h3 class="text-gradient text-primary mb-0 mt-4">
                        Banks go boundaryless
                      </h3>
                    </div>
                  </div>
                  <div class="row mt-5">
                    <div class="col-md-4 ms-auto my-auto">
                      <div class="cursor-pointer">
                        <div class="card card-background tilt" data-tilt="">
                          <div
                            class="full-background"
                            style={{
                              backgroundImage:
                                "url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/team-working.jpg')",
                            }}
                          ></div>
                          <div class="card-body pt-12 mt-12 text-center"></div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-5 me-auto my-auto ms-md-5">
                      <div class="p-3 info-horizontal d-flex">
                        <div>
                          <h5>1. Security and Compliance</h5>
                          <p>
                            Robust security measures and adherence to regulatory
                            standards to ensure safe transactions and data
                            protection.
                          </p>
                        </div>
                      </div>
                      <div class="p-3 info-horizontal d-flex">
                        <div>
                          <h5>2. User Experience</h5>
                          <p>
                            Intuitive interfaces and personalized features for a
                            seamless banking experience across devices.
                          </p>
                        </div>
                      </div>
                      <div class="p-3 info-horizontal d-flex">
                        <div>
                          <h5>3. Integration and Scalability</h5>
                          <p>
                            Flexible solutions that integrate with existing
                            systems and can scale as your banking needs grow.
                          </p>
                        </div>
                      </div>
                      <div class="p-3 info-horizontal d-flex">
                        <div>
                          <h5>4.Automation and Efficiency</h5>
                          <p>
                            Streamlined processes and automation of routine
                            tasks to enhance operational efficiency.
                          </p>
                        </div>
                      </div>
                      <div class="p-3 info-horizontal d-flex">
                        <div>
                          <h5>5. Analytics and Insights</h5>
                          <p>
                            Powerful analytics tools for informed
                            decision-making and personalized customer insights.
                          </p>
                        </div>
                      </div>
                      <div class="p-3 info-horizontal d-flex">
                        <div>
                          <h5>6.Customer Support</h5>
                          <p>
                            Dedicated support services to assist clients with
                            implementation, training, and ongoing technical
                            assistance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div
              class="tab-pane fade"
              id="pills-health-care"
              role="tabpanel"
              aria-labelledby="pills-health-care-tab"
            >
              <section class="py-md-7">
                <div class="container-fluid w-100">
                  <div class="row">
                    <div class="col-4 position-relative max-width-600 mx-auto"></div>
                    <div class="col-lg-8 ">
                      <div class="row">
                        <div class="col-12 col-md-7">
                          <div class="p-3 text-start border-radius-lg">
                            <h2 class="mt-5">Health Care</h2>
                            <p class="text-dark text-lg mt-3">
                              We help you realize intelligent, connected, and
                              patient-centric healthcare.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class=" p-0 border-radius-lg">
                          <div class="blur-shadow-image">
                            <img
                              src="https://www.brightlysoftware.com/sites/default/files/styles/small/public/image/2022-08/HDR-Industry-Healthcare.png?itok=lC-H7kxc"
                              alt="img-blur-shadow"
                              class="img-fluid border-radius-lg"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-xl-3 col-md-4 py-0">
                          <div class="p-2 text-start">
                            <i class="material-icons text-4xl text-gradient text-dark">
                              spa
                            </i>
                            <h5 class="mt-3">Efficiency and Accuracy</h5>
                            <p>
                              Healthcare software improves efficiency by
                              streamlining administrative tasks such as
                              scheduling, billing, and record-keeping. It also
                              enhances accuracy in medical documentation and
                              reduces errors through standardized processes and
                              automated checks.
                            </p>
                          </div>
                        </div>
                        <div class="col-xl-3 col-md-4 py-0">
                          <div class="p-2 text-start">
                            <i class="material-icons text-4xl text-gradient text-warning">
                              school
                            </i>
                            <h5 class="mt-3">Patient-Centered Care</h5>
                            <p>
                              Software solutions enable better patient
                              engagement and care coordination. They provide
                              tools for patients to access their health
                              information, communicate with healthcare
                              providers, and participate in their own care
                              decisions. This leads to improved patient outcomes
                              and satisfaction.
                            </p>
                          </div>
                        </div>
                        <div class="col-xl-3 col-md-4 py-0">
                          <div class="p-2 text-start">
                            <i class="material-icons text-4xl text-gradient text-danger">
                              emoji_people
                            </i>
                            <h5 class="mt-3">Data-driven Insights</h5>
                            <p>
                              Healthcare software collects and analyzes vast
                              amounts of data, offering insights that drive
                              clinical decisions, operational improvements, and
                              public health initiatives. By leveraging analytics
                              and predictive modeling, healthcare providers can
                              identify trends, manage population health, and
                              personalize treatments.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section class="py-0">
                <div class="container py-3">
                  <div class="row align-items-center">
                    <div class="col-md-6 mb-md-0 mb-4">
                      <h3 class="text-dark mb-0">
                        From reactive to proactive and predictive care
                      </h3>
                      <p class="mb-4">
                        "Revolutionizing healthcare through innovative software
                        solutions that enhance patient care, streamline
                        operations, and ensure regulatory compliance."
                      </p>
                      <div class="col-md-12 ">
                        <div class="p-0 info-horizontal d-flex">
                          <div>
                            <h5>1. Electronic Health Records (EHR)</h5>
                            <p>
                              Secure and accessible digital records management
                              to improve patient care and operational
                              efficiency.
                            </p>
                          </div>
                        </div>
                        <div class="p-0 info-horizontal d-flex">
                          <div>
                            <h5>2.Telemedicine Solutions</h5>
                            <p>
                              Integrated platforms for remote consultations,
                              enhancing access to healthcare services and
                              patient convenience.
                            </p>
                          </div>
                        </div>
                        <div class="p-0 info-horizontal d-flex">
                          <div>
                            <h5>3. Healthcare Analytics:</h5>
                            <p>
                              Advanced analytics tools for data-driven insights,
                              enabling better decision-making and personalized
                              patient care.
                            </p>
                          </div>
                        </div>
                        <div class="p-0 info-horizontal d-flex">
                          <div>
                            <h5>4. Compliance and Security:</h5>
                            <p>
                              Strict adherence to healthcare regulations (e.g.,
                              HIPAA) and robust security measures to protect
                              patient data and ensure confidentiality.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div
          class="tab-pane fade"
          id="pills-education"
          role="tabpanel"
          aria-labelledby="pills-education-tab"
        >
          <section class="py-5">
            <div class="container">
              <div class="row">
                <div class="row mb-2">
                  <div class="col-lg-10 text-center mx-auto">
                    <p class="mb-1 text-success text-uppercase font-weight-bold">
                      Digital Learning
                    </p>
                    <h4 className="source-serif-4 text-normal text-wrap">
                      Advancing Education Through Innovative Software Solutions.
                    </h4>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="row">
                    <div class="col-lg-6 justify-content-center d-flex flex-column">
                      <div class="card rounded-3">
                        <div class="d-block blur-shadow-image">
                          <img
                            src="https://www.schoolnetindia.com/blog/wp-content/uploads/2022/06/Why-Digital-Learning-Is-The-Future-of-Education.jpg"
                            alt="img-blur-shadow-blog-2"
                            class="img-fluid shadow rounded-3"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 justify-content-center d-flex flex-column ps-lg-5 pt-lg-0 pt-3">
                      <h6 class="category text-info mt-3">Edtech</h6>
                      <h5>
                        <a href="javascript:;" class="text-darker text-wrap">
                          Empowering Education Through Software Innovation
                        </a>
                      </h5>
                      <p>
                        The software industry in education encompasses a wide
                        range of technologies and solutions tailored to enhance
                        learning and administrative processes. It includes
                        software applications for virtual classrooms, learning
                        management systems (LMS), educational content creation
                        and distribution platforms, student information systems
                        (SIS), and adaptive learning tools. These technologies
                        aim to improve accessibility, engagement, and outcomes
                        across educational institutions, from K-12 schools to
                        higher education and professional development.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 mt-5">
                  <div class="row flex-row-reverse">
                    <div class="col-lg-6 justify-content-center d-flex flex-column">
                      <div class="card rounded-3">
                        <div class="blur-shadow-image">
                          <img
                            src="https://digitallearning.eletsonline.com/wp-content/uploads/2018/06/33.jpg"
                            alt="img-blur-shadow-blog-2"
                            class="img-fluid shadow rounded-3"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 pe-lg-5 justify-content-center d-flex flex-column pt-lg-0 pt-3">
                      <h6 class="category text-info mt-3">Learning</h6>
                      <h5>
                        <a href="javascript:;" class="text-darker text-wrap">
                          Digital Learning Solutions: Transforming Education
                        </a>
                      </h5>
                      <p>
                        The education software industry develops technology
                        solutions that enhance teaching, learning, and
                        administrative processes in educational settings. These
                        include tools like learning management systems (LMS),
                        virtual classrooms, educational apps, and student
                        performance analytics platforms. By leveraging these
                        technologies, institutions can improve educational
                        outcomes, increase engagement, and facilitate
                        personalized learning experiences tailored to the needs
                        of students and educators alike.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-5 col-10">
                  <img
                    class="w-100 border-radius-lg shadow"
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/man-doing-design-thinking-5984562-4971232.png?f=webp"
                  />
                </div>
                <div class="col-12 d-flex justify-content-center flex-column mx-auto text-md-start pt-3">
                  <h4 class="mb-2 text-danger">
                    Educational Technology Innovations
                  </h4>
                  <p class="lead text-start">
                    The education software industry pioneers innovative
                    solutions that revolutionize teaching, learning, and
                    administrative operations. By integrating technologies like
                    learning management systems (LMS) and virtual classrooms, it
                    empowers educators to deliver personalized education
                    experiences while optimizing institutional efficiency and
                    student engagement.{" "}
                  </p>
                  <div class="col-md-12 ">
                    <div class="p-1 info-horizontal d-flex">
                      <div>
                        <h6>1. Learning Management Systems (LMS) :</h6>
                        <p>
                          Platforms that facilitate the administration,
                          documentation, tracking, and delivery of educational
                          courses or training programs.
                        </p>
                      </div>
                    </div>
                    <div class="p-1 info-horizontal d-flex">
                      <div>
                        <h6>2. Virtual Classrooms :</h6>
                        <p>
                          Tools that enable remote teaching and learning through
                          live interactions, video conferencing, and
                          collaboration features.
                        </p>
                      </div>
                    </div>
                    <div class="p-1 info-horizontal d-flex">
                      <div>
                        <h6>3. Student Information Systems (SIS) :</h6>
                        <p>
                          Software that manages student data, including
                          enrollment, attendance, grades, and academic records.
                        </p>
                      </div>
                    </div>
                    <div class="p-1 info-horizontal d-flex">
                      <div>
                        <h6>4. Assessment and Analytics :</h6>
                        <p>
                          Tools for assessing student performance, generating
                          reports, and analyzing data to improve educational
                          outcomes and inform instructional strategies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-travel"
          role="tabpanel"
          aria-labelledby="pills-travel-tab"
        >
          <section class="py-5">
            <div class="container">
              <div class="row">
                <div class="row mb-0">
                  <div class="col-lg-10 text-center mx-auto">
                    <p class="mb-1 text-success text-uppercase font-weight-bold">
                    LogisticsTech
                    </p>
                    <h3 className="source-serif-4 text-normal">
                    Integrated Travel Management Solutions Platform.
                    </h3>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="row">
                    <div class="col-lg-6 justify-content-center d-flex flex-column ps-lg-0 pt-lg-0 pt-0">
                      <h6 class="category text-info mt-3">LogisticsTech</h6>
                      <h5>
                        <a href="javascript:;" class="text-darker">
                        Revolutionizing Travel Management
                        </a>
                      </h5>
                      <p>
                      The travel and logistics software industry focuses on developing technological solutions to optimize transportation, logistics management, and travel booking processes. These solutions encompass software platforms for route planning, freight tracking, inventory management, booking and reservation systems, and analytics tools. They aim to streamline operations, enhance efficiency, improve customer experience, and facilitate real-time decision-making in the dynamic and interconnected global supply chain and travel sectors.
                      </p>
                    </div>
                    <div class="col-lg-6 justify-content-center d-flex flex-column">
                      <div class="card rounded-3">
                        <div class="d-block blur-shadow-image">
                          <img
                            src="https://img.freepik.com/free-photo/still-life-supply-chain-representation_23-2149827240.jpg"
                            alt="img-blur-shadow-blog-2"
                            class="img-fluid shadow rounded-3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 mt-2">
                  <div class="row flex-row-reverse">
                  <div class="col-lg-6 pe-lg-5 justify-content-center d-flex flex-column pt-lg-0 pt-3">
                      <h6 class="category text-info mt-3">Efficiency</h6>
                      <h5>
                        <a href="javascript:;" class="text-darker">
                        Logistics Technology Innovations
                        </a>
                      </h5>
                      <p>
                      The travel and logistics software industry leverages technology to streamline operations, enhance efficiency, and improve customer experience across transportation and supply chain management. It encompasses solutions for route optimization, shipment tracking, inventory management, booking systems, and analytics, aiming to meet the complex demands of global logistics and travel sectors while driving innovation and cost-effectiveness.
                      </p>
                    </div>
                    <div class="col-lg-6 justify-content-center d-flex flex-column">
                      <div class="card rounded-3">
                        <div class="blur-shadow-image">
                          <img
                            src="https://static.vecteezy.com/system/resources/previews/021/165/627/non_2x/logistics-transport-import-export-shipping-service-customers-order-things-from-via-internet-international-shipping-online-air-courier-cargo-plane-boxes-packaging-freight-forwarder-to-worldwid-free-photo.JPG"
                            alt="img-blur-shadow-blog-2"
                            class="img-fluid shadow rounded-3"
                          />
                        </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="py-0">
            <div class="container">
              <div class="row">
                <div class="col-12 d-flex flex-column mx-auto text-lg-start">
                  <h2 class="mb-2 text-warning">
                  Modernizing Travel and Logistics Operations
                  </h2>
                  <p class="lead">
                  The travel and logistics software industry specializes in creating digital solutions that streamline transportation, supply chain management, and travel operations. These technologies include route optimization, inventory tracking, booking systems, and analytics tools, aimed at improving efficiency, enhancing customer service, and adapting to the complexities of global logistics and travel demands.{" "}
                  </p>
                  <div class="col-md-12 ">
                    <div class="p-1 info-horizontal d-flex">
                      <div>
                        <h5>1. Route Optimization :</h5>
                        <p>
                        Software solutions that optimize transportation routes to minimize costs and maximize efficiency.
                        </p>
                      </div>
                    </div>
                    <div class="p-1 info-horizontal d-flex">
                      <div>
                        <h5>2. Booking and Reservation Systems :</h5>
                        <p>
                        Platforms that facilitate online booking, reservations, and ticketing for travel and transportation services.
                        </p>
                      </div>
                    </div>
                    <div class="p-1 info-horizontal d-flex">
                      <div>
                        <h5>3. Supply Chain Visibility :</h5>
                        <p>
                        Technologies that provide real-time visibility into supply chain operations, improving transparency and responsiveness.
                        </p>
                      </div>
                    </div>
                    <div class="p-1 info-horizontal d-flex">
                      <div>
                        <h5>4. Customer Experience :</h5>
                        <p>
                        Software solutions designed to enhance the overall customer experience through personalized services, efficient processes, and responsive customer support.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
            
          </div>
        </div>
      </div>
      <MobileFooter/>
    </div>
  );
};

export default MobileIndustries;
