const setExamples = (state, examples) => ({
    ...state,
    examples,
});

const setUsers = (state, users) => ({
    ...state,
    users,
});
  
export default {
    reducers: {
        setExamples,
        setUsers,
    },
};