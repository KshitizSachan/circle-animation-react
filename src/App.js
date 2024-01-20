import React, { useEffect } from 'react';
import './SphereComponent.css';

const TextSphere = () => {
  useEffect(() => {
    const Texts = [
      'HTML', 'CSS', 'JAVASCRIPT',
      'jQuery', 'Bootstrap', 'REACT',
      'Python', 'Java', 'C', 'Javascript',
      'DJANGO', 'NODEJS', 'MONGODB',
      'EXPRESS', 'MYSQL', 'JQUERY', 'Tailwind',
      'Cyber-security', 'Kali-Linux', 'Bug-Bounty'
    ];

    // Dynamically create a script element to load TagCloud
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js';
    script.async = true;

    script.onload = () => {
      // Callback when the script is loaded
      const tagCloud = window.TagCloud('.Sphere', Texts, {
        radius: 350,
        maxSpeed: 'normal',
        initSpeed: 'fast',
        direction: 135,
        keep: true
      });

      const color = '#FF5733';
      document.querySelector('.Sphere').style.color = color;

      // Cleanup effect when the component unmounts
      return () => {
        tagCloud.destroy();
      };
    };

    // Append the script element to the document body
    document.body.appendChild(script);

  }, []);

  return (
    <div>
      <span className="Sphere"></span>
    </div>
  );
};

export default TextSphere;
