import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


import styles from './styles';
const useStyles = makeStyles(styles);

function Footer(props) {
    const classes = useStyles();
    return (
        <Grid container className={classes.footer} justify="center">
            <Grid item xs={3} className={classes.leftContent}> Footer Here!</Grid>
        </Grid>
    )
}
export default Footer;