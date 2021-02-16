import React, { useEffect, useState } from "react";

const InputBar = ({onSubmit}) => {
  const [term, setTerm] = useState("");

  useEffect(() => {
   onSubmit(term);
  }, [term, onSubmit]);

  const onSubmitform = (e) => {
    e.preventDefault();
  };

  return (
    <div className="ui red segment">
      <form className="ui form" onSubmit={(e) => onSubmitform(e)}>
        <div className="field">
          <label>Crea il tuo Qrcode</label>
          <input
            placeholder="text o http://www.google.it"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default InputBar;
