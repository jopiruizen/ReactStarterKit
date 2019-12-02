import React, { memo, useEffect } from 'react'; 
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getUsersState } from './models/selectors';

import makeStyles from '@material-ui/styles/makeStyles';
import styles from './styles';
import Menu from './Menu';

const useStyles = makeStyles(styles);

function Examples(props){
    const {
        users,
        getUsers,
    } = props;

    const classes = useStyles();

    console.log("");
    console.log("");
    console.log("");
    console.log("Examples()...");

    useEffect(()=>{
        getUsers();
    }, []);

    useEffect(()=>{
        console.log("");
        console.log("");
        console.log("");
        console.log("useEffect() users-->");
        console.log(users);
    }, [users]);


    const handleUsersClick = (event) => {
        console.log("handleUsersClick()");
    };

    const handleCompaniesClick = (event) => {
        console.log("handleCompaniesClick");
    }

    return (
        <Grid container>
            <Grid item xs={6} className={classes.content}>
                <div> Select A List! </div>
                <Menu 
                    onUsersClick={handleUsersClick}
                    onCompanyClick={handleCompaniesClick}
                />
            </Grid>
        </Grid>
    )
};


Examples.propTypes = {
    getUsers: PropTypes.func,
};
  
Examples.defaultProps = {
    getUsers: () => {},
};

const mapDispatch = (dispatch) => {
    const {
        examples: {
            getUsers,
        }
    } = dispatch;
    return {
        getUsers,
    }
};

const mapState = (state) => {
    return {
        users: getUsersState(state),
      };
};
 
const enhancers = [
    connect(mapState, mapDispatch),
    memo,
];

export default compose(...enhancers)(Examples);

