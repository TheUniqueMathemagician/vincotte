import { createStyleContext } from '@/libraries/create-style-context'
import { ToggleGroup } from '@ark-ui/react/toggle-group'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { toggleGroup } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(toggleGroup)

export const Root = withProvider(styled(ToggleGroup.Root), 'root')
export const Item = withContext(styled(ToggleGroup.Item), 'item')

export type RootProps = ComponentProps<typeof Root>
export type ItemProps = ComponentProps<typeof Item>
