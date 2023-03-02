import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import "tachyons";
import ScrollAnimation from 'react-animate-on-scroll';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SocialIcon } from "react-social-icons";

import Nav from "../components/Nav.js";
import Footer from "../components/footer.js";
import FlipCard from "../components/flipcard.js";
import Card from "../components/card.js";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import "./main.css";

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 5000,
  /* fade: true, */
  slidesToShow: 1,
  swapToSlide: true,
};

const IndexPage = ({ data }) => {
  
  var images = data.allSlideshowSheet1.edges;
  var sliderimages = images.map((node)=>(<img src={node.node.links} class="" />))

  return(
    <div>
      <Nav />
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
      </head>
      <div className="w-100 banner bg-green" style={{fontFamily: "Raleway"}}>
        <div className="fl header-text-container">
          <ScrollAnimation animateIn="fadeIn" delay={100} offset={150} duration={3} animateOnce={true}>
            <div className="cream-text header-text">
              Welcome to Quizzing Club, IIT Delhi!
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" delay={1500} offset={150} duration={3} animateOnce={true}>
            <div className="f3 fw5 pv3 cream-text">
              <br /> For some time now, we have been thinking of having our own
              space on the internet. So, here we are: The one destination for
              interested people to look for any and all information they would like
              to know!
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" delay={1800} offset={150} duration={3} animateOnce={true}>
            <div className="pt4-ns pt0 tl">
              <a
                className="link blue dib mr4 tc grow "
                href="https://www.facebook.com/iitd.qc/"
                title="Facebook"
              >
                <svg
                  className="dib h2 w2 bg-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="1.414"
                >
                  <path
                    d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0"
                    fill-rule="nonzero"
                  />
                </svg>
              </a>
              <a
                className="link pink dib mr4 tc grow"
                href="https://www.instagram.com/iitdqc/"
                title="Instagram"
              >
                <svg
                  className="dib h2 w2"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="1.414"
                >
                  <path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z" />
                </svg>
              </a>
              <a
                className="link blue dib mr4 tc grow"
                href="https://www.linkedin.com/company/qc-iitdelhi"
                title="LinkedIn"
              >
                <svg
                  className="dib h2 w2 bg-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="1.414"
                >
                  <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

            </div>
          </ScrollAnimation>
        </div>
        <div className="fl w-100 w-60-ns">
          <div className="slideshow-container tc cream-text">
            <Slider {...settings} className="overflow-hidden slider">
              {sliderimages}
            </Slider>
          </div>
        </div>
      </div>
      <div className="fl w-100 tc bg-cream" style={{fontFamily: "Raleway"}}>
        <h1>We quiz and stuff (but mostly quiz)</h1>
        <div className="topic-tiles">
          <FlipCard
            name={"GENERAL"}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2eerAsftnzti_it7Nbry2Vy0v1e4MTHA02IFCL34uquLlXRCj0Gv2PfgmLbg_3pjOQQ04FFsHO3p5g9w3Kxe5LYTENOLy6DQ&usqp=CAU&ec=45730948"
            colour="black"
            data={
              "This genre covers everything you can possibly think of, not too obscure though :p From history to current events, myths to facts, and arts to sciences, this has got it all."
            }
          />
          <FlipCard
            name={"MELA"}
            colour="white"
            image="https://serenademagazine.com/wp-content/uploads/2015/12/Screen-Shot-2018-06-18-at-2.21.43-AM.png"
            data={
              " If you appreciate all things beautiful in life, then these quizzes are for you. MELA stands for Music, Entertainment, Literature, and Arts."
            }
          />
          <FlipCard
            name={"INDIA"}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIIhJIObitKVaKGr5nxMdr4li53-UkAQdqig&usqp=CAU"
            colour="black"
            data={
              "The perfect quizzes to showcase your pride in our motherland and know more about every mystery that resides here, shallow or deep."
            }
          />
        </div>
        <div className="topic-tiles">
          <FlipCard
            name={"SPORTS"}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ppF9uh6--O9LMa7ShoKxqLSVzZn3b1bYnw&usqp=CAU"
            colour="white"
            data={
              "Frustrated that all the facts you have acquired about the world of sports are not acknowledged? Worry not, for Sports Quizzes always seek you and your fellows."
            }
          />
          <FlipCard
            name={"HISTORY"}
            image="https://i.ibb.co/T1wKcrS/David-Napoleon-crossing-the-Alps-Malmaison2.jpg"
            colour="white"
            data={
              "Did you know that America was discovered by the vikings way before Christopher Columbus? All those dreaded history classes in school have finally come to your aid! Join us for an amazing night full of mind-blowing historical facts. "
            }
          />
          <FlipCard
            name={"SCI-BIZ-TECH"}
            image="https://i.ibb.co/23YKbM2/istockphoto-1295900106-612x612.jpg"
            colour="black"
            data={
              " Crisp facts from the world of business, science and technology await. From corporates and conglomerates to the wonders of science, we have got you covered. Keep up with the latest tech facts as you join us for an enthralling, engaging evening."
            }
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export const query = graphql` 
  query SliderImages {
    allSlideshowSheet1 {
      edges {
        node {
          links
        }
      }
    }
  }
`;

export default IndexPage;
