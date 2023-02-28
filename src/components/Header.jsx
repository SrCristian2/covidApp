import React from 'react'

export const Header = () => {
  return (
    <header
        className="text-center text-white p-4 mb-5"
        style={{ backgroundColor: "#1e40af" }}
      >
        <div className="fw-bold fs-1">
          <i className="fa fa-viruses"> Covid-19 Tracker</i>
        </div>
        <p>
          API By
          <a
            href="https://covid19api.com"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            {" "}
            Covid19api.com
          </a>
        </p>
      </header>
  )
}
