import vike from 'vike/plugin'
import vanjs from "vite-plugin-vanjs";
import { UserConfig } from 'vite'

export default {
  plugins: [vike(), vanjs()]
} satisfies UserConfig
