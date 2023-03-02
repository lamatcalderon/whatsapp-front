import createStore from '../store/index';

export const executeAction = (action: string, value: any) => {
    createStore.dispatch(action, value);
}