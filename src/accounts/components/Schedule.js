import React, { useState } from "react";
import * as api from "../api";
import { FormGroup, FormControl, Form, Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

const Schedule = (props) => {
  const [loading, setLoading] = useState(false);

  const [succesTime, setSuccesTime] = useState(true);

  const advertisationMessage = (correct, message) => {
    if (correct) {
      return <p></p>;
    } else {
      return (
        <p className="avertisment">
          <small>{message}</small>
        </p>
      );
    }
  };

  const handleStartMonday = (event) => {
    if (!isTimeFormat(event.target.value)) {
      setSuccesTime(false);
    } else setSuccesTime(true);
    props.setStartMonday(event.target.value);
  };

  const handleEndMonday = (event) => {
    if (!isTimeFormat(event.target.value)) {
      setSuccesTime(false);
    } else setSuccesTime(true);
    props.setEndMonday(event.target.value);
  };

  const handleStartTuesday = (event) => {
    if (!isTimeFormat(event.target.value)) {
      setSuccesTime(false);
    } else setSuccesTime(true);
    props.setStartTuesday(event.target.value);
  };
  const handleEndTuesday = (event) => {
    if (!isTimeFormat(event.target.value)) {
      setSuccesTime(false);
    } else setSuccesTime(true);
    props.setEndTuesday(event.target.value);
  };
  const handleStartWednesday = (event) => {
    if (!isTimeFormat(event.target.value)) {
      setSuccesTime(false);
    } else setSuccesTime(true);
    props.setStartWednesday(event.target.value);
  };
  const handleEndWednesday = (event) => {
    if (!isTimeFormat(event.target.value)) {
      setSuccesTime(false);
    } else setSuccesTime(true);
    props.setEndWednesday(event.target.value);
  };
  const handleStartThursday = (event) => {
    if (!isTimeFormat(event.target.value)) {
      setSuccesTime(false);
    } else setSuccesTime(true);
    props.setStartThursday(event.target.value);
  };
  const handleEndThursday = (event) => {
    if (!isTimeFormat(event.target.value)) {
      setSuccesTime(false);
    } else setSuccesTime(true);
    props.setEndThursday(event.target.value);
  };
  const handleStartFriday = (event) => {
    if (!isTimeFormat(event.target.value)) {
      setSuccesTime(false);
    } else setSuccesTime(true);
    props.setStartFriday(event.target.value);
  };
  const handleEndFriday = (event) => {
    if (!isTimeFormat(event.target.value)) {
      setSuccesTime(false);
    } else setSuccesTime(true);
    props.setEndFriday(event.target.value);
  };
  const handleStartSaturday = (event) => {
    if (!isTimeFormat(event.target.value)) {
      setSuccesTime(false);
    } else setSuccesTime(true);
    props.setStartSaturday(event.target.value);
  };
  const handleEndSaturday = (event) => {
    if (!isTimeFormat(event.target.value)) {
      setSuccesTime(false);
    } else setSuccesTime(true);
    props.setEndSaturday(event.target.value);
  };

  const handleStartSunday = (event) => {
    if (!isTimeFormat(event.target.value)) {
      setSuccesTime(false);
    } else setSuccesTime(true);
    props.setStartSunday(event.target.value);
  };
  const handleEndSunday = (event) => {
    if (!isTimeFormat(event.target.value)) {
      setSuccesTime(false);
    } else setSuccesTime(true);
    props.setEndSunday(event.target.value);
  };

  const handleSaveButton = async (event) => {
    const newData = {
      schedule: [
        {
          day: "luni",
          startHour: props.startMonday,
          endHour: props.endMonday,
        },
        {
          day: "marti",
          startHour: props.startTuesday,
          endHour: props.endTuesday,
        },
        {
          day: "miercuri",
          startHour: props.startWednesday,
          endHour: props.endWednesday,
        },
        {
          day: "joi",
          startHour: props.startThursday,
          endHour: props.endThursday,
        },
        {
          day: "vineri",
          startHour: props.startFriday,
          endHour: props.endFriday,
        },
        {
          day: "sambata",
          startHour: props.startSaturday,
          endHour: props.endSaturday,
        },
        {
          day: "duminica",
          startHour: props.startSunday,
          endHour: props.endSunday,
        },
      ],
    };
    setLoading(true);
    try {
      let answer = await api.profile(newData);
      if (answer.success === true) {
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const isBigScreen = useMediaQuery({ query: "(min-device-width: 747px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 747px)" });

  const isTimeFormat = (time) => {
    if (/^(0?[1-9]|1[012]) [APap][mM]$/.test(time)) return true;
    return false;
  };

  return (
    <div>
      {isBigScreen && (
        <div className="schedule_provider">
          <div className="schedule_form">
            <Form>
              <div className="profile_title">
                <h2>Schedule</h2>
                <p className="profile_explanations">
                  <small>Let the clients know your schedule!</small>
                </p>
              </div>
              <div className="schedule_columns">
                <div>
                  {advertisationMessage(
                    succesTime,
                    "Values should be on the am/pm format"
                  )}
                </div>
                <div className="schedule_row">
                  <div className="day_title">
                    <h4>DAY</h4>
                  </div>
                  <h4>START TIME</h4>
                  <h4>END TIME</h4>
                </div>
                <div className="schedule_row">
                  <div className="day_title">
                    <h5> MONDAY </h5>
                  </div>
                  <FormGroup>
                    <FormControl
                      placeholder={props.startMonday}
                      value={props.startMonday}
                      type="text"
                      onChange={handleStartMonday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={props.endMonday}
                      value={props.endMonday}
                      type="text"
                      onChange={handleEndMonday}
                    ></FormControl>
                  </FormGroup>
                </div>
                <div className="schedule_row">
                  <div className="day_title">
                    <h5>TUESDAY</h5>
                  </div>
                  <FormGroup>
                    <FormControl
                      placeholder={props.startTuesday}
                      value={props.startTuesday}
                      type="text"
                      onChange={handleStartTuesday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={props.endTuesday}
                      value={props.endTuesday}
                      type="text"
                      onChange={handleEndTuesday}
                    ></FormControl>
                  </FormGroup>
                </div>
                <div className="schedule_row">
                  <div className="day_title">
                    <h5>WEDNESDAY</h5>
                  </div>
                  <FormGroup>
                    <FormControl
                      placeholder={props.startWednesday}
                      value={props.startWednesday}
                      type="text"
                      onChange={handleStartWednesday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={props.endWednesday}
                      value={props.endWednesday}
                      type="text"
                      onChange={handleEndWednesday}
                    ></FormControl>
                  </FormGroup>
                </div>
                <div className="schedule_row">
                  <div className="day_title">
                    <h5>THURSDAY</h5>
                  </div>
                  <FormGroup>
                    <FormControl
                      placeholder={props.startThursday}
                      value={props.startThursday}
                      type="text"
                      onChange={handleStartThursday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={props.endThursday}
                      value={props.endThursday}
                      type="text"
                      onChange={handleEndThursday}
                    ></FormControl>
                  </FormGroup>
                </div>
                <div className="schedule_row">
                  <div className="day_title">
                    <h5>FRIDAY</h5>
                  </div>
                  <FormGroup>
                    <FormControl
                      placeholder={props.startFriday}
                      value={props.startFriday}
                      type="text"
                      onChange={handleStartFriday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={props.endFriday}
                      value={props.endFriday}
                      type="text"
                      onChange={handleEndFriday}
                    ></FormControl>
                  </FormGroup>
                </div>
                <div className="schedule_row">
                  <div className="day_title">
                    <h5>SATURDAY</h5>
                  </div>
                  <FormGroup>
                    <FormControl
                      placeholder={props.startSaturday}
                      value={props.startSaturday}
                      type="text"
                      onChange={handleStartSaturday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={props.endSaturday}
                      value={props.endSaturday}
                      type="text"
                      onChange={handleEndSaturday}
                    ></FormControl>
                  </FormGroup>
                </div>
                <div className="schedule_row">
                  <div className="day_title">
                    <h5>SUNDAY</h5>
                  </div>
                  <FormGroup>
                    <FormControl
                      placeholder={props.startSunday}
                      value={props.startSunday}
                      type="text"
                      onChange={handleStartSunday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={props.endSunday}
                      value={props.endSunday}
                      type="text"
                      onChange={handleEndSunday}
                    ></FormControl>
                  </FormGroup>
                </div>
                <div className="submit_button">
                  <Button className="actual_button" onClick={handleSaveButton}>
                    Save
                  </Button>
                  <div></div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      )}
      {isTabletOrMobile && (
        <div className="schedule_provider_phone">
          <div className="schedule_form_phone">
            <Form>
              <div className="profile_title">
                <h2>Schedule</h2>
              </div>
              <div>
                {advertisationMessage(
                  succesTime,
                  "Values should be on the am/pm format"
                )}
              </div>
              <div className="schedule_columns">
                <div className="schedule_row">
                  <div className="day_title">
                    <h4>DAY</h4>
                  </div>
                  <h4>START TIME</h4>
                  <h4>END TIME</h4>
                </div>
                <div className="schedule_row">
                  <div className="day_title">
                    <h5> MONDAY </h5>
                  </div>
                  <FormGroup>
                    <FormControl
                      placeholder={props.startMonday}
                      value={props.startMonday}
                      type="text"
                      onChange={handleStartMonday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={props.endMonday}
                      value={props.endMonday}
                      type="text"
                      onChange={handleEndMonday}
                    ></FormControl>
                  </FormGroup>
                </div>
                <div className="schedule_row">
                  <div className="day_title">
                    <h5>TUESDAY</h5>
                  </div>
                  <FormGroup>
                    <FormControl
                      placeholder={props.startTuesday}
                      value={props.startTuesday}
                      type="text"
                      onChange={handleStartTuesday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={props.endTuesday}
                      value={props.endTuesday}
                      type="text"
                      onChange={handleEndTuesday}
                    ></FormControl>
                  </FormGroup>
                </div>
                <div className="schedule_row">
                  <div className="day_title">
                    <h5>WEDNESDAY</h5>
                  </div>
                  <FormGroup>
                    <FormControl
                      placeholder={props.startWednesday}
                      value={props.startWednesday}
                      type="text"
                      onChange={handleStartWednesday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={props.endWednesday}
                      value={props.endWednesday}
                      type="text"
                      onChange={handleEndWednesday}
                    ></FormControl>
                  </FormGroup>
                </div>
                <div className="schedule_row">
                  <div className="day_title">
                    <h5>THURSDAY</h5>
                  </div>
                  <FormGroup>
                    <FormControl
                      placeholder={props.startThursday}
                      value={props.startThursday}
                      type="text"
                      onChange={handleStartThursday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={props.endThursday}
                      value={props.endThursday}
                      type="text"
                      onChange={handleEndThursday}
                    ></FormControl>
                  </FormGroup>
                </div>
                <div className="schedule_row">
                  <div className="day_title">
                    <h5>FRIDAY</h5>
                  </div>
                  <FormGroup>
                    <FormControl
                      placeholder={props.startFriday}
                      value={props.startFriday}
                      type="text"
                      onChange={handleStartFriday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={props.endFriday}
                      value={props.endFriday}
                      type="text"
                      onChange={handleEndFriday}
                    ></FormControl>
                  </FormGroup>
                </div>
                <div className="schedule_row">
                  <div className="day_title">
                    <h5>SATURDAY</h5>
                  </div>
                  <FormGroup>
                    <FormControl
                      placeholder={props.startSaturday}
                      value={props.startSaturday}
                      type="text"
                      onChange={handleStartSaturday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={props.startSaturday}
                      value={props.startSaturday}
                      type="text"
                      onChange={handleEndSaturday}
                    ></FormControl>
                  </FormGroup>
                </div>
                <div className="schedule_row">
                  <div className="day_title">
                    <h5>SUNDAY</h5>
                  </div>
                  <FormGroup>
                    <FormControl
                      placeholder={props.startSunday}
                      value={props.startSunday}
                      type="text"
                      onChange={handleStartSunday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={props.endSunday}
                      value={props.endSunday}
                      type="text"
                      onChange={handleEndSunday}
                    ></FormControl>
                  </FormGroup>
                </div>
                <div className="submit_button">
                  <Button className="actual_button" onClick={handleSaveButton}>
                    Save
                  </Button>
                  <div></div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;
