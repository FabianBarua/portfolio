import {
	IDevToolsElement,
	IExperienceCard,
	IProjectCard,
} from '../models/global-interface.ts'
import { v4 as uuid } from 'uuid'

import zomo_bg from '../../../assets/zomoBG.webp'
import zomo from '../../../assets/zomo.svg'

import quanta_bg from '../../../assets/quantaBG.webp'
import quanta from '../../../assets/quanta.svg'

import alphaplay_bg from '../../../assets/esperanza_bg.webp'
import alphaplay from '../../../assets/alpha.png'

import freelance_bg from '../../../assets/freelance_bg.webp'


import zomoIG from '../../../assets/zomoIG.webp'
import quantaWeb from '../../../assets/quantaWeb.webp'
import alphaplayWeb from '../../../assets/alphaplayWeb.webp'


export const Projects: IProjectCard[] = [
	{
		id: uuid(),
		project_name: 'Zomo Paraguay',
		description: 'projects-section.projects.zomo',
		screenShot: zomoIG,
		demoLink: 'https://www.instagram.com/zomoofficial/',
		className: 'lg:row-span-5 xl:col-span-4 h-full',
		index: 1,
		technologies: ['Photoshop', 'After effects', 'Premiere Pro'],
	},
	{
		id: uuid(),
		project_name: 'Quanta',
		description: 'projects-section.projects.quanta',
		screenShot: quantaWeb,
		demoLink: 'https://quanta.com.py/',
		className: 'lg:row-span-2 xl:col-span-4',
		index: 2,
		technologies: ['Photoshop', 'Figma', 'JS', 'CSS', 'Video Edits', 'Corel'],
	},
	{
		id: uuid(),
		project_name: 'Alphaplay',
		description: 'projects-section.projects.alphaplay',
		screenShot: alphaplayWeb,
		demoLink: 'https://alphaplay.tv',
		className: 'lg:row-span-3 xl:col-span-4',
		isPrivate: false,
		index: 3,
		technologies: ['Photoshop', 'Blender', 'After Effects', 'Illustrator'],
	},

]
export const Experiences: IExperienceCard[] = [
	{
		id: uuid(),
		company_logo: zomo,
		company_name: 'Zomo',
		position_name: 'Content Creator',
		dates: 'experience-section.companies.zomo.dates',
		url_site: 'https://www.zomoofficial.com/',
		background_url: zomo_bg,
	},
	{
		id: uuid(),
		company_logo: quanta,
		company_name: 'Quanta',
		position_name: 'Content Creator mid',
		dates: 'experience-section.companies.quanta.dates',
		url_site: 'https://quanta.com.py/',
		background_url: quanta_bg,
	},
	{
		id: uuid(),
		company_logo: alphaplay,
		company_name: 'Alphaplay',
		position_name: 'Content Creator Senior',
		dates: 'experience-section.companies.alphaplay.dates',
		url_site: 'https://alphaplay.tv/',
		background_url: alphaplay_bg,
	},

	{
		id: uuid(),
		company_logo: alphaplay,
		company_name: 'Alphasat',
		position_name: 'Content Creator Senior',
		dates: 'experience-section.companies.alphasat.dates',
		url_site: 'https://alphasat.pro/',
		background_url: freelance_bg,
	},

]

export const DevTools: IDevToolsElement[] = [
	{
		id: uuid(),
		name: 'Photoshop',
		icon: '/logos/photoshop.svg',
	},
	{
		id: uuid(),
		name: 'After-Effects',
		icon: '/logos/ae.svg',
	},
	{
		id: uuid(),
		name: 'Premiere-Pro',
		icon: '/logos/premiere.svg',
	},
	{
		id: uuid(),
		name: 'InDesign',
		icon: '/logos/indesign.svg',
	},
	{
		id: uuid(),
		name: 'Canva',
		icon: '/logos/canva.svg',
	},
	{
		id: uuid(),
		name: 'Figma',
		icon: '/logos/figma.svg',
	},
	{
		id: uuid(),
		name: 'Illustrator',
		icon: '/logos/illustrator.svg',
	},
	{
		id: uuid(),
		name: 'Adobe',
		icon: '/logos/adobe.svg',
	},
	{
		id: uuid(),
		name: 'CorelDraw',
		icon: '/logos/corel.svg',
	},
	{
		id: uuid(),
		name: 'Blender',
		icon: '/logos/blender.svg',
	},
]
