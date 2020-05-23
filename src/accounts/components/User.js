import React, { useState } from "react";
import { Image, Carousel, ListGroup, Button } from "react-bootstrap";
import Client from "./Client";
import Provider from "./Provider";
import AccountSettings from "./AccountSettings";
import { Link } from "react-router-dom";
import Statistics from "./Statistics";
import Schedule from "./Schedule";
import Menu from "./Menu";
import { useMediaQuery } from "react-responsive";

const User = ({ data }) => {
  console.log(data);
  const [index, setIndex] = useState(0);
  const [openSetting, setOpenSettings] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openMenu, setOpenMenu] = useState(true);
  const [openSchedule, setOpenSchedule] = useState(false);
  const [openStatistics, setOpenStatistics] = useState(false);

  const handleOpenStatistics = () => {
    setOpenStatistics(true);
    setOpenMenu(false);
    setOpenProfile(false);
    setOpenSettings(false);
    setOpenSchedule(false);
  };

  const handleOpenSchedule = () => {
    setOpenStatistics(false);
    setOpenMenu(false);
    setOpenProfile(false);
    setOpenSchedule(true);
    setOpenSettings(false);
  };

  const handleOpenMenu = () => {
    setOpenStatistics(false);
    setOpenMenu(true);
    setOpenProfile(false);
    setOpenSchedule(false);
    setOpenSettings(false);
  };

  const handleOpenAccountSettings = () => {
    setOpenStatistics(false);
    setOpenMenu(false);
    setOpenSchedule(false);
    setOpenSettings(true);
    setOpenProfile(false);
  };

  const handleOpenProfile = () => {
    setOpenStatistics(false);
    setOpenMenu(false);
    setOpenSchedule(false);
    setOpenProfile(true);
    setOpenSettings(false);
  };

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const listPhotos = () => {
    let photoList = [];
    if (data["details"]) {
      if (data.details["images"]) {
        for (const [index, value] of data.details.images.entries()) {
          var image = value;
          photoList.push(
            <Carousel.Item key={index}>
              <Image
                alt={value}
                className="provider_image"
                src={image}
                roundedCircle
              />
            </Carousel.Item>
          );
        }
        return photoList;
      }
    } else {
      photoList.push(
        <Carousel.Item key="1">
          <Image
            alt="avatar"
            src={require("../assets/placeholder.jpg")}
            roundedCircle
            className="provider_image"
          />
        </Carousel.Item>
      );
      return photoList;
    }
  };

  const avatarExist = () => {
    if (data.details) {
      if (data.details.avatar) {
        return (
          <Image
            alt="avatar"
            src={data.details.avatar}
            roundedCircle
            className="provider_image"
          />
        );
      }
    } else
      return (
        <Image
          alt="avatar"
          src={require("../assets/placeholder.jpg")}
          roundedCircle
          className="provider_image"
        />
      );
  };
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 767 });
    return isDesktop ? children : null;
  };

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
    console.log(isMobile);
  };
  return (
    <div className="main_div_profile_all">
      <Desktop>
        <div className="main_div_profile">
          <div className="user_profile">
            <div>
              {data.role === "Provider" ? (
                <Carousel onSelect={handleSelect}>{listPhotos()}</Carousel>
              ) : (
                <div>{avatarExist()}</div>
              )}
            </div>
            <div className="email_profile">
              <p>
                <small>{data.email}</small>
              </p>
            </div>
            <div className="username_profile">
              <p>
                <strong>{data.name}</strong>
              </p>
            </div>
            <div>
              {data.role === "Client" ? (
                <ListGroup className="menu_profile">
                  <ListGroup.Item className="menu_element_profile">
                    <Link className="menu_link" onClick={handleOpenProfile}>
                      {" "}
                      Profile{" "}
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item className="menu_element_profile">
                    <Link
                      className="menu_link"
                      onClick={handleOpenAccountSettings}
                    >
                      {" "}
                      Account Settings{" "}
                    </Link>
                  </ListGroup.Item>
                </ListGroup>
              ) : (
                <ListGroup className="menu_profile">
                  <ListGroup.Item className="menu_element_profile">
                    <Link className="menu_link" onClick={handleOpenStatistics}>
                      Statistics
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item className="menu_element_profile">
                    <Link className="menu_link" onClick={handleOpenProfile}>
                      Profile
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item className="menu_element_profile">
                    <Link className="menu_link" onClick={handleOpenMenu}>
                      Menu
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item className="menu_element_profile">
                    <Link className="menu_link" onClick={handleOpenSchedule}>
                      Schedule
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item className="menu_element_profile">
                    <Link
                      className="menu_link"
                      onClick={handleOpenAccountSettings}
                    >
                      Account Settings
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item className="menu_element_profile"></ListGroup.Item>
                </ListGroup>
              )}
            </div>
          </div>
          <div className="profile_form">
            {openProfile && data.role === "Client" && (
              <Client data={data.details}></Client>
            )}
            {openSetting && data.role === "Client" && (
              <AccountSettings data={data}></AccountSettings>
            )}
            {openSetting && data.role === "Provider" && (
              <AccountSettings data={data}></AccountSettings>
            )}
            {openProfile && data.role === "Provider" && (
              <Provider data={data.details}></Provider>
            )}
            {openMenu && data.role === "Provider" && (
              <Menu data={data.details ? data.details.menu : {}} />
            )}
            {openSchedule && data.role === "Provider" && (
              <Schedule data={data.details.schedule} />
            )}
            {openStatistics && data.role === "Provider" && (
              <Statistics data={data} />
            )}
          </div>
        </div>
      </Desktop>
      <Mobile>
        <div className="main_div_profile_phone">
          <div className="user_profile_phone">
            <div>
              {data.role === "Provider" ? (
                <Carousel onSelect={handleSelect}>{listPhotos()}</Carousel>
              ) : (
                <div>{avatarExist()}</div>
              )}
            </div>
            <div className="email_profile">
              <p>
                <small>{data.email}</small>
              </p>
            </div>
            <div className="username_profile">
              <p>
                <strong>{data.name}</strong>
              </p>
            </div>
            <div>
              {data.role === "Client" ? (
                <ListGroup className="menu_profile_phone">
                  <ListGroup.Item className="menu_element_profile">
                    <Link className="menu_link" onClick={handleOpenProfile}>
                      Profile
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item className="menu_element_profile">
                    <Link
                      className="menu_link"
                      onClick={handleOpenAccountSettings}
                    >
                      {" "}
                      Account Settings{" "}
                    </Link>
                  </ListGroup.Item>
                </ListGroup>
              ) : (
                <ListGroup className="menu_profile_phone">
                  <ListGroup.Item className="menu_element_profile">
                    <Link className="menu_link" onClick={handleOpenStatistics}>
                      Statistics
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item className="menu_element_profile">
                    <Link className="menu_link" onClick={handleOpenProfile}>
                      Profile
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item className="menu_element_profile">
                    <Link className="menu_link" onClick={handleOpenMenu}>
                      Menu
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item className="menu_element_profile">
                    <Link className="menu_link" onClick={handleOpenSchedule}>
                      Schedule
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item className="menu_element_profile">
                    <Link
                      className="menu_link"
                      onClick={handleOpenAccountSettings}
                    >
                      Account Settings
                    </Link>
                  </ListGroup.Item>
                </ListGroup>
              )}
            </div>
          </div>
          <div className="profile_form_phone">
            {openProfile && data.role === "Client" && (
              <Client data={data.details}></Client>
            )}
            {openSetting && data.role === "Client" && (
              <AccountSettings data={data}></AccountSettings>
            )}
            {openSetting && data.role === "Provider" && (
              <AccountSettings data={data}></AccountSettings>
            )}
            {openProfile && data.role === "Provider" && (
              <Provider data={data.details}></Provider>
            )}
            {openMenu && data.role === "Provider" && (
              <Menu
                data={data ? (data.details ? data.details.menu : {}) : {}}
              />
            )}
            {openSchedule && data.role === "Provider" && (
              <Schedule data={data.details.schedule} />
            )}
            {openStatistics && data.role === "Provider" && (
              <Statistics data={data} />
            )}
          </div>
        </div>
      </Mobile>
    </div>
  );
};

export default User;
