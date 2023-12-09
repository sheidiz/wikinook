import React, { useState } from "react";
import { TbFilter } from "react-icons/tb";

export default function Filter({ title, content, setFilter, selected, setCurrentPage }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="p-1 md:p-3 border first:rounded-t-md last:rounded-b-md even:border-y-0">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="mb-2 flex justify-between w-full text-md md:text-lg transition focus:text-red-300 focus:font-bold"
      >
        <span><TbFilter className="inline-block pb-1 me-2 font-light" />{title}</span>
        {accordionOpen ? <span>-</span> : <span>+</span>}
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ease-out text-slate-500 text-sm ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`
      }>
        <div className="overflow-hidden flex flex-row flex-wrap gap-2">
          {content.map((item, index) => (
            <React.Fragment key={index}>
              <input
                className="hidden"
                type="radio"
                name={title}
                id={`${title}-${index}`}
              />
              <label
                onClick={(x) => {
                  (item == selected ? setFilter('') : setFilter(item));
                  setCurrentPage(0);
                }}
                className={`block p-1 border-2 rounded-md ${item == selected ? 'border-red-200' : ''}`}
                htmlFor={`${title}-${index}`}
              >
                {item}
              </label>
            </React.Fragment>

          ))}
        </div>
      </div>
    </div>
  )
}
