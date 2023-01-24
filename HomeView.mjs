import {TemplateA} from "./TemplateA.mjs";

/**
 *
 * @constructor
 */
export function HomeView(model){

    let template = new TemplateA();

    for (let key in model) {
        template.setOption(key, model[key]);
    }

}