import { Mocha_runTests, Test_testCase, Test_testList } from "./fable_modules/Fable.Mocha.2.12.0/Mocha.fs.js";
import { Todo$reflection, TodoModule_create } from "./src/Shared/Shared.js";
import { Msg, update, init } from "./src/Client/Index.js";
import { singleton, item, contains, ofArray, length } from "./fable_modules/fable-library.3.7.5/List.js";
import { equals as equals_1, int32ToString, structuralHash, assertEqual } from "./fable_modules/fable-library.3.7.5/Util.js";
import { equals, class_type, string_type, float64_type, bool_type, int32_type } from "./fable_modules/fable-library.3.7.5/Reflection.js";
import { printf, toText } from "./fable_modules/fable-library.3.7.5/String.js";
import { toString } from "./fable_modules/fable-library.3.7.5/Types.js";
import { shared } from "./Shared/Shared.Tests.js";

export const client = Test_testList("Client", singleton(Test_testCase("Added todo", () => {
    const newTodo = TodoModule_create("new todo");
    const model = init()[0];
    const model_1 = update(new Msg(3, newTodo), model)[0];
    const actual = length(model_1.todos) | 0;
    const expected = 1;
    const msg = "There should be 1 todo";
    if ((actual === expected) ? true : (!(new Function("try {return this===window;}catch(e){ return false;}"))())) {
        assertEqual(actual, expected, msg);
    }
    else {
        let valueType;
        let copyOfStruct = actual;
        valueType = int32_type;
        const primitiveTypes = ofArray([int32_type, bool_type, float64_type, string_type, class_type("System.Decimal"), class_type("System.Guid")]);
        let errorMsg;
        if (contains(valueType, primitiveTypes, {
            Equals: equals,
            GetHashCode: structuralHash,
        })) {
            const arg20 = int32ToString(actual);
            const arg10 = int32ToString(expected);
            errorMsg = toText(printf("\u003cspan style=\u0027color:black\u0027\u003eExpected:\u003c/span\u003e \u003cbr /\u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eActual:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px;color:crimson\u0027\u003e%s\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eMessage:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e"))(arg10)(arg20)(msg);
        }
        else {
            errorMsg = toText(printf("\u003cspan style=\u0027color:black\u0027\u003eExpected:\u003c/span\u003e \u003cbr /\u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%A\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eActual:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px;color:crimson\u0027\u003e%A\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eMessage:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e"))(expected)(actual)(msg);
        }
        throw (new Error(errorMsg));
    }
    const actual_1 = item(0, model_1.todos);
    const expected_1 = newTodo;
    const msg_1 = "Todo should equal new todo";
    if (equals_1(actual_1, expected_1) ? true : (!(new Function("try {return this===window;}catch(e){ return false;}"))())) {
        assertEqual(actual_1, expected_1, msg_1);
    }
    else {
        let valueType_1;
        let copyOfStruct_1 = actual_1;
        valueType_1 = Todo$reflection();
        const primitiveTypes_1 = ofArray([int32_type, bool_type, float64_type, string_type, class_type("System.Decimal"), class_type("System.Guid")]);
        let errorMsg_1;
        if (contains(valueType_1, primitiveTypes_1, {
            Equals: equals,
            GetHashCode: structuralHash,
        })) {
            const arg20_2 = toString(actual_1);
            const arg10_2 = toString(expected_1);
            errorMsg_1 = toText(printf("\u003cspan style=\u0027color:black\u0027\u003eExpected:\u003c/span\u003e \u003cbr /\u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eActual:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px;color:crimson\u0027\u003e%s\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eMessage:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e"))(arg10_2)(arg20_2)(msg_1);
        }
        else {
            errorMsg_1 = toText(printf("\u003cspan style=\u0027color:black\u0027\u003eExpected:\u003c/span\u003e \u003cbr /\u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%A\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eActual:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px;color:crimson\u0027\u003e%A\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eMessage:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e"))(expected_1)(actual_1)(msg_1);
        }
        throw (new Error(errorMsg_1));
    }
})));

export const all = Test_testList("All", ofArray([shared, client]));

(function (_arg1) {
    return Mocha_runTests(all);
})(typeof process === 'object' ? process.argv.slice(2) : []);

//# sourceMappingURL=Client.Tests.js.map
