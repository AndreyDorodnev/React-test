const initialState = {
    user: null,
    authError: null
}

export const loadState = () => {
    try {
      const state = localStorage.getItem('userState');
      if (state) {
        return JSON.parse(state);
      }
      return null;
    } catch (err) {
      return null;
    }
  };
  
  export const saveState = (state) => {
    try {
      const saveState = JSON.stringify(state);
      localStorage.setItem('userState', saveState);
    } catch (err) {
      console.log('localStorage save Error');
    }
  };