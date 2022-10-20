import { Record } from "../fable_modules/fable-library.3.7.5/Types.js";
import { lambda_type, list_type, unit_type, record_type, string_type, class_type } from "../fable_modules/fable-library.3.7.5/Reflection.js";
import { printf, toText, isNullOrWhiteSpace } from "../fable_modules/fable-library.3.7.5/String.js";
import { newGuid } from "../fable_modules/fable-library.3.7.5/Guid.js";

export class Todo extends Record {
    constructor(id, description) {
        super();
        this.id = id;
        this.description = description;
    }
}

export function Todo$reflection() {
    return record_type("Shared.Todo", [], Todo, () => [["id", class_type("System.Guid")], ["description", string_type]]);
}

export function TodoModule_isValid(description) {
    return !isNullOrWhiteSpace(description);
}

export function TodoModule_create(description) {
    return new Todo(newGuid(), description);
}

export function Route_builder(typeName, methodName) {
    return toText(printf("/api/%s/%s"))(typeName)(methodName);
}

export class ITodosApi extends Record {
    constructor(find, addTodo) {
        super();
        this.find = find;
        this.addTodo = addTodo;
    }
}

export function ITodosApi$reflection() {
    return record_type("Shared.ITodosApi", [], ITodosApi, () => [["find", lambda_type(unit_type, class_type("Microsoft.FSharp.Control.FSharpAsync`1", [list_type(Todo$reflection())]))], ["addTodo", lambda_type(Todo$reflection(), class_type("Microsoft.FSharp.Control.FSharpAsync`1", [Todo$reflection()]))]]);
}

//# sourceMappingURL=Shared.js.map
