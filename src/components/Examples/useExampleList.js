import  { useState, useEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux';

const Titles = {
    REGISTERED_USERS: 'Registered Users',
    COMPANIES: 'Companies',
};

function useExampleList ( userItemRenderer, companyItemRenderer) {

    const users = useSelector(state => state.examples.users);
    const companies = useSelector(state => state.examples.companies);
    const dispatch = useDispatch();

    const {
        getUsers,
        getCompanies,
    } = dispatch.examples;

    const [itemRenderer, setItemRenderer] = useState({renderer:userItemRenderer});
    const [dataSource, setDataSource] = useState(users);
    const [title, setTitle] = useState(Titles.REGISTERED_USERS);

    useEffect(()=>{
        setDataSource(users);
        setItemRenderer({ renderer:userItemRenderer});
        setTitle(Titles.REGISTERED_USERS);
    }, [users]);

    useEffect(()=>{
        setDataSource(companies);
        setItemRenderer({renderer:companyItemRenderer});
        setTitle(Titles.COMPANIES);
    }, [companies]);

    useEffect(()=>{
        getUsers();
    }, []);

    return {
        itemRenderer,
        dataSource,
        title,
        getUsers,
        getCompanies,
    };
}


export default useExampleList;