import React from 'react'
import '../Styles/Socialmedia.css';
import { SocialIcon } from 'react-social-icons'

export default function Socialmedia() {
  return (
    <div>
      <div class="icon-bar">
        <a href="#" target="_blank" class="facebook">
          <SocialIcon url="https://facebook.com" />
        </a>
        <a href="#" target="_blank" class="twitter">
          <SocialIcon url="https://twitter.com" />
        </a>
        <a href="#" target="_blank" class="insta">
          <SocialIcon url="https://instagram.com" />
        </a>
        <a href="#" target="_blank" class="linkedin">
          <SocialIcon url="https://linkedin.com" />
        </a>
        <a href="#" target="_blank" class="youtube">
          <SocialIcon url="https://youtube.com" />
        </a>
      </div>
    </div>
  )
}




