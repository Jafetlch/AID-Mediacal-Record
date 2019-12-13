import React from 'react'
import styled from 'styled-components'

export const BigButton = ({ ico, darkIco, label, active = false }) => {
  const StyledBigBtn = styled.div`
    width: 160px;
    height: 100px;
    background: ${active ? 'linear-gradient(45deg, #ff6848, #f93d47)' : '#fff'};
    border-radius: 5px;
    padding: 20px 0 15px 0;
    display: flex;
    flex-flow: column;
    align-items: center;
    color: ${active ? '#fff' : '#545454'};
    cursor: pointer;
    margin-left: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    /* box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px,
      rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px; */

    .btn-icon {
      width: 33px;
      height: 40px;
      margin-bottom: 8px;
      background: url(${active ? ico : darkIco});
      background-repeat: no-repeat;
    }
  `

  return (
    <StyledBigBtn>
      <div className="btn-icon" />
      <span>{label}</span>
    </StyledBigBtn>
  )
}
