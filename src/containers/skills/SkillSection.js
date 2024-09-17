import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";
import FrontendTechImg from "../../assets/images/front.png";
import BackendTechImg from "../../assets/images/backend.png";
import DatabasesTechImg from "../../assets/images/databases.png";
import OthersTechImg from "../../assets/images/other.png";

function GetSkillSvg(props) {
  switch (props.fileName) {
    case "DataScienceImg":
      return <DataScienceImg theme={props.theme} />;
    case "FullStackImg":
      return <FullStackImg theme={props.theme} />;
    case "CloudInfraImg":
      return <CloudInfraImg theme={props.theme} style={{ height: '400px' }} />;
    case "FrontendTechImg":
      return <img src={FrontendTechImg} alt="Frontend Technologies" />;
    case "BackendTechImg":
      return <img src={BackendTechImg} alt="Backend Technologies" />;
    case "DatabasesImg":
      return <img src={DatabasesTechImg} alt="Databases Technologies" />;
    case "VersionControlImg":
      return <img  src={OthersTechImg} alt="Version Control and Tools" />;
    default:
      return <DesignImg theme={props.theme} />;
  }
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, i) => {
          return (
            <div key={i} className="skills-main-div ">
              <Fade left duration={2000}>
                <div className="skills-image-div" style={{height:"500px"}}>
                  <GetSkillSvg  fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500} >
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, i) => {
                      return (
                        <p
                          key={i}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
