import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

import Counter from "./Counter";

function Readme() {
  return (
    <div className="readme">
      <Counter limit={3} />
    </div>
  );
}

export default Readme;
