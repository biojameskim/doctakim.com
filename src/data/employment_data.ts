import { EmploymentCardType } from "../types/ExperienceTypes"

const employment_data: EmploymentCardType[] = [
  {
    company: 'SciFi Lab @ Cornell',
    website: 'https://www.scifilab.org/',
    role: 'Undergraduate Research Assistant',
    image: "images/logos/cornell_cis_logo.png",
    alt: 'Cornell CIS Logo',
    date: '08/2023 - Present',
    description: 'Research Topics: Machine Learning, AI, Ubiquitous Computing, Human-Computer Interaction.'
  },
  {
    company: 'Southern California Edison',
    website: 'https://edison.com/',
    role: 'Software Engineer Intern',
    image: "images/logos/sce_logo.png",
    alt: 'Southern California Edison Logo',
    date: '05/2023 - 08/2023',
    description: 'Led the development of a user-centric platform for 520K+ solar customers, reducing customer service calls by 22K/month, and pioneered a GPT-based virtual assistant to support 15 million users across 430 Californian cities.'
  },
  {
    company: 'hack4impact',
    website: 'https://cornellh4i.org/',
    role: 'Full Stack Software Engineer',
    image: "images/logos/hack4impact.jpeg",
    alt: 'hack4impact Logo',
    date: '08/2022 - 08/2023',
    description: "Building a platform for the homeless population of Tompkins County to browse for available and affordable housing using MongoDB, Express.js, React, and Node.js."
  },
  {
    company: 'Wazzle',
    website: 'https://wazzle.app',
    role: 'Mobile Development Intern',
    image: "images/logos/wazzle.jpeg",
    alt: 'Wazzle Logo',
    date: '04/2022 - 08/2022',
    description: "Implemented new features and design changes for an iOS application that allows for more meaningful contact management for over 5000 users using Swift and SwiftUI."
  }
]

export default employment_data