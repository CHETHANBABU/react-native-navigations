import validatejs from "validate.js";

import { Dictionary } from "./Dictionary";

export const Validation = {
    onInputChange,
    getInputValidationState,
    validateInput,
    getFormValidation
};

function onInputChange({ id, value, cb = () => { } }) {
    const { inputs } = this.state;
    this.setState(
        {
            inputs: {
                ...inputs,
                [id]: getInputValidationState({
                    input: inputs[id],
                    value
                })
            }
        },
        cb
    );
}

function getInputValidationState({ input, value }) {
    return {
        ...input,
        value,
        errorLabel: input.optional
            ? null
            : validateInput({ type: input.type, value })
    };
}

function validateInput({ type, value }) {
    const result = validatejs(
        {
            [type]: value
        },
        {
            [type]: Dictionary[type]
        }
    );

    if (result) {
        return result[type][0];
    }

    return null;
}

function getFormValidation() {
    const { inputs } = this.state;

    const updatedInputs = {};
    var arr = 0;
    for (const [key, input] of Object.entries(inputs)) {
        updatedInputs[key] = getInputValidationState({
            input,
            value: input.value
        });

        if (input.value) {
            arr += 1;
        }
    }

    this.setState({
        inputs: updatedInputs
    });

    return (arr > 0) ? true : false;
}