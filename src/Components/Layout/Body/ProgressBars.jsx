import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const skills = [
    {
      name: "HTML",
      percentage: 93,
    },
    {
      name: "CSS",
      percentage: 85,
    },
    {
      name: "Tailwind",
      percentage: 90,
    },
    {
      name: "Javascript",
      percentage: 80,
    },
    {
      name: "React",
      percentage: 90,
    },
    {
      name: "React Native",
      percentage: 90,
    },
    {
      name: "Git",
      percentage: 75,
    },
    {
      name: "Redux",
      percentage: 75,
    },
  ]



const ProgressBars = () => {
  return (
    <div className='flex flex-row text-base flex-wrap justify-center max-w-[1000px] mx-auto'>
      {skills.map((skill, index) => (
        <div key={index} className={`w-1/4 px-2 text-center ${skill.name.length > 8 ? 'long-name' : ''}`}>
          <CircularProgressbar
            className='w-full text-sm'
            value={skill.percentage}
            text={`${skill.name}`}
            styles={{
              text: { fontSize: '14px' }, 
            }}
          />
        </div>
      ))}
    </div>
  )
}

export default ProgressBars
