/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
/**
 * menu item class definition
 */
export class MenuItem {
  path: string;

  state: string;

  name: string;

  type: string;

  _isActive: boolean;

  icon?: string;

  submenu?: MenuItem[];

  isCollapsed?: boolean;

  set isActive(value) {
    this._isActive = value;
  }

  /**
   * returns false if all children are false,
   * otherwise, returns true if one or more child route is active
   */
  get isActive(): boolean {
    if (this.submenu) {
      let activeState = this._isActive;
      for (const submenuItem of this.submenu) {
        activeState = activeState || submenuItem.isActive;
      }
      return activeState;
    }
    return this._isActive;
  }

  constructor(data) {
    const { path, state, name, type, icon, submenu, isActive, isCollapsed } =
      data;
    this.path = path || "";
    this.state = state || "";
    this.name = name || "";
    this.type = type || "";
    this.isActive = isActive || false;
    this.icon = icon || "";
    this.submenu = submenu || null;
    this.isCollapsed = isCollapsed || false;
  }
}
