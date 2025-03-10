import { FC, useContext } from 'react'
import { ImStack } from 'react-icons/im'
import { MdArrowOutward } from 'react-icons/md'
import { IProjectCard } from '../../../shared/models/global-interface.ts'
import { useHover } from '@uidotdev/usehooks'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { AnalyticsContext } from '../../../shared/context/analytics.tsx'

const ProjectCard: FC<IProjectCard> = ({
  id,
  project_name,
  variation,
  description,
  technologies,
  screenShot,
  demoLink,
  className,
  isPrivate = false,
  index
}) => {
  const [ref, hovering] = useHover()
  const { t } = useTranslation('global')
  const reactGA  = useContext(AnalyticsContext)
  
  const handleClick = ()=>{
    reactGA.event({
      category: "Proyectos",
      action: "click",
      label: variation ? t(project_name) : project_name
    });
  }

  return (
    <motion.a
      key={id}
      href={demoLink}
      target='_blank'
      rel='noreferrer'
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      viewport={{ once: true }}
      className={`relative flex flex-col rounded-3xl bg-white p-6 gap-3 border-2 border-transparent overflow-hidden row-span-1 col-span-8 dark:bg-raisin-black lg:p-8 ${className}`}
      onClick={handleClick}
    >
      <div className='flex flex-col gap-3'>
        <div className='flex items-center gap-3 opacity-50 z-[1]'>
          <ImStack />
          <span className='font-semibold uppercase'>
            {isPrivate
              ? t('projects-section.personal-experience')
              : t('projects-section.work-experience')}
          </span>
        </div>
        {demoLink && (
          <button
            className='p-2 border-2 border-dusky dark:border-moonlit opacity-40 rounded-full absolute top-6 right-6 lg:top-8 lg:right-8 cursor-pointer hover:bg-dusky hover:text-white dark:hover:bg-moonlit dark:hover:text-dusky transition-colors duration-150 z-[1]'
            title={`${
              variation ? t(project_name) : project_name
            } demo`}
          >
            <MdArrowOutward />
          </button>
        )}
        <div className='flex flex-col gap-1 z-[1]'>
          <h3 className='text-2xl font-bold'>{
            variation ? t(project_name) : project_name
          }</h3>
          <p className='text-base opacity-70'>{t(description)}</p>
          <div className='flex items-center gap-2 opacity-90 font-medium'>
            {technologies.map(tech => (
              <span key={tech} className='text-sm'>
                {tech}
              </span>
            ))}
          </div>
        </div>
        <img
          className={`absolute  w-full top-48 rounded-2xl object-cover z-[1] transition-all duration-300 lg:-right-12  lg:top-48 ${
            hovering && 'scale-[1.025] '
          }`}
          src={screenShot}
          alt={ variation ? t(project_name) : project_name}
          title='Project screenshot'
        />
      </div>
    </motion.a>
  )
}

export default ProjectCard
