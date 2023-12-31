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

        <motion.div
          key={index}
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }}
          className="border pb-3 border-gray-300 text-gray-400 rounded h-auto">
          <p className="p-3 font-bold text-lg">{day}</p>
          <hr />
          <p className="p-3 ">{event}</p>
          <a className="p-3 text-lightgreen" href={url} target="_blank">+
            <span className="underline">More Info</span>
          </a>
        </motion.div>

      )
    })
  )
}
