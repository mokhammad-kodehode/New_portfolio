import React from 'react';
import styles from "./styles.module.css";
import { project, Project } from '../data/projects';
import { ProjectCard } from '../components/project_card/ProjectCard';// ensure this is the correct path to your ProjectCard component

// If your ProjectCard component has default export use default import method without braces
// If your ProjectCard component has named export use the named import method with braces

export default function Projects() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.container}>
          <div className={styles.container_title}>
            <h1 className={styles.title_text}>My Projects</h1>
            <div className={styles.projectsGrid}>
              {project.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}