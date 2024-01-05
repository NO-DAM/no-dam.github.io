import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Education.css'
import EducationCard from './EducationCard';

import './Publication.css'
import PublicationCard from './PublicationCard'

import { publicationData } from '../../data/publicationData'
import { educationData } from '../../data/educationData'


function Education() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="education" id="resume" style={{ backgroundColor: theme.secondary }}>

            <div className="education-body">
                <div className="education-description">
                    <h1 style={{ color: theme.primary }}>Education</h1>
                    {educationData.map(edu => (
                        <EducationCard
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                        />
                    ))}

                    <div className="publication" style={{ backgroundColor: theme.secondary }}>

                        <div className="publication-body">
                            <div className="publication-description">
                                <h1 style={{ color: theme.primary }}>Publication</h1>
                                {publicationData.map(pub => (
                                    <PublicationCard
                                        key={pub.id}
                                        id={pub.id}
                                        title={pub.title}
                                        journal={pub.journal}
                                    />
                                ))}
                            </div>
                        </div></div>
                </div>

                <div className="education-image">
                    <img src={theme.eduimg} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Education
