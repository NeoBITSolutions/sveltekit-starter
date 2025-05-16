import { getContext, setContext } from "svelte";

type Getter<T> = () => T;

export type ComboboxStateProps = {
  /**
   * A getter function that returns the current open state of the combobox.
   * We use a getter function here to support `bind:open` on the `Combobox.Root`
   * component.
   */
  open: Getter<boolean>;
};

class ComboboxState {
  readonly props: ComboboxStateProps;
  open = $derived.by(() => this.props.open());

  constructor(props: ComboboxStateProps) {
    this.props = props;
  }
}

const SYMBOL_KEY = "scn-combobox";

/**
 * Instantiates a new `ComboboxState` instance and sets it in the context.
 *
 * @param props The constructor props for the `ComboboxState` class.
 * @returns  The `ComboboxState` instance.
 */
export function setCombobox(props: ComboboxStateProps): ComboboxState {
  return setContext(Symbol.for(SYMBOL_KEY), new ComboboxState(props));
}

/**
 * Retrieves the `ComboboxState` instance from the context. This is a class instance,
 * so you cannot destructure it.
 * @returns The `ComboboxState` instance.
 */
export function useCombobox(): ComboboxState {
  return getContext(Symbol.for(SYMBOL_KEY));
}
