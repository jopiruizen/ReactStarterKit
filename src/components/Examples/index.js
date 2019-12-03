import React, { memo, useEffect } from 'react'; 

import MuiGrid from '@material-ui/core/Grid';
import { spacing } from '@material-ui/system';
import { styled } from '@material-ui/styles';

 
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getUsersState } from './models/selectors';

import makeStyles from '@material-ui/styles/makeStyles';
import styles from './styles';
import Menu from './Menu';
import Footer from '../commons/Footer';
import List from '../commons/List';

const Grid = styled(MuiGrid)(spacing);
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
        <div className={classes.fullView}>
            <Grid container xs={12} className={classes.fullContent}>
                <Grid container item xs={3} 
                    className={classes.sideContent}
                    alignContent='flex-start' 
                    p={2}
                    >
                    <Grid container item xs={12} className={classes.menu}>
                        <Grid item xs={12} className={classes.menuTitle}> Select A List! </Grid>
                        <Menu 
                            onUsersClick={handleUsersClick}
                            onCompanyClick={handleCompaniesClick}
                        />
                    </Grid>
                </Grid>

                <Grid container item xs={8}>
                    <List />
                </Grid>
            </Grid>
            
            <Footer />
        </div>
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

