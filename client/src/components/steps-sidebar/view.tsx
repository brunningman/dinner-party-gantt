import React from 'react'
import styled from 'styled-components'

import type { Recipe } from '../../types'
interface Props {
  recipes: Recipe[]
}

const Container = styled.div`
  width: 30%;
  background-color: orange;
`

export const View: React.FC<Props> = ({ recipes }) => {
  return (
    <Container></Container>
  )
}