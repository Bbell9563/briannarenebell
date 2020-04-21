import React from 'react'
import { desktop } from '../../../styles/PortfolioStyle'


class DesktopPortfolio extends React.Component {

  render() {
    return (
      <div style={desktop.container}>
        <div style={desktop.headerContainer}>
          <div style={desktop.header}>My Portfolio</div>
        </div>
      </div>
    )
  }
}

export default DesktopPortfolio