import  { Tilt }    from "react-tilt";
import { motion } from 'framer-motion';
import { styles } from '../style';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { Fragment } from "react";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo }) => {
    return(
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="mt-4">
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl "/>
          <div className="absolute insert-0 flex justify-end card-img_hover">
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
        </div>
        <div className=" w-full flex items-center justify-between mt-3">
        <div onClick={() => window.open(source_code_link, "_blank")} className="black-gradient w-10 h-10 roundend-full flex justify-center items-center cursor-pointer">
            <img src={github} alt="github" className="w-1/2 h-1/2 object-contain"/>
        </div>
        <div>
          <button onClick={() => window.open(live_demo, "_blank")} className=" bg-blue-700 roundend-full  flex justify-center  items-center cursor-pointer p-2 hover:bg-slate-700">Live Demo</button>
        </div>
        </div>
        </Tilt>
      </motion.div>
    )
}

const Works = () => {
  return (
    <Fragment>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Latest Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
    </motion.div>
    <div className="w-full flex">
      <motion.p
          variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
      Following is the recent demo projects. They showcase my experience in building real world projects 
      Each code is briefly described with links to code repositories and live demos
      </motion.p>
    </div>
    <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key = {`project-${index}`}
            index={index}
            {...project}

          />
        ))}
    </div>
    </Fragment>
  )
}

export default Works