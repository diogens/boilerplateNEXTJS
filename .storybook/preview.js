import { addDecorator} from '@storybook/react'
import WithGlobalStyles from './withGlobalStyles'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator(WithGlobalStyles)
