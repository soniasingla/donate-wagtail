class AmountToggle {
  static selector() {
    return "[data-amount-toggle]";
  }

  constructor(node) {
    this.toggleButton = node;
    this.actionsContainer = document.querySelector("[data-amount-actions]");
    this.activeClass = "active";

    this.bindEvents();
  }

  toggleOptions(event) {
    event.preventDefault();
    this.actionsContainer.classList.toggle(this.activeClass);
  }

  bindEvents() {
    if (!this.toggleButton) {
      return;
    }

    this.toggleButton.addEventListener("click", event =>
      this.toggleOptions(event)
    );
  }
}

export default AmountToggle;