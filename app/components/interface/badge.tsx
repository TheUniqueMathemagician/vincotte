import { ark } from '@ark-ui/react/factory'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { badge } from 'styled-system/recipes'

export const Badge = styled(ark.div, badge)

export type BadgeProps = ComponentProps<typeof Badge>
