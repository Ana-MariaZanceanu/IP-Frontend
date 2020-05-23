import React, { useState } from "react";
import * as api from "../api";
import { FormGroup, FormControl, Form, Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

const Schedule = ({ data }) => {
  const [startMonday, setStartMonday] = useState(
    data
      ? data.schedule
        ? data.schedule[0]
          ? data.schedule[0].startHour
          : 0
        : 0
      : 0
  );
  const [startTuesday, setStartTuesday] = useState(
    data
      ? data.schedule
        ? data.schedule[1]
          ? data.schedule[1].startHour
          : 0
        : 0
      : 0
  );
  const [startWednesday, setStartWednesday] = useState(
    data
      ? data.schedule
        ? data.schedule[2]
          ? data.schedule[2].startHour
          : 0
        : 0
      : 0
  );
  const [startThursday, setStartThursday] = useState(
    data
      ? data.schedule
        ? data.schedule[3]
          ? data.schedule[3].startHour
          : 0
        : 0
      : 0
  );
  const [startFriday, setStartFriday] = useState(
    data
      ? data.schedule
        ? data.schedule[4]
          ? data.schedule[4].startHour
          : 0
        : 0
      : 0
  );
  const [startSaturday, setStartSaturday] = useState(
    data
      ? data.schedule
        ? data.schedule[5]
          ? data.schedule[5].startHour
          : 0
        : 0
      : 0
  );
  const [startSunday, setStartSunday] = useState(
    data
      ? data.schedule
        ? data.schedule[6]
          ? data.schedule[6].startHour
          : 0
        : 0
      : 0
  );

  const [endMonday, setEndMonday] = useState(
    data
      ? data.schedule
        ? data.schedule[0]
          ? data.schedule[0].endHour
          : 0
        : 0
      : 0
  );
  const [endTuesday, setEndTuesday] = useState(
    data
      ? data.schedule
        ? data.schedule[1]
          ? data.schedule[1].endHour
          : 0
        : 0
      : 0
  );
  const [endWednesday, setEndWednesday] = useState(
    data
      ? data.schedule
        ? data.schedule[2]
          ? data.schedule[2].endHour
          : 0
        : 0
      : 0
  );
  const [endThursday, setEndThursday] = useState(
    data
      ? data.schedule
        ? data.schedule[3]
          ? data.schedule[3].endHour
          : 0
        : 0
      : 0
  );
  const [endFriday, setEndFriday] = useState(
    data
      ? data.schedule
        ? data.schedule[4]
          ? data.schedule[4].endHour
          : 0
        : 0
      : 0
  );
  const [endSaturday, setEndSaturday] = useState(
    data
      ? data.schedule
        ? data.schedule[5]
          ? data.schedule[5].endHour
          : 0
        : 0
      : 0
  );
  const [endSunday, setEndSunday] = useState(
    data
      ? data.schedule
        ? data.schedule[6]
          ? data.schedule[6].endHour
          : 0
        : 0
      : 0
  );
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
    setStartMonday(event.target.value);
  };

  const handleEndMonday = (event) => {
    if (!isTimeFormat(event.target.value)) {
      setSuccesTime(false);
    } else setSuccesTime(true);
    setEndMonday(event.target.value);
  };

  const handleStartTuesday = (event) => {
    if (!isTimeFormat(event.target.value)) {
      setSuccesTime(false);
    } else setSuccesTime(true);
    setStartTuesday(event.target.value);
  };
  const handleEndTuesday = (event) => {
    if (!isTimeFormat(event.target.value)) {
      setSuccesTime(false);
    } else setSuccesTime(true);
    setEndTuesday(event.target.value);
  };
  const handleStartWednesday = (event) => {
    if (!isTimeFormat(event.target.value)) {
      setSuccesTime(false);
    } else setSuccesTime(true);
    setStartWednesday(event.target.value);
  };
  const handleEndWednesday = (event) => {
    if (!isTimeFormat(event.target.value)) {
      setSuccesTime(false);
    } else setSuccesTime(true);
    setEndWednesday(event.target.value);
  };
  const handleStartThursday = (event) => {
    if (!isTimeFormat(event.target.value)) {
      setSuccesTime(false);
    } else setSuccesTime(true);
    setStartThursday(event.target.value);
  };
  const handleEndThursday = (event) => {
    if (!isTimeFormat(event.target.value)) {
      setSuccesTime(false);
    } else setSuccesTime(true);
    setEndThursday(event.target.value);
  };
  const handleStartFriday = (event) => {
    if (!isTimeFormat(event.target.value)) {
      setSuccesTime(false);
    } else setSuccesTime(true);
    setStartFriday(event.target.value);
  };
  const handleEndFriday = (event) => {
    if (!isTimeFormat(event.target.value)) {
      setSuccesTime(false);
    } else setSuccesTime(true);
    setEndFriday(event.target.value);
  };
  const handleStartSaturday = (event) => {
    if (!isTimeFormat(event.target.value)) {
      setSuccesTime(false);
    } else setSuccesTime(true);
    setStartSaturday(event.target.value);
  };
  const handleEndSaturday = (event) => {
    if (!isTimeFormat(event.target.value)) {
      setSuccesTime(false);
    } else setSuccesTime(true);
    setEndSaturday(event.target.value);
  };
  const handleStartSunday = (event) => {
    if (!isTimeFormat(event.target.value)) {
      setSuccesTime(false);
    } else setSuccesTime(true);
    setStartSunday(event.target.value);
  };
  const handleEndSunday = (event) => {
    if (!isTimeFormat(event.target.value)) {
      setSuccesTime(false);
    } else setSuccesTime(true);
    setEndSunday(event.target.value);
  };

  const handleSaveButton = async (event) => {
    const newData = {
      schedule: [
        {
          day: "luni",
          startHour: startMonday,
          endHour: endMonday,
        },
        {
          day: "marti",
          startHour: startTuesday,
          endHour: endTuesday,
        },
        {
          day: "miercuri",
          startHour: startWednesday,
          endHour: endWednesday,
        },
        {
          day: "joi",
          startHour: startThursday,
          endHour: endThursday,
        },
        {
          day: "vineri",
          startHour: startFriday,
          endHour: endFriday,
        },
        {
          day: "sambata",
          startHour: startSaturday,
          endHour: endSaturday,
        },
        {
          day: "duminica",
          startHour: startSunday,
          endHour: endSunday,
        },
      ],
    };
    setLoading(true);
    try {
      let answer = await api.profile(newData);
      if (answer.success === true) {
        setLoading(false);
        window.location.reload(true);
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
                      placeholder={startMonday}
                      value={startMonday}
                      type="text"
                      onChange={handleStartMonday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={endMonday}
                      value={endMonday}
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
                      placeholder={startTuesday}
                      value={startTuesday}
                      type="text"
                      onChange={handleStartTuesday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={endTuesday}
                      value={endTuesday}
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
                      placeholder={startWednesday}
                      value={startWednesday}
                      type="text"
                      onChange={handleStartWednesday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={endWednesday}
                      value={endWednesday}
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
                      placeholder={startThursday}
                      value={startThursday}
                      type="text"
                      onChange={handleStartThursday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={endThursday}
                      value={endThursday}
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
                      placeholder={startFriday}
                      value={startFriday}
                      type="text"
                      onChange={handleStartFriday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={endFriday}
                      value={endFriday}
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
                      placeholder={startSaturday}
                      value={startSaturday}
                      type="text"
                      onChange={handleStartSaturday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={startSaturday}
                      value={startSaturday}
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
                      placeholder={startSunday}
                      value={startSunday}
                      type="text"
                      onChange={handleStartSunday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={endSunday}
                      value={endSunday}
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
                      placeholder={startMonday}
                      value={startMonday}
                      type="text"
                      onChange={handleStartMonday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={endMonday}
                      value={endMonday}
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
                      placeholder={startTuesday}
                      value={startTuesday}
                      type="text"
                      onChange={handleStartTuesday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={endTuesday}
                      value={endTuesday}
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
                      placeholder={startWednesday}
                      value={startWednesday}
                      type="text"
                      onChange={handleStartWednesday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={endWednesday}
                      value={endWednesday}
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
                      placeholder={startThursday}
                      value={startThursday}
                      type="text"
                      onChange={handleStartThursday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={endThursday}
                      value={endThursday}
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
                      placeholder={startFriday}
                      value={startFriday}
                      type="text"
                      onChange={handleStartFriday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={endFriday}
                      value={endFriday}
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
                      placeholder={startSaturday}
                      value={startSaturday}
                      type="text"
                      onChange={handleStartSaturday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={startSaturday}
                      value={startSaturday}
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
                      placeholder={startSunday}
                      value={startSunday}
                      type="text"
                      onChange={handleStartSunday}
                    ></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      placeholder={endSunday}
                      value={endSunday}
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
