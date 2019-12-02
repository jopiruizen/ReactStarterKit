import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import styles from './styles';

const useStyles = makeStyles(styles);

function Menu (props) {
    const {
        onUsersClick,
        onCompanyClick,
    } = props;
    const classes = useStyles();
    
    return (
        <Grid xs={12}>
            <Button  variant="outlined" color="primary" onClick={onUsersClick}>
                Show Users
            </Button>
            <Button variant="outlined" color="primary" onClick={onCompanyClick}>
                Show Companies
            </Button>
        </Grid>
    )
}

Menu.propTypes = {
    onUsersClick: PropTypes.func,
    onCompanyClick: PropTypes.func,
};
  
Menu.defaultProps = {
    onUsersClick: () => {},
    onCompanyClick: () => {},
};

export default Menu;