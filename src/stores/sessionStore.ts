import type { User } from "@supabase/gotrue-js";
import type { Writable } from "svelte/store";
import { writable } from "svelte/store";

export const user: Writable<User> = writable();
