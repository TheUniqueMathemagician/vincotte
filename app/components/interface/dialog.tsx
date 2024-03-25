import { Dialog } from '@ark-ui/react/dialog'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { dialog } from 'styled-system/recipes'
import { createStyleContext } from '~/libraries/create-style-context'

const { withProvider, withContext } = createStyleContext(dialog)

export const Root = withProvider(Dialog.Root)
export const Backdrop = withContext(styled(Dialog.Backdrop), 'backdrop')
export const CloseTrigger = withContext(styled(Dialog.CloseTrigger), 'closeTrigger')
export const Content = withContext(styled(Dialog.Content), 'content')
export const Description = withContext(styled(Dialog.Description), 'description')
export const Positioner = withContext(styled(Dialog.Positioner), 'positioner')
export const Title = withContext(styled(Dialog.Title), 'title')
export const Trigger = withContext(styled(Dialog.Trigger), 'trigger')

export type RootProps = ComponentProps<typeof Root>
export type BackdropProps = ComponentProps<typeof Backdrop>
export type CloseTriggerProps = ComponentProps<typeof CloseTrigger>
export type ContentProps = ComponentProps<typeof Content>
export type DescriptionProps = ComponentProps<typeof Description>
export type PositionerProps = ComponentProps<typeof Positioner>
export type TitleProps = ComponentProps<typeof Title>
export type TriggerProps = ComponentProps<typeof Trigger>
