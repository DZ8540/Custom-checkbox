class Checkbox {
  public readonly name: string;
  public readonly toggleClass: string = 'Checkbox__fill--active';
  public readonly disabledClass: string = 'Checkbox--disabled';

  protected _item: HTMLDivElement | null;
  protected _input: HTMLInputElement | null;
  protected _checkbox: HTMLSpanElement | null;

  constructor(item: HTMLDivElement) {
    this._item = item;
    this._input = item.querySelector('[data-id="dz-input"]');
    this._checkbox = item.querySelector('[data-id="dz-checkboxInput"]');
    this.name = `${this._item.dataset.name || '(undefined name)'} checkbox component`;

    this._handle();
  }

  /**
   * Programmatically set checked attribute for input element
   * @param {boolean} val 
   */
  public checked(val: boolean): void {
    this._input!.checked = val;

    this._eventDispatch('change');
  }
  
  /**
   * Programmatically set disabled attribute for input element
   * @param {boolean} val 
   */
  public disabled(val: boolean): void {
    this._input!.disabled = val;

    this._eventDispatch('change');
  }

  /**
   * Event subscribe for input element into component
   * @param {string} eventName - any event name for input element
   * @param {Function} callback - your callback
   */
  public on(eventName: keyof HTMLElementEventMap, callback: EventListenerOrEventListenerObject): void {
    this._input!.addEventListener(eventName, callback);
  }

  protected _handle(): void {
    try {
      this._checkForUsers();

      this._check();
      this._input!.onchange = this._check.bind(this);
    } catch (err: any | Error) {
      console.warn(err.message);
    }
  }

  protected _check(): void {
    this._input!.checked ? this._add() : this._remove();
    
    if (this._input!.disabled)
      this._item!.classList.add(this.disabledClass);
    else
      this._item!.classList.remove(this.disabledClass);
  }

  protected _add(): void {
    this._checkbox!.classList.add(this.toggleClass);
  }

  protected _remove(): void {
    this._checkbox!.classList.remove(this.toggleClass);
  }

  protected _eventDispatch(eventName: keyof HTMLElementEventMap): void {
    let event: Event = new Event(eventName);
    this._input!.dispatchEvent(event);
  }

  protected _checkForUsers(): void {
    if (!this._item && !this._input && !this._checkbox) {
      throw new Error(`The ${this.name} is not ready!`);
    } 

    if (!this._item) {
      throw new Error(`The element that you passed into ${this.name}, was not found!`);
    }

    if (!this._input) {
      throw new Error(`Input in ${this.name} is not found!`);
    }

    if (!this._checkbox) {
      throw new Error(`Fill element in ${this.name} is not found!`);
    }
    
    console.info(`The ${this.name} is ready!`);
  }
}
