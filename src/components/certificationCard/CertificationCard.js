import React, { Component } from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs as jsIcon,
  faNodeJs as nodeJsIcon,
  faMicrosoft as microsoftIcon,
  faReact as reactIcon,
  faLaravel as laravelIcon,
  faPhp as phpIcon,
  faCss3 as cssIcon,
  faHtml5 as html5Icon,
  faDocker as dockerIcon, // Used for MongoDB as placeholder
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase as sqlIcon } from "@fortawesome/free-solid-svg-icons";

class CertificationCard extends Component {
  getIcon = (iconName) => {
    switch (iconName) {
      case "js":
        return jsIcon;
      case "node-js":
        return nodeJsIcon;
      case "microsoft":
        return microsoftIcon;
      case "react":
        return reactIcon;
      case "laravel":
        return laravelIcon;
      case "php":
        return phpIcon;
      case "css3":
        return cssIcon;
      case "sql":
        return sqlIcon;
      case "html5":
        return html5Icon;
      case "mongodb":
        return dockerIcon; // Docker used as a placeholder for MongoDB
      default:
        return null;
    }
  };

  getIconColor = (iconName) => {
    switch (iconName) {
      case "js":
        return "#F7DF1E"; // JavaScript color
      case "node-js":
        return "#68A063"; // Node.js color
      case "microsoft":
        return "#0078D4"; // Microsoft color
      case "react":
        return "#61DAFB"; // React color
      case "laravel":
        return "#FF2D20"; // Laravel color
      case "php":
        return "#6C78AB"; // PHP color
      case "css3":
        return "#1572B6"; // CSS3 color
      case "sql":
        return "#fff"; // SQL color (dark blue)
      case "html5":
        return "#E34F26"; // HTML5 color
      case "mongodb":
        return "#47A248"; // MongoDB color (use Docker as placeholder)
      default:
        return "#000"; // Default color
    }
  };

  render() {
    const { certificate, theme } = this.props;
    const icon = this.getIcon(certificate.icon_name);
    const iconColor = this.getIconColor(certificate.icon_name);

    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="cert-card">
          <div className="content">
            <a
              href={certificate.certificate_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="content-overlay"></div>
              <div
                className="cert-header p-1"
                style={{ backgroundColor: "#123456" }} // Header color
              >
                {icon && (
                  <FontAwesomeIcon
                    className="logo_icon m-1" // Added margin class
                    icon={icon}
                    size="3x"
                    style={{ color: iconColor }} // Icon color according to technology
                  />
                )}
              </div>
              <div className="content-details fadeIn-top">
                <h3 className="content-title" style={{ color: theme.body }}>
                  Skill 
                </h3>
              </div>
            </a>
          </div>
          <div className="cert-body">
            <h2 className="cert-body-title" style={{ color: "#001F3F" }}> {/* Navy Blue color */}
              {certificate.title}
            </h2>
            <h3
              className="cert-body-subtitle"
              style={{ color: "#001F3F" }} // Navy Blue color
            >
              {certificate.subtitle}
            </h3>
          </div>
        </div>
      </Fade>
    );
  }
}

export default CertificationCard;
