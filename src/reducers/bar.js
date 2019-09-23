const INITIAL_STATE = {
    satisfacao: 0,
    fidelizacao: 0,    
}

export default function bar(state = [INITIAL_STATE], action) {
    switch(action.type) {
        case 'ADD_VALUE_BAR':
            return [{
                satisfacao: action.value.satisfacao,
                fidelizacao: action.value.fidelizacao,
            }]
        default:
            return state;
    }
}