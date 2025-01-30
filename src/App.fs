module App

open Oxpecker.Solid
open Oxpecker.Solid.TestTag
open Components
let Button = Button
open Oxpecker.Solid.Types


[<SolidComponent>]
let App() =
    div(class' = "") {
        h1(class' = "") { "HelloWorld" }
        Button(className = "test", size = button.size.default'){ "test" }
        Components.Button ( unbox {|className = "test"|} ) "stripes"
    }
