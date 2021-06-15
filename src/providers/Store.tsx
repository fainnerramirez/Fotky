import React from 'react';

const initialState = null;

const context = React.createContext<typeof initialState>(initialState);

export default context;
