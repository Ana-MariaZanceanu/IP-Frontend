import React, { useState } from "react";
import { Image, Carousel, ListGroup } from "react-bootstrap";
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
  const [dataUser, setDataUser] = useState(data);
  const [index, setIndex] = useState(0);
  const [openSetting, setOpenSettings] = useState(false);
  const [openProfile, setOpenProfile] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const [openSchedule, setOpenSchedule] = useState(false);
  const [openStatistics, setOpenStatistics] = useState(false);

  const scheduleData = data.details.schedule;
  const [startMonday, setStartMonday] = useState(
    scheduleData
      ? scheduleData.schedule
        ? scheduleData.schedule[0]
          ? scheduleData.schedule[0].startHour
          : 0
        : 0
      : 0
  );
  const [startTuesday, setStartTuesday] = useState(
    scheduleData
      ? scheduleData.schedule
        ? scheduleData.schedule[1]
          ? scheduleData.schedule[1].startHour
          : 0
        : 0
      : 0
  );
  const [startWednesday, setStartWednesday] = useState(
    scheduleData
      ? scheduleData.schedule
        ? scheduleData.schedule[2]
          ? scheduleData.schedule[2].startHour
          : 0
        : 0
      : 0
  );
  const [startThursday, setStartThursday] = useState(
    scheduleData
      ? scheduleData.schedule
        ? scheduleData.schedule[3]
          ? scheduleData.schedule[3].startHour
          : 0
        : 0
      : 0
  );
  const [startFriday, setStartFriday] = useState(
    scheduleData
      ? scheduleData.schedule
        ? scheduleData.schedule[4]
          ? scheduleData.schedule[4].startHour
          : 0
        : 0
      : 0
  );
  const [startSaturday, setStartSaturday] = useState(
    scheduleData
      ? scheduleData.schedule
        ? scheduleData.schedule[5]
          ? scheduleData.schedule[5].startHour
          : 0
        : 0
      : 0
  );
  const [startSunday, setStartSunday] = useState(
    scheduleData
      ? scheduleData.schedule
        ? scheduleData.schedule[6]
          ? scheduleData.schedule[6].startHour
          : 0
        : 0
      : 0
  );

  const [endMonday, setEndMonday] = useState(
    scheduleData
      ? scheduleData.schedule
        ? scheduleData.schedule[0]
          ? scheduleData.schedule[0].endHour
          : 0
        : 0
      : 0
  );
  const [endTuesday, setEndTuesday] = useState(
    scheduleData
      ? scheduleData.schedule
        ? scheduleData.schedule[1]
          ? scheduleData.schedule[1].endHour
          : 0
        : 0
      : 0
  );
  const [endWednesday, setEndWednesday] = useState(
    scheduleData
      ? scheduleData.schedule
        ? scheduleData.schedule[2]
          ? scheduleData.schedule[2].endHour
          : 0
        : 0
      : 0
  );
  const [endThursday, setEndThursday] = useState(
    scheduleData
      ? scheduleData.schedule
        ? scheduleData.schedule[3]
          ? scheduleData.schedule[3].endHour
          : 0
        : 0
      : 0
  );
  const [endFriday, setEndFriday] = useState(
    scheduleData
      ? scheduleData.schedule
        ? scheduleData.schedule[4]
          ? scheduleData.schedule[4].endHour
          : 0
        : 0
      : 0
  );
  const [endSaturday, setEndSaturday] = useState(
    scheduleData
      ? scheduleData.schedule
        ? scheduleData.schedule[5]
          ? scheduleData.schedule[5].endHour
          : 0
        : 0
      : 0
  );
  const [endSunday, setEndSunday] = useState(
    scheduleData
      ? scheduleData.schedule
        ? scheduleData.schedule[6]
          ? scheduleData.schedule[6].endHour
          : 0
        : 0
      : 0
  );

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
              {isBigScreen && (
                <Image
                  alt={value}
                  className="provider_image"
                  src={image}
                  roundedCircle
                />
              )}
              {isTabletOrMobile && (
                <img
                  height={350}
                  width={350}
                  className="d-block w-100 background"
                  src={image}
                  alt="First slide"
                />
              )}
            </Carousel.Item>
          );
        }
        return photoList;
      }
    } else {
      photoList.push(
        <Carousel.Item className="carousel_images" key="1">
          isMo
          <Image
            alt="avatar"
            src={require("../assets/placeholder.jpg")}
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
            src={
              data.details.avatar
                ? data.details.avatar
                : require("../assets/placeholder.jpg")
            }
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

  const isBigScreen = useMediaQuery({ query: "(min-device-width: 747px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 747px)" });
  return (
    <div className="main_div_profile_all">
      {isBigScreen && (
        <div className="main_div_profile">
          <div className="user_profile">
            <div>
              {data.role === "Provider" ? (
                <Carousel>{listPhotos()}</Carousel>
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
              <Schedule
                data={data.details.schedule}
                setStartMonday={setStartMonday}
                setStartTuesday={setStartTuesday}
                setStartThursday={setStartThursday}
                setStartFriday={setStartFriday}
                setStartWednesday={setStartWednesday}
                setStartSunday={setStartSunday}
                setStartSaturday={setStartSaturday}
                setEndMonday={setEndMonday}
                setEndTuesday={setEndTuesday}
                setEndThursday={setEndThursday}
                setEndFriday={setEndFriday}
                setEndWednesday={setEndWednesday}
                setEndSunday={setEndSunday}
                setEndSaturday={setEndSaturday}
                startMonday={startMonday}
                startTuesday={startTuesday}
                startWednesday={startWednesday}
                startThursday={startThursday}
                startFriday={startFriday}
                startSaturday={startSaturday}
                startSunday={startSunday}
                endMonday={endMonday}
                endThursday={endThursday}
                endTuesday={endTuesday}
                endWednesday={endWednesday}
                endSaturday={endSaturday}
                endSunday={endSunday}
                endFriday={endFriday}
              />
            )}
            {openStatistics && data.role === "Provider" && (
              <Statistics data={data} />
            )}
          </div>
        </div>
      )}
      {isTabletOrMobile && (
        <div className="main_div_profile_phone">
          <div className="user_profile_phone">
            <div>
              {data.role === "Provider" ? (
                <Carousel activeIndex={index} onSelect={handleSelect}>
                  {listPhotos()}
                </Carousel>
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
      )}
    </div>
  );
};

export default User;
