import React from 'react';

const WithCondition = 
(ConditionFunc) => Component => props => ConditionFunc(props)? <Component {...props}/> : null;  

export default WithCondition;