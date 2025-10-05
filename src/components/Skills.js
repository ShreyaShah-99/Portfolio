import React from 'react';
import { SkillCard } from './Card';

const Skills = () => {
  const skills = [
    { name: 'ReactJS', icon: 'fab fa-react' },
    { name: 'JavaScript', icon: 'fab fa-js-square' },
    { name: 'TailwindCSS', icon: 'fas fa-palette' },
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'AWS', icon: 'fab fa-aws' },
    { name: 'Responsive Design', icon: 'fas fa-mobile-alt' }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="section-title fade-in">Skills & Expertise</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => <SkillCard key={index} skill={skill} index={index} />)}
          </div>
          <div className="fade-in flex justify-center items-center">
            <img 
              src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHc4dGZkMzBkZGNkNWJkZGNkNWJkZGNkNWJkZGNkNWJkZGNkNWJkZGNkNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif" 
              alt="Programming skills" 
              className="animated-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;