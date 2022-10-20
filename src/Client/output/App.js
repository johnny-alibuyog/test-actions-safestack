import { ProgramModule_mkProgram, ProgramModule_run } from "./fable_modules/Fable.Elmish.3.1.0/program.fs.js";
import { Program_withReactSynchronous } from "./fable_modules/Fable.Elmish.React.3.0.1/react.fs.js";
import { view, update, init } from "./Index.js";

ProgramModule_run(Program_withReactSynchronous("elmish-app", ProgramModule_mkProgram(init, update, view)));

//# sourceMappingURL=App.js.map
