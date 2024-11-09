import type { AccountInfo } from "@particle-network/rn-connect";
import { atom } from "jotai";


export const isLoggedInAtom = atom(false);
export const accountInfoAtom = atom<AccountInfo | null>(null);
