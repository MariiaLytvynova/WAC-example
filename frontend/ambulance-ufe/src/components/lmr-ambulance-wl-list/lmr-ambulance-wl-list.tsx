import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lmr-ambulance-wl-list',
  shadow: true,
})
export class LmrAmbulanceWlList {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
