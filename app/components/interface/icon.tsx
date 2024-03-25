import { ark } from '@ark-ui/react/factory'
import { forwardRef, type ReactElement } from 'react'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { icon, type IconVariantProps } from 'styled-system/recipes'

export type IconProps = IconVariantProps & HTMLStyledProps<'svg'> & {
  children: ReactElement
}

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => <StyledIcon ref={ref} asChild {...props} />)

Icon.displayName = 'Icon'

const StyledIcon = styled(ark.svg, icon)
