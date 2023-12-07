import React from "react";
import { FaHeart, FaLinkedin, FaSquareGithub } from "react-icons/fa6"

export default function Footer() {
  return (
    <footer className="bg-red-300 py-5 px-4 flex flex-col md:flex-row justify-between align-middle mt-auto">
			<p className="text-white m-0 text-md">
        Copyright @2023 All rights reserved. | Made with <FaHeart className="inline-block"/> by Sheila Diz 
      </p>
      <div id="socials" className="text-white text-3xl flex">
        <a href="https://github.com/sheidiz" target="_blank"> <FaSquareGithub /> </a>
        <a href="https://www.linkedin.com/in/sheila-abril-diz-308148191/" target="_blank"> <FaLinkedin /> </a>
      </div>
		</footer>
  )
}