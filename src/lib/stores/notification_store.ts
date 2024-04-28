import { writable, type Writable } from "svelte/store";

export default writable({ open: false, notifications: [] });
