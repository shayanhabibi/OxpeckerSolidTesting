namespace Oxpecker.Solid.Types

open Oxpecker.Solid

open Fable.Core

[<AutoOpen>]
module [<Erase>] button =
    type [<Erase>] size =
        static member inline default' : size = unbox "default"

[<Global>]
type Button() =
    inherit RegularNode()
    member _.size
        with set ( value : button.size ) = ()
        and get () : button.size = jsNative
    // [<Erase>]
    // member this.className with set ( value : string ) = ()
    // [<Erase>]
    member val className : string = jsNative with get,set 