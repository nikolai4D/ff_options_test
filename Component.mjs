import {Paragraph} from "./Paragraph.mjs";

export function Component() {

    this.options = {};

    this.setOption = function(key, value){
        this.options[key] = value;
        return this;
    }

    this.getElement = function(){
        //getHtml, bindSlots, etc.

        // create the subComponents declared in the options and bind them to the slots, AUTOMATICALLY.
    }
}


/**
 *
 * @returns {Component}
 * @param subComponent
 */
Component.prototype.slot = function(subComponent){
    // set the slot with the option key.
}


/**
 *
 * @type {{component: Component, options: {}}}
 */
export const componentData = {
    component: Paragraph,
    options: {}
}

/**
 *
 * @param componentData
 * @returns {Component}
 */
export function buildComponent(componentData){
    let component = new Component();
    component.setOption("topParagraph", componentData.options);
    return component;
}