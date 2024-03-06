"use client"

import React from 'react';
import styles from './styles.module.css'; // Убедитесь, что вы создали соответствующий CSS-модуль
import Image from 'next/image';
import { Project } from '@/app/data/projects';
import Link from 'next/link';
import { useState } from 'react';

interface ProjectCardProps {
    project: Project;
  }

  export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [showIframe, setShowIframe] = useState(false);


    const toggleIframe = () => {
      setShowIframe(true);
  };

  const toggleIframeClose = () => {
    setShowIframe(false);
};




  return (
    <div className={styles.card}>
        <div className={styles.cardTop}>
              <h2 className={styles.cardTitle}>{project.title}</h2>
              <ul className={styles.tagList}>
                {project.tags.map(tag => (
                  <li key={tag} className={styles.tag}>{tag}</li>
                ))}
              </ul>
        </div>
      <Image  width={500}  height={250} src={project.image} alt={project.title} className={styles.v} />
      <div className={styles.cardContent}>
        <p className={styles.cardDescription}>{project.description}</p>
        <div className={styles.cardBottom}>
          <div className={styles.links}>
             <Link  
                  target="_blank"
                  href="https://github.com/mokhammad-kodehode?tab=repositories" 
                  className={styles.visitButton}
                  > 
                    GitHub 
              </Link>
             <Link  
                  target="_blank"
                  href={project.link} 
                  className={styles.visitButton}
                  > 
                    Visit Page 
              </Link>
          </div>
              <button 
                onClick={() => toggleIframe()} 
                className={styles.PreviewButton}>
                  Preview
              </button>
                {showIframe && (
                  <div className={styles.iframeSreen}>
                      <iframe src="https://re-noise-my.vercel.app/soundPage" 
                              className={styles.iframe}></iframe>
                              <button 
                               onClick={() => toggleIframeClose()}
                              className={styles.closeButton}
                              > X
                              </button>
                  </div>
              )}
        </div>
      </div>
    </div>
  );
};

