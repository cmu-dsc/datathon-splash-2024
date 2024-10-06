import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import getConfig from 'next/config'

export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const { publicRuntimeConfig } = getConfig()
export function getAssetPath (path: string) {
  const assetPrefix = publicRuntimeConfig.assetPrefix || ''
  return `${assetPrefix}${path}`
}