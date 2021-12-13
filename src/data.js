import React from 'react'
import { FaBehance, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home'
  },
  {
    id: 2,
    url: '/about',
    text: 'about'
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects'
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact'
  },
  {
    id: 5,
    url: '/profile',
    text: 'profile'
  }
]

export const social = [
  {
    id: 1,
    url: 'https://www.github.com/samirrodrigues',
    icon: <FaGithub />
  },
  {
    id: 2,
    url: 'https://www.github.com/samirrodrigues',
    icon: <FaInstagram />
  },
  {
    id: 3,
    url: 'https://www.github.com/samirrodrigues',
    icon: <FaLinkedin />
  },
  {
    id: 4,
    url: 'https://www.github.com/samirrodrigues',
    icon: <FaBehance />
  }
]
