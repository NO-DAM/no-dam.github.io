import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import { FaPlay, FaCode } from 'react-icons/fa';

import { ThemeContext } from '../../contexts/ThemeContext';

import pubImgBlack from '../../assets/svg/publication/pubImgBlack.svg'
import pubImgWhite from '../../assets/svg/publication/pubImgWhite.svg'

import './Publication'

function PublicationCard({ id, title, journal }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        publicationCard: {
            backgroundColor: theme.primary30,
            "&:hover": {
                backgroundColor: theme.primary50,
            },
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div key={id} className={`publication-card ${classes.publicationCard}`} >
                <div className="educard-img" style={{ backgroundColor: theme.primary }}>
                    <img src={theme.type === 'light' ? pubImgBlack : pubImgWhite} alt="" />
                </div>
                <p
                    className='publication--desc'
                    style={{
                        background: theme.primary,
                        color: theme.tertiary,
                    }}
                >
                    <ul>
                        NurViD is a large video dataset with expert-level annotation for nursing procedure activity understanding. NurViD consists of over 1.5k videos totaling 144 hours. Notably, it encompasses 51 distinct nursing procedures and 177 action steps.
                    </ul>
                </p>
                <div className="publication-details">
                    {/* <h6 style={{ color: theme.primary }}>{startYear}-{endYear}</h6> */}
                    <h4 style={{ color: theme.tertiary }}>{title}</h4>
                    <h5 style={{ color: theme.tertiary80 }}>{journal}</h5>
                </div>
            </div>
        </Fade>
    )
}

export default PublicationCard
