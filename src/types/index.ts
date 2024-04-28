interface CustomElements extends HTMLFormControlsCollection {
  income: HTMLInputElement
  year: HTMLInputElement
}

export interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements
}
