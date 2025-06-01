import { Dialog as DialogPrimitive } from "bits-ui";
import Close from "./dialog-close.svelte";
import Content from "./dialog-content.svelte";
import Description from "./dialog-description.svelte";
import Footer from "./dialog-footer.svelte";
import Header from "./dialog-header.svelte";
import Overlay from "./dialog-overlay.svelte";
import Title from "./dialog-title.svelte";
import Trigger from "./dialog-trigger.svelte";

const Root = DialogPrimitive.Root;
const Portal = DialogPrimitive.Portal;

export { Close, Content, Description, Footer, Header, Overlay, Portal, Root, Title, Trigger };
