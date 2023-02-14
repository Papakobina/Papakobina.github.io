import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import CountUp from "react-countup";
import "./StatsComponent.css"
import ReactVisibilitySensor from "react-visibility-sensor";

function StatsComponent({ className, ...rest }) {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <>
      <div className="counter">
        <div className="Year founded">
            <CountUp {...rest} start={viewPortEntered ? null : 0} end={2009}>
                    {({ countUpRef }) => {
                    return (
                        <ReactVisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                            if (isVisible) {
                            setViewPortEntered(true);
                            }
                        }}
                        delayedCall
                        >
                    <span className="number" ref={countUpRef} />
                    </ReactVisibilitySensor>
                    );
                    }}
            </CountUp>
            <h2>Year founded</h2>
        </div>
        <div className="Team members">
            <CountUp {...rest} start={viewPortEntered ? null : 0} end={18}>
                    {({ countUpRef }) => {
                    return (
                        <ReactVisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                            if (isVisible) {
                            setViewPortEntered(true);
                            }
                        }}
                        delayedCall
                        >
                    <span className="number" ref={countUpRef} />
                    </ReactVisibilitySensor>
                    );
                    }}
            </CountUp>
            <h2>Team members</h2>
        </div>
        <div className="Countries Involved">
            <CountUp {...rest} start={viewPortEntered ? null : 0} end={5}>
                    {({ countUpRef }) => {
                    return (
                        <ReactVisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                            if (isVisible) {
                            setViewPortEntered(true);
                            }
                        }}
                        delayedCall
                        >
                    <span className="number" ref={countUpRef} />
                    </ReactVisibilitySensor>
                    );
                    }}
            </CountUp>
            <h2>Countries Involved</h2>
        </div>
        <div className="Number of subsidiaries">
            <CountUp {...rest} start={viewPortEntered ? null : 0} end={3}>
                    {({ countUpRef }) => {
                    return (
                        <ReactVisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                            if (isVisible) {
                            setViewPortEntered(true);
                            }
                        }}
                        delayedCall
                        >
                    <span className="number" ref={countUpRef} />
                    </ReactVisibilitySensor>
                    );
                    }}
            </CountUp>
            <h2>Number of subsidiaries</h2>
        </div>
      </div>
    </>
  );
}

export default StatsComponent;

