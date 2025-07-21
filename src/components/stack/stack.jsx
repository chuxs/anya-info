import React from 'react'
import './stack.css'
import {FaHtml5} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io5'
import {FaCss3Alt} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {FaNode} from 'react-icons/fa6'
import { VscAzure } from "react-icons/vsc";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { TbApi } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
// import { TbBrandOffice } from "react-icons/tb";
// import {FaJava} from 'react-icons/fa'
// import {FaBootstrap} from 'react-icons/fa'
// import {BsPatchCheckFill} from 'react-icons/bs'
// import {SiMicrosoftazure} from 'react-icons/si'
// import {RiSpeakFill} from 'react-icons/ri'
// import {FaConnectdevelop} from 'react-icons/fa'
// import {GiTeamIdea} from 'react-icons/gi'
// import {SiMicrosoftoffice} from 'react-icons/si'


const Stack = () => {
  return (
    <section class="features" id="feat">
      {/* <h5>What Skills I Have</h5> */}
      <h2>Technology</h2>

      <div className="stack-grid experience__container">
        {/* I used Stack in place of frontend which the video tutorial wsa using */}
        <div className="feature-stack">

          <h3>Stack</h3>

          <div className="experience__content">

            <article className='experience__details'>
              <FaReact className='react_icon'/>
              <div>
              <h5>React</h5> 
              <small className='text-light'>  </small>
              </div>
            </article>

            <article className='experience__details'>
              <FaHtml5 className='html_icon'/>
              <div>
              <h5>HTML</h5> 
              <small className='text-light'>  </small>
              </div>
            </article>

            <article className='experience__details'>
              <IoLogoJavascript className='javascript_icon'/>
              <div>
              <h5>JavaScript</h5> 
              <small className='text-light'>  </small>
              </div>
            </article>

            <article className='experience__details'>
              <FaCss3Alt className='css_icon'/>
              <div>
              <h5>CSS</h5> 
              <small className='text-light'>  </small>
              </div>
            </article>

            <article className='experience__details'>
              <FaNode className='node_icon'/>
              <div>
              <h5>Node.js</h5> 
              <small className='text-light'>  </small>
              </div>
            </article>

            <article className='experience__details'>
              <FaNodeJs className='node_icon'/>
              <div>
              <h5>Express.js</h5> 
              <small className='text-light'>  </small>
              </div>
            </article>


          </div>

        </div>
        {/* end of Developement experience */}

        {/* Professional experience starts here */}

        <div className="feature-stack">  

        <h3>Tools</h3>

          <div className="experience__content">

            <article className='experience__details'>
              <VscAzure className='azurecolor'/>
              <div>
              <h5>Azure</h5> 
              <small className='text-light'>  </small>
              </div>
            </article>

            <article className='experience__details'>
              <IoLogoFirebase className='firebase_icon'/>
              <div>
              <h5>Firebase</h5> 
              <small className='text-light'>  </small>
              </div>
            </article>

            <article className='experience__details'>
              <TbApi className='api-icon'/>
              <div>
              <h5>RESTful API</h5> 
              <small className='text-light'>  </small>
              </div>
            </article>

            <article className='experience__details'>
              <SiPostman className='postman_icon'/>
              <div>
              <h5>Postman</h5> 
              <small className='text-light'>  </small>
              </div>
            </article>

            <article className='experience__details'>
              <IoLogoVercel className='vercel_icon'/>
              <div>
              <h5>Vercel</h5> 
              <small className='text-light'>  </small>
              </div>
            </article>

            {/* <article className='experience__details'>
              <RiSpeakFill className='general_icon'/>
              <div>
              <h5> Communication</h5> 
              <small className='text-light'> Excellent </small>
              </div>
            </article>

            <article className='experience__details'>
              <FaConnectdevelop className='general_icon'/>
              <div>
              <h5>Work Flexibility</h5> 
              <small className='text-light'> Excellent </small>
              </div>
            </article>

            <article className='experience__details'>
              <GiTeamIdea className='team_icon'/>
              <div>
              <h5>Teamwork Skills</h5> 
              <small className='text-light'> Excellent </small>
              </div>
            </article> */}

          </div>

        </div>
      </div>

    </section>
  )
}

export default Stack