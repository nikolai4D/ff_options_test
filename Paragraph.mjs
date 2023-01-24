import {Component} from "./Component.mjs";

export function Paragraph(){
    Component.call(this);

    this.options = {
        text: "default",
        color: "red"
    }

    this.getHtml = function(){
        return `<p>${this.options.text}</p>`;
    }
}