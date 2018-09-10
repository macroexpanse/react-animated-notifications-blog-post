import { inject, observer } from 'mobx-react'
import React from 'react'

import { CSSTransitionGroup } from 'react-transition-group'

@inject('toastStore') @observer
export class ToastNotification extends React.Component {
  render() {
    const { toastStore: { notifications, animationDuration }, channels } = this.props

    const channel = channels.find((channel) => notifications.has(channel)),
                    notification = notifications.get(channel)

    return (
      <div className="toast-container">
        <CSSTransitionGroup
          transitionEnterTimeout={ animationDuration }
          transitionLeaveTimeout={ animationDuration }
          transitionName="toast-notification">
          {
            notification && notification.message &&
              <div key={ notification.message } className="toast-notification" style={ {
                animationDuration: `${animationDuration}ms`,
                color: notification.textColor,
                backgroundColor: notification.backgroundColor
              } }>
                { channel === toastStore.ERROR ? null : <i className="fa fa-check" /> }
                <div className="message-container">
                  <span className="message">{ notification.message }</span>
                </div>
              </div>
          }
        </CSSTransitionGroup>
      </div>
    )
  }
}

