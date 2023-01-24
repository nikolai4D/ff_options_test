import {Component} from "./Component.mjs";

/**
 *
 * @constructor
 */
export function TemplateA(){
    Component.call(this)

    this.options = {
        text: "default",
        color: "red",

        topParagraph: null,
        secondParagraph: null
    }

    this.getHtml = function(){
        return `
            <div>
                ${this.slot(this.options.topParagraph)}
                ${this.slot(this.options.text)}
            </div>`;
    }

    // Binding the slots is done automatically when getElement is called.
}

