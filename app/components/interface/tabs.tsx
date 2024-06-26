import { createStyleContext } from '@/libraries/create-style-context'
import { Tabs } from '@ark-ui/react/tabs'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { tabs } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(tabs)

export const Root = withProvider(styled(Tabs.Root), 'root')
export const Content = withContext(styled(Tabs.Content), 'content')
export const Indicator = withContext(styled(Tabs.Indicator), 'indicator')
export const List = withContext(styled(Tabs.List), 'list')
export const Trigger = withContext(styled(Tabs.Trigger), 'trigger')

export type RootProps = ComponentProps<typeof Root>
export type ContentProps = ComponentProps<typeof Content>
export type IndicatorProps = ComponentProps<typeof Indicator>
export type ListProps = ComponentProps<typeof List>
export type TriggerProps = ComponentProps<typeof Trigger>
