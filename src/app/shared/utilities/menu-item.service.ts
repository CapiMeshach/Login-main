/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { Injectable } from "@angular/core";
import { StorageService } from "../../services/index";
import { config } from "./index";
import * as _ from "lodash";
import { environment } from "./../../../environments/environment";
import { MenuItem } from "./menu-item.class";
import { routesObj } from "./routes-obj";

/** menu item array */
let MENU_ITEMS: MenuItem[] = [];

@Injectable({ providedIn: "root" })
export class MenuItemService {
  /** cloned routesObj */
  routes = _.cloneDeep(routesObj);

  constructor(private storageService: StorageService) {
    this.preparePermitedLinks();
  }

  /**  returns MENU_ITEMS */
  getUserMenuItems = (): MenuItem[] => MENU_ITEMS;

  /**
   * builds menu item array
   */
  loadMenuItems() {
    const {
      home,
      communitySupport,
      buyers,
      orders,
      cloneOrders,
      rechargeServices,
      products,
      brands,
      categories,
      pricing,
      packagingUnit,
      manufacture,
      supplier,
      seasonCampaigns,
      loading,
      returns,
      damage,
      dispatcher,
      vehicles,
      visits,
      // teleSales,
      walletTopup,
      promotions,
      rewards,
      banners,
      operations,
      management,
      users,
      salesAgents,
      warehouseUsers,
      accounting,
      rechargeAmounts,
      channels,
      rewardsSegmentations,
      supplierRanking,
      picking,
      verificationRequests,
      visitFeedback,
    } = this.routes;

    const [productList, productBundles] = products.submenu;

    MENU_ITEMS = [];
    MENU_ITEMS.push(new MenuItem(home));
    MENU_ITEMS.push(
      new MenuItem({
        name: "support",
        submenu: [
          new MenuItem(communitySupport),
          new MenuItem(verificationRequests),
          new MenuItem(buyers),
          new MenuItem(orders),
          new MenuItem(cloneOrders),
          new MenuItem(rechargeServices),
        ],
      })
    );

    MENU_ITEMS.push(
      new MenuItem({
        name: "purchasing",
        submenu: [
          new MenuItem({
            type: "link",
            name: "Products & Bundles",
            icon: "icon-box",
            submenu: [
              new MenuItem(productList),
              new MenuItem(productBundles),
              new MenuItem(brands),
              new MenuItem(categories),
              new MenuItem(pricing),
              new MenuItem(packagingUnit),
              new MenuItem(manufacture),
            ],
          }),
          new MenuItem(supplier),
          new MenuItem(supplierRanking),
          new MenuItem(seasonCampaigns),
        ],
      })
    );

    MENU_ITEMS.push(
      new MenuItem({
        name: "warehouse",
        submenu: [
          new MenuItem(loading),
          new MenuItem(returns),
          new MenuItem(picking),
          new MenuItem(damage),
          new MenuItem(dispatcher),
          new MenuItem(vehicles),
        ],
      })
    );

    MENU_ITEMS.push(
      new MenuItem({
        name: "sales",
        submenu: [new MenuItem(visits), new MenuItem(visitFeedback)],
      })
    );
    MENU_ITEMS.push(
      new MenuItem({
        name: "growth",
        submenu: [
          new MenuItem(walletTopup),
          new MenuItem(promotions),
          new MenuItem(rewards),
          new MenuItem(rewardsSegmentations),
          new MenuItem(banners),
        ],
      })
    );

    MENU_ITEMS.push(
      new MenuItem({
        name: "activation",
        submenu: [new MenuItem(operations), new MenuItem(management)],
      })
    );

    MENU_ITEMS.push(
      new MenuItem({
        name: "administration",
        submenu: [
          new MenuItem({
            name: "Users",
            icon: "icon-person",
            submenu: [
              new MenuItem(users),
              new MenuItem(salesAgents),
              new MenuItem(warehouseUsers),
            ],
          }),
          new MenuItem(accounting),
          new MenuItem(channels),
        ],
      })
    );

    MENU_ITEMS.push(
      new MenuItem({
        name: "settings",
        submenu: [new MenuItem(rechargeAmounts)],
      })
    );
    MENU_ITEMS.push(
      new MenuItem({
        name: "other",
        submenu: [],
        isActive: false,
      })
    );
  }

  /** enable and disable menu items based on available routes */
  preparePermitedLinks() {
    this.routes = _.cloneDeep(routesObj);
    const userAvailableRoutes = this.storageService.getUserAvailableRoutes();
    if (!userAvailableRoutes.includes("/*")) {
      for (const key in this.routes) {
        const route = this.routes[key];
        if (!userAvailableRoutes.includes(route.path)) {
          route.isActive = false;
          if (route.submenu) {
            route.submenu.map((item) => {
              item.isActive = false;
              return item;
            });
          }
        }
      }
    }
    this.loadMenuItems();
  }

  /**
   * get activated initial route
   * @returns initial route value
   */
  getInitialRoute() {
    for (const group of MENU_ITEMS) {
      // group
      if (group.submenu) {
        for (const item of group.submenu) {
          //  menu item
          if (item.isActive) {
            return item.path;
          }
        }
      }

      if (group.isActive) {
        return group.path;
      }
    }
  }

  /**
   * gets parent name by subitem path
   * @param value subitem path
   * @returns parent name
   */
  getSelectedItemMenuName(value: string) {
    const path = `/${value}`;
    for (const group of MENU_ITEMS) {
      // group
      if (group.submenu) {
        for (const item of group.submenu) {
          //  menu item
          if (item.submenu) {
            for (const subItem of item.submenu) {
              // sub-menu item
              if (path === subItem.path) {
                return item.name;
              }
            }
          }
        }
      }
    }
    return null;
  }

  private isStaging = () => environment.envName === "Staging";

  private isProduction = () => environment.envName === "Production";
}
