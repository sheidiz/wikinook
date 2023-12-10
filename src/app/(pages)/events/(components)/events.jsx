import React from "react";
import { motion } from "framer-motion";


export default function Events({ events }) {
  if (!events) {
    return
  }
  return (
    events.map((e, index) => {
      const { event, day, url } = e;
      return (
        <React.Fragment key={index}>
          <div className="border pb-3 border-gray-300 text-gray-400 rounded h-auto">
            <p className="p-3 font-bold text-lg">{day}</p>
            <hr />
            <p className="p-3 ">{event}</p>
            <a className="p-3 text-lightgreen" href={url} target="_blank">+
              <span className="underline">More Info</span>
            </a>
          </div>
        </React.Fragment>
      )
    })
  )
}
