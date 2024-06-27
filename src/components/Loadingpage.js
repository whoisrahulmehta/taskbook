import { faBookOpenReader, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Loadingpage() {
  return (
    <>
      <div className="Loading">
        <p className="logo">
          <FontAwesomeIcon icon={faBookOpenReader} />
        </p>
        <p className="logo">
          TASKB
          <b>
            <FontAwesomeIcon icon={faEye} />
            <FontAwesomeIcon icon={faEye} />
          </b>
          K
        </p>
      </div>
    </>
  );
}

export default Loadingpage;
