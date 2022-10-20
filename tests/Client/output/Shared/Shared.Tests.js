import { Test_testCase, Test_testList } from "../fable_modules/Fable.Mocha.2.12.0/Mocha.fs.js";
import { TodoModule_isValid } from "../src/Shared/Shared.js";
import { structuralHash, assertEqual } from "../fable_modules/fable-library.3.7.5/Util.js";
import { equals, class_type, string_type, float64_type, int32_type, bool_type } from "../fable_modules/fable-library.3.7.5/Reflection.js";
import { singleton, contains, ofArray } from "../fable_modules/fable-library.3.7.5/List.js";
import { toString } from "../fable_modules/fable-library.3.7.5/Types.js";
import { printf, toText } from "../fable_modules/fable-library.3.7.5/String.js";

export const shared = Test_testList("Shared", singleton(Test_testCase("Empty string is not a valid description", () => {
    const expected = false;
    const actual = TodoModule_isValid("");
    const actual_1 = actual;
    const expected_1 = expected;
    const msg = "Should be false";
    if ((actual_1 === expected_1) ? true : (!(new Function("try {return this===window;}catch(e){ return false;}"))())) {
        assertEqual(actual_1, expected_1, msg);
    }
    else {
        let valueType;
        let copyOfStruct = actual_1;
        valueType = bool_type;
        const primitiveTypes = ofArray([int32_type, bool_type, float64_type, string_type, class_type("System.Decimal"), class_type("System.Guid")]);
        let errorMsg;
        if (contains(valueType, primitiveTypes, {
            Equals: equals,
            GetHashCode: structuralHash,
        })) {
            const arg20 = toString(actual_1);
            const arg10 = toString(expected_1);
            errorMsg = toText(printf("\u003cspan style=\u0027color:black\u0027\u003eExpected:\u003c/span\u003e \u003cbr /\u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eActual:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px;color:crimson\u0027\u003e%s\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eMessage:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e"))(arg10)(arg20)(msg);
        }
        else {
            errorMsg = toText(printf("\u003cspan style=\u0027color:black\u0027\u003eExpected:\u003c/span\u003e \u003cbr /\u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%A\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eActual:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px;color:crimson\u0027\u003e%A\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eMessage:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e"))(expected_1)(actual_1)(msg);
        }
        throw (new Error(errorMsg));
    }
})));

//# sourceMappingURL=Shared.Tests.js.map
