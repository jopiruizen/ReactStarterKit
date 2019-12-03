import  { useState, useEffect, useReducer } from 'react';
import { useSelector, useDispatch  } from 'react-redux';

const Titles = {
    REGISTERED_USERS: 'Registered Users',
    COMPANIES: 'Companies',
};

const reducerMapping = {
    itemRenderer: (state, action) => ({...state, itemRenderer: action.itemRenderer}),
    dataSource: (state, action) => ({...state, itemRenderer: action.dataSource}),
    title: (state, action) => ({...state, title: action.title}),
    all: (state, action) => ({
        ...state, 
        title: action.title,
        dataSource: action.dataSource,
        itemRenderer: action.itemRenderer,
    }),
}

const reducer = (state, action) => {
    if (action.type && reducerMapping[action.type]) {
        return reducerMapping[action.type](state,action);
    }
    return state;
}; 

function useExampleList ( userItemRenderer, companyItemRenderer) {

    const users = useSelector(state => state.examples.users);
    const companies = useSelector(state => state.examples.companies);
    const dispatch = useDispatch();

    const {
        getUsers,
        getCompanies,
    } = dispatch.examples;

    const defaultState =  {
        dataSource: [],
        title: Titles.REGISTERED_USERS,
        itemRenderer: { renderer: userItemRenderer },
    }
    const [reducedState , reducerDispatch ] = useReducer(reducer, defaultState);
    /*
    const [itemRenderer, setItemRenderer] = useState({renderer:userItemRenderer});
    const [dataSource, setDataSource] = useState(users);
    const [title, setTitle] = useState(Titles.REGISTERED_USERS);
    */

    useEffect(()=>{
        console.log("USERS USE EFFECT()");
        /*
        setDataSource(users);
        setItemRenderer( {renderer:userItemRenderer});
        setTitle(Titles.REGISTERED_USERS);
        */
       console.log("users Changes...");
       reducerDispatch({
           type: 'all',
           dataSource: users,
           title: Titles.REGISTERED_USERS,
           itemRenderer: { renderer: userItemRenderer },
       });
    }, [users, userItemRenderer]);

    useEffect(()=>{
        console.log("COMPANIES USE EFFECT.. USE EFFECT()");
        /*
        setDataSource(companies);
        setItemRenderer({renderer:companyItemRenderer});
        setTitle(Titles.COMPANIES);
        */
       reducerDispatch({
            type: 'all',
            dataSource: companies,
            title: Titles.COMPANIES,
            itemRenderer: { renderer: companyItemRenderer },
        });
    }, [companies, companyItemRenderer]);

    useEffect(()=>{
      //  getUsers();
    }, []);

    return {
        ...reducedState,
        getUsers,
        getCompanies,
    };
}


export default useExampleList;