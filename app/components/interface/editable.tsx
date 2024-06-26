import { createStyleContext } from '@/libraries/create-style-context'
import { Editable } from '@ark-ui/react/editable'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { editable } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(editable)

export const Root = withProvider(styled(Editable.Root), 'root')
export const Area = withContext(styled(Editable.Area), 'area')
export const CancelTrigger = withContext(styled(Editable.CancelTrigger), 'cancelTrigger')
export const Control = withContext(styled(Editable.Control), 'control')
export const EditTrigger = withContext(styled(Editable.EditTrigger), 'editTrigger')
export const Input = withContext(styled(Editable.Input), 'input')
export const Label = withContext(styled(Editable.Label), 'label')
export const Preview = withContext(styled(Editable.Preview), 'preview')
export const SubmitTrigger = withContext(styled(Editable.SubmitTrigger), 'submitTrigger')

export type RootProps = ComponentProps<typeof Root>
export type AreaProps = ComponentProps<typeof Area>
export type CancelTriggerProps = ComponentProps<typeof CancelTrigger>
export type ControlProps = ComponentProps<typeof Control>
export type EditTriggerProps = ComponentProps<typeof EditTrigger>
export type InputProps = ComponentProps<typeof Input>
export type LabelProps = ComponentProps<typeof Label>
export type PreviewProps = ComponentProps<typeof Preview>
export type SubmitTriggerProps = ComponentProps<typeof SubmitTrigger>
