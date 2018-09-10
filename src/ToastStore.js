import { action, observable, runInAction } from 'mobx'

export class ToastStore {
  HELLO_WORLD = "helloWorld"
  ERROR = "error"

  notifications = observable.map()
  animationDuration = 500

  @action setNotification({ channel, ...notification }) {
    if(this.notifications.has(channel)) {
      clearTimeout(this.notifications.get(channel).timeoutRef)
    }

    notification.timeoutRef = setTimeout(() => {
      this.animatedAction(() => this.notifications.delete(channel))
    }, notification.timeout + 500) // timeout + animate in duration

    this.animatedAction(() => this.notifications.set(channel, notification))
  }

  @action animatedAction(f) {
    requestAnimationFrame(() => runInAction(f))
  }
}

