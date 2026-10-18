import React from 'react';
import styles from './experience.module.css';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const experiencesData: ExperienceItem[] = [
{
  id: 1,
  role: 'Quality Assurance (QA)',
  company: 'Spread',
  period: 'Jan 2026 - Presente',
  description: 'Desenvolvimento e manutenção de testes automatizados para aplicações Web e APIs utilizando Java e JavaScript. Atuação em testes de UI com Selenium, Cucumber, JUnit e Cypress; testes de API com RestAssured e Postman; documentação e gestão de bugs com ALM Octane; e estruturação de cenários de teste utilizando Gherkin e a abordagem BDD.',
  technologies: [
    'Java',
    'JavaScript',
    'Selenium',
    'Cucumber',
    'JUnit',
    'Cypress',
    'RestAssured',
    'Postman',
    'ALM Octane',
    'Gherkin',
    'BDD',
    'Testes Automatizados',
  ],
},
];

export default function Experience() {
  return (
        <div className={styles.container}>

      <div className="areaTitulo">
        <h1 className="titulo">EXPERIÊNCIA</h1>
      </div>
      <div className={styles.areaTimeline}>
      <div className={styles.timeline}>
        {experiencesData.map((exp) => (
          <div key={exp.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <h3 className={styles.cargo}>{exp.role}</h3>
                <h4 className={styles.empresa}>{exp.company}</h4>
              </div>
              <span className={styles.periodo}>{exp.period}</span>
            </div>
            
            <p className={styles.descricao}>{exp.description}</p>
            
            <div className={styles.techContainer}>
              {exp.technologies.map((tech) => (
                <span key={tech} className={styles.techBadge}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
          </div>
  );
}