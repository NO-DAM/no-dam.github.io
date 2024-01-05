import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Publication.css'
import PublicationCard from './PublicationCard';

import { educationData } from '../../data/educationData'

function Publication() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="publication" id="resume" style={{backgroundColor: theme.secondary}}>
           
            <div className="publication-body">
                <div className="publication-description">
                <h1 style={{color:theme.primary}}>Publication</h1>
                    {educationData.map(edu => (
                        <PublicationCard 
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                        />
                    ))}
                </div>
                <div className="publication-image">
                    <img src={theme.pubimg} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Publication
