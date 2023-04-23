import React, { useRef } from "react";
import './saveLink.css'

function SaveLink() {
  const referencia = useRef(null);

  const copy = () => {
    if (referencia.current) {
      referencia.current.select();
      document.execCommand("copy");
    }
  };

  return (
    <div className="container_copy">
      <button className="btn_copy" onClick={ copy }>Link API</button>
      <input
        className="input_copy"
        type="text"
        value="https://api-trybers.vercel.app/api/v1/trybers"
        readOnly
        ref={referencia}
      />
    </div>
  );
}

export default SaveLink;
