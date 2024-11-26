import React, { useState } from "react";
import Parallax from "./components/(utils)/Parallax";
import image from "./assets/yoann-boyer-VZSIm_cNAL8-unsplash.jpg";
import map from "./assets/bestmap.png";

const Contant = () => {

  const [subject, setSubject] = useState("")
  const [content, setContent] = useState("")
  const [email, setEmail] = useState("")

  return (
    <Parallax imageUrl={image}>
      <div className="flex item-end justify-center">
        <div className="flex items-center  justify-center  w-[70%] ">
          <div className="flex flex-col space-y-4"> 
          <p>Telefon: 999 999 99</p>
          <p>E-post: HavSkatt@gmail.com</p>
          <p>Adresse: Fiskebryggen 12, 0150 Oslo.</p>
          <img src={map} />
          <div>
            <p>Emne:</p>
            <input className="w-full" placeholder="Emne"
            value = {subject}
            onChange={e => setSubject(e.target.value)}
            />
          </div>
          <div>
            <p>(Innhold:)</p>
            <textarea className="w-full h-20" placeholder="Innhold"
            value = {content}
            onChange={e => setContent(e.target.value)}/>
          </div>
          <div>
            <p>E-post:</p>
            <input className="w-full " placeholder="Din epost"
            value = {email}
            onChange={e => setEmail(e.target.value)}/>
          </div>
          <div className="w-full flex items-center justify-center pt-8">
              <div className="bg-[#4A90E2] p-2 flex items-center justify-center w-[66%]">
                <p className="font-bold text-lg">Send</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Contant;
