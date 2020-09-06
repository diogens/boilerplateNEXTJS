import { StoryFn } from '@storybook/addons'
import { stories } from './main'
import GlobalStyles from '../src/styles/global'


const withGlobalSyles = (storyFn: StoryFn) => (
  <>
    <GlobalStyles/>
    {storyFn()}
  </>
)

export default withGlobalSyles
