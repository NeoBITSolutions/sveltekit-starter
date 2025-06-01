import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
import Action from "./alert-dialog-action.svelte";
import Cancel from "./alert-dialog-cancel.svelte";
import Content from "./alert-dialog-content.svelte";
import Description from "./alert-dialog-description.svelte";
import Footer from "./alert-dialog-footer.svelte";
import Header from "./alert-dialog-header.svelte";
import Overlay from "./alert-dialog-overlay.svelte";
import Title from "./alert-dialog-title.svelte";
import Trigger from "./alert-dialog-trigger.svelte";

const Root = AlertDialogPrimitive.Root;
const Portal = AlertDialogPrimitive.Portal;

export {
  Action,
  Cancel,
  Content,
  Description,
  Footer,
  Header,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
};
