import { createContext, type Dispatch } from "react"
import type { ISessionData } from "../../lib/types/ISessionData"
import type { IWallet } from "../../lib/types/IWallet"

export const WalletData = createContext<IWallet | undefined>(undefined)
export const WalletSetter = createContext<Dispatch<IWallet>>(() => { })

export const SessionData = createContext<ISessionData | undefined>(undefined)
export const SessionDataSetter = createContext<Dispatch<ISessionData>>(() => { })



