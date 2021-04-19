import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface IMenuItem {
  type: string; // Possible values: link/dropDown/icon/separator/extLink
  name?: string; // Used as display text for item and title for separator type
  state?: string; // Router state
  icon?: string; // Material icon name
  svgIcon?: string; // UI Lib icon name
  tooltip?: string; // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
}
interface IChildItem {
  type?: string;
  name: string; // Display text
  state?: string; // Router state
  icon?: string;  // Material icon name
  svgIcon?: string; // UI Lib icon name
  sub?: IChildItem[];
}

interface IBadge {
  color: string; // primary/accent/warn/hex color codes(#fff000)
  value: string; // Display text
}

@Injectable()
export class NavigationService {
  iconMenu: IMenuItem[] = [  
    {
      name: 'home',
      type: 'link',
      svgIcon: 'ulb_server',
      state: 'welcome/home'
    },
    {
      name: 'list courses',
      type: 'link',
      svgIcon: 'ulb_server',
      state: 'course/list-course'
    },
    {
      name: 'add course',
      type: 'link',
      svgIcon: 'ulb_server',
      state: 'course/add-course'
    }       
  ];


  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
  iconTypeMenuTitle = 'Frequently Accessed';
  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.iconMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();
  constructor() {}

  
  // You can customize this method to supply different menu for
  // different user type.
  publishNavigationChange(menuType: string) {
    
    this.menuItems.next(this.iconMenu);

  }
}
