import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import { FaPlay, FaCode } from 'react-icons/fa';

import { ThemeContext } from '../../contexts/ThemeContext';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg'
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg'
import './Education.css'

function EducationCard({ id, institution, course, startYear, endYear }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        educationCard: {
            backgroundColor: theme.primary30,
            "&:hover": {
                backgroundColor: theme.primary50,
            },
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div key={id} className={`education-card ${classes.educationCard}`} >
                <div className="educard-img" style={{ backgroundColor: theme.primary }}>
                    <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" />
                </div>
                <p
                    className='education--desc'
                    style={{
                        background: theme.primary,
                        color: theme.tertiary,
                    }}
                >
                    <ul>
                        <p>Award: College of Letters & Science Dean’s List</p>
                        <p>Highlighted Courses:</p>
                        <ul>
                            <li>Deep Learning for Computer Vision</li>
                            <li>Computer Graphics</li>
                            <li>Foundation of Mobile Systems & Applications</li>
                        </ul>
                    </ul>
                </p>
                <div className="education-details">
                    <h6 style={{ color: theme.primary }}>{startYear}-{endYear}</h6>
                    <h4 style={{ color: theme.tertiary }}>{institution}</h4>
                    <h5 style={{ color: theme.tertiary80 }}>{course}</h5>
                </div>
            </div>
        </Fade>
    )
}

export default EducationCard
