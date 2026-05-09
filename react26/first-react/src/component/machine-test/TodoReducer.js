export function todoReducer(state, action) {
    // eslint-disable-next-line no-debugger
    debugger;
    console.log("=====state====", state);
    console.log("=========action===========", action);
    switch (action.type) {
        case "add":
            if (!action.payload.trim()) return state;

            return {
                ...state,
                todos: [
                    ...state.todos,
                    { id: Date.now(), text: action.payload }
                ]
            };

        case "delete":
            return {
                ...state,
                todos: state.todos.filter(
                    (todo) => todo.id !== action.payload
                )
            };

        case "set_input":
            return {
                ...state,
                r_input: action.payload
            };

        case "clear_input":
            return {
                ...state,
                r_input: ""
            };

        default:
            return state;
    }
}