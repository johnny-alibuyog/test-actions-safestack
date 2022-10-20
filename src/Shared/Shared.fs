namespace Shared

open System

type Todo = { id: Guid; description: string }

type Todo' = Todo list * {| id: string |}

module Todo =
    let isValid (description: string) =
        String.IsNullOrWhiteSpace description |> not

    let create (description: string) =
        { id = Guid.NewGuid()
          description = description }

module Route =
    let builder typeName methodName =
        sprintf "/api/%s/%s" typeName methodName

type ITodosApi =
    { find: unit -> Async<Todo list>
      create: Todo -> Async<Todo> }