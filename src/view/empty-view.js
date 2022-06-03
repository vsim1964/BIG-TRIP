import {
  createElement
} from '../render.js';

const createEmptyTemplate = () =>
  '<p class="trip-events__msg">Click New Event to create your first point</p>';

export default class EmptyView {
  #element = null;

  constructor(point) {
    this.point = point;
  }

  get template() {
    return createEmptyTemplate(this.point);
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.element = null;
  }
}
