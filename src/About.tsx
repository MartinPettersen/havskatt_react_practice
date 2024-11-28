import React from 'react'
import image from "./assets/Gemini_Generated_Image_ekbx5oekbx5oekbx.jpg";
import Parallax from './components/(utils)/Parallax';

const About = () => {
    const texts = [
        "Havets Skatter er en eksklusiv sjømatrestaurant som tilbyr det beste havet har å by på, tilberedt med lidenskap og presisjon. Vi kombinerer ferske råvarer med klassiske og moderne smaker, og våre dyktige kokker sørger for en matopplevelse du sent vil glemme. Enten du vil nyte et herlig måltid med venner, feire en spesiell anledning, eller bare ønsker å oppleve fantastisk sjømat, er vi her for å servere deg.",
        "Åpningstider: 16:00 - 03:00",
        "Vi holder til på:  Fiskebryggen 12, 0150 Oslo.",
    ]

  return (
    <Parallax imageUrl={image} altText="En oppblåsbar flammingo i havet">
        <div className='flex item-end justify-center'>
        <div className='flex items-center  justify-center flex-col space-y-4 w-[70%] '>
        {texts.map((text, i) => (
            <p key={i} className='text-lg'>{text}</p>
        )
        )}
        </div>
    </div>
    </Parallax>
  )
}

export default About